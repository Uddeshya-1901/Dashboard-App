import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart as chartjs} from 'chart.js/auto';
const DonutChartWidget = ({ title, data }) => {
  const chartData = {
    labels: data.segments.map(segment => segment.label),
    datasets: [
      {
        label: '# of votes',
        data: data.segments.map(segment => segment.value),
        backgroundColor: data.segments.map(segment => segment.color)
      }
    ]
  };

  return (
    <div className="widget">
      <h3>{title}</h3>
      <Doughnut data={chartData} />
      <p className="total">{data.total} Total</p>
    </div>
  );
};

export default DonutChartWidget;
