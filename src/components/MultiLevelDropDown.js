import React, { useState, useEffect } from 'react';
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
const staticData = {
  countries: {
    USA: ['California', 'Florida', 'Texas'],
    Canada: ['Ontario', 'Telangana', 'TamilNadu'],
    India: ['AndhraPradesh', 'Westbengal', 'Karnataka']
  },
  states: {
    California: ['Los Angeles', 'San Francisco', 'San Diego'],
    Florida: ['Miami', 'Orlando', 'Tampa'],
    Texas: ['Houston', 'Austin', 'Dallas'],
    Ontario: ['JerseyCity', 'Newyork', 'Colorado'],
    Telangana: ['Hyderabad', 'Gujarat', 'Bengal'],
    TamilNadu: ['Chennai', 'Madras', 'Nellore'],
    AndhraPradesh: ['Guntur', 'Vijayawada', 'Goa'],
    Westbengal: ['Kolkata', 'Paris', 'Scottland'],
    Karnataka: ['Bangalore', 'Mumbai']
  }
};

const MultilevelDropdown = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  
  const [errors, setErrors] = useState({ country: false, state: false, city: false });
  const [submittedData, setSubmittedData] = useState('');

  useEffect(() => {
    // Set static countries data
    setCountries(Object.keys(staticData.countries));
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      setStates(staticData.countries[selectedCountry]);
    } else {
      setStates([]);
    }
    setSelectedState('');
    setSelectedCity('');
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      setCities(staticData.states[selectedState]);
    } else {
      setCities([]);
    }
    setSelectedCity('');
  }, [selectedState]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value)
  }

  const handleStateChange = (event) => {
    setSelectedState(event.target.value)
  }

  const handleCityChange = (event) => {
     setSelectedCity(event.target.value)
  }
  
  const handleSubmit = () => {
    if (!selectedCountry || !selectedState || !selectedCity) {
      setErrors({
        country: !selectedCountry,
        state: !selectedState,
        city: !selectedCity
      });
      return;
    }
    // Submit logic
    setSubmittedData({
      country: selectedCountry,
      state: selectedState,
      city: selectedCity
    });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={2}>
      {/* Dropdown Container */}
      <Box display="flex" flexDirection="column" alignItems="center" gap={2} width={300}>
        
        {/* Country Dropdown */}
        <FormControl error={errors.country} fullWidth>
          <InputLabel htmlFor="country">Country</InputLabel>
          <Select 
            id="country" 
            value={selectedCountry} 
            aria-label='country' 
            onChange={handleCountryChange}
          >
            <MenuItem value="" disabled>Select a Country</MenuItem>
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
          {errors.country && <FormHelperText>Please select a country</FormHelperText>}
        </FormControl>

        {/* State Dropdown */}
        <FormControl error={errors.state} fullWidth>
          <InputLabel htmlFor='state'>State</InputLabel>
          <Select 
            id="state" 
            value={selectedState} 
            aria-label="state" 
            onChange={handleStateChange}
            disabled={!selectedCountry}
          >
            <MenuItem value="" disabled>Select a State</MenuItem>
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
          {errors.state && <FormHelperText>Please select a state</FormHelperText>}
        </FormControl>

        {/* City Dropdown */}
        <FormControl error={errors.city} fullWidth>
          <InputLabel htmlFor='city'>City</InputLabel>
          <Select 
            id="city" 
            value={selectedCity} 
            aria-label="city" 
            onChange={handleCityChange}
            disabled={!selectedState}
          >
            <MenuItem value="" disabled>Select a City</MenuItem>
            {cities.map((city) => (
              <MenuItem key={city} value={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
          {errors.city && <FormHelperText>Please select a city</FormHelperText>}
        </FormControl>
      </Box>

      {/* Submit Button */}
      <Box mt={2}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSubmit}
          disabled={!selectedCountry || !selectedState || !selectedCity}
        >
          Submit
        </Button>
      </Box>

      {/* Error Message */}
      {(!selectedCountry || !selectedState || !selectedCity) && (
        <Box mt={2}>
          <Typography variant="body1" color="error">
            Please select all the fields
          </Typography>
        </Box>
      )}

      {/* Submitted Data */}
      {submittedData && (
        <Box mt={2}>
          <Typography variant='h6'>
            You have selected Country: {submittedData.country}, State: {submittedData.state}, and City: {submittedData.city}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default MultilevelDropdown;
