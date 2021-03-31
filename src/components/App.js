import React, { Component, useState } from "react";
import { useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
    setRenderBall(false);
    setBallPosition({
      left: "0px",
      top: "0px",
    })
  };
  const start = () => {
    setRenderBall(true);
  }
  const move = (e) => {
    switch (e.keyCode) {
      case 37:
        setX(x - 5);
        setBallPosition({ ...ballPosition, left: `${x}px` });
        break;
      case 38:
        setY(y - 5);
        setBallPosition({ ...ballPosition, top: `${y}px` });
        break;
      case 39:
        setX(x + 5);
        setBallPosition({ ...ballPosition, left: `${x}px` });
        break;
      case 40:
        setY(y + 5);
        setBallPosition({ ...ballPosition, top: `${y}px` });
        break;
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', move);

    return () => {
      document.removeEventListener('keydown', move);
    }
  })

  return (
    <div className="playground">
      {
        renderBall ? <div className="ball" style={{
          position: "absolute",
          top: `${ballPosition.top}`,
          left: `${ballPosition.left}`
        }}>

        </div> : <button onClick={start} className="start">Start</button>
      }
      <button onClick={reset} className="reset">
        Reset
      </button>
    </div>
  );
};

export default App;
