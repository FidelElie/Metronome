import React from "react";
import { Link } from "react-router-dom";

// Assets
import Logo from "../assets/logo.svg";

export default function Page404() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl mb-10 tracking-tighter font-light">MetroNome</h1>
      <h2 className="text-2xl text-red-500 mb-7 flex items-center tracking-tighter">
        Page Not Found
        <span className="ml-3 material-icons">
          sentiment_very_dissatisfied
        </span>
      </h2>
      <img src={Logo} alt="Logo" className="h-52 w-52 mb-5"/>
      <Link to="/" className="px-4 py-2 rounded-md shadow-lg bg-gray-500 text-white font-semibold flex items-center tracking-tighter">
        <span className="material-icons mr-3 text-2xl">
          home
        </span>
        Back To Home
      </Link>
    </div>
  )
}
