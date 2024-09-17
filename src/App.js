import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import PageComponent from './components/PageComponent'; //As all the 3 tabs are rendering this page so we are calling this page
import UnderWriter from './UnderWriter/UnderWriterComponent';
import FormDataPage from "./UnderWriter/FormDataPage";

const App = ()=> {
  return (
    <Router>
    <Routes>
      {/* Main page route */}
      <Route path="/" element={<UnderWriter />} />
      {/* Route for form data page */}
      <Route path="/form-data" element={<FormDataPage />} />
    </Routes>
  </Router>
  );
}

export default App;