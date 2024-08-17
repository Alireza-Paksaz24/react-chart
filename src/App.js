// App.js
import React, { useState } from 'react';
import Chart from './Chart';

function App() {
  const [selectedChart, setSelectedChart] = useState('pieChart');

  const handleChange = (event) => {
    setSelectedChart(event.target.value);
  };

  return (
    <div>
      <h1>Simple Chart Selector Example</h1>
      <select value={selectedChart} onChange={handleChange}>
        <option value="pieChart">Pie Chart</option>
        <option value="pieCanvas">Pie Canvas</option>
        <option value="bump">Bump</option>
        <option value="bar">Bar</option>
      </select>
      <Chart chartType={selectedChart} />
    </div>
  );
}

export default App;
