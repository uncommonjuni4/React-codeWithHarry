import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Aboutus from './components/Aboutus'
import Alert from './components/Alert'
import Custombtn from './components/Custombtn'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  const [mode1, setmode] = useState({
    color: "dark",
    backgroundColor: "white",
    text: "white mode"
  });

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({ message, type });
    setTimeout(() => setalert(null), 1500);
  };

  const changeMode = () => {
    if (mode1.color === "dark") {
      setmode({
        color: "light",
        backgroundColor: "dark",
        text: "dark mode",
      });

      showalert("Dark mode has been enabled", "success");

      document.body.style.backgroundColor = "#1e1e1e";
      document.body.style.color = "white";
    } else {
      setmode({
        color: "dark",
        backgroundColor: "white",
        text: "white mode",
      });

      showalert("Light mode has been enabled", "success");

      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <Router>
      <Navbar 
        title="TextUtils"
        mode={mode1}
        about="About TextUtils"
        changeMode={changeMode}
      />

      <Alert alert={alert} />

      <div className="container">
        <Routes>
          <Route 
            path="/" 
            element={
              <Textform 
                heading="Enter your text to analyze Review!"
                mode={mode1}
                showalert={showalert}
              />
            } 
          />

          <Route path="/about" element={<Aboutus />} />
        </Routes>
        <Routes>
          <Route 
            path="/alert" 
            element={
              
      <div className="container">
        <Custombtn alert={alert} showalert={showalert} />
      </div>
            } 
          />
        </Routes>
      </div>

    </Router>
  );
}
