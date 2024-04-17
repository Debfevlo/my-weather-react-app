import React, {useState} from 'react';
import axios from 'axios';
import './Weather.css'


export default function Weather(props){
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    function handleResponse(response){
        console.log(response.data);
        console.log(response.data.condition)
        setWeatherData(
            {
            temperature:response.data.temperature.current,
            humidity:response.data.temperature.humidity,
            city:response.data.city,
            date:'Wednesday 07:00',
            descriptions: response.data.condition.description,
            wind:response.data.wind.speed,
            icon_url:'https://ssl.gstatic.com/onebox/weather/64/cloudy.png',
         
            })

        setReady(true);
        
    }
    if(ready){
        return(
        <div className='Weather'>
            <form>
                <div className='row'>
                    <div className='col-9'>
                    <input 
                    type='search' 
                    placeholder='Search for city...' 
                    className='form-control'
                    autoFocus='on'
                    />
                    </div>
                
                    <div className='col-3'>
                    <input 
                    type ='submit' 
                    value='Search' 
                    className='btn btn-primary w-100'
                    />
                    </div>
                </div>
            </form>

            <h1>{weatherData.city}</h1>

            <ul>
            <li>{weatherData.date}</li>
            <li>{weatherData.descriptions}</li>
            </ul>

            <div className='row mt-4'>
                <div className='col-6'>
                    
                   
                    <img src={weatherData.icon_url} alt={weatherData.descriptions} className='mb-4'/>

                
                   <span className='temperature'>{Math.round(weatherData.temperature)}</span>
                   <span className='unit'>°C</span> 
                </div>
                
                

                <div className='col-6'>
                    <ul>
                        
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Windy: {weatherData.wind}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
    }else{
        let apiKey = 'ff563b340abb1ee5o90065fc5t0af55d';
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
        return 'Loading ..'
    }
    

    
}