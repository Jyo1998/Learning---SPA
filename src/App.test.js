import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MultilevelDropdown component', () => {
  render(<App />);
  expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
});

