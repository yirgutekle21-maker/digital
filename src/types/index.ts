export interface LiteracyData {
  id: string;
  region: string;
  demographicGroup: string;
  age: string;
  incomeLevel: string;
  literacyRate: number;
  internetAccess: number;
  deviceOwnership: number;
  skillLevel: string;
  population: number;
  year: number;
}

export interface FilterOptions {
  regions: string[];
  ageGroups: string[];
  incomelevels: string[];
  skillLevels: string[];
}

export interface DashboardMetrics {
  averageLiteracyRate: number;
  maxGap: number;
  minGap: number;
  regionsAnalyzed: number;
}
