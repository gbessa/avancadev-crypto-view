import React, { useState } from 'react';
import './index.css';
import { Header } from '../Header';
import { Chart } from '../Chart';

function App() {
  const [coinSelected, setCoinSelected] = useState("BTC");
  return (
    <div className="App">
      <Header onSelected={(coin) => setCoinSelected(coin)}/>
      <Chart coin={coinSelected}/>
    </div>
  );
}

export default App;
