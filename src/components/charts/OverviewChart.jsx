import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OverviewChart = () => {
  const data = {
    labels: ['Incidents', 'Work Order', 'Check outs'],
    datasets: [
      {
        label: 'Open',
        data: [35, 0, 7],
        backgroundColor: '#1E3A8A',
        barThickness: 30,
      },
      {
        label: 'Closed',
        data: [20, 5, 10], // 0 for work order based on image gap or stack
        backgroundColor: '#56ABF8',
        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: { stacked: true, grid: { display: false } },
        y: { stacked: true, grid: { display: false }, ticks: { font: { size: 10 } } },// Max set high to match image scale look
    },
    plugins: {
      legend: { position: 'top', align: 'end', labels: { usePointStyle: true, boxWidth: 8 } },
    }
  };

  return <Bar data={data} options={options} />;
};

export default OverviewChart;