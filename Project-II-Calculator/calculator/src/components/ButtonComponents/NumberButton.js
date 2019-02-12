import React from 'react';
import './Button.css';

function NumberButton () {
    return (
        <div className = "number-buttons">
            <div className="number one">1</div>
            <div className="number two">2</div>
            <div className="number three">3</div>
            <div className="number four">4</div>
            <div className="number five">5</div>
            <div className="number six">6</div>
            <div className="number seven">7</div>
            <div className="number eight">8</div>
            <div className="number nine">9</div>
            <div className="number zero">0</div>
        </div>
    );
}

export default NumberButton;