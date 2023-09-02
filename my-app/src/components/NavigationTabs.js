import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabContext, TabList, TabPanel} from '@mui/lab'
import About from './About';
import Contact from './Contact';
import Hobby from './Hobby';

export default function NavigationTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Om meg" value="1" />  
            <Tab label="Prosjekter" value="2" />
            <Tab label="Hobby" value="3" />
            <Tab label="Kontakt" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1"><About/></TabPanel>
        <TabPanel value="2">To be continued</TabPanel>
        <TabPanel value="3"><Hobby/></TabPanel>
        <TabPanel value="4"><Contact/></TabPanel>
      </TabContext>
    </Box>
  );
}