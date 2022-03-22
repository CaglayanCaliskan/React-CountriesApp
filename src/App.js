import './App.css';
import React, {useState, useEffect} from 'react';
import Countries from './components/Countries';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Country from './components/Country';
import Header from './components/Header';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    console.log(data);
    setCountries(data);
  };

  return (
    <Router>
      <Link to={`/`}>
        <Header />
      </Link>
      <Routes>
        <Route path='/' element={<Countries data={countries} />} />
        <Route path='/country/:code' element={<Country data={countries} />} />
      </Routes>
    </Router>
  );
}

export default App;
