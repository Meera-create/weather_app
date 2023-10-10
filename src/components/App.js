
import ForecastSummaries from './ForecastSummaries';
import LocationDetails from './LocationDetails';
import React, {useEffect, useState} from 'react'
import '../styles/App.css'
import ForecastDetails from './ForecastDetails';
import axios from 'axios';
import getForecast from './getForecast';

const App = () =>{
  const[selectedDate, setSelectedDate] = useState(0);
  const [forecasts,setForecasts]=useState([]);
  const [location, setLocation] = useState({city:"",country:""});

  //const {city, country} = location
  
  const selectedForecast = forecasts.find(forecast=>forecast.date===selectedDate);

  const handleForecastSelect=(date)=>{
    setSelectedDate(date)
  };

  useEffect(()=>{
    getForecast(setSelectedDate,setForecasts,setLocation);
  },[]);


  return (
    <div className="weather-app">
     <LocationDetails city={location.city} country={location.country}/>
     <ForecastSummaries 
     forecasts={forecasts}
     onForecastSelect={handleForecastSelect}
     />
     {selectedForecast && <ForecastDetails forecast={selectedForecast}/>}
    </div>
  );
};

export default App;

