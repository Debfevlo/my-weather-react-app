import React, {useState} from 'react';
import WeatherInfo from './WeatherInfo';
import axios from 'axios';
import './Weather.css'


export default function Weather(props){
    const [ready, setReady] = useState(false);
    const [city, setCity] = useState(props.defaultCity)
    const [weatherData, setWeatherData] = useState({});
    function handleResponse(response){
        console.log(response.data);
        console.log(response.data.condition)
        setWeatherData(
            {
            temperature:response.data.temperature.current,
            humidity:response.data.temperature.humidity,
            city:response.data.city,
            date: new Date(response.data.time *1000),
            descriptions: response.data.condition.description,
            wind:response.data.wind.speed,
            icon_url:'https://ssl.gstatic.com/onebox/weather/64/cloudy.png',
         
            })

        setReady(true);
        
    }
    function Search(){
        let apiKey = 'ff563b340abb1ee5o90065fc5t0af55d';
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
            event.preventDefault()
            Search()
        }

    function handleCityChange(event){
        setCity(event.target.value)
    }

    if(ready){
        return(
        <div className='Weather'>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <div className='col-9'>
                    <input 
                    type='search' 
                    placeholder='Search for city...' 
                    className='form-control'
                    autoFocus='on'
                    onChange={handleCityChange}
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

            <WeatherInfo data={weatherData}/>

        </div>
    )
    }else{
        Search();
        return 'Loading ..'
    }
    

    
}