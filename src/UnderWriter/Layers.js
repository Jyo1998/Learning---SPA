import React, {useState} from "react";
import LayersIcon from '@mui/icons-material/Layers';
import { Button, Menu, MenuItem } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const LayersDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick} variant="contained">
        <LayersIcon style={{ fontSize: '20px' }}/>
        Layers
        <ExpandLessIcon />
      </Button>
      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Button variant="contained">
            +portfolio
          </Button>
        </MenuItem>
        {/* Add more MenuItems here if needed */}
      </Menu>
    </div>
  );
};

export default LayersDropdown;

