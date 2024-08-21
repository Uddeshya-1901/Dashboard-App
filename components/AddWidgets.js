import React from 'react';
const AddWidgets = ({ onAdd }) => {
  return (
    <div className="add-widget" onClick={onAdd}>
      <button onClick={onAdd} className="add-widget-button">
        <span>+ Add Widget</span>
      </button>
    </div>
  );
};
export default AddWidgets;