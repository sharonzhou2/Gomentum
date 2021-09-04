import './App.css';
import Hero from './components/Hero';
import Weather from './components/Weather';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';

const API_KEY = "26ec0e1f226d6c36a169f0149812be3e"

function App() {
  // const generateRandomNumber = () => {
  //   const random = Math.floor(Math.random() * 2000);
  //   return random;
  // }
  const [name, setName] = useState('');
  const [quotes, setQuotes] = useState('');
  const [weather, setWeather] = useState(
    JSON.stringify(
      {
        "coord": {
          "lon": -122.08,
          "lat": 37.39
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 282.55,
          "feels_like": 281.86,
          "temp_min": 280.37,
          "temp_max": 284.26,
          "pressure": 1023,
          "humidity": 100
        },
        "visibility": 16093,
        "wind": {
          "speed": 1.5,
          "deg": 350
        },
        "clouds": {
          "all": 1
        },
        "dt": 1560350645,
        "sys": {
          "type": 1,
          "id": 5122,
          "message": 0.0139,
          "country": "US",
          "sunrise": 1560343627,
          "sunset": 1560396563
        },
        "timezone": -25200,
        "id": 420006353,
        "name": "Mountain View",
        "cod": 200
        }                 
    )
   

  )
  useEffect(() => {
    fetchQuote();
    fetchWeather("Sydney");
    getNameLocalStorage()

  }, [])
  const fetchWeather = async (city) => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`);
    if (handleRequests(res)) {
      return 1;
    }
    const weather = await res.json();
    setWeather(JSON.stringify(weather))
  }

  const handleRequests = (res) => {
    // let response = JSON.parse(res);
    if (res.status !== 200) {
      alert("City not found");
      return 1;
    }
    return 0;
  }

  const changeCity = (city) => {
    console.log("changing")
    if (fetchWeather(city)) {
      return;
    }

  }

  const fetchQuote = async () => {
    const res = await fetch('https://api.quotable.io/random');
    const data = await res.json();
    console.log(data);
    setQuotes(data);
  }

  const getNameLocalStorage = () => {
    const localName = localStorage.getItem('name');
    console.log(`${localName} NAME`);
    if (localName !== null) {
      setName(localName);
      
    } 
  }


  return (
    <div className="App" >
      

      <Hero quotes={quotes} name={name} onSetName={setName}></Hero>
      <Weather weather={JSON.parse(weather)} onChangeCity={changeCity}></Weather>
      <Footer></Footer>
    </div>
  );
}

export default App;
