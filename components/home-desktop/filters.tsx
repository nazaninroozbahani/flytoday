import { translations as t } from "@/utils/translations";
import FlightTypeFilter from "./flight-type-filter";
import { FiltersProps } from "@/definitions";
import FlightTimeFilter from "./flight-time-filter";

export default function Filters({
  onFlightTypeChange,
  onFlightTimeChange,
}: FiltersProps) {
  return (
    <div className="w-[282px] h-screen bg-white mt-6">
      <div className="flex justify-between p-4 border-b border-flygray-500">
        <span className="font-bold">{t.filters}</span>
        <button className="text-flyblue-500 hover:bg-blue-50/50 rounded px-4 py-1">
          {t.removeFilters}
        </button>
      </div>
      <FlightTypeFilter onFlightTypeChange={onFlightTypeChange} />
      <FlightTimeFilter onFlightTimeChange={onFlightTimeChange} />
    </div>
  );
}
