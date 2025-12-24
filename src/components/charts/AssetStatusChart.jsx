import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const AssetStatusChart = () => {
  const data = {
    labels: ['Working Assets', 'Not working Assets', 'Discarded'],
    datasets: [
      {
        data: [7, 7, 7], // Mock data based on visuals
        backgroundColor: [
          '#1E3A8A', // Dark Blue
          '#C26785', // Pink/Red
          '#56ABF8', // Light Blue
        ],
        borderWidth: 0,
        cutout: '70%', // Makes it a donut
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'right',
        labels: {
            usePointStyle: true,
            boxWidth: 8,
            font: { size: 12, family: 'Poppins' }
        }
      }
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: '200px', width: '100%' }}>
      <Doughnut data={data} options={options} />
      <div style={{ textAlign: 'center', fontSize: '10px', fontWeight: 'bold' }}>
          {/* Centered text overlay if needed, usually requires absolute positioning */}
      </div>
    </div>
  );
};

export default AssetStatusChart;