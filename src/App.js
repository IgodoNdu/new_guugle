import React, {useState} from "react";
//import components
import { Navbar } from "./components/Navbar";
import { Routes } from "./components/Routes";
import { Footer } from "./components/Footer";

function App() {
  //Using the useState hook to keep track of DarkTheme. We'll initialize DarkTheme to to false
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    //check if DarTheme mode is selected
    <div className={darkTheme ? 'dark' : ''}>
      {/**If in darTheme mode, make background gray strenght = 900, and text gray strength to 200 */}
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        {/**Rendering the Navbar, Routes & Footer Components */}
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
