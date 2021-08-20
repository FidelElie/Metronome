import React from "react";
import PropTypes from "prop-types";

// ! Library
import { joinClasses } from "../../lib/utiltiies";

const SubHeader = ({ children }) => (
  <h2 className="tracking-tighter text-2xl mb-2">{ children }</h2>
)

const SubSubHeader = ({ children }) => (
  <h3 className="text-gray-500 mb-1 text-xl">{ children }</h3>
)

const Paragraph = ({ children }) => (
  <p className="tracking-tight mb-4">{ children }</p>
)

const Link = ({ href, children }) => (
  <a href={href} className="underline text-yellow-500">{ children }</a>
)

const UnorderedList = ({ id, items}) => (
  <ul className="mb-3 ml-10 text-sm">
    { items.map((item, index) => <li key={`list-${id}-${index}`}>{item}</li>) }
  </ul>
)

const Image = ({ src, alt, width, subtitle }) => (
  <div className="w-full h-full flex flex-col items-center">
    <img src={src} alt={alt} className={joinClasses("h-auto", {
      [width]: width
    })}/>
    { subtitle && <span className="my-5 italic text-gray-500">{ subtitle }</span> }
  </div>
)

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  subtitle: PropTypes.string
}

Image.defaultProps = { width: "w-full" }

export {
  SubHeader,
  SubSubHeader,
  Paragraph,
  Link,
  UnorderedList,
  Image
}
