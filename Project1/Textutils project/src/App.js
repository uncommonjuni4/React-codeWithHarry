import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Aboutus from './components/Aboutus';
import Alert from './components/Alert';
import Custombtn from './components/Custombtn';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
    <>

    <Navbar 
        title="TextUtils" 
        mode={mode1} 
        about="About TextUtils" 
        changeMode={changeMode} 
        Custombtn ="custom Button"
      />
    <div className="container">



      <Alert alert={alert} />

       <Textform 
                 heading="Enter your text to analyze Review!" 
                 mode={mode1} 
                 showalert={showalert} 
               /> 








    </div>
    

    </>
    // <Router>
    //   {/* Navbar aur Alert har page par dikhenge */}
    //   <Navbar 
    //     title="TextUtils" 
    //     mode={mode1} 
    //     about="About TextUtils" 
    //     changeMode={changeMode} 
    //     Custombtn ="custom Button"
    //   />
      
    //   <Alert alert={alert} />

    //   <div className="container mx-auto my-4">
    //     {/* router for main page  */}
    //     <Routes>
        
    //     <Route
        
    //     path='/textutil'
    //     element ={
    //       <>
    //       <Textform 
    //             heading="Enter your text to analyze Review!" 
    //             mode={mode1} 
    //             showalert={showalert} 
    //           /> 


    //       <Aboutus />

    //      <Custombtn showalert={showalert}/>
           
    //       </>
    

    

    //     }
        
    //     />


        
    //     </Routes>

    //     {/* routers for components */}


    //     <Routes>
    //       {/* Jab "/" path ho to Textform dikhega */}
    //       <Route 
    //         path="/" 
    //         element={
    //           <Textform 
    //             heading="Enter your text to analyze Review!" 
    //             mode={mode1} 
    //             showalert={showalert} 
    //           />
    //         } 
    //       />

    //       {/* Jab "/about" par click ho to sirf Aboutus dikhega */}
    //       <Route path="/about" element={<Aboutus />} />

    //       {/* Jab "/custombtn" par click ho to sirf Custombtn dikhega */}
    //       <Route 
    //         path="/custombtn" 
    //         element={<Custombtn showalert={showalert} />} 
    //       />
    //       <Route 
    //         path="/custombtn" 
    //         element={<Custombtn showalert={showalert} />} 
    //       />
    //     </Routes>
    //   </div>
    // </Router>
  );
}