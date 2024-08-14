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

  const [errors, setErrors] = useState({
    cardNumber: '',
    
  });

  // Helper functions for validation
    //^4: Ensures the card number starts with the digit 4.
  // \d{12}: Ensures there are exactly 12 digits after the starting 4. 
  //(\d{3})?: Optionally allows an additional 3 digits, which makes it valid for both 13-digit (basic Visa) and 16-digit (extended Visa) formats.
  //$: Ensures that the string ends here, making the entire card number exactly 13 or 16 digits long.
  //.test(cleanNumber): Tests if the cleanNumber matches the regular expression 

const validateCardNumber = (cardNumber, cardType) => { //stores the cleaned card number.
  const cleanNumber = cardNumber.replace(/\s+/g, ''); // Remove any spaces

  switch(cardType) { 
    case 'Visa':
      return /^4\d{12}(\d{3})?$/.test(cleanNumber); // 13 or 16 digits
    case 'MasterCard':
      return /^5\d{15}$/.test(cleanNumber); // 16 digits
    case 'American Express':
      return /^3[47]\d{13}$/.test(cleanNumber); // 15 digits
    case 'Discover':
      return /^6\d{15}$/.test(cleanNumber); // 16 digits
    default:
      return false;
  }
};

  //Runs this effect only when form data is changed
  useEffect(() => {
    console.log('9')
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
  const isFormValid = Object.values(paymentData).every(value => value !== '') &&  !errors.cardNumber;
  //object.values(paymentData) retrives the data from the payment data
  //every method checks whether all the elements filled or empty

  const handleSubmit = (event) => { //event object is triggered when a form is submitted via by clicking the submit button
    event.preventDefault(); //prevents the default behavior of the form submission
    // Handle the form submission
     // Validate card number
     if (!validateCardNumber(paymentData.cardNumber, paymentData.cardType)) {
      setErrors({ ...errors, cardNumber: 'Invalid card number for the selected card type' });
      return;
    }
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
          error={!!errors.cardNumber}
          helperText={errors.cardNumber}
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
          label="Expiry Date (MM/YY)"
          name="expiryDate"
          value={paymentData.expiryDate}
          onChange={handleChange}
          fullWidth
          margin="normal"
          placeholder='MM/YY'
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
