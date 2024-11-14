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
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-white">
      <div className="flex justify-between p-4 shadow-[0_1px_0_0_#eee]">
        <h2 className="font-bold">{t.flightDetails}</h2>
        <Image
          alt="close"
          width={24}
          height={24}
          src={"/icons/close.svg"}
          onClick={onCloseClick}
        />
      </div>
      <Tabs />
    </div>
  );
}
