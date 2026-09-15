import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LiteracyData } from '../../types';

interface RegionalComparisonProps {
  data: LiteracyData[];
}

const RegionalComparison: React.FC<RegionalComparisonProps> = ({ data }) => {
  const chartData = useMemo(() => {
    const regionMap: { [key: string]: { literacyRate: number; count: number } } = {};

    data.forEach((item) => {
      if (!regionMap[item.region]) {
        regionMap[item.region] = { literacyRate: 0, count: 0 };
      }
      regionMap[item.region].literacyRate += item.literacyRate;
      regionMap[item.region].count += 1;
    });

    return Object.entries(regionMap).map(([region, { literacyRate, count }]) => ({
      name: region,
      'Avg Literacy Rate': Math.round((literacyRate / count) * 10) / 10,
    }));
  }, [data]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Regional Literacy Comparison</h3>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Avg Literacy Rate" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-500 text-center py-8">No data available</p>
      )}
    </div>
  );
};

export default RegionalComparison;
