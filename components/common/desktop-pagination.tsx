import { usePagination } from "@/hooks/usePagination";
import Image from "next/image";

interface Props {
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  pageSize: number;
  className?: string;
}

const DesktopPagination = ({
  currentPage,
  changeCurrentPage,
  totalCount,
  siblingCount = 1,
  pageSize,
  className,
}: Props) => {
  const paginationRange: Array<number | string> | undefined = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (
    currentPage === 0 ||
    (paginationRange && paginationRange.length < 2) ||
    !paginationRange
  ) {
    return null;
  }

  const onNext = () => {
    changeCurrentPage(currentPage + 1);
  };

  const onPrevious = () => {
    changeCurrentPage(currentPage - 1);
  };

  const onDotsClick = (dotsIndex: number) => {
    let offset;
    const currentIndex = paginationRange.findIndex(
      (page) => page === currentPage
    );
    if (dotsIndex > currentIndex) offset = 5;
    else offset = -5;
    const finalPage =
      currentPage + offset > 0
        ? currentPage + offset >
          (paginationRange[paginationRange?.length - 1] as number)
          ? paginationRange[paginationRange?.length - 1]
          : currentPage + offset
        : 1;
    changeCurrentPage(finalPage as number);
  };

  const itemClass =
    "bg-white h-[35px] mx-1 border border-flygray-500 rounded w-[35px] min-w-[35px] cursor-pointer select-none text-xs flex items-center justify-center relative disabled:opacity-50 disabled:cursor-not-allowed";
  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={`flex list-none justify-center ${className}`}>
      <li
        className={`${itemClass} bg-white text-[#333] hover:bg-black/[0.04] ${
          currentPage === 1 ? "pointer-events-none opacity-50" : ""
        }`}
        onClick={onPrevious}
      >
        <Image alt="arrow" width={6.8} height={10.8} src={"/icons/arrow.svg"} />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (typeof pageNumber === "string") {
          return (
            <li
              key={index}
              className={`${itemClass} rounded font-bold border-none text-[#333] hover:bg-black/[0.04]`}
              onClick={() => onDotsClick(index)}
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={`${itemClass} ${
              pageNumber === currentPage
                ? "bg-[#2f80ed] text-white"
                : "bg-white text-[#333] hover:bg-black/[0.04]"
            }`}
            onClick={() => changeCurrentPage(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`${itemClass} bg-white text-[#333] hover:bg-black/[0.04] ${
          currentPage === lastPage
            ? "pointer-events-none opacity-50"
            : "opacity-100"
        }`}
        onClick={onNext}
      >
        <Image
          alt="arrow"
          width={6.8}
          height={10.8}
          src={"/icons/arrow.svg"}
          className="rotate-180"
        />
      </li>
    </ul>
  );
};

export default DesktopPagination;
