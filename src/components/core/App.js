import React from "react";
import Navbar from "./Navbar";

const App = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Navbar/>
      <div className="container mx-auto flex flex-grow flex-col items-center justify-center">
        { children }
      </div>
    </div>
  )
}

export default App;
