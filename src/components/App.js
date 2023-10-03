
import ForecastSummaries from './ForecastSummaries';
import LocationDetails from './LocationDetails';
import React from 'react'



function App(props) {
  const {forecasts, location} = props
  return (
    <div className="forecast">
     <LocationDetails city={location.city} country={location.country}/>
     <ForecastSummaries forecasts={forecasts}/>
    </div>
  );
};

export default App;
