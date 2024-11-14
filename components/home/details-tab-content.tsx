import Image from "next/image";

export default function DetailsTabContent() {
  return (
    <div className="pt-6 pb-4 max-h-[calc(100dvh-205px)] overflow-auto">
      <h2 className="font-bold">پرواز رفت تهران - استانبول</h2>
      <div className="flex mt-6 gap-[18px]">
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            alt="airline"
            width={40}
            height={40}
            src={"/icons/mahan.png"}
          />
          <span className="text-sm text-[#6f6f6f]">ماهان</span>
        </div>
        <div className="flex-1 flex gap-[18px]">
          <div className="flex flex-col items-center h-full py-2">
            <div className="w-2 h-2 rounded-full border border-[#870b1d]" />
            <div className="flex-1 border-[#c6c6c6] border-l-[3px] border-dotted" />
            <div className="w-2 h-2 rounded-full border border-[#870b1d]" />
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-bold">۱۲:۴۵</span> تهران (THR)
              </p>
              <p>
                ۱۲ اردیبهشت ۱۳۹۹&nbsp;
                <span className="font-[iransans]">(07 Apr)</span>
              </p>
              <p className="text-[#8d8d8d]">Imam Khomeini Intl</p>
            </div>
            <div className="text-xs mt-8 flex flex-col gap-2">
              <div className="grid grid-cols-8">
                <p className="text-[#8d8d8d] col-span-4">مدت پرواز</p>
                <p className="col-span-4">۳ ساعت و ۴۵ دقیقه</p>
              </div>
              <div className="grid grid-cols-8">
                <p className="text-[#8d8d8d] col-span-4">نوع هواپیما</p>
                <p className="font-[iransans] col-span-4">Airbus A320</p>
              </div>
              <div className="grid grid-cols-8">
                <p className="text-[#8d8d8d] col-span-4">کلاس پرواز</p>
                <p className="col-span-4">اکونومی</p>
              </div>
              <div className="grid grid-cols-8">
                <p className="text-[#8d8d8d] col-span-4">نوع پرواز</p>
                <p className="col-span-4">سیستمی</p>
              </div>
              <div className="grid grid-cols-8">
                <p className="text-[#8d8d8d] col-span-4">بار مجاز</p>
                <p className="col-span-4">۲۰ کیلوگرم</p>
              </div>
              <div className="grid grid-cols-8">
                <p className="text-[#8d8d8d] col-span-4">کلاس نرخی</p>
                <p className="font-[iransans] col-span-4">A</p>
              </div>
              <div className="grid grid-cols-8">
                <p className="text-[#8d8d8d] col-span-4">استرداد</p>
                <p className="col-span-4 text-[#ff1d23]">غیر قابل استرداد</p>
              </div>
            </div>
            <p className="mt-8">
              <span className="font-bold">۱۲:۴۵</span> استانبول (IST)
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2 ps-[88px]">
        <p>
          ۱۲ اردیبهشت ۱۳۹۹&nbsp;
          <span className="font-[iransans]">(07 Apr)</span>
        </p>
        <p className="text-[#8d8d8d]">Istanbul Airport Intl</p>
      </div>
      <div className="text-sm border border-[#eeeeee] p-4 flex flex-col gap-2 mt-6">
        <div className="flex justify-between">
          <p>۲ × بزرگسال</p>
          <p>۱,۳۷۰,۰۰۰ تومان</p>
        </div>
        <div className="flex justify-between">
          <p>۱ × کودک</p>
          <p>۱,۳۷۰,۰۰۰ تومان</p>
        </div>
        <div className="flex justify-between">
          <p>۱ × نوزاد</p>
          <p>۱,۳۷۰,۰۰۰ تومان</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">مجموع</p>
          <p className="text-sky-500">
            <span className="font-bold">۱,۳۷۰,۰۰۰</span> تومان
          </p>
        </div>
      </div>
    </div>
  );
}
