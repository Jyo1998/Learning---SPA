import React, {useState} from "react";
import { TextField, Button, Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, InputLabel,
    MenuItem, Select
 } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FormDataPage = ({ onSubmit }) => { //onSubmit - for handling form submission and address is from the page component
  const [formData, setFormData] = useState({
    firstName: '', // these are the properties in the form data and initializes the first name field in the form data
    lastName: '', // initializes the last name field in the form data
    gender: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
  });
  const navigate = useNavigate();
  const handleChange = (event) => { // event handler for handling changes in the form input field
    const { name, value } = event.target; //object destructuring which extracts name and value from event.target
    setFormData({
      ...formData, //spread operator is used to create a copy of all the details in the form data
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic if needed
    onSubmit(formData);
  };

   // Function to handle back button click
   const handleBackClick = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div>
    <Box display="flex" justifyContent={'center'} alignItems="center" gap={2} width={300}>
    <form onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="firstName"
        value={formData.firstName || ' '}
        onChange={handleChange}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="lastName"
        value={formData.lastName || ''}
        onChange={handleChange}
      />  
       <FormControl component="fieldset" fullWidth margin="normal">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            row
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          margin="normal"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <TextField
          label="Zipcode"
          variant="outlined"
          fullWidth
          margin="normal"
          name="zipcode"
          value={formData.zipcode}
          onChange={handleChange}
        />
        
          <TextField
            name="City"
            value={formData.city}
            onChange={handleChange}
            fullWidth
            margin="normal"
            label = "City"
          />
                    
        <FormControl fullWidth margin="normal">
          <InputLabel>State</InputLabel>
          <Select
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="ny">New York</MenuItem>
            <MenuItem value="ca">California</MenuItem>
            <MenuItem value="il">Illinois</MenuItem>
            {/* Add more states as needed */}
          </Select>
        </FormControl>
      <Box display="flex" gap={2} marginTop={2}>
        {/* Back Button */}
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleBackClick}
          style={{ marginTop: '20px' }}
        >
          Back
        </Button>
        
        {/* Submit Button */}
        <Button 
          variant="contained" 
          color="primary"
          style={{ marginTop: '20px' }}
        >
          Submit
        </Button>
      </Box>

    </form>
    </Box>
    </div>
  
  );
};

export default FormDataPage;