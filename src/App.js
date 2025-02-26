import './App.css';
import { useState } from 'react';

import Ather from './moduls/ather/ather';
import Form from './moduls/form/Form';
import Shower from './moduls/ShowerContainer/Shower';

function App() {
  const Api_Key = '61606e0ad20e401ce287c4c60afb0a7e';

  const [statee, setStatee] = useState({
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error:' Enter the name of the place'
  });

  const geatingWeater = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value.trim();

    if (!city) {
      alert('Place name not entered');
      setStatee({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: 'enter the name of the place'
      });
      return;
    }

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`);
      const data = await response.json();

      if (data.cod !== 200) {
        throw new Error(data.message);
      }

      const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();


      setStatee({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset,
        error: undefined
      });
      
    } catch (error) {
      alert('Pardon of tributes: ' + error.message);
      setStatee({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: 'I didn’t get around to removing the tributes'
      });
    }
  };

  return (
    <>
      <Ather />
      <Form geatingWeater={geatingWeater} />
      <Shower statee={statee} />
    </>
  );
}

export default App;
