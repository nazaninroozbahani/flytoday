import { FiltersProps } from "@/definitions";
import { translations as t } from "@/utils/translations";
import { useEffect, useState } from "react";

export default function FlightTypeFilter({
  onFlightTypeChange,
}: Pick<FiltersProps, "onFlightTypeChange">) {
  const [flightTypes, setFlightTypes] = useState({
    isCahrter: false,
    isSystem: false,
    isInstance: false,
  });
  const definedFlightTypes = [
    {
      id: "charter",
      field: flightTypes.isCahrter,
      title: t.charter,
    },
    {
      id: "system",
      field: flightTypes.isSystem,
      title: t.system,
    },
    {
      id: "instance",
      field: flightTypes.isInstance,
      title: t.instance,
    },
  ];

  const onChange = (id: string) => {
    setFlightTypes((prev) => ({
      ...prev,
      isCahrter: id === "charter" ? !prev.isCahrter : prev.isCahrter,
      isSystem: id === "system" ? !prev.isSystem : prev.isSystem,
      isInstance: id === "instance" ? !prev.isInstance : prev.isInstance,
    }));
  };

  useEffect(() => {
    onFlightTypeChange(
      flightTypes.isCahrter,
      flightTypes.isSystem,
      flightTypes.isInstance
    );
  }, [flightTypes]);

  return (
    <div className="p-4">
      <p>{t.flightType}</p>
      <div className="mt-8 flex flex-col gap-4">
        {definedFlightTypes.map((flightType) => (
          <div
            key={flightType.title}
            className="flex items-center gap-4 cursor-pointer"
          >
            <input
              type="checkbox"
              id={flightType.title}
              name={flightType.title}
              checked={
                flightType.id === "charter"
                  ? flightTypes.isCahrter
                  : flightType.id === "system"
                  ? flightTypes.isSystem
                  : flightTypes.isInstance
              }
              onChange={() => onChange(flightType.id)}
              className="cursor-pointer"
            />
            <label htmlFor={flightType.title} className="cursor-pointer">
              {t.flights}&nbsp;{flightType.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
