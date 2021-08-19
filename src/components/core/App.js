import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

import Navbar from "./Navbar";
import Footer from "./Footer";

const App = (props) => {
  const { title, align, navbarFixed, children } = props;

  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Helmet>
        <title>{ title }</title>
      </Helmet>
      <Navbar fixed={navbarFixed}/>
      <div className={`container mx-auto flex flex-grow flex-col items-center max-w-5xl justify-${align}`}>
        { children }
      </div>
      <Footer/>
    </div>
  )
}

App.propTypes = {
  title: PropTypes.string,
  align: PropTypes.string,
  navbarFixed: PropTypes.bool,
  children: PropTypes.node.isRequired
}

App.defaultProps = {
  title: "MetroNome | Keep The Beat",
  align: "center",
  navbarFixed: false,
}


export default App;
