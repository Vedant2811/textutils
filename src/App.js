import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from 'react'
import Alert from './components/Alert';
import {
	BrowserRouter as Router,
	Routes,
	Route
	// Link
  } from "react-router-dom";
function App() {

  const[mode, setMode] = useState('light'); // by default mode is set to be light
  const[alert, setAlert] = useState('null');// craeted another useState for alert
  
//   This method will be used to set the alert message and its type
  const showAlert = (message, type) =>{
    setAlert({
        msg : message,
        type: type
    })

    // This function is used to dismiss the alert message after 1500ms or 1.5s
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

//   This function is used to change mode of application from light to dark and dark to light
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#464b50';
      showAlert("Dark mode enabled.", "success")
    } else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled.", "success")
    }
  }

  return (
    // <></> these tags are used to bind the other tags inside the return statement because only one tag is allowed
    // to return
    <>
		<Router>
			{/* Here we are calling Navbar component with title props as TextUtils */}
			<Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>

			<Alert alert = {alert}/>

			{/* We are calling Textform component with heading propsas "Enter the text to analyze" inside a container so 
				that textarea is at centre 
				my-3 is used to provide spacing in y-axis by 3 units  */}
			<div className="container my-3">
				<Routes>
					<Route path="/about" element ={<About />}>
						<About />
					</Route>
					<Route exact path="/" element = {<TextForm showAlert = {showAlert} heading = "Enter the text to analyze" mode = {mode}/>}>
					</Route>
				</Routes>

			</div>
		</Router>
    </>
    
  );
}

export default App;