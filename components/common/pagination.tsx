import { translations as t } from "@/utils/translations";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export const PAGE_SIZE = 10;

interface Props {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  total: number;
}

export default function Pagination({
  currentPage,
  setCurrentPage,
  total,
}: Props) {
  const onNextClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const onPreviousClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const buttonClass =
    "bg-white h-10 rounded w-[104px] text-xs flex items-center justify-center relative disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <div className="mt-4 flex justify-between text-[#161616] items-center">
      <button
        className={buttonClass}
        onClick={onNextClick}
        disabled={currentPage >= total / PAGE_SIZE}
      >
        {t.next}
        <Image
          alt="arrow"
          width={6.8}
          height={10.8}
          src={"/icons/arrow.svg"}
          className="absolute right-4"
        />
      </button>
      <span>
        {currentPage}&nbsp;
        {t.from}&nbsp;
        {Math.ceil(total / PAGE_SIZE)}
      </span>
      <button
        className={buttonClass}
        onClick={onPreviousClick}
        disabled={currentPage < 2}
      >
        {t.previous}
        <Image
          alt="arrow"
          width={6.8}
          height={10.8}
          src={"/icons/arrow.svg"}
          className="absolute left-4 rotate-180"
        />
      </button>
    </div>
  );
}
