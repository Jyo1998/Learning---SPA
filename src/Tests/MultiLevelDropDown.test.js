import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MultilevelDropdown from './MultilevelDropdown';

test('renders country dropdown', async () => {
  render(<MultilevelDropdown />);
  const countryLabel = await screen.findByLabelText(/country/i);
  expect(countryLabel).toBeInTheDocument();
});

test('displays state dropdown after selecting country', async () => {
  render(<MultilevelDropdown />);
  const countryDropdown = await screen.findByLabelText(/country/i);
  fireEvent.change(countryDropdown, { target: { value: 'USA' } });
  const stateLabel = await screen.findByLabelText(/state/i);
  expect(stateLabel).toBeInTheDocument();
});

test('displays city dropdown after selecting state', async () => {
  render(<MultilevelDropdown />);
  const countryDropdown = await screen.findByLabelText(/country/i);
  fireEvent.change(countryDropdown, { target: { value: 'USA' } });
  const stateDropdown = await screen.findByLabelText(/state/i);
  fireEvent.change(stateDropdown, { target: { value: 'California' } });
  const cityLabel = await screen.findByLabelText(/city/i);
  expect(cityLabel).toBeInTheDocument();
});

test('shows selected data after form submission', async () => {
  render(<MultilevelDropdown />);
  const countryDropdown = await screen.findByLabelText(/country/i);
  fireEvent.change(countryDropdown, { target: { value: 'USA' } });
  const stateDropdown = await screen.findByLabelText(/state/i);
  fireEvent.change(stateDropdown, { target: { value: 'California' } });
  const cityDropdown = await screen.findByLabelText(/city/i);
  fireEvent.change(cityDropdown, { target: { value: 'San Francisco' } });

  const submitButton = screen.getByRole('button', { name: /submit/i });
  fireEvent.click(submitButton);

  const resultText = await screen.findByText(/you have selected: USA - California - San Francisco/i);
  expect(resultText).toBeInTheDocument();
});

 