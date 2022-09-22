import React, {useState} from "react";
//import components
import { Navbar } from "./components/Navbar";
import { Routes } from "./components/Routes";
import { Footer } from "./components/Footer";

function App() {
  //Using the useState hook to keep track of DarkTheme. We'll initialize DarkTheme to to false
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className="App">
      Hello NEW GUUGLE
    </div>
  );
}

export default App;
