import React from 'react';
import './Button.css';

function ActionButton () {
    return (
        <div className = "action-buttons">
            <div className="action divide">/</div>
            <div className="action multiply">*</div>
            <div className="action subtract">-</div>
            <div className="action add">+</div>
            <div className="action equal">=</div>
        </div>
    );
}

export default ActionButton;