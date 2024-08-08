import React from 'react';
import { render, screen } from '@testing-library/react';
import PaymentTab from '../components/PaymentTab'; // Adjust the import path as needed

// Mock form data to pass as props
const mockFormData = {
  firstName: 'John',
  lastName: 'Doe',
  address: 'USA, California, Los Angeles',
};



test('renders payment form with initial values from formData', () => {
  render(<PaymentTab formData={mockFormData} />);

  // Check that the form fields are rendered with the correct initial values
  const nameOnCardField = screen.getByLabelText(/name on card/i);
  const billingAddressField = screen.getByLabelText(/billing address/i);
  const cardNumberField = screen.getByLabelText(/card number/i);
  const cardTypeField = screen.getByLabelText(/card type/i);
  const cvvField = screen.getByLabelText(/cvv/i);
  const expiryDateField = screen.getByLabelText(/expiry date/i);

  expect(nameOnCardField).toHaveValue('John Doe');
  expect(billingAddressField).toHaveValue('USA, California, Los Angeles');
  expect(cardNumberField).toHaveValue('');
  expect(cardTypeField).toBeInTheDocument(); // Check if the select element is present
  expect(cvvField).toHaveValue('');
  expect(expiryDateField).toHaveValue('');
});
