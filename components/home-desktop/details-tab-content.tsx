import { DesktopFlightDetails } from "@/definitions";
import {
  getDatesDiffs,
  getPersianDate,
  getPriceFormat,
  getTime,
} from "@/utils/formatters";
import { translations as t } from "@/utils/translations";
import Image from "next/image";

export default function DetailsTabContent({
  flight,
  airlineNameFa,
  arrivalAirport,
  departureAirport,
}: DesktopFlightDetails) {
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
    <div className="pt-6 pb-4 max-h-[calc(100dvh-205px)] overflow-auto">
      <div className="mx-4">
        <h2 className="font-bold">پرواز رفت تهران - استانبول</h2>
        <div className="flex mt-6 gap-[18px]">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              alt="airline"
              width={40}
              height={40}
              src={"/icons/mahan.png"}
            />
            <span className="text-sm text-[#6f6f6f]">{airlineNameFa}</span>
          </div>
          <div className="flex-1 flex gap-[18px]">
            <div className="flex flex-col items-center h-full py-2">
              <div className="w-2 h-2 rounded-full border border-[#870b1d]" />
              <div className="flex-1 my-1 border-[#c6c6c6] border-l-[3px] border-dotted" />
              <div className="w-2 h-2 rounded-full border border-[#870b1d]" />
            </div>
            <div className="flex-1 pe-14">
              <div className="flex leading-[22px] items-center">
                <p className="border-l border-flygray-500 pe-[21px]">
                  <span className="font-bold">
                    {getFormattedTime("departure")}
                  </span>
                  &nbsp;
                  {departureAirport.cityFa} ({departureAirport.cityId})
                </p>
                <p className="border-l border-flygray-500 px-[21px]">
                  {getPersianDate(
                    flight.originDestinationOptions[0].flightSegments[0]
                      .departureDateTime
                  )}
                  &nbsp;
                  <span className="font-[iransans]">
                    (
                    {new Date(
                      flight.originDestinationOptions[0].flightSegments[0].departureDateTime
                    ).toLocaleString("default", {
                      month: "short",
                      day: "2-digit",
                    })}
                    )
                  </span>
                </p>
                <p className="text-[#8d8d8d] ps-[21px]">
                  {departureAirport.name}
                </p>
              </div>
              <div className="text-xs mt-6 grid grid-rows-3 grid-flow-col gap-y-2 gap-x-[72px]">
                <div className="grid grid-cols-8">
                  <p className="text-[#8d8d8d] col-span-4">
                    {t.flightDuration}
                  </p>
                  <p className="col-span-4">{getDifference()}</p>
                </div>
                <div className="grid grid-cols-8">
                  <p className="text-[#8d8d8d] col-span-4">{t.planeType}</p>
                  <p className="font-[iransans] col-span-4">
                    {segment.operatingAirline.equipment}
                  </p>
                </div>
                <div className="grid grid-cols-8">
                  <p className="text-[#8d8d8d] col-span-4">{t.flightClass}</p>
                  <p className="col-span-4">{t.economy}</p>
                </div>
                <div className="grid grid-cols-8">
                  <p className="text-[#8d8d8d] col-span-4">{t.flightType}</p>
                  <p className="col-span-4">
                    {flight.isCharter
                      ? t.charter
                      : flight.isSystem
                      ? t.system
                      : t.instance}
                  </p>
                </div>
                <div className="grid grid-cols-8">
                  <p className="text-[#8d8d8d] col-span-4">{t.allowedLoad}</p>
                  <p className="col-span-4">{segment.baggage}</p>
                </div>
                <div className="grid grid-cols-8">
                  <p className="text-[#8d8d8d] col-span-4">{t.rateClass}</p>
                  <p className="font-[iransans] col-span-4">
                    {segment.cabinClassCode}
                  </p>
                </div>
                <div className="grid grid-cols-8">
                  <p className="text-[#8d8d8d] col-span-4">{t.refund}</p>
                  <p
                    className={`col-span-4 ${
                      flight.refundMethod === "Offline"
                        ? "text-[#ff1d23]"
                        : "text-green-500"
                    }`}
                  >
                    {flight.refundMethod === "Offline"
                      ? t.nonRefundable
                      : t.refundable}
                  </p>
                </div>
              </div>
              <div className="flex leading-[22px] items-center mt-6">
                <p className="border-l border-flygray-500 pe-[21px]">
                  <span className="font-bold">
                    {getFormattedTime("arrival")}
                  </span>
                  &nbsp;
                  {arrivalAirport.cityFa} ({arrivalAirport.cityId})
                </p>
                <p className="border-l border-flygray-500 px-[21px]">
                  {getPersianDate(
                    flight.originDestinationOptions[0].flightSegments[0]
                      .arrivalDateTime
                  )}
                  &nbsp;
                  <span className="font-[iransans]">
                    (
                    {new Date(
                      flight.originDestinationOptions[0].flightSegments[0].arrivalDateTime
                    ).toLocaleString("default", {
                      month: "short",
                      day: "2-digit",
                    })}
                    )
                  </span>
                </p>
                <p className="text-[#8d8d8d] ps-[21px]">
                  {arrivalAirport.name}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-sm border border-flygray-500 grid grid-cols-4 mt-6">
          <div className="flex justify-between p-4 border-l border-flygray-500">
            <p>2 × {t.adult}</p>
            <p>
              {getPriceFormat(1370000)}
              &nbsp;
              {t.toman}
            </p>
          </div>
          <div className="flex justify-between p-4 border-l border-flygray-500">
            <p>1 × {t.child}</p>
            <p>
              {getPriceFormat(1370000)}
              &nbsp;
              {t.toman}
            </p>
          </div>
          <div className="flex justify-between p-4 border-l border-flygray-500">
            <p>1 × {t.newBorn}</p>
            <p>
              {getPriceFormat(1370000)}
              &nbsp;
              {t.toman}
            </p>
          </div>
          <div className="flex justify-between p-4 border-l border-flygray-500">
            <p className="font-bold">{t.total}</p>
            <p className="text-sky-500">
              <span className="font-bold">
                {getPriceFormat(
                  flight.airItineraryPricingInfo.itinTotalFare.totalFare
                )}
              </span>
              &nbsp;
              {t.toman}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
