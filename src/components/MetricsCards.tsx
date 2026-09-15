import React, { useMemo } from 'react';
import { LiteracyData } from '../types';
import { TrendingUp, Users, Target, AlertCircle } from 'lucide-react';

interface MetricsCardsProps {
  data: LiteracyData[];
}

const MetricsCards: React.FC<MetricsCardsProps> = ({ data }) => {
  const metrics = useMemo(() => {
    if (data.length === 0) {
      return {
        averageLiteracyRate: 0,
        maxGap: 0,
        minGap: 0,
        regionsAnalyzed: 0,
      };
    }

    const literacyRates = data.map((d) => d.literacyRate);
    const averageLiteracyRate = literacyRates.reduce((a, b) => a + b, 0) / literacyRates.length;
    const maxGap = Math.max(...literacyRates) - Math.min(...literacyRates);
    const minGap = Math.min(...literacyRates);
    const regionsAnalyzed = new Set(data.map((d) => d.region)).size;

    return {
      averageLiteracyRate: Math.round(averageLiteracyRate * 10) / 10,
      maxGap: Math.round(maxGap * 10) / 10,
      minGap: Math.round(minGap * 10) / 10,
      regionsAnalyzed,
    };
  }, [data]);

  const cards = [
    {
      title: 'Average Literacy Rate',
      value: `${metrics.averageLiteracyRate}%`,
      icon: TrendingUp,
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Literacy Gap (Max)',
      value: `${metrics.maxGap}%`,
      icon: AlertCircle,
      color: 'bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      title: 'Lowest Literacy Rate',
      value: `${metrics.minGap}%`,
      icon: Target,
      color: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      title: 'Regions Analyzed',
      value: metrics.regionsAnalyzed,
      icon: Users,
      color: 'bg-green-50',
      iconColor: 'text-green-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div key={index} className={`${card.color} rounded-lg p-6 shadow-md`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{card.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{card.value}</p>
              </div>
              <Icon className={`${card.iconColor} w-8 h-8`} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MetricsCards;
