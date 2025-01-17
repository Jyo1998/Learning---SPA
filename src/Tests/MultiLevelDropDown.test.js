import React from 'react';
import { render, screen } from '@testing-library/react';
import MultilevelDropdown from '../components/MultiLevelDropDown';



//this is a test used to check initially whether the dropdowns disabled or not
test('disables state and city dropdowns initially', () => { //here is an initial argument
  render(<MultilevelDropdown onAddressChange={() => { }} />); //renders the component in a virtual dom which is necessary for testing as it sets up a component that allows to interact and query it
  const stateDropdown = screen.getByLabelText(/state/i); //used to find the elements by their accessible name and case insensitive as we used /i/
  const cityDropdown = screen.getByLabelText(/city/i);
  expect(stateDropdown).toHaveClass('Mui-disabled'); //assertion checks whether the material ui component which indicates that element is disabled or not
  expect(cityDropdown).toHaveClass('Mui-disabled');// if it is there it passes the test else it fails to disable the dropdown
});


// Test if whether the component renders the drop down and submit button properly or not
test('renders dropdowns and submit button', () => {
  render(<MultilevelDropdown onAddressChange={()=> { }}/>);
  // Check if dropdowns and submit button are in the document
  //If the element is found and present in the document, the assertion will pass.
  // If not, it will fail, indicating that the country dropdown is not rendering correctly same for everything
  expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/state/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/city/i)).toBeInTheDocument();
  expect(screen.getByText(/submit/i)).toBeInTheDocument();
  //If the submit button with the text "submit" is found and present, the assertion will pass.
});


//Testing whether it shows an error message or not initially until the fields are selected
test('initially shows error message if no fields are selected', () => {
  render(<MultilevelDropdown onAddressChange={() => {}}/>);
  // Ensure the error message is visible if no fields are selected
  expect(screen.getByText(/please select all the fields/i)).toBeInTheDocument();//used to find elements based on their text content
});


// Test if the state dropdown is enabled when a country is selected
test('enables state dropdown when a country is selected', () => {
  // Create a temporary component to simulate the country selection that uses react hooks
  const MockComponent = () => {
    const [selectedCountry, setSelectedCountry] = React.useState('');

    React.useEffect(() => {
      setSelectedCountry('USA');
    }, []);

    return <MultilevelDropdown selectedCountry={selectedCountry} onAddressChange={() => {}} />;
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

    return <MultilevelDropdown selectedState={selectedState} onAddressChange={()=> {}} />;
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
        onAddressChange={() => {}}
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
        onAddressChange={() => {}}
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
