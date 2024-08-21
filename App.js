import React from 'react';
import Dashboard from './components/Dashboard'
import config from './config/data.json';
import Header from './components/DashboardHeader';

function App() {
  console.log('Loaded Config:', config);
  return (
    <div className="App">
      <Header />
      <Dashboard config={config} />
    </div>
  );
}

export default App;
