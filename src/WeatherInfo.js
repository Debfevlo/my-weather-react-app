import React from 'react';
import SearchingDate from './SearchingDate';

export default function WeatherInfo(props){
    return(
            <div className='weatherInfo'>
            <h1>{props.data.city}</h1>

            <ul>
            <li> < SearchingDate date={props.data.date}/> </li>
            <li>{props.data.descriptions}</li>
            </ul>

            <div className='row mt-4'>
                <div className='col-6'>
                    
                    <img src={props.data.icon_urls} alt={props.data.descriptions} className='mb-4'/>
                   

                
                   <span className='temperature'>{Math.round(props.data.temperature)}</span>
                   <span className='unit'>°C</span> 
                </div>
                
                

                <div className='col-6'>
                    <ul>
                        
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Windy: {props.data.wind}km/h</li>
                    </ul>
                </div>
            </div>
            </div>
    )
}