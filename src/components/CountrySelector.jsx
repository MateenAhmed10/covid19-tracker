import React from 'react';
import {FormControl, InputLabel, Select, MenuItem, Container} from '@mui/material'
import { useEffect } from 'react';
import { fetchCountries } from '../api/api';
import { useState } from 'react';

const CountrySelector = ({ handleChange }) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const getCountry = async () => {
            const data = await fetchCountries();
            setCountries(data)
        }
        getCountry();
    }, [setCountries]);

    return (
        <Container maxWidth="fluid" className="form__select">
            <FormControl sx={{ minWidth: 230}}>
                <InputLabel>Select Country</InputLabel>
                <Select
                    defaultValue=""
                    label="country"
                    onChange={(e) => handleChange(e.target.value)}
                >
                    <MenuItem value="">WorldWide</MenuItem>
                    {
                        countries.map((country, i) => (
                            <MenuItem key={i} value={country.iso}>
                                {country.name}
                            </MenuItem>
                        ))    
                    }
                </Select>
            </FormControl>
        </Container>
  );
}

export default CountrySelector;