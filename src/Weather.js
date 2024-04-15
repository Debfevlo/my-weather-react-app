import React from 'react';
import './Weather.css'

export default function Weather(){
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
                    input='submit' 
                    value='Search' 
                    className='btn btn-primary w-100'/>
                    </div>
                </div>
            </form>

            <h1>New York</h1>

            <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
            </ul>

            <div className='row mt-4'>
                <div className='col-6'>
                    
                   
                    <img src='https://ssl.gstatic.com/onebox/weather/64/sunny.png' alt='Sunny' className='mb-4'/>

                
                   <span className='temperature'>16</span>
                   <span className='unit'>°C</span> 
                </div>
                
                

                <div className='col-6'>
                    <ul>
                        <li>Precipitation: 2%</li>
                        <li>Humidity: 78%</li>
                        <li>Windy: 8km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}