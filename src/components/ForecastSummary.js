import React from "react";
import iconData from '../data/iconData.json';
import '../styles/forecastSummary.css';



const ForecastSummary = (props) => {

    const {
        date,
        description,
        icon,
        temperature,
        onSelect
    } = props;
   




    const weatherCode = `${icon.slice(0, 1)}00`;

    const formattedDate=new Date(date).toDateString();

    return (
    <div className='forecast-summary' data-testid='forecast-summary'>
            <div className='forecast-summary_date'>
         
        {formattedDate}
        </div>
        
            <div className='forecast-summary_description'>
              
        {description}
        </div>
        
        <div className='forecast-summary_icon' data-testid='forecast-icon'>
            <img src={iconData[weatherCode]} alt="weather code"/>
            </div>
        
        <div className='forecast-summary_temperature'>
            {temperature.max}
            &deg;C
        </div>
        <button type="button" onClick={() => onSelect(date)}>More Details</button>
    </div>
    );
};


export default ForecastSummary
