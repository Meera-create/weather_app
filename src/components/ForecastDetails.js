import React from "react";


const ForecastDetails = (props) => {
    const { forecast } = props;
    
      
    const { date, humidity, wind, temperature } = forecast;
    

    const formattedDate=new Date(date).toDateString();
    const {min ,max} = temperature
    const{speed,direction} = wind
   
    return(
        <div className="forecast-details" data-testid="forecast-details">
            <div className="forecast-details_humidity">
                {humidity}
            </div>
            <div className="forecast-details_direction">
                {direction}
            </div>
            <div className="forecast-details_windspeed">
                {speed}
            </div>
            <div className="forecast-details_temperature_min">
                {min} 
                &deg;C
                
            </div>
            <div className="forecast-details_temperature_max">
                {max} 
                &deg;C
                
            </div>
            <div className="forecast-details_date">
                {formattedDate}
            </div>

        </div>
    )
};


export default ForecastDetails;