import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';
import './Location.css';  // Import CSS for styling

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
      {/* Initial state with Location Icon, Run new location button, and disabled icons */}
      {!selectedLocation && (
        <div>
          <div style={{ marginBottom: '20px' }}>
            <LocationOnIcon style={{ fontSize: '40px' }} />
            Location
          </div>
          <div className="horizontal-separator"></div>
          <Button variant="contained" onClick={handleRunNewLocation} style={{ marginBottom: '10px' }}>
            Run new location
          </Button>
          
          
          {/* Disabled Bookmark and Download icons */}
          <BookmarkIcon className="icon-disabled" style={{ marginRight: '10px' }} />
          <DownloadIcon className="icon-disabled" />
        </div>
      )}

      {/* Display Single Location when selected */}
      {selectedLocation === 'single' && (
        <div className="location-container">
          <div className="location-item">
            <LocationOnIcon style={{ marginRight: '8px' }} />
            Single Location
          </div>

          {/* Horizontal separator */}
          <div className="horizontal-separator"></div>

          <div className="location-item">
            <div className="icon-section">
              <Button variant="contained" onClick={handleRunNewLocation}>
                Run new location
              </Button>

              {/* Vertical line between icons */}
              <div className="vertical-separator"></div>

              <BookmarkIcon style={{ marginRight: '10px' }} />

              {/* Vertical line between Bookmark and Download icons */}
              <div className="vertical-separator"></div>

              <DownloadIcon />
            </div>
          </div>
        </div>
      )}

      {/* Display Multi-location when selected */}
      {selectedLocation === 'multi' && (
        <div className="location-container">
          <div className="location-item">
            <LocationOnIcon style={{ marginRight: '8px' }} />
            Multi-location
          </div>

          {/* Horizontal separator */}
          <div className="horizontal-separator"></div>

          <div className="location-item">
            <div className="icon-section">
              <Button variant="contained" onClick={handleRunNewLocation}>
                Run new location
              </Button>

              {/* Vertical line between icons */}
              <div className="vertical-separator"></div>

              <BookmarkIcon style={{ marginRight: '10px' }} />

              {/* Vertical line between Bookmark and Download icons */}
              <div className="vertical-separator"></div>

              <DownloadIcon />
            </div>
          </div>
        </div>
      )}

      {/* Display options to select Single or Multi-location */}
      {selectedLocation === 'select' && (
        <div>
          <div style={{ marginTop: '20px' }}>
            <Button variant="outlined" onClick={handleSingleLocationClick} style={{ marginRight: '10px' }}>
            <LocationOnIcon style={{ marginRight: '8px' }} />
              Single Location
            </Button>
            <Button variant="outlined" onClick={handleMultiLocationClick}>
            <LocationOnIcon style={{ marginRight: '8px' }} />
              Multi-location
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;