//import logo from './images/Logo1.svg';
import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import PImage from './components/PImage';
import TextBox from './components/TextBox';
import Paper from './components/Paper';
import AnimationTyping from './components/AnimationTyping';
//import Animation1 from './components/AnimationTyping1';


function App() {
  return (
    <div className="App">
      <NavBar />

      <div id="Image" className="inline">
        <PImage id="Image" />
      </div>
      <div id="TextBox" className="inline">
        
        <h1 id="myElement"><AnimationTyping /></h1>
        {/* <h3 id="head3"><AnimationTyping /></h3> */}
        <TextBox id="TextBox"  />
      </div>
      
      <Paper />

    </div>
  );
}

export default App;
