# Digital Literacy Analysis Dashboard

An interactive web interface for analyzing regional demographic datasets to identify digital literacy gaps and drive digital inclusion initiatives.

## Features

- **Interactive Visualizations**: Charts and graphs for easy data exploration
- **Multi-Dimensional Filtering**: Filter by region, age group, and income level
- **Key Metrics Dashboard**: Displays average literacy rates, gaps, and regional analysis
- **Regional Comparison**: Bar charts comparing literacy rates across regions
- **Demographic Breakdown**: Pie charts showing population distribution by age group
- **Inclusion Metrics**: Line charts tracking literacy, internet access, and device ownership by income level

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Visualization**: Recharts
- **Styling**: Tailwind CSS
- **UI Components**: Lucide Icons

## Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx          # Main dashboard component
│   ├── FilterPanel.tsx        # Multi-dimensional filtering
│   ├── MetricsCards.tsx       # KPI display cards
│   └── visualizations/
│       ├── RegionalComparison.tsx
│       ├── DemographicBreakdown.tsx
│       └── LiteracyChart.tsx
├── data/
│   └── sampleData.ts          # Sample dataset generation
├── types/
│   └── index.ts               # TypeScript interfaces
├── App.tsx                    # Root component
└── main.tsx                   # Entry point
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Usage

1. **Filter Data**: Use the filter panel to select regions, age groups, and income levels
2. **View Metrics**: Check the KPI cards for key insights
3. **Analyze Visualizations**: Explore the charts to understand literacy patterns
4. **Identify Gaps**: Focus on areas with the largest gaps for targeted interventions

## Data Structure

Each record includes:
- Region
- Demographic group (age + income)
- Age group
- Income level
- Literacy rate (%)
- Internet access (%)
- Device ownership (%)
- Skill level
- Population
- Year

## Contributing

Contributions are welcome! Please follow these steps:
1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, please open an issue in the repository.
