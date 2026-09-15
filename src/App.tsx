import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import { LiteracyData } from './types';
import { generateSampleData } from './data/sampleData';

function App() {
  const [data] = useState<LiteracyData[]>(generateSampleData());

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Digital Literacy Analysis</h1>
          <p className="text-gray-600 mt-2">Identifying gaps and driving digital inclusion initiatives</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Dashboard data={data} />
      </main>
    </div>
  );
}

export default App;
