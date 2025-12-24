import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StackedBarChart = ({ title, total }) => {
  // Mock data tailored for "Incident Reported" or "Work Order Reported"
  const data = {
    labels: ['Neonatal intensive care', 'Radiology', 'Nursing Department', 'Trauma and Emergency', 'Oncology'],
    datasets: [
      {
        label: 'Open',
        data: [30, 6, 15, 6, 2],
        backgroundColor: total!== 20 ? '#4c84ff' : '#1E3A8A',//
        barThickness: 20,
      },
      {
        label: 'Closed',
        data: [7, 3, 9, 4, 3],
        backgroundColor: '#dbeafe', // Very light blue
        barThickness: 20,
      },
    ],
  };

  const [indexAxis, setIndexAxis] = React.useState(() => (typeof window !== 'undefined' && window.innerWidth >= 768 ? 'y' : 'x'));

  React.useEffect(() => {
    const onResize = () => {
      setIndexAxis(window.innerWidth >= 768 ? 'y' : 'x');
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const options = {
    indexAxis: indexAxis,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { stacked: true, grid: { display: false } },
      y: { stacked: true, grid: { display: false }, ticks: { font: { size: 10 } } },
    },
    plugins: {
      legend: { position: 'top', align: 'end', labels: { usePointStyle: true, boxWidth: 8 } },
    },
  };

  // Add axis title based on chart `title` prop and orientation
  const axisLabel = /incident/i.test(title) ? 'Total No.of.Incidents' : 'Total No.of.Work order';
  if (indexAxis === 'y') {
    // horizontal: numeric axis is x
    options.scales.x.title = { display: true, text: axisLabel, font: { size: 12, weight: '600' } };
  } else {
    // vertical: numeric axis is y
    options.scales.y.title = { display: true, text: axisLabel, font: { size: 12, weight: '600' } };
  }

  return (
    <div className="card stacked-bar-card" style={{height: '350px'}}>
        <div className="flex-between" style={{marginBottom: '-10px'}}>
            <h3 className="card-title">{title} - {total}</h3>
        </div>
        <div style={{height: '300px'}}>
            <Bar data={data} options={options} />
        </div>
    </div>
  );
};

export default StackedBarChart;