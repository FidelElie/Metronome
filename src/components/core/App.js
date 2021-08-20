import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

// ! Library
import { joinClasses } from "../../lib/utiltiies";

// ! Components
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = (props) => {
  const {
    title,
    vertical,
    horizontal,
    navbarFixed,
    footerFixed,
    children
  } = props;

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <Helmet>
        <title>{ title }</title>
      </Helmet>
      <Navbar fixed={navbarFixed}/>
      <div className={
        joinClasses("container px-10 mx-auto flex flex-grow flex-col max-w-5xl box-border md:px-0", {
          [`justify-${vertical}`]: vertical,
          [`items-${horizontal}`]: horizontal,
          "py-28": vertical === "start",
        })
      }>
        { children }
      </div>
      <Footer fixed={footerFixed}/>
    </div>
  )
}

App.propTypes = {
  title: PropTypes.string,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  navbarFixed: PropTypes.bool,
  footerFixed: PropTypes.bool,
  children: PropTypes.node.isRequired
}

App.defaultProps = {
  title: "MetroNome | Keep The Beat",
  vertical: "center",
  horizontal: "center",
  navbarFixed: false,
  footerFixed: false,
}


export default App;
