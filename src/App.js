import React, { useEffect, useState } from 'react'
import { fetchData } from './api/api';
import './App.css'
import Cards from './components/Cards';
import CovidChart from './components/CovidChart';
import CountrySelector from './components/CountrySelector';
import Header from './components/Header';

function App() {
    const [data, setData] = useState([]);
    const [country, setCountry] = useState("");

    useEffect(() => {
        const fetchingData = async () => {
            const data = await fetchData();
            setData(data);
         };
        fetchingData();
    }, [setData])

    const handleChange = async (country) => {
        const data = await fetchData(country);
        setData(data);
        setCountry(country);
    }

    return (
        
        <div className='App'>
            <Header />
            <Cards data={data} />
            <CountrySelector handleChange={handleChange} />
            <CovidChart data={data} country={country } />
        </div>
    );
}

export default App;