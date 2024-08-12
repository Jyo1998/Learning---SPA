import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, MenuItem } from '@mui/material';

const PaymentTab = ({ formData }) => { //it takes form data as a prop the data which is submitted in the form data component
  const [paymentData, setPaymentData] = useState({
    nameOnCard: '',
    cvv: '',
    expiryDate: '',
    billingAddress: '',
    cardType: '',
    cardNumber: ''
  });

  //Runs this effect only when form data is changed
  useEffect(() => {
    if (formData) { //updates the payment tab whenever there is a change in form data
      setPaymentData(prevData => ({ //used to access the previous data
        ...prevData,
        nameOnCard: `${formData.firstName} ${formData.lastName}`, //these are the details from form data
        billingAddress: formData.address || ''
      }));
    }
  }, [formData]);//it is an dependency array

  const handleChange = (event) => { //event parameter represents the event object generated when an user interacts with an input element, such as typing in a text field.
    //object destructing nature which is used to extract name and value from the target(refers to inout element which is initiated by changing the event) element 
    const { name, value } = event.target;
    setPaymentData(prevData => ({ //updates the payment data state
      ...prevData,
      [name]: value //name:input element(card number), value: entered by the user
    }));
  };

  // Check if all fields are filled
  const isFormValid = Object.values(paymentData).every(value => value !== '');
  //object.values(paymentData) retrives the data from the payment data
  //every method checks whether all the elements filled or empty

  const handleSubmit = (event) => { //event object is triggered when a form is submitted via by clicking the submit button
    event.preventDefault(); //prevents the default behavior of the form submission
    // Handle the form submission
  };

  

  return (
    <Box p={2}>
      <Typography variant="h6">Payment Information</Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      {/*autoComplete = "off" represents that the browser does not show the previous existing values*/}        
        <TextField
          label="Name on Card" 
          name="nameOnCard"
          value={paymentData.nameOnCard}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Card Number"
          name="cardNumber"
          value={paymentData.cardNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Card Type"
          name="cardType"
          value={paymentData.cardType}
          onChange={handleChange}
          fullWidth
          margin="normal"
          select
        >
          <MenuItem value="Visa">Visa</MenuItem>
          <MenuItem value="MasterCard">MasterCard</MenuItem>
          <MenuItem value="American Express">American Express</MenuItem>
          <MenuItem value="Discover">Discover</MenuItem>
        </TextField>
        <TextField
          label="CVV"
          name="cvv"
          value={paymentData.cvv}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Expiry Date (MM/YYYY)"
          name="expiryDate"
          value={paymentData.expiryDate}
          onChange={handleChange}
          fullWidth
          margin="normal"
          placeholder='MM/YYYY'
        />
        <TextField
          label="Billing Address"
          name="billingAddress"
          value={paymentData.billingAddress}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button 
         type="submit"
         variant="contained" 
         color="primary"
         disabled={!isFormValid}
         >
          Submit Payment
        </Button>
      </form>
    </Box>
  );
};

export default PaymentTab;
