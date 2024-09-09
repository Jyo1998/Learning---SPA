import React, { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

const FormComponent = ({ onSubmit, address }) => { //onSubmit - for handling form submission and address is from the page component
  const [formData, setFormData] = useState({
    firstName: '', // these are the properties in the form data and initializes the first name field in the form data
    lastName: '', // initializes the last name field in the form data
    address: '', // initializes the address field in the form data
  });

  //synchronize a component with an external system

  useEffect(() => {
    setFormData((prevData) => ({ //updates the state of form data
      ...prevData, // spread operator to create a copy of all the previous data
      address, // adds or updates the address property in the new data (setFormData)
    }));
  }, [address]); // it will run only when there is a change in the address

  const handleChange = (event) => { // event handler for handling changes in the form input field
    const { name, value } = event.target; //object destructuring which extracts name and value from event.target
    setFormData({
      ...formData, //spread operator is used to create a copy of all the details in the form data
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
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
      <TextField
        label="Address"
        variant="outlined"
        fullWidth
        margin="normal"
        name="address"
        value={formData.address || ''}
        disabled
      />
      
      
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      
    </form>
    </Box>
    </div>
  
  );
};

export default FormComponent;

