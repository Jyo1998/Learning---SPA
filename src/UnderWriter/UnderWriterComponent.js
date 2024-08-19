// import React, {useState} from "react";
// import Placetab from "./Placetab";
// import FormatNumberTab from "./Formatnumbertab";
// import BookmarkTab from "./Bookmarktab";
// import ComparearrowTab from "./comparearrowtab";
// import { Tabs, Tab,  AppBar, Typography, Toolbar, Box  } from '@mui/material';
// import GroupDropdown from "./GroupDropdown";
// import './Page.css';
// import LayersDropdown from "./Layers";
// import Location from "./Location";


// const UnderWriter = () => {
//     const [selectedTab, setSelectedTab] = useState(0);
//     const [selectedCompany, setSelectedCompany] = useState('');
    
//     const handleTabChange = (event, newValue) => { 
//         setSelectedTab(newValue); 
//       };
//       const handleSelectCompany = (company) => {
//         setSelectedCompany(company);
//       };
//     return(               
//                <div>     
//               <AppBar position="static" color="default">
//                 <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <Typography  variant="h6" noWrap>
//                      Guy Carpenter UnderWriter
                     
//                      </Typography>
                     
//                      <GroupDropdown selectedCompany={selectedCompany}/>
                     


//                   <Tabs textColor= { 'primary'} 
//                   value={selectedTab}   
//                   onChange={handleTabChange}
//                   indicatorColor="primary"
//                   >
//                   <Tab icon={<Placetab />} /> {/*tab-1 name as it renders the multi level drop down component*/}
//                   <Tab icon={<FormatNumberTab />} /> {/*tab-2 name as it renders the form data */}
//                   <Tab icon={<BookmarkTab />} />
//                   <Tab icon={<ComparearrowTab onCompanySelect={handleSelectCompany}/>} />
//                  </Tabs>
                 
        
     
                
//                 </Toolbar>
//                 </AppBar>
                

//                 <Box 
//                 display="flex" 
//                 flexDirection={'column'}
//                 alignItems="flex-start" 
//                 padding={2}
//             >
//                 <Box marginBottom={2}>
//                   <Location /> 
                    
//                 </Box>
//                 <Box>
//                   <LayersDropdown /> 
//                 </Box>
//             </Box>
//                 </div>

            

                
//     )
// }

// export default UnderWriter;




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
