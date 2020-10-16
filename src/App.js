  
import React, { useState } from 'react';
import Header from './components/Header';
import { dataLayerInit, updateDataLayer } from './components/Header/Helpers/DataLayer'
import './App.css';
import SimpleSlider from './components/simpleSlider'

function App() {
  const[clicks, setClicks ] =useState(1)

  if(clicks===1 ) {dataLayerInit()}

  const countClick =()=>{
    setClicks(clicks+1)
    updateDataLayer ('clicks',clicks)
  }

  return (
    <div className="App" onClick={()=>countClick()} >
      <header className="App-header">
        
        
       
      </header>
      <Header/>
      <SimpleSlider/>
    </div>
  );
}

export default App;
