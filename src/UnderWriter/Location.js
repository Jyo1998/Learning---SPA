import React,{useState} from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button, Menu, MenuItem } from "@mui/material";

const Location = () => {
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
        <MenuItem onClick={handleClose}>RUN NEW LOCATION</MenuItem>
        {/* Add more MenuItems here if needed */}
      </Menu>
        </div>
    )
}
export default Location;