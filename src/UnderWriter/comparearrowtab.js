import React, { useState} from "react";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import { Avatar,  IconButton } from "@mui/material";


const ComparearrowTab = () => {
  const [showGroups, setShowGroups] = useState(false);
    
    const Companies = [
        {id:1, name:'ABC group'},
        {id:2, name:'XYZ investment group'}, 
        {id:3, name:'LLC model'},
        {id:4, name:'Finance corp'}
    ]

    const handleToggle = () =>{
          setShowGroups(prevState => !prevState);
    };

    const handleGroupClick = (Companies) => {
      console.log('Group clicked:', Companies.name);
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
        <div className="Companies-list">
          {Companies.map(Companies => (
           <div 
            key={Companies.id} 
            className="Companies-name"
            onClick={() => handleGroupClick(Companies)}
            style={{ cursor: 'pointer', padding: '8px', borderBottom: '1px solid #ccc' }}
           >
           {Companies.name}
           </div>
          ))}
        </div>
             )}
      </div>
  )
}
export default ComparearrowTab;