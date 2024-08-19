import React, { useState, useEffect } from 'react';
import groupData from './group.json'; // Import group data

const GroupDropdownTab = ({ selectedCompany }) => {
  const [filteredGroups, setFilteredGroups] = useState([]);

  useEffect(() => {
    if (selectedCompany) {
      const company = groupData.companies.find(c => c.name === selectedCompany);
      const groups = company ? company.group : [];
      setFilteredGroups(groups);
    } else {
      setFilteredGroups([]);
    }
  }, [selectedCompany]);

  return (
    <div>
      <select>
        {filteredGroups.map((group) => (
          <option key={group.id} value={group.name}>
            {group.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GroupDropdownTab;
