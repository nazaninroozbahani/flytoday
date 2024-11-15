"use client";

import DetailsSheet from "@/components/home/details-sheet";
import FlightCard from "@/components/home/flight-card";
import { translations as t } from "@/utils/translations";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <main className="p-4 bg-[#f3f3f3] flex justify-center text-greyishbrown-900 relative">
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
            <span>{t.flightsFound}</span>&nbsp;
            <span>{t.departureDateTime}</span>
          </p>
        </div>
        <FlightCard setIsDetailsOpen={setIsDetailsOpen} />
      </div>
      {isDetailsOpen && <DetailsSheet setIsDetailsOpen={setIsDetailsOpen} />}
    </main>
  );
}
