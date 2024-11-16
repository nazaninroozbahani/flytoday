import { DesktopFlightDetails } from "@/definitions";
import Tabs from "./tabs";

export default function DetailsSection({
  flight,
  airlineNameFa,
  departureAirport,
  arrivalAirport,
}: DesktopFlightDetails) {
  return (
    <div className="p-4 bg-white flex flex-col text-sm">
      <Tabs
        flight={flight}
        key={flight.fareSourceCode}
        airlineNameFa={airlineNameFa}
        departureAirport={departureAirport}
        arrivalAirport={arrivalAirport}
      />
    </div>
  );
}
