import React, {useState} from "react";
import Placetab from "./Placetab";
import FormatNumberTab from "./Formatnumbertab";
import BookmarkTab from "./Bookmarktab";
import ComparearrowTab from "./comparearrowtab";
import { Tabs, Tab,  AppBar, Typography, Toolbar } from '@mui/material';
import GroupDropdown from "./GroupDropdown";
import './Page.css';
import LayersDropdown from "./Layers";

const UnderWriter = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => { 
        setSelectedTab(newValue); 
      };
    return(               
               <div>     
              <AppBar position="static" color="default">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography  variant="h6" noWrap>
                     Guy Carpenter UnderWriter
                     <GroupDropdown />
                     </Typography>


                  <Tabs textColor= { 'primary'} 
                  value={selectedTab}   
                  onChange={handleTabChange}
                  >
                  <Tab icon={<Placetab />} /> {/*tab-1 name as it renders the multi level drop down component*/}
                  <Tab icon={<FormatNumberTab />} /> {/*tab-2 name as it renders the form data */}
                  <Tab icon={<BookmarkTab />} />
                  <Tab icon={<ComparearrowTab />} />
                 </Tabs>
                 
        
     
                
                </Toolbar>
                </AppBar>
                <Tab icon ={<LayersDropdown/>} /> 
                </div>

            

                
    )
}

export default UnderWriter;