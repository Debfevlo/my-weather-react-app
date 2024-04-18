import React, {useState} from 'react';
import './WeatherForecast.css';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';


export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null)
    function handleResponse(response){
        setForecast(response.data.daily)
        setLoaded(true)
    }
    
    if(loaded){
        console.log(forecast)
        return(
        <div className='WeatherForecast'>
            <div className='row'>
                <div className='col'>

                    <WeatherForecastDay dayforecast={forecast[0]}/>
                </div>
            </div>
        </div>
    )

       
    }else{
         const apiKey = 'ff563b340abb1ee5o90065fc5t0af55d'
        const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query={query}&key=${apiKey}&units=metric `;
        axios.get(apiUrl).then(handleResponse)

        return 'Loading Forecast...';
    }
    
    }