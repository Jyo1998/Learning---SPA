import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Menu, MenuItem, TextField, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import dataJson from '../data.json'; 

//selectedAddress- address selected in tab-1, onTAbChange - use to handle the tab changes
const DataTab = ({ selectedAddress, onTabChange }) => {
  const [filteredData, setFilteredData] = useState([]); //stores data after applying filters
  const [filterAnchor, setFilterAnchor] = useState(null);//used as an anchor element for filter dragdown
  const [filterType, setFilterType] = useState(null);//holds the type of filter type currently being applied such as state or country or city
  const [filterValue, setFilterValue] = useState({ country: '', state: '', city: '' });//holds the current values for filters applied
  const [bookingData, setBookingData] = useState(null);//stores information related to booking
  const [openBookingDialog, setOpenBookingDialog] = useState(false);//control the visibility of booking dialog, false because as initially it is close

  useEffect(() => {
    const applyFilters = () => { //handle the filtering of data based on user selection
      const data = dataJson.data || [];// retrives data from data.json , if it isundefined or null it gives us an empty array 
      const [selectedCountry, selectedState, selectedCity] = selectedAddress.split(', ');
      const filtered = data.filter(item => // filters the data array based on filter value
        ((!filterValue.country || item.country === filterValue.country)&& ((!selectedCountry || item.country === selectedCountry))) && //checks for country filter
//If filterValue.country is not set (i.e., undefined or empty), the first part of the condition evaluates to true, meaning the filter is ignored. 
//If it is set, it checks if the item's country matches the selected country.
        ((!filterValue.state || item.state === filterValue.state)&& ((!selectedState || item.state === selectedState))) && //checks for state filter
        ((!filterValue.city || item.city === filterValue.city)&& ((!selectedCity || item.city === selectedCity))) //checks for city filter
      );
      setFilteredData(filtered);//updates the filtered state with new filtered array
    };

    applyFilters(); //whenever the filterValue changes it needs to call apply filters immediately
  }, [filterValue, selectedAddress]);

  const handleFilterClick = (event, type) => { //handle the event when a filter option is selected
    //event - generates an object when the user clicks on the filter option
    //type - type of filter has been applied such as country, state or city
    setFilterAnchor(event.currentTarget);//ensures the filtering options are displayed according to the related element 
    setFilterType(type); //ensures the type of filter that needs to be applied based on user selection
  };

  const handleFilterClose = () => { //event handler whenever the user closes the filter menu
    setFilterAnchor(null); //closes the filter menu
    setFilterType(null); //indicates that no filter type is selected
  };

  const handleFilterChange = (value) => { //event handler whenever the user selects the filter option
    //value - new value selected by the user for the current filter type
    setFilterValue(prev => ({//updates the filter value state
      ...prev, //previous state of filter value
      [filterType]: value //current filter type selected by the user and the value assigned to this is the new value selected by the user
    }));
    handleFilterClose(); //closes the filter menu
  };

  const clearFilters = () => { //clears all the current filter values
    setFilterValue({ country: '', state: '', city: '' }); //updates the filter value and clears all the filters
  };

  const handleBookingClick = (place) => { //handles the booking click
    //place represents the specific location that the user clicks
    setBookingData(place); //updates the place information that the user clicked
    //this place is ready for further process
    setOpenBookingDialog(true); //indicates that the dialog box should be open
  };

  const handleCloseBookingDialog = () => {  //handles the closing of booking dialog
    setOpenBookingDialog(false); //indicates that the booking dialog should be closed
    setBookingData(null); //clears the booking data
  };

  const handleBookingSubmit = () => { //whenever user confirms the booking it switches to tab5
    onTabChange(null, 4); // Change to Tab-5
    //onTabChange a callback function that is used for changing of tabs
    handleCloseBookingDialog(); //close the booking dialog and clears the data
  };

  const handleBookingLater = () => { //primary purpose is to close the booking dialog
    handleCloseBookingDialog();
  };

  const BookingForm = ({ place, onClose }) => { //place: name of the place to which user needs to select
    //onClose - a call back function to handle closing the booking form
    return (
      <Box p={2}>
        <Typography variant="h6">Book {place.name}</Typography>{/*place.name - shows the name of the place to which the user wants to book*/}
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleBookingSubmit}>
            Book Now
          </Button>
          <Button variant="contained" color="secondary" onClick={handleBookingLater}>
            Book Later
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClose} style={{ marginLeft: '8px' }}>
            Cancel
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Box p={2}>
      <Typography variant="h6" >
        Places and Rankings
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead> 
            <TableRow> 
              <TableCell>
                Country
                <IconButton onClick={(event) => handleFilterClick(event, 'country')}>
                  <FilterListIcon />{/*indicates that the column can be filtered */}
                </IconButton>
              </TableCell>
              <TableCell>
                State
                <IconButton onClick={(event) => handleFilterClick(event, 'state')}>
                  <FilterListIcon />
                </IconButton>
              </TableCell>
              <TableCell>
                City
                <IconButton onClick={(event) => handleFilterClick(event, 'city')}>
                  <FilterListIcon />
                </IconButton>
              </TableCell>
              <TableCell>Place</TableCell>
              <TableCell>Ranking</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item, index) => (
              <React.Fragment key={index}>
                {item.places.map((place, idx) => (
                  <TableRow key={idx}>
                    {idx === 0 && (
                      <>
                        <TableCell rowSpan={item.places.length}>{item.country}</TableCell>
                        <TableCell rowSpan={item.places.length}>{item.state}</TableCell>
                        <TableCell rowSpan={item.places.length}>{item.city}</TableCell>
                      </>
                    )}
                    <TableCell>{place.name}</TableCell>
                    <TableCell>{place.ranking}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleBookingClick(place)}
                      >
                        Book
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={2}>
        <Button variant="outlined" color="secondary" onClick={clearFilters}>
          Reset Filters
        </Button>
      </Box>

      <Menu
        anchorEl={filterAnchor}
        open={Boolean(filterAnchor)}
        onClose={handleFilterClose}
      >
        <MenuItem>
          <TextField
            label="Filter Value"
            value={filterValue[filterType] || ''}
            onChange={(event) => handleFilterChange(event.target.value)}
            fullWidth
          />
        </MenuItem>
      </Menu>

      <Dialog open={openBookingDialog} onClose={handleCloseBookingDialog}>
        <DialogTitle>Booking Information</DialogTitle>
        <DialogContent>
          {bookingData && <BookingForm place={bookingData} onClose={handleCloseBookingDialog} />}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default DataTab;
