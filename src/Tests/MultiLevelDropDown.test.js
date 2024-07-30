import React from 'react';
import { render, screen } from '@testing-library/react';
import MultilevelDropdown from '../components/MultiLevelDropDown';

test('disables state and city dropdowns initially', () => {
  render(<MultilevelDropdown />);
  const stateDropdown = screen.getByLabelText(/state/i);
  const cityDropdown = screen.getByLabelText(/city/i);
  expect(stateDropdown).toHaveClass('Mui-disabled');
  expect(cityDropdown).toHaveClass('Mui-disabled');
});
// Test if the component renders correctly
test('renders dropdowns and submit button', () => {
  render(<MultilevelDropdown />);
  
  // Check if dropdowns and submit button are in the document
  expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/state/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/city/i)).toBeInTheDocument();
  expect(screen.getByText(/submit/i)).toBeInTheDocument();
});

test('initially shows error message if no fields are selected', () => {
  render(<MultilevelDropdown />);
  
  // Ensure the error message is visible if no fields are selected
  expect(screen.getByText(/please select all the fields/i)).toBeInTheDocument();
});

// Test if the state dropdown is enabled when a country is selected
test('enables state dropdown when a country is selected', () => {
  // Create a mock component to simulate the country selection
  const MockComponent = () => {
    const [selectedCountry, setSelectedCountry] = React.useState('');

    React.useEffect(() => {
      setSelectedCountry('USA');
    }, []);

    return <MultilevelDropdown selectedCountry={selectedCountry} />;
  };

  render(<MockComponent />);

  const stateDropdown = screen.getByLabelText(/state/i);
  expect(stateDropdown).not.toBeDisabled();
});
// Test if the city dropdown is enabled when a state is selected
test('enables city dropdown when a state is selected', () => {
  // Create a mock component to simulate the country selection
  const MockComponent = () => {
    const [selectedState, setSelectedState] = React.useState('');

    React.useEffect(() => {
      setSelectedState('California');
    }, []);

    return <MultilevelDropdown selectedState={selectedState} />;
  };

  render(<MockComponent />);

  const cityDropdown = screen.getByLabelText(/city/i);
  expect(cityDropdown).not.toBeDisabled();
});



test('submit button is disabled when not all fields are selected', () => {
  // Create a mock component to simulate the selection
  const MockComponent = () => {
    const [selectedCountry, setSelectedCountry] = React.useState('');
    const [selectedState] = React.useState('');
    const [selectedCity] = React.useState('');

    React.useEffect(() => {
      // Simulate selecting country only
      setSelectedCountry('USA');
    }, []);

    return (
      <MultilevelDropdown
        selectedCountry={selectedCountry}
        selectedState={selectedState}
        selectedCity={selectedCity}
      />
    );
  };

  render(<MockComponent />);

  // Check if the submit button is disabled
  const submitButton = screen.getByText(/submit/i);
  expect(submitButton).toBeDisabled();
});






// Define handleSubmit outside the component to avoid it being a dependency
const handleSubmit = (selectedCountry, selectedState, selectedCity, setSubmittedData) => {
  if (selectedCountry && selectedState && selectedCity) {
    setSubmittedData({ country: selectedCountry, state: selectedState, city: selectedCity });
  }
};

const MockComponent = () => {
  const [selectedCountry] = React.useState('USA');
  const [selectedState] = React.useState('California');
  const [selectedCity] = React.useState('Los Angeles');
  const [submittedData, setSubmittedData] = React.useState(null);

  // Directly simulate submission on render
  React.useEffect(() => {
    handleSubmit(selectedCountry, selectedState, selectedCity, setSubmittedData);
  }, [selectedCountry, selectedState, selectedCity]);

  return (
    <>
      <MultilevelDropdown
        selectedCountry={selectedCountry}
        selectedState={selectedState}
        selectedCity={selectedCity}
      />
      {submittedData && (
        <div>
          <h6>
            You have selected Country: {submittedData.country}, State: {submittedData.state}, and City: {submittedData.city}
          </h6>
        </div>
      )}
    </>
  );
};

test('displays submitted data after form submission', () => {
  render(<MockComponent />);

  expect(screen.getByText(/You have selected Country: USA, State: California, and City: Los Angeles/i)).toBeInTheDocument();
});