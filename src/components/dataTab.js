/*import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import dataJson from '../data.json'; // Adjust path as necessary

const DataTab = ({ selectedAddress, submittedName, onTabChange }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [filterAnchor, setFilterAnchor] = useState(null);
    const [filterType, setFilterType] = useState(null);
    const [filterValue, setFilterValue] = useState({ country: '', state: '', city: '' });
    const [bookingData, setBookingData] = useState(null);
    const [openBookingDialog, setOpenBookingDialog] = useState(false);
  
    useEffect(() => {
      const applyFilters = () => {
        const data = dataJson.data || [];
        const filtered = data.filter(item =>
          (!filterValue.country || item.country === filterValue.country) &&
          (!filterValue.state || item.state === filterValue.state) &&
          (!filterValue.city || item.city === filterValue.city)
        );
        setFilteredData(filtered);
      };
  
      applyFilters();
    }, [filterValue]);
  
    useEffect(() => {
      const data = dataJson.data || [];
      const [selectedCountry, selectedState, selectedCity] = selectedAddress.split(', ');
  
      const filtered = data.filter(item =>
        (!selectedCountry || item.country === selectedCountry) &&
        (!selectedState || item.state === selectedState) &&
        (!selectedCity || item.city === selectedCity)
      );
      setFilteredData(filtered);
    }, [selectedAddress]);
  
    const handleFilterClick = (event, type) => {
      setFilterAnchor(event.currentTarget);
      setFilterType(type);
    };
  
    const handleFilterClose = () => {
      setFilterAnchor(null);
      setFilterType(null);
    };
  
    const handleFilterChange = (value) => {
      setFilterValue(prev => ({
        ...prev,
        [filterType]: value
      }));
      handleFilterClose();
    };
  
    const clearFilters = () => {
      setFilterValue({ country: '', state: '', city: '' });
    };
  
    const handleBookingClick = (place) => {
      setBookingData(place);
      setOpenBookingDialog(true);
    };
  
    const handleCloseBookingDialog = () => {
      setOpenBookingDialog(false);
      setBookingData(null);
    };
  
    const handleBookingSubmit = () => {
      // Handle booking submission logic here
      console.log(`Booking for ${bookingData.name} by ${submittedName}`);
      // Redirect to Tab-5
      onTabChange(4); // Assuming 4 is the index for Tab-5
      handleCloseBookingDialog();
    };
  
    const BookingForm = ({ place, onClose }) => {
      return (
        <Box p={2}>
          <Typography variant="h6">Book {place.name}</Typography>
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
  
    const handleBookingLater = () => {
      // Handle "Book Later" logic here
      console.log(`Booking for ${bookingData.name} will be handled later by ${submittedName}`);
      handleCloseBookingDialog();
    };
  
    return (
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          Places and Rankings
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Country
                  <IconButton onClick={(event) => handleFilterClick(event, 'country')}>
                    <FilterListIcon />
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
              label="Filter"
              variant="outlined"
              size="small"
              value={filterValue[filterType] || ''}
              onChange={(e) => handleFilterChange(e.target.value)}
              placeholder={`Enter ${filterType}`}
            />
          </MenuItem>
          <MenuItem onClick={clearFilters}>Clear Filter</MenuItem>
        </Menu>
  
        <Dialog open={openBookingDialog} onClose={handleCloseBookingDialog}>
          <DialogTitle>Book {bookingData?.name}</DialogTitle>
          <DialogContent>
            {bookingData && <BookingForm place={bookingData} onClose={handleCloseBookingDialog} />}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseBookingDialog} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  };
  
export default DataTab; */






import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Menu, MenuItem, TextField, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import dataJson from '../data.json'; // Adjust path as necessary

const DataTab = ({ selectedAddress, submittedName, onTabChange }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [filterAnchor, setFilterAnchor] = useState(null);
  const [filterType, setFilterType] = useState(null);
  const [filterValue, setFilterValue] = useState({ country: '', state: '', city: '' });
  const [bookingData, setBookingData] = useState(null);
  const [openBookingDialog, setOpenBookingDialog] = useState(false);

  useEffect(() => {
    const applyFilters = () => {
      const data = dataJson.data || [];
      const filtered = data.filter(item =>
        (!filterValue.country || item.country === filterValue.country) &&
        (!filterValue.state || item.state === filterValue.state) &&
        (!filterValue.city || item.city === filterValue.city)
      );
      setFilteredData(filtered);
    };

    applyFilters();
  }, [filterValue]);

  useEffect(() => {
    const data = dataJson.data || [];
    const [selectedCountry, selectedState, selectedCity] = selectedAddress.split(', ');

    const filtered = data.filter(item =>
      (!selectedCountry || item.country === selectedCountry) &&
      (!selectedState || item.state === selectedState) &&
      (!selectedCity || item.city === selectedCity)
    );
    setFilteredData(filtered);
  }, [selectedAddress]);

  const handleFilterClick = (event, type) => {
    setFilterAnchor(event.currentTarget);
    setFilterType(type);
  };

  const handleFilterClose = () => {
    setFilterAnchor(null);
    setFilterType(null);
  };

  const handleFilterChange = (value) => {
    setFilterValue(prev => ({
      ...prev,
      [filterType]: value
    }));
    handleFilterClose();
  };

  const clearFilters = () => {
    setFilterValue({ country: '', state: '', city: '' });
  };

  const handleBookingClick = (place) => {
    setBookingData(place);
    setOpenBookingDialog(true);
  };

  const handleCloseBookingDialog = () => {
    setOpenBookingDialog(false);
    setBookingData(null);
  };

  const handleBookingSubmit = () => {
    console.log(`Booking for ${bookingData.name} by ${submittedName}`);
    onTabChange(null, 4); // Change to Tab-5
    handleCloseBookingDialog();
  };

  const handleBookingLater = () => {
    console.log(`Booking for ${bookingData.name} will be handled later by ${submittedName}`);
    handleCloseBookingDialog();
  };

  const BookingForm = ({ place, onClose }) => {
    return (
      <Box p={2}>
        <Typography variant="h6">Book {place.name}</Typography>
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
      <Typography variant="h6" gutterBottom>
        Places and Rankings
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Country
                <IconButton onClick={(event) => handleFilterClick(event, 'country')}>
                  <FilterListIcon />
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
