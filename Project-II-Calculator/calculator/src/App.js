import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'
import ClearButton from './components/ButtonComponents/ClearButton'

const App = () => {
  return (
    <div className="calculator">
      <div className="calc-top">
        <CalculatorDisplay />
      </div>

      <div className = "calc-bottom">
        <div className="bottom-left">
          <ClearButton />
          <NumberButton />
        </div>
        <ActionButton />
      </div>
    </div>
  );
  
};

export default App;
