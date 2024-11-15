import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { translations as t } from "@/utils/translations";
import Tabs from "./tabs";

interface Props {
  setIsDetailsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function DetailsSheet({ setIsDetailsOpen }: Props) {
  const onCloseClick = () => {
    setIsDetailsOpen(false);
  };
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-white flex flex-col text-sm">
      <div className="flex justify-between p-4 shadow-[0_1px_0_0_#eee]">
        <h2 className="font-bold">{t.flightDetails}</h2>
        <Image
          alt="close"
          width={24}
          height={24}
          src={"/icons/close.svg"}
          onClick={onCloseClick}
          className="cursor-pointer"
        />
      </div>
      <Tabs />
      <div className="p-4 flex justify-between shadow-[0_-5px_8px_0_rgba(0,0,0,0.08)]">
        <div className="text-[#8d8d8d] text-xs">
          <p>یک نفر</p>
          <p>
            <span className="text-xl font-bold text-flyblue-500 me-2">
              ۱,۳۷۰,۰۰۰
            </span>
            تومان
          </p>
        </div>
        <button className="bg-flyblue-500 w-[152px] rounded h-10 text-white text-sm px-5">
          {t.selectTicket}
        </button>
      </div>
    </div>
  );
}
