import React from "react";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="w-full bg-white border-t">
      <div className="container mx-auto py-3 px-5">
        <div className="w-full flex flex-col items-center space-y-2">
          <FooterLinks/>
          <FooterCopyright/>
        </div>
      </div>
    </div>
  )
}

const FooterLinks = () => (
  <div className="w-full flex justify-between items-center" id="footer-links">
    <div className="flex items-center space-x-3 text-sm">
      <Link to="/">
        Home
      </Link>
      <Link to="/about">
        About
      </Link>
    </div>
    <div className="flex items-center space-x-3">
      <a href="https://github.com/FidelElie/Metronome" className="flex items-center">
        <span className="material-icons">
          code
        </span>
      </a>
      <a href="https://www.fidelelie.com" className="flex items-center">
        <span className="material-icons">
          public
        </span>
      </a>
    </div>
  </div>
)

const FooterCopyright = () => (
  <div className="w-full flex justify-center items-center">
    <span className="text-sm text-gray-500">
      &copy; Copyright Fidel Pierre Elie 2021
    </span>
  </div>
)

export default Footer;
