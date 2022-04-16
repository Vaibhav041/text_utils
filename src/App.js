import "./App.css";
import React, { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042759";
      showAlert("dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // setAlert("light mode enabled", "success");
      showAlert("light mode enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Website"
          about="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/" element={<TextForm mode={mode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
