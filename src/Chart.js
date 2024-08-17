// Chart.js
import React from 'react';
import PieCanvas from './components/PieCanvas';
import PieChart from './components/PieChart';
import Bump from './components/Bump';
import Bar from './components/Bar';

const Chart = ({ chartType }) => {
  switch (chartType) {
    case 'pieCanvas':
      return (
        <div style={{ height: 500 }}>
          <PieCanvas />
        </div>
      );
    case 'pieChart':
      return (
        <div style={{ height: 500 }}>
          <PieChart />
        </div>
      );
    case 'bump':
      return (
        <div style={{ height: 500 }}>
          <Bump />
        </div>
      );
    case 'bar':
      return (
        <div style={{ height: 500 }}>
          <Bar />
        </div>
      );
    default:
      return <div>Select a chart type</div>;
  }
};

export default Chart;