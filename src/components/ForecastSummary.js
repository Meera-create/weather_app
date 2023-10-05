import React from "react";
import iconData from '../data/iconData.json'



function ForecastSummary(props){

    const{
        date,
        description,
        icon,
        temperature
    }=props;
    //console.log(props,"heeeeloooJGHGJHGJH")




    const weatherCode = icon.slice(0,1) + "00";
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
            <img src={iconData[weatherCode]}/>
            </div>
        
        <div className='forecast-summary_temperature'>
            {temperature.max}
            &deg;C
        </div>
        <button type="button" onClick={()=> onselect(date)}>More Details</button>
    </div>
    );
};


export default ForecastSummary