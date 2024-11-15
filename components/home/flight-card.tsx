import Image from "next/image";
import { translations as t } from "@/utils/translations";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setIsDetailsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function FlightCard({ setIsDetailsOpen }: Props) {
  const onDetailsClick = () => {
    setIsDetailsOpen(true);
  };

  return (
    <div className="bg-white p-4 mt-6">
      <div className="flex items-center gap-4">
        <Image alt="airline" width={40} height={40} src={"/icons/mahan.png"} />
        <span className="text-sm">ماهان</span>
      </div>
      <div className="mt-7 flex justify-between border-b border-[#eeeeee] pb-4">
        <div className="pt-2">
          <p className="text-2xl font-bold">12:45</p>
          <p className="mt-2">
            تهران<span className="text-xs text-[#8d8d8d] ms-2">(THR)</span>
          </p>
        </div>
        <div className="flex-1 px-4 max-w-48">
          <p className="text-xs text-[#6f6f6f] text-center">
            ۳ ساعت و ۴۵ دقیقه
          </p>
          <div className="flex items-center mt-1">
            <div className="w-3 h-3 rounded-full border border-flyblue-500" />
            <div className="flex-1 bg-[#c6c6c6] h-[1px]" />
            <div className="w-3 h-3 rounded-full border border-pumpkinorange-500" />
          </div>
        </div>
        <div className="flex flex-col items-end pt-2">
          <p className="text-2xl font-bold">17:30</p>
          <p className="mt-2">
            استانبول
            <span className="text-xs text-[#8d8d8d] ms-2">(IST)</span>
          </p>
        </div>
      </div>
      <div className="text-xs py-2 border-b border-[#eeeeee]">
        <span className="bg-[#f4f4f4] inline-block rounded-sm py-1 px-[14px] me-4">
          چارتر
        </span>
        <span>اکونومی</span>
        <span className="mx-1">.</span>
        <span>۷ صندلی خالی</span>
        <span className="mx-1">.</span>
        <span>شماره پرواز :</span>&nbsp;
        <span className="font-[iransans]">7856</span>
      </div>
      <div className="pt-4 flex justify-between">
        <div className="text-[#8d8d8d] text-xs">
          <p>یک نفر</p>
          <p>
            <span className="text-xl font-bold text-flyblue-500 me-2">
              ۱,۳۷۰,۰۰۰
            </span>
            تومان
          </p>
        </div>
        <button
          className="bg-flyblue-500 rounded h-10 text-white text-sm px-5"
          onClick={onDetailsClick}
        >
          {t.detailsAndSelect}
        </button>
      </div>
    </div>
  );
}
