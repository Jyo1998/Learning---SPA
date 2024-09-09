import React from 'react';
import './App.css';
//import PageComponent from './components/PageComponent'; //As all the 3 tabs are rendering this page so we are calling this page
import UnderWriter from './UnderWriter/UnderWriterComponent';

const App = ()=> {
  return (
    <div className="App">
     
      <UnderWriter />
     
    </div>
  );
}

export default App;
