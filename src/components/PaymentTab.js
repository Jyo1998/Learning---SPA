import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, MenuItem } from '@mui/material';

const PaymentTab = ({ formData }) => {
  const [paymentData, setPaymentData] = useState({
    nameOnCard: '',
    cvv: '',
    expiryDate: '',
    billingAddress: '',
    cardType: '',
    cardNumber: ''
  });

  useEffect(() => {
    if (formData) {
      setPaymentData(prevData => ({
        ...prevData,
        nameOnCard: `${formData.firstName} ${formData.lastName}`,
        billingAddress: formData.address || ''
      }));
    }
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPaymentData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Payment information submitted:', paymentData);
    // Handle the form submission
  };

  return (
    <Box p={2}>
      <Typography variant="h6">Payment Information</Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
          label="Expiry Date"
          name="expiryDate"
          value={paymentData.expiryDate}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Billing Address"
          name="billingAddress"
          value={paymentData.billingAddress}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit Payment
        </Button>
      </form>
    </Box>
  );
};

export default PaymentTab;
