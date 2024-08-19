import React, { useState} from "react";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import { Avatar,  IconButton } from "@mui/material";


const ComparearrowTab = () => {
  const [showGroups, setShowGroups] = useState(false);
    
    const groups = [
        {id:1, name:'ABC group'},
        {id:2, name:'XYZ investment group'}, 
        {id:3, name:'LLC model'},
        {id:4, name:'Finance corp'}
    ]

    const handleToggle = () =>{
          setShowGroups(prevState => !prevState);
    };

    const handleGroupClick = (group) => {
      console.log('Group clicked:', group.name);
      // Implement additional functionality here
    };
  return(
    <div>
      <IconButton onClick={handleToggle}>
        <Avatar>
          <CompareArrowsIcon style={{marginLeft: '10px', fontsize:40 }}/>
        </Avatar>
      </IconButton>
        {showGroups && (
        <div className="groups-list">
          {groups.map(group => (
           <div 
            key={group.id} 
            className="group-name"
            onClick={() => handleGroupClick(group)}
            style={{ cursor: 'pointer', padding: '8px', borderBottom: '1px solid #ccc' }}
           >
           {group.name}
           </div>
          ))}
        </div>
             )}
      </div>
  )
}
export default ComparearrowTab;