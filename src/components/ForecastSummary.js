import React from "react";
import iconData from '../data/iconData.json'

const weatherCode = iconData.slice(0,1) + "00"

function ForecastSummary(props){

    const{
        date,
        description,
        icon,
        temperature
    }=props;

    return (
    <div className='forecast-summary' data-testid='forecast-summary'>
        <div className='forecast-summary_date'>
        {date}
        </div>
        
        <div className='forecast-summary_description'>
        {description}
        </div>
        
        <div className='forecast-summary_icon' data-testid='forecast-icon'>
            <img src={iconData[weatherapp]}/>
            </div>
        
        <div className='forecast-summary_temperature'>
            {temperature.max}
            &deg;C
        </div>
    </div>
    );
};


export default ForecastSummary