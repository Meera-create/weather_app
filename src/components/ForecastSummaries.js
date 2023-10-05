import React from 'react';
import ForecastSummary from './ForecastSummary';
import '../styles/ForecastSummaries.css'


function ForecastSummaries({forecasts, onForecastSelect}){
    //console.log(forecasts,"EFJNFNJKESNFJKS")
    return (
        <div className="forecast-summaries">
        {forecasts.map(forecast => (
            <ForecastSummary
            key={forecast.date}
            date={forecast.date}
            description={forecast.description}
            icon={forecast.icon}
            onSelect={onForecastSelect}
            temperature={forecast.temperature}
            />

        ))}
        </div>
       
    );
};

export default ForecastSummaries;