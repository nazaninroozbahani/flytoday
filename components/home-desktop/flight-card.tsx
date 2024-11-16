import { DesktopFlightDetails } from "@/definitions";
import { getDatesDiffs, getPriceFormat, getTime } from "@/utils/formatters";
import { translations as t } from "@/utils/translations";
import Image from "next/image";
import { useState } from "react";
import DetailsSection from "./details-section";

export default function FlightCard({
  flight,
  airlineNameFa,
  departureAirport,
  arrivalAirport,
}: DesktopFlightDetails) {
  const [showDetails, setShowDetails] = useState(false);
  const onDetailsClick = () => {
    setShowDetails((prev) => !prev);
  };

  const segment = flight.originDestinationOptions[0].flightSegments[0];
  const getFormattedTime = (point: "departure" | "arrival") => {
    const segmentPoint =
      point === "departure"
        ? segment.departureDateTime
        : segment.arrivalDateTime;
    return getTime(segmentPoint);
  };

  const getDifference = () => {
    return getDatesDiffs(segment.departureDateTime, segment.arrivalDateTime);
  };

  return (
    <div className="bg-white mt-6">
      <div className="flex justify-between">
        <div className="flex flex-1">
          <div className="flex items-center gap-4 ps-[18px]">
            <Image
              alt="airline"
              width={40}
              height={40}
              src={"/icons/mahan.png"}
            />
            <span className="text-sm">{airlineNameFa}</span>
          </div>
          <div className="mt-12 flex justify-center pb-4 flex-1">
            <div className="pt-2">
              <p className="text-2xl font-bold">
                {getFormattedTime("departure")}
              </p>
              <p className="mt-2">
                {departureAirport.cityFa}
                <span className="text-xs text-[#8d8d8d] ms-2">
                  ({departureAirport.cityId})
                </span>
              </p>
            </div>
            <div className="flex-1 px-4 max-w-48">
              <p className="text-xs text-[#6f6f6f] text-center">
                {getDifference()}
              </p>
              <div className="flex items-center mt-1">
                <div className="w-3 h-3 rounded-full border border-flyblue-500" />
                <div className="flex-1 bg-[#c6c6c6] h-[1px]" />
                <div className="w-3 h-3 rounded-full border border-pumpkinorange-500" />
              </div>
            </div>
            <div className="flex flex-col items-end pt-2">
              <p className="text-2xl font-bold">
                {getFormattedTime("arrival")}
              </p>
              <p className="mt-2">
                {arrivalAirport.cityFa}
                <span className="text-xs text-[#8d8d8d] ms-2">
                  ({arrivalAirport.cityId})
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-[10px] border-r border-flygray-500">
          <div className="text-[#8d8d8d] text-xs">
            <p className="text-center">{t.onePerson}</p>
            <p className="text-center mt-[10px]">
              <span className="text-xl font-bold text-flyblue-500 me-2">
                {getPriceFormat(
                  flight.airItineraryPricingInfo.itinTotalFare.totalFare
                )}
              </span>
              {t.toman}
            </p>
          </div>
          <button className="bg-flyblue-500 w-[169px] rounded h-10 text-white text-sm px-5">
            {t.selectTicket}
          </button>
        </div>
      </div>
      <div className="text-xs flex justify-between ps-4 pe-16 py-3 border-t border-flygray-500">
        <div>
          <span className="bg-[#f4f4f4] inline-block rounded-sm py-1 px-2 me-3">
            {flight.isCharter
              ? t.charter
              : flight.isSystem
              ? t.system
              : t.instance}
          </span>
          <span>{t.economy}</span>
          <span className="mx-1">.</span>
          <span>
            {segment.seatsRemaining} {t.seatsRemaining}
          </span>
          <span className="mx-1">.</span>
          <span>{t.flightNumber} :</span>&nbsp;
          <span className="font-[iransans]">{segment.flightNumber}</span>
        </div>
        <button
          className="rounded text-pumpkinorange-500 text-xs flex items-center gap-[5px]"
          onClick={onDetailsClick}
        >
          {t.moreDetails}
          <Image
            alt="polygon"
            width={7}
            height={5}
            src={"/icons/polygon.svg"}
            className={showDetails ? "rotate-180" : ""}
          />
        </button>
      </div>
      {showDetails && (
        <DetailsSection
          flight={flight}
          airlineNameFa={airlineNameFa}
          departureAirport={departureAirport}
          arrivalAirport={arrivalAirport}
        />
      )}
    </div>
  );
}
