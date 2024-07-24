import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';

afterEach(cleanup);
//country dropdown
test('renders country dropdown', async () => {
  render(<App />);
  const countryLabel = await screen.findByLabelText(/country/i);
  expect(countryLabel).toBeInTheDocument();
});
// state dropdown
test('displays state dropdown after selecting country', async () => {
  render(<App />);
  const countryDropDown = await screen.findByLabelText(/country/i);
  fireEvent.change(countryDropDown, {target:{value:'USA'}});
  const stateLabel = await screen.findByLabelText(/state/i);
  expect(stateLabel).toBeInTheDocument();
});
//city dropdown
test('displays city dropdown after selecting state', async () => {
  render(<App />);
  const countryDropDown = await screen.findByLabelText(/country/i);
  fireEvent.change(countryDropDown, {target:{value:'USA'}});
  const stateDropDown = await screen.findByLabelText(/state/i);
  fireEvent.change(stateDropDown,{target:{value:'california'}});
  const cityLabel= await screen.findByLabelText(/city/i);
  expect(cityLabel).toBeInTheDocument();
});
//submitted data
test('displays submitted data after clicking on submit button', async () => {
  render(<App />);
  const countryDropDown = await screen.findByLabelText(/country/i);
  fireEvent.change(countryDropDown, {target:{value:'USA'}});
  const stateDropDown = await screen.findByLabelText(/state/i);
  fireEvent.change(stateDropDown,{target:{value:'california'}});
  const cityDropDown = await screen.findByLabelText(/city/i);
  fireEvent.change(cityDropDown,{target:{value:'San Fransisco'}});
  const submitButton = screen.getByRole('button',{name:/submit/i});
  fireEvent.click(submitButton);
  const resultText = await screen.findByText(/You have selected Country :USA , state: California and city: San Francisco/i);
  expect(resultText).toBeInTheDocument();
})


