import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState('primary');
  const [lightColor, setLightColor] = useState('#E5EAF6');
  const [darkColor, setDarkColor] = useState('#042743');
  const [textColor, setTextColor] = useState('black');

  document.body.style.backgroundColor = mode === 'light' ? lightColor : darkColor;

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleBlueDarkMode = () => {
    if(document.getElementById('flexSwitchCheckDefault1').checked === true){
      setMode('dark');
      setTheme('primary');
      document.getElementById('flexSwitchCheckDefault2').checked = false;
      document.getElementById('flexSwitchCheckDefault3').checked = false;
      setDarkColor('#042743');
      setTextColor('white');
      document.body.style.backgroundColor = '#042743';
      showAlert("Blue dark mode has been enabled", "primary");
      document.title = 'TextUtils - Blue Dark Mode';
    }
    else {
      setMode('light');
      setTheme('primary');
      document.getElementById('flexSwitchCheckDefault2').checked = false;
      document.getElementById('flexSwitchCheckDefault3').checked = false;
      setLightColor('#E5EAF6');
      setTextColor('black');
      document.body.style.backgroundColor = '#E5EAF6';
      showAlert("Light mode has been enabled", "primary");
      document.title = 'TextUtils - Blue Light Mode';
    }
  }

  const toggleGreenDarkMode = () => {
    if(document.getElementById('flexSwitchCheckDefault2').checked === true){
      setMode('dark');
      setTheme('success');
      document.getElementById('flexSwitchCheckDefault1').checked = false;
      document.getElementById('flexSwitchCheckDefault3').checked = false;
      setDarkColor('#2E342C');
      setTextColor('white');
      document.body.style.backgroundColor = '#2E342C';
      showAlert("Green dark mode has been enabled", "success");
      document.title = 'TextUtils - Green Dark Mode';
    }
    else {
      setMode('light');
      setTheme('success');
      document.getElementById('flexSwitchCheckDefault1').checked = false;
      document.getElementById('flexSwitchCheckDefault3').checked = false;
      setLightColor('#F0F8ED')
      setTextColor('black');
      document.body.style.backgroundColor = '#F0F8ED';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Green Light Mode';
    }
  }

  const toggleRedDarkMode = () => {
    if(document.getElementById('flexSwitchCheckDefault3').checked === true){
      setMode('dark');
      setTheme('danger');
      document.getElementById('flexSwitchCheckDefault1').checked = false;
      document.getElementById('flexSwitchCheckDefault2').checked = false;
      setDarkColor('#632D2E');
      setTextColor('white');
      document.body.style.backgroundColor = '#632D2E';
      showAlert("Red dark mode has been enabled", "danger");
      document.title = 'TextUtils - Red Dark Mode';
    }
    else {
      setMode('light');
      setTheme('danger');
      document.getElementById('flexSwitchCheckDefault1').checked = false;
      document.getElementById('flexSwitchCheckDefault2').checked = false;
      setLightColor('#F6E8E8');
      setTextColor('black');
      document.body.style.backgroundColor = '#F6E8E8';
      showAlert("Light mode has been enabled", "danger");
      document.title = 'TextUtils - Red Dark Mode';
    }
  }
  
  return (
    <>
      <Router>
        <Navbar title = "TextUtils" homeText = "HomePage" aboutText = "AboutTextUtils" mode={mode} theme={theme} lightColor={lightColor} darkColor={darkColor} toggleBlueDarkMode={toggleBlueDarkMode} toggleGreenDarkMode={toggleGreenDarkMode} toggleRedDarkMode={toggleRedDarkMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} theme={theme} lightColor={lightColor} darkColor={darkColor} textColor={textColor}/>}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode} theme={theme} lightColor={lightColor} darkColor={darkColor} textColor={textColor}/>}></Route>
            {/* exact is for that the path exactly and completely matches with the given path
                For Example: If we have:
                  /users --- component1 and
                  /users/home --- component2
                  In this case, if you not use exact and if you want to render component2, it still renders component 1 because without exact it will partial matching, so when /users partially matches in component2 also, it still renders component1.
                  To avoid such situation, we use exact */
            }
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
