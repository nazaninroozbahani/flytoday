"use client";

import Spinner from "@/components/common/spinner";
import { FlightSearchData } from "@/definitions";
import { getPersianDateAndWeekDay } from "@/utils/formatters";
import { translations as t } from "@/utils/translations";
import { useEffect, useRef, useState } from "react";
import { PAGE_SIZE } from "../common/mobile-pagination";
import FlightCard from "./flight-card";
import DesktopPagination from "../common/desktop-pagination";
import Filters from "./filters";

interface Props {
  data: FlightSearchData;
}

export default function FlightsDesktop({ data }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [flightsToShow, setFlightsToShow] = useState(data.pricedItineraries);
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

  const onFlightTypeChange = (
    isCharter: boolean,
    isSystem: boolean,
    isInstance: boolean
  ) => {
    if (!isCharter && !isSystem && !isInstance)
      setFlightsToShow(data.pricedItineraries);
    else
      setFlightsToShow(
        data.pricedItineraries.filter(
          (flight) =>
            (isCharter && flight.isCharter) ||
            (isSystem && flight.isSystem) ||
            (isInstance && flight.isInstance)
        )
      );
  };

  const onFlightTimeChange = (
    morning: boolean,
    evening: boolean,
    night: boolean
  ) => {
    if (!morning && !evening && !night)
      setFlightsToShow(data.pricedItineraries);
    else
      setFlightsToShow(
        data.pricedItineraries.filter((flight) => {
          const departureHour = new Date(
            flight.originDestinationOptions[0].flightSegments[0].departureDateTime
          ).getHours();
          return (
            (morning && departureHour < 12) ||
            (evening && departureHour >= 12 && departureHour < 18) ||
            (night && departureHour >= 18)
          );
        })
      );
  };

  const onFiltersChange = (
    isCharter: boolean,
    isSystem: boolean,
    isInstance: boolean,
    morning: boolean,
    evening: boolean,
    night: boolean
  ) => {
    if (!isCharter && !isSystem && !isInstance)
      setFlightsToShow(data.pricedItineraries);
    else
      setFlightsToShow(
        data.pricedItineraries.filter(
          (flight) =>
            (isCharter && flight.isCharter) ||
            (isSystem && flight.isSystem) ||
            (isInstance && flight.isInstance)
        )
      );
    if (!morning && !evening && !night)
      setFlightsToShow(data.pricedItineraries);
    else
      setFlightsToShow(
        data.pricedItineraries.filter((flight) => {
          const departureHour = new Date(
            flight.originDestinationOptions[0].flightSegments[0].departureDateTime
          ).getHours();
          return (
            (morning && departureHour < 12) ||
            (evening && departureHour >= 12 && departureHour < 18) ||
            (night && departureHour >= 18)
          );
        })
      );
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

  const changeCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main
      className="pt-8 pb-12 px-4 bg-[#f3f3f3] flex justify-center text-greyishbrown-900 relative text-sm"
      ref={mainRef}
    >
      <div className="max-w-[1200px] flex justify-center gap-6">
        <div className="">
          <span>{t.validityOfResults}</span>
          <Filters
            onFlightTypeChange={onFlightTypeChange}
            onFlightTimeChange={onFlightTimeChange}
          />
        </div>
        <div className="min-w-[860px]">
          <div className="mt-[22px]">
            <h1 className="text-xl font-bold">{t.tehranToIstanbul}</h1>
            <p className="text-sm mt-2">
              <span>
                {flightsToShow.length}&nbsp;
                {t.flightsFound}
              </span>
              &nbsp;
              <span>
                {getPersianDateAndWeekDay(
                  flightsToShow[0].originDestinationOptions[0].flightSegments[0]
                    .departureDateTime
                )}
              </span>
            </p>
          </div>
          {flightsToShow
            .slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)
            .map((flight) => (
              <FlightCard
                flight={flight}
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
          <DesktopPagination
            currentPage={currentPage}
            changeCurrentPage={changeCurrentPage}
            totalCount={flightsToShow.length}
            pageSize={PAGE_SIZE}
            className="mt-8"
          />
        </div>
      </div>
    </main>
  );
}
