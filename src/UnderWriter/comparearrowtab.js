import React, { useState, useEffect } from "react";
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Avatar, IconButton } from "@mui/material";
import groupData from './group.json';


const ComparearrowTab = ({ onCompanySelect }) => {
  const [companies, setCompanies] = useState([]);
  const [showCompanies, setShowCompanies] = useState(false);

  useEffect(() => {
      setCompanies(groupData.companies);
  }, []);

  const handleCompanyClick = (companyName) => {
      onCompanySelect(companyName);
  };

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
