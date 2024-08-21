
import React, { useState, useEffect } from 'react';
import '../Sidebar.css';

const AddSidebarWidget = ({ isOpen, onClose, onWidgetSelect, config, selectedWidgets }) => {
  const [localSelectedWidgets, setLocalSelectedWidgets] = useState({});

  useEffect(() => {
    setLocalSelectedWidgets(selectedWidgets);
  }, [selectedWidgets]);

  const handleCheckboxChange = (categoryTitle, widgetTitle) => {
    const isSelected = localSelectedWidgets[categoryTitle]?.[widgetTitle] || false;
    const newSelection = {
      ...localSelectedWidgets,
      [categoryTitle]: {
        ...localSelectedWidgets[categoryTitle],
        [widgetTitle]: !isSelected,
      },
    };

    setLocalSelectedWidgets(newSelection);
    onWidgetSelect(categoryTitle, widgetTitle, !isSelected);
  };

  const renderWidgetOptions = (category) => (
    <ul>
      {category.widgets.map((widget, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={localSelectedWidgets[category.title]?.[widget.title] || false}
            onChange={() => handleCheckboxChange(category.title, widget.title)}
          />
          {widget.title}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`${isOpen ? 'sidebar-container-open' : ''}`}>
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h3>Add Widget</h3>
        <button className="close-button" onClick={onClose}>✖</button>
      </div>
      <div className="sidebar-content">
        <p>Personalize your dashboard by adding the following widget</p>
        {config.categories.map((category, index) => (
          <div key={index}>
            <h4>{category.title}</h4>
            {renderWidgetOptions(category)}
          </div>
        ))}
        <div className="sidebar-footer">
          <button className="confirm-button" onClick={onClose}>Confirm</button>
          <button className="cancel-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddSidebarWidget;

