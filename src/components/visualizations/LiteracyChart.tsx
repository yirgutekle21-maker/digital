import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LiteracyData } from '../../types';

interface LiteracyChartProps {
  data: LiteracyData[];
}

const LiteracyChart: React.FC<LiteracyChartProps> = ({ data }) => {
  const chartData = useMemo(() => {
    const incomeMap: { [key: string]: { literacyRate: number; internetAccess: number; deviceOwnership: number; count: number } } = {};

    data.forEach((item) => {
      if (!incomeMap[item.incomeLevel]) {
        incomeMap[item.incomeLevel] = { literacyRate: 0, internetAccess: 0, deviceOwnership: 0, count: 0 };
      }
      incomeMap[item.incomeLevel].literacyRate += item.literacyRate;
      incomeMap[item.incomeLevel].internetAccess += item.internetAccess;
      incomeMap[item.incomeLevel].deviceOwnership += item.deviceOwnership;
      incomeMap[item.incomeLevel].count += 1;
    });

    const incomeOrder = ['Low', 'Lower-Middle', 'Middle', 'Upper-Middle', 'High'];
    return incomeOrder
      .filter((income) => incomeMap[income])
      .map((income) => ({
        name: income,
        'Literacy Rate': Math.round((incomeMap[income].literacyRate / incomeMap[income].count) * 10) / 10,
        'Internet Access': Math.round((incomeMap[income].internetAccess / incomeMap[income].count) * 10) / 10,
        'Device Ownership': Math.round((incomeMap[income].deviceOwnership / incomeMap[income].count) * 10) / 10,
      }));
  }, [data]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Inclusion Metrics by Income Level</h3>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Literacy Rate" stroke="#3B82F6" strokeWidth={2} />
            <Line type="monotone" dataKey="Internet Access" stroke="#10B981" strokeWidth={2} />
            <Line type="monotone" dataKey="Device Ownership" stroke="#F59E0B" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-500 text-center py-8">No data available</p>
      )}
    </div>
  );
};

export default LiteracyChart;
