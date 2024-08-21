import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as chartjs, SubTitle} from 'chart.js/auto';
const HorizontalBarWidget = ({ data,title,options }) => {

const chartData = {
    labels: [title], // Only one label representing the entire dataset
    
    datasets: data.segments.map((segment, index) => ({
        label: segment.label,
        data: [segment.value], // Each segment's value
        backgroundColor: segment.color,
        barThickness: 25, // Thicker bar for better visibility
        borderRadius: 5,
    })),
};

const chartOptions = {
    ...options,
    indexAxis: 'y',
    layout: {
        padding: 20
    },
    scales: {
        x: {
            display: true,
            beginAtZero: true,
            stacked: true, // Stack all bars together
        },
        y: {
            beginAtZero: true,
            stacked: true, // Stack all bars together
            grid: {
                display: false,
            },
            ticks: {
                display: false,
            },
        },
    },
    plugins: {
        legend: {
            display: true,
            position:'bottom',
            align:'start' ,
            padding:30,
         
        },
        tooltip: {
            enabled: true,
            callbacks: {
                label: function (tooltipItem) {
                    return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                },
            },
        },
    },
};
const sub = (title==='Image Security Issues'?'Images':'Vulnerabilities');
  return (
    
    <div className="widget">
      <h3>{title}</h3>
      
      <Bar data={chartData} options={chartOptions} /> 
      <p className="total">{data.total} Total {sub}</p>
    </div>
  );
};

export default HorizontalBarWidget;