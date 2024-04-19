import Weather from './Weather.js';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultCity='Paris'/>
        <footer>
          This project was coded by {''}
          <a href='https://debbiefevlo-portfolio.netlify.app/' target='_blank' rel='noopener noreferrer'>Fvelo Deborah</a>, {''}
          {''}
           <a
            href="https://github.com/Debfevlo/my-weather-react-app"
            target="_blank"
            rel='noreferrer'
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://playful-kashata-bf3ba9.netlify.app/"
            target="_blank"
            rel='noreferrer'
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
      
    </div>
  );
}


