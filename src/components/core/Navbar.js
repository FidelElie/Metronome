import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";

const Navbar = (props) => {
  const { fixed } = props;
  const [pathname, setPathname] = useState(null);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <div className={`w-full border-b bg-white ${ fixed ? "fixed" : ""}`}>
      <div className="z-10 container mx-auto py-3 px-5">
        <div className="w-full flex justify-between items-center">
          <Link to="/">
            <span className="flex space-x-1 items-center">
              <img src={Logo} className="w-10 h-10" alt="Logo"></img>
              <h1 className="text-xl tracking-tighter">metronome</h1>
            </span>
          </Link>
          <div className="flex text-xs items-center space-x-2">
            {
              pathname && (
                <Link
                  to={pathname === "/" ? "/about" : "/"}
                  className="flex items-center justify-center"
                >
                  <span className="material-icons">
                    { pathname === "/" ? "help_outline" : "home"}
                  </span>
                </Link>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = { fixed: PropTypes.bool, }

Navbar.defaultProps = { fixed: false, }

export default Navbar;
