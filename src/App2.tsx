import React, { useEffect, useState } from 'react';
import FlavanoidsStatistics from './components/statastics/flavanoid';
import GammaStatisticsTable from './components/statastics/gamma';

import { WineDataItem } from './types/windData'; // Import the WineDataItem type
import './App.css';
import "./flav.css"


function App() {
  const [data, setData] = useState<WineDataItem[]>([]);

  useEffect(() => {
    fetch('wineData.json')
      .then((response) => response.json())
      .then((wineData) => {
        setData(wineData);
      })
      .catch((error) => console.error('Error loading data: ', error));
  }, []);

  return (
    <div className="App">

      <header className="App-header">
        <div className="topnav">
          <div className="header">
            <h1>Data Visualization</h1>
          </div>
        </div>
      </header>
      <div style={{ margin: "70px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FlavanoidsStatistics data={data} />

      </div>
      <div style={{ margin: "70px", display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        <GammaStatisticsTable data={data} />

      </div>


    </div>
  );
}

export default App;
