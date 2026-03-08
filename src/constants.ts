import { Car, Bike, Train, Bus, CarTaxiFront, Footprints } from "lucide-react";
import { TransportMode, RouteStats } from "./types";

export const TRANSPORT_MODES: {
  id: TransportMode;
  label: string;
  icon: any;
}[] = [
  { id: "car", label: "Car", icon: Car },
  { id: "motorcycle", label: "Moto", icon: Bike },
  { id: "mrt", label: "MRT", icon: Train },
  { id: "bus", label: "Bus", icon: Bus },
  { id: "grab", label: "Grab", icon: CarTaxiFront },
  { id: "walk", label: "Walk", icon: Footprints },
];

export const MOCK_ROUTES: RouteStats[] = [
  {
    id: "r1",
    name: "Route A (Highway)",
    mode: "car",
    avgTime: 38,
    avgCost: 6.0,
    reliability: 0.6,
    usageCount: 24,
    isFastest: true,
  },
  {
    id: "r2",
    name: "Route B (City Road)",
    mode: "car",
    avgTime: 45,
    avgCost: 0,
    reliability: 0.4,
    usageCount: 15,
    isCheapest: true,
  },
  {
    id: "r3",
    name: "Route C (MRT)",
    mode: "mrt",
    avgTime: 50,
    avgCost: 3.0,
    reliability: 0.92,
    usageCount: 42,
    isMostReliable: true,
  },
  {
    id: "r4",
    name: "Route D (Motorcycle)",
    mode: "motorcycle",
    avgTime: 32,
    avgCost: 2.0,
    reliability: 0.75,
    usageCount: 8,
  },
];
