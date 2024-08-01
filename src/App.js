/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */

import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); //whether mode is darkmode or lightmode.
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    // phle alert null tha now it becomes an object
    setTimeout(() =>setAlert(null),1500)
    //alert popUP khud se chla jega after 3 secs
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";

      //TITLE CHAMKA RHA HAI YE
      // setInterval(()=>{
      //   document.title = "TextUtils is Amazing"},1500)
      // setInterval(()=>{
      //     document.title = "TextUtils is Trending"},1000)
  }
  
    // else if(mode === 'light'){
    //   setMode('green');
    //   document.body.style.backgroundColor = 'green';
    //   showAlert("Green mode has been enabled","success")}
      
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = "TextUtils - Light Mode";
  }
  }
    

  return (
   <>
  
    <Navbar title="TextUtils" aboutText='About' mode={mode} toggleMode={toggleMode} key={new Date()} />
    <Alert alert={alert}/>
    <div className="container my-3">
   
        <Routes>  
              <Route path="about" element={<About mode={mode} />}/>
            
              <Route path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>}/>      
        </Routes>
    
    </div>
   
   </>
  );
}

export default App;
