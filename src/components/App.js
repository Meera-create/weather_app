
import ForecastSummaries from './ForecastSummaries';
import LocationDetails from './LocationDetails';
import React from 'react'
import '../styles/App.css'


function App(props) {
  const {forecasts, location} = props
  return (
    <div className="weather-app">
     <LocationDetails city={location.city} country={location.country}/>
     <ForecastSummaries forecasts={forecasts}/>
    </div>
  );
};

export default App;
