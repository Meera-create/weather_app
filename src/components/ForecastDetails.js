import React from "react";


const ForecastDetails = (props) => {
    const { forecast } = props;
    
      
    const { date, humidity, wind, temperature } = forecast;
    

    const formattedDate=new Date(date).toDateString();
    const {min ,max} = temperature
    const{speed,direction} = wind
   
    return(
        <div className="forecast-details" data-testid="forecast-details">
            <div className="forecast-details_date">
                <h3>Selected date:</h3>
                {formattedDate}
            </div>


            <div className="forecast-details_humidity">
                <h3>Humidity:</h3>
                {humidity}
            </div>
            <div className="forecast-details_direction">
                <h3>Wind direction:</h3>
                {direction}
            </div>
            <div className="forecast-details_windspeed">
                <h3>Wind speed:</h3>
                {speed}
            </div>
            <div className="forecast-details_temperature_min">
                <h3>Min Temperature</h3>
                {min} 
                &deg;C
                <h3>C</h3>
                
            </div>
            <div className="forecast-details_temperature_max">
                <h3>Max Temperature</h3>
                {max} 
                &deg;C
                <h3>C</h3>
                
            </div>
          

        </div>
    )
};


export default ForecastDetails;