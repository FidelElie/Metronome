import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// ! Library
import { joinClasses } from "../../lib/utiltiies";

const Footer = (props) => {
  const { fixed } = props

  return (
    <footer className={joinClasses("w-full bg-white border-t", {
      "fixed bottom-0 left-0": fixed
    })}>
      <div className="container mx-auto py-3 px-5">
        <div className="w-full flex flex-col items-center space-y-2">
          <FooterLinks/>
          <FooterCopyright/>
        </div>
      </div>
    </footer>
  )
}

const FooterLinks = () => (
  <div className="w-full flex justify-between items-center" id="footer-links">
    <div className="flex items-center space-x-3 text-sm">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
    <div className="flex items-center space-x-3">
      <a href="https://github.com/FidelElie/Metronome" className="flex items-center">
        <span className="material-icons">code</span>
      </a>
      <a href="https://www.fidelelie.com" className="flex items-center">
        <span className="material-icons">public</span>
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

Footer.propTypes = { fixed: PropTypes.bool }
Footer.defaultProps = { fixed: false }

export default Footer;
