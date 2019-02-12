import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton'

const One = {
  text: '1',
  buttonStyle: 'number one'
};

const Two = {
  text: '2',
  buttonStyle: 'number two'
};

const Three = {
  text: '3',
  buttonStyle: 'number three'
};

const Four = {
  text: '4',
  buttonStyle: 'number four'
};

const Five = {
  text: '5',
  buttonStyle: 'number five'
};

const Six = {
  text: '6',
  buttonStyle: 'number six'
};

const Seven = {
  text: '7',
  buttonStyle: 'number seven'
};

const Eight = {
  text: '8',
  buttonStyle: 'number eight'
};

const Nine = {
  text: '9',
  buttonStyle: 'number nine'
};

const Zero = {
  text: '0',
  buttonStyle: 'number zero'
};

const Clear = {
  text: 'clear',
  buttonStyle: 'clear'
};

const Divide = {
  text: '\u00F7',
  buttonStyle: 'action'
};

const Multiply = {
  text: '\u00D7',
  buttonStyle: 'action'
};

const Subtract = {
  text: '\u2212',
  buttonStyle: 'action'
};

const Add = {
  text: '+',
  buttonStyle: 'action'
};

const Equal = {
  text: '=',
  buttonStyle: 'action'
};

const App = () => {
  return (
    <div className="calculator">
      <div className="calc-top">
        <CalculatorDisplay />
      </div>

      <div className = "calc-bottom">
        <div className="bottom-left">
          <ActionButton buttonProp={Clear}/>
          <div className = "number-buttons">
            <NumberButton buttonProp={One}/>
            <NumberButton buttonProp={Two}/>
            <NumberButton buttonProp={Three}/>
            <NumberButton buttonProp={Four}/>
            <NumberButton buttonProp={Five}/>
            <NumberButton buttonProp={Six}/>
            <NumberButton buttonProp={Seven}/>
            <NumberButton buttonProp={Eight}/>
            <NumberButton buttonProp={Nine}/>
            <ActionButton buttonProp={Zero}/>
          </div>
        </div>
        <div className = "action-buttons">
          <ActionButton buttonProp={Divide}/>
          <ActionButton buttonProp={Multiply}/>
          <ActionButton buttonProp={Subtract}/>
          <ActionButton buttonProp={Add}/>
          <ActionButton buttonProp={Equal}/>
        </div>
      </div>
    </div>
  );
  
};

export default App;