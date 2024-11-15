"use client";

import Spinner from "@/components/common/spinner";
import DetailsSheet from "@/components/home/details-sheet";
import FlightCard from "@/components/home/flight-card";
import { Flight, FlightSearchData } from "@/definitions";
import { getPersianDateAndWeekDay } from "@/utils/formatters";
import { translations as t } from "@/utils/translations";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Pagination, { PAGE_SIZE } from "../common/pagination";

interface Props {
  data: FlightSearchData;
}

export default function Flights({ data }: Props) {
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
      className="p-4 bg-[#f3f3f3] flex flex-col justify-center items-center text-greyishbrown-900 relative"
      ref={mainRef}
    >
      <div className="max-w-[550px] w-full">
        <div className="flex gap-2 items-center">
          <button className="w-full text-[#161616] flex justify-center items-center gap-2 h-10 rounded border border-[#eee] bg-white text-sm">
            <Image
              alt="filter"
              src={"/icons/filter.svg"}
              width={15}
              height={16}
            />
            {t.filtering}
          </button>
          <button className="w-full text-[#161616] flex justify-center items-center gap-2 h-10 rounded border border-[#eee] bg-white text-sm">
            <Image alt="sort" src={"/icons/sort.svg"} width={15} height={16} />
            {t.sorting}
          </button>
        </div>
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
