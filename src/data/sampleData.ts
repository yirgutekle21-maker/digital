import { LiteracyData } from '../types';

export const generateSampleData = (): LiteracyData[] => {
  const regions = ['North', 'South', 'East', 'West', 'Central'];
  const ageGroups = ['13-18', '19-35', '36-55', '56-75', '75+'];
  const incomelevels = ['Low', 'Lower-Middle', 'Middle', 'Upper-Middle', 'High'];
  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  const data: LiteracyData[] = [];
  let id = 0;

  regions.forEach((region) => {
    ageGroups.forEach((age) => {
      incomelevels.forEach((income) => {
        // Generate realistic literacy rates based on demographics
        const baseRate = 60;
        const ageMultiplier = age === '13-18' ? 0.95 : age === '19-35' ? 0.92 : age === '36-55' ? 0.75 : age === '56-75' ? 0.45 : 0.2;
        const incomeMultiplier = income === 'High' ? 1.2 : income === 'Upper-Middle' ? 1.1 : income === 'Middle' ? 1.0 : income === 'Lower-Middle' ? 0.85 : 0.6;
        const regionVariance = (Math.random() - 0.5) * 10;

        const literacyRate = Math.min(100, Math.max(0, baseRate * ageMultiplier * incomeMultiplier + regionVariance));

        data.push({
          id: `${id++}`,
          region,
          demographicGroup: `${age}-${income}`,
          age,
          incomeLevel: income,
          literacyRate: Math.round(literacyRate * 10) / 10,
          internetAccess: Math.round((literacyRate * 0.9 + Math.random() * 10) * 10) / 10,
          deviceOwnership: Math.round((literacyRate * 0.85 + Math.random() * 15) * 10) / 10,
          skillLevel: literacyRate > 75 ? 'Advanced' : literacyRate > 50 ? 'Intermediate' : 'Beginner',
          population: Math.floor(Math.random() * 50000) + 5000,
          year: 2024,
        });
      });
    });
  });

  return data;
};
