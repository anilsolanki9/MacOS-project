import React from "react";
import "./window.scss";
import { Rnd } from "react-rnd";

const MacWindow = ({
  children,
  width = "37vw",
  height = "37vw",
  windowName,
  setWindowState,
}) => {
  // console.log(children)

  return (
    <Rnd
      default={{
        x: 100,
        y: 60,
        width: width,
        height: height,
      }}
      minWidth={350}
      minHeight={300}
      // bounds="window"
      // dragHandleClassName="nav"
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              className="dot red"
              onClick={() =>
                setWindowState((state) => ({ ...state, [windowName]: false }))
              }
            >
              <img src="/public/window-nav-icons/cross.svg" alt="" />
            </div>
            <div className="dot yellow">
              <img src="/public/window-nav-icons/minus.svg" alt="" />
            </div>
            <div className="dot green">
              <img src="/public/window-nav-icons/expand.svg" alt="" />
            </div>
          </div>

          <div className="title">
            <p>anilsolankii - zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
