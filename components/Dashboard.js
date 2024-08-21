
import React, { useState } from 'react';
import PieChartWidget from './PieChartWidget';
import DonutChartWidget from './DonutChartWidget.js';
import AddSidebarWidget from './AddSidebarWidget';
import HorizontalBarWidget from './HorizontalBarWidget.js';
import AddWidgets from './AddWidgets.js';
import '../Dashboard.css';
import { FiRefreshCw, FiMoreVertical } from 'react-icons/fi';

const Dashboard = ({ config }) => {
  const initializeSelectedWidgets = () => {
    const initialSelection = {};
    config.categories.forEach(category => {
      initialSelection[category.title] = {};
      category.widgets.forEach(widget => {
        initialSelection[category.title][widget.title] = true; // Mark all widgets as selected
      });
    });
    return initialSelection;
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedWidgets, setSelectedWidgets] = useState(initializeSelectedWidgets);

  const handleAddWidgetClick = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleWidgetSelection = (categoryTitle, widgetTitle, isSelected) => {
    const updatedCategories = { ...selectedWidgets };
    updatedCategories[categoryTitle][widgetTitle] = isSelected;

    setSelectedWidgets(updatedCategories);
  };

  return (
    <div className={`dashboard ${isSidebarOpen ? 'shadowed' : ''}`}>
      <div className='nav-dashboard'>
        <h2>CNAPP Dashboard</h2>
        <div className='right-buttons'>
          <div className='add-button'>
            <button onClick={handleAddWidgetClick}>Add Widget +</button>
          </div>
          <div className='refresh-button'>
            <button>
              <FiRefreshCw size={10} />
            </button>
          </div>
          <div className='options-button'>
            <button>
              <FiMoreVertical size={10} />
            </button>
          </div>
          <div className='time-range'>
            <button>
              Last 2 days <span style={{ marginLeft: '5px', transform: 'rotate(90deg)' }}>▼</span>
            </button>
          </div>
        </div>
      </div>

      {config.categories.map((category, index) => (
        <div key={index} className="category">
          <h3>{category.title}</h3>
          <div className="widgets">
            {category.widgets.map((widget, idx) => {
              if (selectedWidgets[category.title][widget.title]) {
                if (widget.type === 'pieChart') {
                  return (
                    <div className="pie-widget" key={idx}>
                      <PieChartWidget data={widget.data} title={widget.title} />
                    </div>
                  );
                }
                if (widget.type === 'donutChart') {
                  return (
                    <div className='donut-widget' key={idx}>
                      <DonutChartWidget data={widget.data} title={widget.title} />
                    </div>
                  );
                }
                if (widget.type === 'horizontalBar') {
                  return (
                    <div className='horizontal-widget' key={idx}>
                      <HorizontalBarWidget data={widget.data} title={widget.title} />
                    </div>
                  );
                }
                if (widget.type === 'null') {
                  return (
                    <div className="no-graph" key={idx}>
                      <h4>{widget.title}</h4>
                      <div className="no-graph-text">No Graph data available!</div>
                    </div>
                  );
                }
              }
              return null;
            })}
            <AddWidgets
              onAdd={handleAddWidgetClick}
            />
          </div>
        </div>
        
      ))}
    
      <AddSidebarWidget
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        onWidgetSelect={handleWidgetSelection}
        config={config}
        selectedWidgets={selectedWidgets}
      />
      
    </div>
  );
};

export default Dashboard;
