import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTab from '../components/dataTab';
//import dataJson from '../data.json';

const selectedAddress = 'CountryName, StateName, CityName';
test('renders Data tab component and displays header', () => {
    render(<DataTab selectedAddress={selectedAddress} />);
    expect(screen.getByText(/places and rankings/i)).toBeInTheDocument();
  });
  
test('filters data based on selectedAddress', () => {
    // Render the component
    const { container } = render(<DataTab selectedAddress="USA, California, Los Angeles" />);
    // Expect the filtered data to be updated correctly
    expect(container).toHaveTextContent('Hollywood'); // Check for a place in the filtered results
    expect(container).not.toHaveTextContent('CN Tower'); // Check for a place not in the filtered results
  });


 

 
  
  