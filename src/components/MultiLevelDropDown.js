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

// creating the data for selecting countries and when the country is selected the states bounded to the specific country are loaded. 
// Based up on the state selected the cities bounded to the specific state are loaded.
// hence this is the data for selecting states, countries and cities
const data = {
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

//Adding a prop (onAddressChange) to the multilevel dropdown as it informs the changes to the parent component 
//our requirement- to show this data in the address field so this prop is used
const MultilevelDropdown = ({onAddressChange}) => { 
  const [countries, setCountries] = useState([]); //holds an aray of countries that are defined in the data
  const [states, setStates] = useState([]); //holds the list of states based on selected country and it is cleared and updated based on selected country
  const [cities, setCities] = useState([]); //holds the list of cities based on selected state and it is cleared and updated based on selected state
  
  const [selectedCountry, setSelectedCountry] = useState(''); //holds currently selected country. If the user changes the country it triggers and updates state and city dropdown
  const [selectedState, setSelectedState] = useState(''); //holds currently selected state. If the user changes the state it triggers and updates city dropdown
  const [selectedCity, setSelectedCity] = useState(''); //holds currently selected city. If the user changes the city it triggers and shows the final selection in the submitted data
  
  const [errors, setErrors] = useState({ country: false, state: false, city: false }); // validation errors it throws the error if user is not selected any of the dropdown
  const [submittedData, setSubmittedData] = useState(''); //stores the submitted data 

 
  //useEffect is used for fetching of the data
  useEffect(() => {  //a callback function that is used for fetching the data and handling of events
    setCountries(Object.keys(data.countries));
    // object.keys returns the array of keys from data.countries from the countries list
    // setCountries - created by useState hook for the updating the state with array of countries names
  }, []); // empty dependency array runs only once after initial render of the components
 //Initial State:No country, state, or city is selected. 
  useEffect(() => {
    if (selectedCountry) {   //country is selected it retrieves the list of states from the selected country
      setStates(data.countries[selectedCountry]);
    } else {
      setStates([]); //no states are available when no country is selected
    }
    setSelectedState(''); //Resets the selectedState to an empty string.
    //When the country changes, the previously selected state might not be relevant anymore. This ensures the state dropdown is cleared whenever the country changes.
    setSelectedCity(''); // Resets the selectedCity to an empty string.
    // When the state changes, the previously selected city might not be relevant anymore. This ensures the city dropdown is cleared whenever the state changes.
  }, [selectedCountry]); //checks for whether the user changes the country or not

  useEffect(() => {  // manage the cities based on state selection
    if (selectedState) {  // checks whether state is selected or not. if selected it renders the next line
      setCities(data.states[selectedState]); //state which is selected it retrives the list of cities from the selected state
    } else {
      setCities([]); //no cities are available when no state is selected
    }
    setSelectedCity(''); //Resets the selectedCity to an empty string
    // When the state changes, the previously selected city might not be relevant anymore. This ensures the city dropdown is cleared whenever the state changes.
  }, [selectedState]); // checks for whether the user changes the state or not.

  useEffect(() => {
    //the country, state and city which are selected needs to filter by boolean as it verifies whether the value is truthy or falsy
    //join method is used as the data generated needs to be separated by, and it shows all the address in a single line 
    const newAddress = [selectedCountry, selectedState, selectedCity].filter(Boolean).join(', '); 
    onAddressChange(newAddress); //allows the parent component to receive and updates the address
  }, [selectedCountry, selectedState, selectedCity, onAddressChange]);//it will run if any of these values have been changed

  const handleCountryChange = (event) => {  // event parameter represents event object passes a function when user interacts with the dropdown contains information about change events such as new value of the dropdown
    setSelectedCountry(event.target.value) //event.target.value: retrives the value of the selected option by updating the state variable selectedCountry
    
  }

  const handleStateChange = (event) => {
    setSelectedState(event.target.value)//event.target.value: retrives the value of the selected option by updating the state variable selectedState
    
  }

  const handleCityChange = (event) => {
     setSelectedCity(event.target.value)//event.target.value: retrives the value of the selected option by updating the state variable selectedCity
    

  }

  const handleSubmit = () => {  //combines validation and data handling
    if (!selectedCountry || !selectedState || !selectedCity) { //checks any of the fields are empty if it's there the user has not fill the form completely
      setErrors({
        country: !selectedCountry, //if it is empty it shows true
        state: !selectedState,
        city: !selectedCity
      });
      return;
    }
    
    setSubmittedData({  //if all fields are completed, setSubmittedData is used to update the variable submittedData
      country: selectedCountry,
      state: selectedState,
      city: selectedCity
    });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={2}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2} width={300}> {/*Box button for 3dropdown containers*/}
        
        {/* Country Dropdown */}
        <FormControl error={errors.country} fullWidth> {/*provides an error if errors.country is true*/}
          <InputLabel htmlFor="country">Country</InputLabel> {/*attribute which links with select*/}
          <Select 
            id="country" //sets the id which is linked to the htmlFor input label
            value={selectedCountry} //controls the selected value in the dropdown
            aria-label='country' //accessible name for screen readers
            onChange={handleCountryChange}//handle the changes whenever the user selects different options it updates the state
          >
            <MenuItem value="" disabled>Select a Country</MenuItem>{/*empty string indicates a placeholder*/}
            {countries.map((country) => (  //map over the countries array and provides each country in the menu item
              <MenuItem key={country} value={country}>{/*key for which items added or removed, value: sets the value in the menuitem*/}
                {country} {/*displays the country name in the dropdown*/}
              </MenuItem>
            ))}
          </Select>
          {errors.country && <FormHelperText>Please select a country</FormHelperText>} {/*if errors.country is true it provides an error with please select a countyr*/}
        </FormControl>

        {/* State Dropdown */}
        <FormControl error={errors.state} fullWidth> {/*provides an error if errors.state is true*/}
          <InputLabel htmlFor='state'>State</InputLabel> {/*attribute which links with select*/}
          <Select 
            id="state" //sets the id which is linked to the htmlFor input label
            value={selectedState} //controls the selected value in the dropdown
            aria-label="state" //accessible name for screen readers
            onChange={handleStateChange} //handle the changes whenever the user selects different options it updates the state
            disabled={!selectedCountry} //disables the dropdown if no country is selected
          >
            <MenuItem value="" disabled>Select a State</MenuItem>{/*empty string indicates a placeholder*/}
            {states.map((state) => ( //map over the states array and provides each state in the menu item
              <MenuItem key={state} value={state}>{/*key for which items added or removed, value: sets the value in the menuitem*/}
                {state} {/*displays the state name in the dropdown*/}
              </MenuItem>
            ))}
          </Select>
          {errors.state && <FormHelperText>Please select a state</FormHelperText>}{/*if errors.state is true it provides an error with please select a state*/}
        </FormControl>

        {/* City Dropdown */}
        <FormControl error={errors.city} fullWidth>{/*provides an error if errors.city is true*/}
          <InputLabel htmlFor='city'>City</InputLabel>{/*attribute which links with select*/}
          <Select 
            id="city" //sets the id which is linked to the htmlFor input label
            value={selectedCity} //controls the selected value in the dropdown
            aria-label="city" //accessible name for screen readers
            onChange={handleCityChange} //handle the changes whenever the user selects different options it updates the state
            disabled={!selectedState} //disables the dropdown if no state is selected
          >
            <MenuItem value="" disabled>Select a City</MenuItem>{/*empty string indicates a placeholder*/}
            {cities.map((city) => ( //map over the cities array and provides each city in the menu item
              <MenuItem key={city} value={city}>{/*key for which items added or removed, value: sets the value in the menuitem*/}
                {city} {/*displays the city name in the dropdown*/}
              </MenuItem>
            ))}
          </Select>
          {errors.city && <FormHelperText>Please select a city</FormHelperText>}{/*if errors.city is true it provides an error with please select a city*/}
        </FormControl>
      </Box>

      {/* Submit Button */}
      <Box mt={2}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSubmit} //event handler contains the logic to validate and submit the form
          disabled={!selectedCountry || !selectedState || !selectedCity} //disables the button if anyone of the dropdowns are not selected
        >
          Submit
        </Button>
      </Box>

      {/* Error Message */}
      {(!selectedCountry || !selectedState || !selectedCity) && ( //if any of these conditions are true the following code exists
        <Box mt={2}>{/* provides spacinga and layout for error message*/}
          <Typography variant="body1" color="error">
            Please select all the fields
          </Typography>
        </Box>
      )}

      {/* Submitted Data */}
      {submittedData && ( //if the submitted data is not empty the following code will be rendered
        <Box mt={2}>
          <Typography variant='h6'>
            You have selected Country: {submittedData.country}, State: {submittedData.state}, and City: {submittedData.city} {/*displays the submitted data text*/}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default MultilevelDropdown;
