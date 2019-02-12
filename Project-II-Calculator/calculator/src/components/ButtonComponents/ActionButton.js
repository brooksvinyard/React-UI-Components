import React from 'react';
import './Button.css';

const ActionButton = props => {
    return <button className={props.buttonProp.buttonStyle}>{props.buttonProp.text}</button>;
  };

export default ActionButton;