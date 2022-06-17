
// import Navbar from '../components/Navbar';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import {BrowserRouter as Router,
  //  Switch,
   Route,
  //  Link,
   Routes
  } from "react-router-dom";
import About from './components/About';


function App() {
  const[Mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
  setTimeout(()=>{
    setAlert(null);
  },1500);
}
  const toggleMode = ()=>{
    if(Mode === 'light') {
       setMode('dark');
       document.body.style.background = '#778fa7';
       showAlert("Dark mode has been enabled","success");
    }
    else{
       setMode('light');
       document.body.style.background = 'white';
       showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
    <h2>SUNIL RATNAKAR PAWAR</h2>
    <Navbar title="Text Design" about="About Text" mode={Mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3"> 
    <TextForms showAlert={showAlert} heading = "Enter the text you want to change" mode={Mode}/>
       <Routes>
        {/* <Route exact path="/" element={<TextForms showAlert={showAlert} heading = "Enter the text you want to change" mode={Mode}/>} /> */}
        <Route exact path="/about" element={<About/>} />
      </Routes>
    </div>
     </Router>
    </>
  );
}

export default App;
