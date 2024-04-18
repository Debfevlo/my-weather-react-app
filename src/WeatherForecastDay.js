import React from 'react';

export default function WeatherForecastDay(props){
    function day(){
        let date = new Date(props.dayforecast.time * 1000)
        let day = date.getDate();

        let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

        return day;
    }
    return(
        <div>
        <div className='WeatherForecast-day'>{day()}</div>

                     <img src={props.dayforecast.condition.icon_url} alt={props.dayforecast.condition.icon} className='IconImage mb-4'/>
                     
                    <div className='WeatherForecast-temperature'>
                    <span className='WeatherForecast-temperature-max'>
                        {Math.round(props.dayforecast.temperature.maximum)}
                    </span>
                        
                    <span className='WeatherForecast-temperature-min'>
                        {Math.round(props.dayforecast.temperature.minimum)}
                    </span>
                    </div> 
        </div>
    )
}