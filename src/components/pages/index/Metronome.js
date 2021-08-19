import React from "react";
import { useSpring, animated } from "react-spring";

const Metronome = (props) => {
  return (
    <div className="h-full w-full flex items-end justify-center">
      <Body>
        <Ruler/>
        <Head {...props}/>
        <Base/>
      </Body>
    </div>
  )
}

const Body = ({ children }) => (
  <div className="w-20 shadow md:w-40">
    <div className="w-full h-8 rounded-tr-md rounded-tl-md bg-gray-200"/>
    <div className="bg-gray-500 w-full h-32 transform relative md:h-64">
      { children }
    </div>
  </div>
)

const Head = (props) => {
  const { metronomeBPM, metronomeRunning } = props;

  const springProps = useSpring({
    config: {
      duration: (1 / (metronomeBPM / 60)) * 1000
    },
    reset: true,
    pause: metronomeBPM === 0 || !metronomeRunning,
    loop: { reverse: true },
    from: { transform: "rotate(45deg)"},
    to: { transform: "rotate(-45deg)"}
  });

  return (
    <animated.div className="origin-bottom absolute bottom-1 h-36 w-1 bg-black left-1/2 -translate-x-1/2 shadow rounded-sm md:h-80" style={springProps}>
      <div className="transform absolute origin-center top-5 h-3 w-3 bg-yellow-600 rounded-sm left-1/2 -translate-x-1/2 md:h-5 md:w-5">

      </div>
    </animated.div>
  )
}

const Base = () => (
  <div className="transform absolute bottom-0 h-4 w-full bg-red-500 left-1/2 -translate-x-1/2"/>
)

const Ruler = () => (
  <div className="transform absolute h-32 w-4 bottom-0 bg-gray-400 left-1/2 -translate-x-1/2 md:h-64" id="head"/>
)

export default Metronome;
