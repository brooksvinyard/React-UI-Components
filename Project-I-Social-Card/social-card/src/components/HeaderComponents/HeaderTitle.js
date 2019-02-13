import React from 'react';
import './Header.css';
import moment from 'moment';

let day = moment().format("DD MMM");

function HeaderTitle() {
    return (
        <div className="header-title">
            <div className="title">Lambda School</div>
            <div className="handle">@LambdaSchool - {day}</div> 
        </div>
    );
}


export default HeaderTitle;