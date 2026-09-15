import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { LiteracyData } from '../../types';

interface DemographicBreakdownProps {
  data: LiteracyData[];
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

const DemographicBreakdown: React.FC<DemographicBreakdownProps> = ({ data }) => {
  const chartData = useMemo(() => {
    const ageMap: { [key: string]: number } = {};

    data.forEach((item) => {
      if (!ageMap[item.age]) {
        ageMap[item.age] = 0;
      }
      ageMap[item.age] += item.population;
    });

    return Object.entries(ageMap).map(([age, population]) => ({
      name: age,
      value: population,
    }));
  }, [data]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Population by Age Group</h3>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-500 text-center py-8">No data available</p>
      )}
    </div>
  );
};

export default DemographicBreakdown;
