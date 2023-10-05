import Navbar from './components/Navbar';
import Home from './components/home/Home'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {

  //dark and light mode
  const [mode, setMode] = useState("light");
  const [handleTxt, setHandleTxt] = useState('Dark mode');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setHandleTxt('Light mode')
      document.body.style.backgroundColor = "#1B2430";
      showAlert("Dark mode is set", "success");
      // document.title='TextUtils-Dark';   //change title dynamically
    } else {
      setMode('light')
      setHandleTxt('Dark mode')
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is set", "success");
    }
  }

  //alert enable and diable
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About Us" contact="Contact Us" mode={mode} toggleMode={toggleMode} handleTxt={handleTxt} showAlert={showAlert}/>

        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home mode={mode} toggleMode={toggleMode} />} />
            <Route exact path="/textEdit" element={<TextForm heading="Enter your text here: " mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} />} />
            <Route exact path="/contact" element={<Contact mode={mode} toggleMode={toggleMode} />} />
          </Routes>
        </div>
      </Router>
      <Footer mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;
