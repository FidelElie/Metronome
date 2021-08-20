import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ! Assets
import Logo from "../../assets/logo.svg";

// ! Library
import { joinClasses } from "../../lib/utiltiies";

const Navbar = (props) => {
  const { fixed } = props;
  const [pathname, setPathname] = useState(null);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <nav className={joinClasses("w-full border-b bg-white", {
      "fixed top-0 left-0": fixed
      })}
    >
      <div className="z-10 container mx-auto py-3 px-5">
        <div className="w-full flex justify-between items-center">
          <Link to="/">
            <span className="flex space-x-1 items-center">
              <img src={Logo} className="w-10 h-10" alt="Logo"></img>
              <h1 className="text-xl tracking-tighter">MetroNome &trade;</h1>
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
    </nav>
  )
}

Navbar.propTypes = { fixed: PropTypes.bool, }
Navbar.defaultProps = { fixed: false, }

export default Navbar;
