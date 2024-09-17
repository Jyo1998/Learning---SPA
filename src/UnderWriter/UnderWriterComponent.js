import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  AppBar,
  Typography,
  Toolbar,
  Box,
  Divider,
  Avatar,
  Button,
} from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import PlaceIcon from '@mui/icons-material/Place';

import GroupDropdown from './GroupDropdown';
import LayersDropdown from './Layers';
import Location from './Location';
import Placetab from './Placetab';
import FormatNumberTab from './Formatnumbertab';
import BookmarkTab from './Bookmarktab';
import ComparearrowTab from './comparearrowtab';
import { useNavigate } from 'react-router-dom';

const UnderWriter = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedCompany, setSelectedCompany] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // For responsiveness
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
  };
  const handleSubmit = () => {
    navigate('/form-data'); // Pass form data via state
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // Occupies full viewport height
        overflow: 'hidden', // Prevents scrolling
      }}
    >
      {/* AppBar with Tabs */}
      <AppBar position="static" color="default">
        <Toolbar
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          {/* Left section: Logo + Dropdown */}
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              flex: '1 1 auto',
            }}
          >
            <Typography variant="h4" style={{ marginRight: '16px' }}>
              Health Domain
            </Typography>
            <Typography variant="h6" style={{ marginRight: '16px' }}>
              Finance
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              style={{ backgroundColor: '#ddd', marginRight: '16px' }}
            />
            <GroupDropdown selectedCompany={selectedCompany} />
          </Box>

          {/* Right section: Tabs */}
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Tabs
              textColor="primary"
              value={selectedTab}
              onChange={handleTabChange}
              indicatorColor="primary"
              sx={{
                '.MuiTab-root': {
                  color: 'grey',
                },
                '.Mui-selected': {
                  color: 'blue',
                },
              }}
            >
              <Tab icon={<PlaceIcon />} />
              <Tab icon={<FormatListNumberedIcon />} />
              <Tab icon={<BookmarksIcon />} />
              <Tab icon={<Avatar><CompareArrowsIcon /></Avatar>} />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content Section */}
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          height: 'calc(100vh - 64px)', // Dynamic height based on AppBar size
          flexDirection: isMobile ? 'column' : 'row', // Stack on mobile, row on larger screens
        }}
      >
        {/* Sidebar (Location + LayersDropdown) */}
        <Box
          sx={{
            width: isMobile ? '100%' : '25%', // Full width on mobile
            display: 'flex',
            flexDirection: 'column',
            borderRight: isMobile ? 'none' : '1px solid #ccc',
            overflow: 'auto', // Ensure content fits without scrolling
            height: '100%',
          }}
        >
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ flex: '1 1 auto', minHeight: isMobile ? 'auto' : '30%' }}>
              <Location />
            </Box>
            {!isMobile && <Divider />}
            <Box sx={{ flex: '1 1 auto', minHeight: isMobile ? 'auto' : '70%' }}>
              <LayersDropdown />
            </Box>
          </Box>
        </Box>

        {/* Main Content Area (Tabs) */}
        <Box
          sx={{
            width: isMobile ? '100%' : '75%',
            padding: '16px',
            overflow: 'auto', // Avoid scrolling by adapting content
            height: '100%',
          }}
        >
          {selectedTab === 0 && <Placetab />}
          {selectedTab === 1 && <FormatNumberTab />}
          {selectedTab === 2 && <BookmarkTab />}
          {selectedTab === 3 && <ComparearrowTab onCompanySelect={handleSelectCompany} />}
        </Box>
      </Box>

      <Box
        sx={{
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          background: '#fff', // Set the background to white (or match with the page background)
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ margin: '20px 0' }} // Adds some spacing to the button
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default UnderWriter;
