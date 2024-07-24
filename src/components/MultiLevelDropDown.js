import React, { useState } from 'react';
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Button,
  FormHelperText,
  Box,
  Typography
} from '@mui/material';

// Sample data for countries, states, and cities
const data = {
  countries: {
    USA: ['California', 'Florida', 'Texas'],
    Canada: ['Ontario', 'Telangana', 'TamilNadu'],
    India: ['AndhraPradesh', 'Westbengal','Karnataka']
  },
  states: {
    California: ['Los Angeles', 'San Francisco', 'San Diego'],
    Florida: ['Miami', 'Orlando', 'Tampa'],
    Texas: ['Houston', 'Austin', 'Dallas'],
    Ontario: ['JerseyCity', 'Newyork', 'Colorado'],
    Telangana: ['Hyderabad', 'Gujarat', 'Bengal'],
    TamilNadu: ['Chennai', 'Madras', 'Nellore'],
    AndhraPradesh: ['Guntur', 'Vijayawada','Goa'],
    Westbengal: ['Kolkata', 'Paris', 'Scottland'],
    Karnataka:['Bangalore', 'Mumbai']
  }
};

const MultilevelDropdown = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [errors, setErrors] = useState({ country: false, state: false, city: false });
  const [submittedData, setSubmittedData] = useState('');

  // Handle country change
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    setState('');
    setCity('');
    setErrors({ ...errors, country: false });
  };

  // Handle state change
  const handleStateChange = (event) => {
    setState(event.target.value);
    setCity('');
    setErrors({ ...errors, state: false });
  };

  // Handle city change
  const handleCityChange = (event) => {
    setCity(event.target.value);
    setErrors({ ...errors, city: false });
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!country || !state || !city) {
      setErrors({
        country: !country,
        state: !state,
        city: !city
      });
      return;
    }
    // Submit logic
    setSubmittedData({
        country,
        state,
        city
    })
    
  };

  return (
    <Box p={2}>
      {/* Country Dropdown */}
      <FormControl error={errors.country}>
        <InputLabel>Country</InputLabel>
        <Select value={country} onChange={handleCountryChange}>
          {Object.keys(data.countries).map((country) => (
            <MenuItem key={country} value={country}>
              {country}
            </MenuItem>
          ))}
        </Select>
        {errors.country && <FormHelperText>Please select a country</FormHelperText>}
      </FormControl>

      {/* State Dropdown */}
      {country && (
        <FormControl error={errors.state}>
          <InputLabel>State</InputLabel>
          <Select value={state} onChange={handleStateChange}>
            {data.countries[country].map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
          {errors.state && <FormHelperText>Please select a state</FormHelperText>}
        </FormControl>
      )}

      {/* City Dropdown  */}
      {state && (
        <FormControl error={errors.city}>
          <InputLabel>City</InputLabel>
          <Select value={city} onChange={handleCityChange}>
            {data.states[state].map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
          {errors.city && <FormHelperText>Please select a city</FormHelperText>}
        </FormControl>
      )}

      {/* Submit Button */}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>

      {/*Submitted Data */}
      {submittedData && (
        <Typography variant = 'h6'>
            You have selected Country :{submittedData.country} , state: {submittedData.state} and city: {submittedData.city}
              </Typography>

      )}
    </Box>
  );
};

export default MultilevelDropdown;
