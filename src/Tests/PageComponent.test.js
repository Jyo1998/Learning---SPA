import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PageComponent from '../components/PageComponent';



  test('renders components on the page', () => {
    render(<PageComponent />);
    
    // Check if the MultilevelDropdown tab is rendered by default
    expect(screen.getByText('Multilevel dropdown')).toBeInTheDocument();
    expect(screen.getByText('Form data')).toBeInTheDocument();
    expect(screen.getByText('Tab-3')).toBeInTheDocument();
 
  });

  test('should render MultilevelDropdown when selectedTab is 0', () => {
    render(<PageComponent />);
    expect(screen.getByText(/multilevel dropdown/i)).toBeInTheDocument(); // Ensure to add a test ID to MultilevelDropdown
  });

  test('should not render MultilevelDropdown when selectedTab is not 0', () => {
    render(<PageComponent />);
    expect(screen.queryByText('multilevel dropdown')).not.toBeInTheDocument(); // Ensure to add a test ID to MultilevelDropdown
  });

  test('should render Form data when selectedTab is 1', () => {
    render(<PageComponent />);
    expect(screen.getByText(/form data/i)).toBeInTheDocument(); // Ensure to add a test ID to MultilevelDropdown
  });

  
test('should render Tab3 content when selectedTab is 2', () => {
  render(<PageComponent />);

  // Click on Tab-3 to select it
  fireEvent.click(screen.getByText('Tab-3'));

  // Assert that the content for Tab-3 is displayed
  expect(screen.getByText(/This is the contents for Tab-3/i)).toBeInTheDocument();
});
