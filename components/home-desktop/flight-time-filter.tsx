import { FiltersProps } from "@/definitions";
import { translations as t } from "@/utils/translations";
import { useEffect, useState } from "react";

export default function FlightTimeFilter({
  onFlightTimeChange,
}: Pick<FiltersProps, "onFlightTimeChange">) {
  const [flightTimes, setFlightTimes] = useState({
    morning: false,
    evening: false,
    night: false,
  });
  const definedFlightTimes = [
    {
      id: "morning",
      field: flightTimes.morning,
      title: t.morning,
    },
    {
      id: "evening",
      field: flightTimes.evening,
      title: t.evening,
    },
    {
      id: "night",
      field: flightTimes.night,
      title: t.night,
    },
  ];

  const onChange = (id: string) => {
    setFlightTimes((prev) => ({
      ...prev,
      morning: id === "morning" ? !prev.morning : prev.morning,
      evening: id === "evening" ? !prev.evening : prev.evening,
      night: id === "night" ? !prev.night : prev.night,
    }));
  };

  useEffect(() => {
    onFlightTimeChange(
      flightTimes.morning,
      flightTimes.evening,
      flightTimes.night
    );
  }, [flightTimes]);

  return (
    <div className="p-4">
      <p>{t.timeToMove}</p>
      <div className="mt-8 flex flex-col gap-4">
        {definedFlightTimes.map((flightTime) => (
          <div
            key={flightTime.title}
            className="flex items-center gap-4 cursor-pointer"
          >
            <input
              type="checkbox"
              id={flightTime.title}
              name={flightTime.title}
              checked={
                flightTime.id === "morning"
                  ? flightTimes.morning
                  : flightTime.id === "evening"
                  ? flightTimes.evening
                  : flightTimes.night
              }
              onChange={() => onChange(flightTime.id)}
              className="cursor-pointer"
            />
            <label htmlFor={flightTime.title} className="cursor-pointer">
              {flightTime.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
