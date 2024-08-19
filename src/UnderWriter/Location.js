import React,{useState} from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, Menu, MenuItem, IconButton } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import BookmarksIcon from '@mui/icons-material/Bookmarks'

const Location = (isDisabled, onClick) => {
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
        <div>
            <Button onClick={handleClick} variant="contained">
            <LocationOnIcon />
            Location
            </Button>
            
            <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} >
        RUN NEW LOCATION
        <IconButton 
      onClick={() => !isDisabled && onClick()}
      style={{
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        color: isDisabled ? 'gray' : 'black',
      }}
    >
        
        <DownloadIcon />
        <BookmarksIcon />
        </IconButton>
        </MenuItem>
        {/* Add more MenuItems here if needed */}
      </Menu>
      
      
        </div>
    )
}
export default Location;