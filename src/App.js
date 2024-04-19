import Weather from './Weather.js';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultCity='Paris'/>
        <footer>
          This project was coded by {''}
          <a href='https://github.com/Debfevlo/my-weather-react-app' target='_blank' rel='noopener noreferrer'>Fvelo Deborah</a>{''}
          and is{''}
        </footer>
      </div>
      
    </div>
  );
}


