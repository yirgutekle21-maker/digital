import React, { useState, useMemo } from 'react';
import { LiteracyData } from '../types';
import FilterPanel from './FilterPanel';
import MetricsCards from './MetricsCards';
import LiteracyChart from './visualizations/LiteracyChart';
import RegionalComparison from './visualizations/RegionalComparison';
import DemographicBreakdown from './visualizations/DemographicBreakdown';

interface DashboardProps {
  data: LiteracyData[];
}

const Dashboard: React.FC<DashboardProps> = ({ data }) => {
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedAgeGroups, setSelectedAgeGroups] = useState<string[]>([]);
  const [selectedIncomelevels, setSelectedIncomeLevels] = useState<string[]>([]);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const regionMatch = selectedRegions.length === 0 || selectedRegions.includes(item.region);
      const ageMatch = selectedAgeGroups.length === 0 || selectedAgeGroups.includes(item.age);
      const incomeMatch = selectedIncomelevels.length === 0 || selectedIncomelevels.includes(item.incomeLevel);

      return regionMatch && ageMatch && incomeMatch;
    });
  }, [data, selectedRegions, selectedAgeGroups, selectedIncomelevels]);

  const uniqueRegions = Array.from(new Set(data.map((d) => d.region)));
  const uniqueAgeGroups = Array.from(new Set(data.map((d) => d.age)));
  const uniqueIncomelevels = Array.from(new Set(data.map((d) => d.incomeLevel)));

  return (
    <div className="space-y-8">
      <FilterPanel
        regions={uniqueRegions}
        ageGroups={uniqueAgeGroups}
        incomelevels={uniqueIncomelevels}
        selectedRegions={selectedRegions}
        selectedAgeGroups={selectedAgeGroups}
        selectedIncomelevels={selectedIncomelevels}
        onRegionChange={setSelectedRegions}
        onAgeGroupChange={setSelectedAgeGroups}
        onIncomeLevelChange={setSelectedIncomeLevels}
      />

      <MetricsCards data={filteredData} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RegionalComparison data={filteredData} />
        <DemographicBreakdown data={filteredData} />
      </div>

      <div className="w-full">
        <LiteracyChart data={filteredData} />
      </div>
    </div>
  );
};

export default Dashboard;
