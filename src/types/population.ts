import type { Prefecture } from "./prefectures";

export interface ResasPopulationApiResponse {
  message: null;
  result: PopulationResultWithBoundaryYear;
}

export interface PopulationResultWithBoundaryYear {
  boundaryYear: number;
  data: PopulationResult[];
}

export interface PopulationResult {
  label: string;
  data: YearlyPopulationData[];
}

export interface YearlyPopulationData {
  year: number;
  value: number;
  rate?: number;
}

export interface PopulationResultWithPrefecture {
  prefecture: Prefecture;
  data: PopulationResult[];
}
