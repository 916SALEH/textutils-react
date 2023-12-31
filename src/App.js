import { type } from '@testing-library/user-event/dist/type';
import './App.css';
import Alert from './components/Alert';
import Navbar  from './components/Navbar';
import TextForm  from './components/TextForm';
//import About from './components/About';
import React, { useState  } from 'react';
//import {
 // BrowserRouter as Router,
 // Routes,
 // Route
  
//} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light')

  const[alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
  
    })
    
  setTimeout(() => {
    setAlert(null)
  }, 1500);

  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#020d1c';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
     showAlert("Light mode has been enabled","success");
    } 

  }
  return (
    <>

    {/*<Router>*/}


    <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

   {/* <Routes>
          <Route  exact path="/about" element={ <About />}>
             </Route>
          <Route exact path="/" element={ }>


   
          </Route>
  </Routes>*/}
  <TextForm heading=" Enter text to analyze here" mode={mode}/>
        </div>
        {/*</Router>*/}
    
    
    
    
    
    
    
    
    </>
      

  );
}

export default App;
