import React, {useState} from "react";
import Placetab from "./Placetab";
import FormatNumberTab from "./Formatnumbertab";
import BookmarkTab from "./Bookmarktab";
import ComparearrowTab from "./comparearrowtab";
import { Tabs, Tab,  AppBar, Typography, Toolbar, Box  } from '@mui/material';
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
    return(               
               <div>     
              <AppBar position="static" color="default">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography  variant="h6" noWrap>
                     Guy Carpenter UnderWriter
                     
                     </Typography>
                     
                     <GroupDropdown selectedCompany={selectedCompany}/>
                     


                  <Tabs textColor= { 'primary'} 
                  value={selectedTab}   
                  onChange={handleTabChange}
                  indicatorColor="primary"
                  >
                  <Tab icon={<Placetab />} /> {/*tab-1 name as it renders the multi level drop down component*/}
                  <Tab icon={<FormatNumberTab />} /> {/*tab-2 name as it renders the form data */}
                  <Tab icon={<BookmarkTab />} />
                  <Tab icon={<ComparearrowTab onCompanySelect={handleSelectCompany}/>} />
                 </Tabs>
                 
        
     
                
                </Toolbar>
                </AppBar>
                

                <Box 
                display="flex" 
                flexDirection={'column'}
                alignItems="flex-start" 
                padding={2}
            >
                <Box marginBottom={2}>
                  <Location /> 
                    
                </Box>
                <Box>
                  <LayersDropdown /> 
                </Box>
            </Box>
                </div>

            

                
    )
}

export default UnderWriter;
