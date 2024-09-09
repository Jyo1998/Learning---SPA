import React, { useState } from "react";
import Placetab from "./Placetab";
import FormatNumberTab from "./Formatnumbertab";
import BookmarkTab from "./Bookmarktab";
import ComparearrowTab from "./comparearrowtab";
import { Tabs, Tab, AppBar, Typography, Toolbar, Box, Divider } from '@mui/material';
import GroupDropdown from "./GroupDropdown";
import './Page.css';
import LayersDropdown from "./Layers";
import Location from "./Location";

const UnderWriter = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedCompany, setSelectedCompany] = useState('');

    const handleTabChange = (event, newValue) => { 
        setSelectedTab(newValue); 
    };

    const handleSelectCompany = (company) => {
        setSelectedCompany(company);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* AppBar with Tabs */}
            <AppBar position="static" color="default">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h4" style={{ marginRight: '16px' }}>
                            Health Domain 
                        </Typography>
                        <Typography variant="h6" style={{ marginRight: '16px' }}>
                            Finance
                        </Typography>
                        <Divider orientation="vertical" flexItem style={{ backgroundColor: '#ddd', marginRight: '16px' }} />
                        <GroupDropdown selectedCompany={selectedCompany} />
                </Box>
                    <Tabs
                        textColor="primary"
                        value={selectedTab}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        
                    >
                      
                        <Tab icon={<Placetab />} />
                        <Tab icon={<FormatNumberTab />} />
                        <Tab icon={<BookmarkTab />} />
                      
                        <Tab icon={<div>
                        <ComparearrowTab onCompanySelect={handleSelectCompany} />
                        </div> } />
                    </Tabs>  
                </Toolbar>
            </AppBar>
            <div>
             {selectedTab === 0 && ( //first tab is selected 
              <Box p={2}>
                <Placetab />
              </Box>
              )}
              {selectedTab === 1 && ( //second tab is selected 
                <Box p={2}>
                  <FormatNumberTab />
                </Box>
                )}
                {selectedTab === 2 && ( //third tab is selected 
                <Box p={2}>
                  <BookmarkTab />
                </Box>
                )}
                {selectedTab === 3 && ( //fourth tab is selected 
                <Box p={2}>
                  <ComparearrowTab onCompanySelect={handleSelectCompany} />
                </Box>
                )}
            </div>

            <div style={{ display: 'flex', flexGrow: 1 }}>
                {/* Sidebar (25% width) */}
                <div style={{ width: '25%', display: 'flex', flexDirection: 'column', borderRight: '1px solid #ccc' }}>
                    <Box display="flex" flexDirection="column" flexGrow={1}>
                        <Box style={{ height: '40%' }}>
                            <Location />
                        </Box>
                        <Divider />
                        <Box style={{ height: '60%' }}>
                            <LayersDropdown />
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default UnderWriter;