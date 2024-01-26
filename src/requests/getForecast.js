import axios from 'axios';


const getForecast=(setSelectedDate,setForecasts, setLocation)=>{
    const endPoint = "https://cmd-shift-weather-app.onrender.com/forecast";

    axios.get(endPoint).then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    });
  };

export default getForecast;