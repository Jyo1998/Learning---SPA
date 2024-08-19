import React, {useState} from "react";
import {
    MenuItem,
    FormControl,
    Select,
    InputLabel,
    Button,
} from '@mui/material'



const GroupDropdown = ()=>{
    const [selectedGroup, showSelectedGroup] = useState(null);
    const [open, setOpen] = useState(false);
    const handleChange = (event) => {
        showSelectedGroup(event.target.value)
    }
    const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

    return(
        <div>
            <Button  onClick={handleOpen}>
             Open the select
            </Button>
            <FormControl>
        <InputLabel id="demo-controlled-open-select-label">Groups</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selectedGroup}
          onChange={handleChange}
        >
          <MenuItem value={10}>Hazard</MenuItem>
          <MenuItem value={20}>List</MenuItem>
          <MenuItem value={30}>HazardList</MenuItem>
        </Select>
      </FormControl>
    
      
        </div>
    )
}
export default GroupDropdown;