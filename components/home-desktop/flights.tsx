"use client";

import Spinner from "@/components/common/spinner";
import DetailsSheet from "@/components/home/details-sheet";
import { Flight, FlightSearchData } from "@/definitions";
import { getPersianDateAndWeekDay } from "@/utils/formatters";
import { translations as t } from "@/utils/translations";
import { useEffect, useRef, useState } from "react";
import Pagination, { PAGE_SIZE } from "../common/pagination";
import FlightCard from "./flight-card";

interface Props {
  data: FlightSearchData;
}

export default function FlightsDesktop({ data }: Props) {
  const [selectedFlight, setSelectedFlight] = useState<Flight | undefined>();
  const [currentPage, setCurrentPage] = useState(1);
  const mainRef = useRef<HTMLDivElement>(null);

  const getAirlineNameFa = (code: string) => {
    return data.additionalData.airlines.filter(
      (airline) => airline.iata === code
    )[0].nameFa;
  };

  const getDepartureAirport = (code: string) => {
    return data.additionalData.airports.filter(
      (airport) => airport.iata === code
    )[0];
  };

  const getArrivalAirport = (code: string) => {
    return data.additionalData.airports.filter(
      (airport) => airport.iata === code
    )[0];
  };

  const chooseFlight = (flight: Flight | undefined) => {
    setSelectedFlight(flight);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  if (!data)
    return (
      <section className="flex min-h-screen items-center justify-center">
        <Spinner
          size={44}
          background="#0051FF"
          forground="#0051FF33"
          className="me-4"
        />
      </section>
    );

  return (
    <main
      className="pt-8 pb-12 px-4 bg-[#f3f3f3] flex justify-center text-greyishbrown-900 relative text-sm"
      ref={mainRef}
    >
      <div className="fixed top-8 right-4 bottom-4">
        <span>{t.validityOfResults}</span>
        <div className="w-[282px] h-screen bg-white mt-6">
          <div className="flex justify-between p-4 border-b border-[#eeeeee]">
            <span className="font-bold">{t.filters}</span>
            <button className="text-flyblue-500 hover:bg-blue-50/50 rounded px-4 py-1">
              {t.removeFilters}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mr-[306px]">
        <div className="mt-[22px]">
          <h1 className="text-xl font-bold">{t.tehranToIstanbul}</h1>
          <p className="text-sm mt-2">
            <span>
              {data.pricedItineraries.length}&nbsp;
              {t.flightsFound}
            </span>
            &nbsp;
            <span>
              {getPersianDateAndWeekDay(
                data.pricedItineraries[0].originDestinationOptions[0]
                  .flightSegments[0].departureDateTime
              )}
            </span>
          </p>
        </div>
        {data.pricedItineraries
          .slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
          .map((flight) => (
            <FlightCard
              flight={flight}
              chooseFlight={chooseFlight}
              key={flight.fareSourceCode}
              airlineNameFa={getAirlineNameFa(flight.validatingAirlineCode)}
              departureAirport={getDepartureAirport(
                flight.originDestinationOptions[0].flightSegments[0]
                  .departureAirportLocationCode
              )}
              arrivalAirport={getArrivalAirport(
                flight.originDestinationOptions[0].flightSegments[0]
                  .arrivalAirportLocationCode
              )}
            />
          ))}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          total={data.pricedItineraries.length}
        />
      </div>
      {selectedFlight && (
        <DetailsSheet
          flight={selectedFlight}
          chooseFlight={chooseFlight}
          key={selectedFlight.fareSourceCode}
          airlineNameFa={getAirlineNameFa(selectedFlight.validatingAirlineCode)}
          departureAirport={getDepartureAirport(
            selectedFlight.originDestinationOptions[0].flightSegments[0]
              .departureAirportLocationCode
          )}
          arrivalAirport={getArrivalAirport(
            selectedFlight.originDestinationOptions[0].flightSegments[0]
              .arrivalAirportLocationCode
          )}
        />
      )}
    </main>
  );
}
