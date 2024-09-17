import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import './Location.css';
import { Box } from '@mui/material';


const Location = () => {
 
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleRunNewLocation = () => {
    setSelectedLocation('select');
  };

  const handleSingleLocationClick = () => {
    setSelectedLocation('single');
  };

  const handleMultiLocationClick = () => {
    setSelectedLocation('multi');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Card  variant="outlined" sx={{ maxWidth: 345 }}>
          {/* Display Single Location when selected */}
         {selectedLocation === 'single' && (
          <div className="location-container">
            <div className="location-item" color='primary'>
              <LocationOnIcon style={{ marginRight: '8px' }} color='primary' />
              Single Location
            </div>
          </div>
        )}

        {/* Display Multi-location when selected */}
        {selectedLocation === 'multi' && (
          <div className="location-container">
            <div className="location-item">
              <LocationOnIcon style={{ marginRight: '8px' }} color='primary'/>
              Multi-location
            </div>
          </div>
        )}

        {/* Display options to select Single or Multi-location */}
        {selectedLocation === 'select' && (
          <div>
            <div style={{ marginTop: '20px' }}>
              <Box>
              <Button variant="outlined" onClick={handleSingleLocationClick} style={{ marginRight: '10px' }}>
                <LocationOnIcon  style={{ marginRight: '8px' }} />
                Single Location
              </Button>
              <Button variant="outlined" onClick={handleMultiLocationClick}>
                <LocationOnIcon style={{ marginRight: '8px' }} />
                Multi-location
              </Button>
              </Box>
            </div>
          </div>
        )}
        <CardContent>
          {!selectedLocation && (
            <div color='primary'>
              <LocationOnIcon style={{ fontSize: '40px' }} color='primary' />
              Location
            </div>
          )}
          <div className="full-horizontal-line"></div>
            <CardActions>
              <Button  onClick={handleRunNewLocation} style={{ marginBottom: '10px' }}>
               RUN NEW LOCATION
              </Button>
             <div className="vertical-separator"></div>
             {/* Disabled Bookmark and Download icons */}
             <BookmarkIcon className="icon-disabled" style={{ marginRight: '10px' }} />
             <div className= "vertical-separator"></div>
              <DownloadIcon className="icon-disabled" />
            
            </CardActions>
        </CardContent>
      </Card>
    </div>
  );
}

export default Location; 