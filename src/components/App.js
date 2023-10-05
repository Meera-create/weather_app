
import ForecastSummaries from './ForecastSummaries';
import LocationDetails from './LocationDetails';
import React, {useState} from 'react'
import '../styles/App.css'
import ForecastDetails from './ForecastDetails';


const App = ({forecasts, location}) =>{
  const[selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find(forecast=>forecast.date===selectedDate);

  return (
    <div className="weather-app">
     <LocationDetails city={location.city} country={location.country}/>
     <ForecastSummaries forecasts={forecasts}/>
     <ForecastDetails forecast={forecasts[0]}/>
    </div>
  );
};


export default App;
