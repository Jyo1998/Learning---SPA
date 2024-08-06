import React, { useState } from 'react';
import MultilevelDropdown from './MultiLevelDropDown';
import FormComponent from './FormComponent';
import Tab3 from './Tab';
import { Tabs, Tab, Box, AppBar } from '@mui/material';

const PageComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);//the first tab will be selected by default as there are multiple tabs
  //setSelectedTab is the updater function that allows the user to change the value of selectedTab.
  const [address, setAddress] = useState('');//setAddress updates the state of address whenever the user changes it
  const [successMessage, setSuccessMessage] = useState('');

  const handleTabChange = (event, newValue) => { //intended to handle the changes in the selected tab such as clicking a different tab
    //newValue represents the new value of the selected tab and which tab should be selected after the change
    setSelectedTab(newValue); //update the selectedTab state to reflect the new tab that the user has selected.
  };

  const handleAddressChange = (newAddress) => { //represents the new value of the address
    setAddress(newAddress); //effectively updates the current address in the state with the new value provided by the user.
  };

  const handleFormSubmit = (formData) => { //represents the data from the form that is being submitted.
    setSuccessMessage('Form has been submitted successfully'); //state updater that modifies the successMessage state variable, which likely provides feedback to the user.
    // Navigate to Tab-3 after form submission
    setSelectedTab(2);
  };

  return (
    <div>
    <Box>
     <AppBar position='static'> 
      {/*used for displaying set of tabs */}
        <Tabs textColor= { 'inherit'} value={selectedTab} onChange={handleTabChange}>
         <Tab label="Multilevel dropdown" /> {/*tab-1 name as it renders the multi level drop down component*/}
         <Tab label="Form data" /> {/*tab-2 name as it renders the form data */}
         <Tab label="Tab-3" />
        </Tabs>
     </AppBar> 
      {selectedTab === 0 && ( //first tab is selected 
        <Box p={2}>{/*whenever an address change occurs within the MultilevelDropdown, the handleAddressChange function will be invoked to manage the updated address.*/}
          <MultilevelDropdown onAddressChange={handleAddressChange} />
        </Box>
      )}
      {selectedTab === 1 && ( //second tab is selected
        <Box p={2}>
          <FormComponent address={address} onSubmit={handleFormSubmit} />
        </Box>
      )}
      {selectedTab === 2 && ( //third tab is selected
        <Tab3 />
      )}
    </Box>
     {successMessage && <div className="success-message">{successMessage}</div>}
     </div>
    
  );
};

export default PageComponent;


