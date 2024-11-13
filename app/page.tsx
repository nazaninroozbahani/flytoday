import { translations as t } from "@/utils/translations";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 bg-[#f3f3f3]">
      <div className="flex gap-2 items-center">
        <button className="w-full text-[#161616] flex justify-center items-center gap-2 h-10 rounded-[4px] border border-[#eee] bg-white text-sm">
          <Image
            alt="filter"
            src={"/icons/filter.svg"}
            width={15}
            height={16}
          />
          {t.filtering}
        </button>
        <button className="w-full text-[#161616] flex justify-center items-center gap-2 h-10 rounded-[4px] border border-[#eee] bg-white text-sm">
          <Image alt="sort" src={"/icons/sort.svg"} width={15} height={16} />
          {t.sorting}
        </button>
      </div>
      <div className="mt-[22px] text-greyishbrown-900">
        <h1 className="text-xl font-bold">{t.tehranToIstanbul}</h1>
        <p className="text-sm mt-2">
          <span>{t.flightsFound}</span>&nbsp;
          <span>{t.departureDateTime}</span>
        </p>
      </div>
      <div className="bg-white p-4 mt-6">
        <div className="flex items-center gap-4">
          <Image
            alt="airline"
            width={40}
            height={40}
            src={"/icons/mahan.png"}
          />
          <span className="text-sm text-greyishbrown-900">ماهان</span>
        </div>
      </div>
    </main>
  );
}
