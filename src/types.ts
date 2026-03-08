export type TransportMode =
  | "car"
  | "motorcycle"
  | "mrt"
  | "bus"
  | "grab"
  | "walk"
  | "bicycle";

export interface Trip {
  id: string;
  startTime: Date;
  endTime?: Date;
  mode: TransportMode;
  distanceKm: number;
  netDistanceKm?: number;
  durationMin: number;
  stopCount: number;
  totalStopTimeMin: number;
  detourDistanceKm?: number;
  detourDurationMin?: number;
  routePolyline?: string;
}

export interface RouteStats {
  id: string;
  name: string;
  mode: TransportMode;
  avgTime: number;
  avgCost: number;
  reliability: number; // 0 to 1
  usageCount: number;
  isFastest?: boolean;
  isCheapest?: boolean;
  isMostReliable?: boolean;
}
