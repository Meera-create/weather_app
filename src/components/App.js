
import ForecastSummaries from './ForecastSummaries';
import LocationDetails from './LocationDetails';
import React, {useState, useEffect} from 'react'
import '../styles/App.css'
import ForecastDetails from './ForecastDetails';
import getForecast from '../requests/getForecast';


const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" })
  const [selectedDate, setSelectedDate] = useState(0);


  const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

  const handleForecastSelect = (date) => {
    setSelectedDate(date)
  };

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

  return (
    <div className='weather-app'>
       <LocationDetails city={location.city} country={location.country}/>
    <ForecastSummaries 
     forecasts={forecasts}
     onForecastSelect={handleForecastSelect}
      />
      <h1>weather app!!!</h1>
    {selectedForecast && (<ForecastDetails forecast={selectedForecast}/>)}
     


    </div>
    
  )
}
  


//     <div className="weather-app">
//      <LocationDetails city={location.city} country={location.country}/>
//      <ForecastSummaries 
//      forecasts={forecasts}
//      onForecastSelect={handleForecastSelect}
//       />
//       <h1>weather app!!!</h1>
//      {selectedForecast && (<ForecastDetails forecast={selectedForecast}/>)}
//     </div>
//   );
// };

  export default App;