import React, { useState, useEffect } from "react";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Avatar, IconButton } from "@mui/material";
import groupData from './group.json';

//onCompanySelect - a prop passing from this to groupdropdown tab to show the groups which are related to the company selected by the user
const ComparearrowTab = ({ onCompanySelect }) => {
  const [companies, setCompanies] = useState([]);
  const [showCompanies, setShowCompanies] = useState(false);

  useEffect(() => {
      setCompanies(groupData.companies);//data from .json file
  }, []);

  const handleCompanyClick = (companyName) => {
      onCompanySelect(companyName);
  };

  /*Initially showcompanies are false when the togglecompany button is clicked as the showcompanies is false
  it sets to true and it shows the list of companies which are hidden and again it is clicked it is viceversa */
/*Used to toggle the visibility of the company's list between showing and hiding it */
  const toggleCompanyList = () => {
      setShowCompanies(!showCompanies); 
  };

  return (
    <div>
      <IconButton onClick={toggleCompanyList}>
        <Avatar>
          <CompareArrowsIcon />
        </Avatar>
      </IconButton>
      {showCompanies && (
       <div>
          {companies.map((company, index) => (
            <div key={index} onClick={() => handleCompanyClick(company.name)}>
              {company.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComparearrowTab;
