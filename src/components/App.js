
import ForecastSummaries from './ForecastSummaries';
import LocationDetails from './LocationDetails';
import React from 'react'
import '../styles/App.css'
import ForecastDetails from './ForecastDetails';


function App(props) {
  const {forecasts, location} = props
  return (
    <div className="weather-app">
     <LocationDetails city={location.city} country={location.country}/>
     <ForecastSummaries forecasts={forecasts}/>
     <ForecastDetails forecast={forecasts[0]}/>
    </div>
  );
};

export default App;
