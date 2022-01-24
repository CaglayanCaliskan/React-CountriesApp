import './App.css';
import React, { useState, useEffect } from 'react';
import Countries from './components/Countries';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import Country from './components/Country';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .then((res) => setCountries(res));
  }, []);

  return (
    <Router>
      <header>
        <h1>COUNTRIES</h1>
      </header>
      <Routes>
        <Route path='/' element={<Countries data={countries} />} />
        <Route path='/country/:code' element={<Country data={countries} />} />
      </Routes>
    </Router>
  );
}

export default App;
