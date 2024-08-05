import React from 'react';
import { render, screen } from '@testing-library/react'
import FormComponent from '../components/FormComponent';

test('should contain first name and last name', () => {
  render(<FormComponent />)
  expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/last Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
})
