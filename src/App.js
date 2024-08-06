import React from 'react';
import './App.css';
import PageComponent from './components/PageComponent'; //As all the 3 tabs are rendering this page so we are calling this page


const App = ()=> {
  return (
    <div className="App">
     
      <PageComponent />
     
    </div>
  );
}

export default App;
