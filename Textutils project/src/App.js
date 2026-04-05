import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Aboutus from './components/Aboutus'

export default function App() {
  const [mode1, setmode] = useState({
    color: "dark",
    backgroundColor: "white",
    text:"white mood"
  });

  const changeMode = () => {
    if (mode1.color === "dark") {
      setmode({
        color: "light",
        backgroundColor: "dark",
        text:"dark mode"
      });
      // Body background change karo
      document.body.style.backgroundColor = "#1e1e1e";
      document.body.style.color = "white";
    } else {
      setmode({
        color: "dark",
        backgroundColor: "white",
        text:"white mode"
      });
      // Body background change karo
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  return (
    <>
      <Navbar 
        title="TextUtils" 
        mode={mode1} 
        about="About TextUtils" 
        changeMode={changeMode}
      />
      
      <div className="container">
        <Textform 
          heading="Enter your text to analyze Review!" 
          mode={mode1}
        />
    <Aboutus/>
      </div>
    </>
  );
}