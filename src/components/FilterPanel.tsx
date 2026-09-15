import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterPanelProps {
  regions: string[];
  ageGroups: string[];
  incomelevels: string[];
  selectedRegions: string[];
  selectedAgeGroups: string[];
  selectedIncomelevels: string[];
  onRegionChange: (regions: string[]) => void;
  onAgeGroupChange: (ageGroups: string[]) => void;
  onIncomeLevelChange: (incomeLevels: string[]) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = (
  {
    regions,
    ageGroups,
    incomelevels,
    selectedRegions,
    selectedAgeGroups,
    selectedIncomelevels,
    onRegionChange,
    onAgeGroupChange,
    onIncomeLevelChange,
  },
) => {
  const handleRegionToggle = (region: string) => {
    onRegionChange(
      selectedRegions.includes(region)
        ? selectedRegions.filter((r) => r !== region)
        : [...selectedRegions, region],
    );
  };

  const handleAgeGroupToggle = (ageGroup: string) => {
    onAgeGroupChange(
      selectedAgeGroups.includes(ageGroup)
        ? selectedAgeGroups.filter((a) => a !== ageGroup)
        : [...selectedAgeGroups, ageGroup],
    );
  };

  const handleIncomeLevelToggle = (incomeLevel: string) => {
    onIncomeLevelChange(
      selectedIncomelevels.includes(incomeLevel)
        ? selectedIncomelevels.filter((i) => i !== incomeLevel)
        : [...selectedIncomelevels, incomeLevel],
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Regions */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Regions</h3>
          <div className="space-y-2">
            {regions.map((region) => (
              <label key={region} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedRegions.includes(region)}
                  onChange={() => handleRegionToggle(region)}
                  className="rounded border-gray-300 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{region}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Age Groups */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Age Groups</h3>
          <div className="space-y-2">
            {ageGroups.map((ageGroup) => (
              <label key={ageGroup} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedAgeGroups.includes(ageGroup)}
                  onChange={() => handleAgeGroupToggle(ageGroup)}
                  className="rounded border-gray-300 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{ageGroup}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Income Levels */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Income Levels</h3>
          <div className="space-y-2">
            {incomelevels.map((incomeLevel) => (
              <label key={incomeLevel} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedIncomelevels.includes(incomeLevel)}
                  onChange={() => handleIncomeLevelToggle(incomeLevel)}
                  className="rounded border-gray-300 text-blue-600"
                />
                <span className="ml-2 text-gray-700">{incomeLevel}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
