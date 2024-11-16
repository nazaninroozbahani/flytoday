import { Dispatch, SetStateAction } from "react";

export interface FlightSeghment {
  flightNumber: string;
  departureDateTime: string;
  arrivalDateTime: string;
  departureAirportLocationCode: string;
  arrivalAirportLocationCode: string;
  seatsRemaining: number;
  operatingAirline: {
    equipment: string;
  };
  cabinClassCode: string;
  baggage: string;
}

export interface originDestinationItem {
  flightSegments: FlightSeghment[];
}

export interface Flight {
  originDestinationOptions: originDestinationItem[];
  fareSourceCode: string;
  validatingAirlineCode: string;
  isCharter: boolean;
  isSystem: boolean;
  isInstance: boolean;
  airItineraryPricingInfo: {
    itinTotalFare: {
      totalFare: number;
    };
  };
  refundMethod: "Offline" | "Online";
}

export interface Airline {
  iata: string;
  name: string;
  nameFa: string;
}

export interface Airport {
  iata: string;
  name: string;
  cityFa: string;
  cityId: string;
}

export interface FlightSearchData {
  pricedItineraries: Flight[];
  additionalData: {
    airlines: Airline[];
    airports: Airport[];
  };
}

export interface FlightDetails {
  flight: Flight;
  chooseFlight: (flight: Flight | undefined) => void;
  airlineNameFa: string;
  departureAirport: Airport;
  arrivalAirport: Airport;
}

export type DesktopFlightDetails = Omit<FlightDetails, "chooseFlight">;

export interface PaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalItems: number;
}
