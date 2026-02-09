import React from "react";
import "./window.scss";
import { Rnd } from "react-rnd";

const MacWindow = ({
  children,
  width = "37vw",
  height = "37vw",
  windowName,
  setWindowState,
  isFullScreen,
  setIsFullScreen,
}) => {
  console.log(isFullScreen);
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
      enableResizing={!isFullScreen}
      disableDragging={isFullScreen}
      className={`mac-window ${isFullScreen ? "full-screen" : ""}`}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              className="dot red"
              onClick={() => {
                setWindowState((state) => ({ ...state, [windowName]: false }));
                if (isFullScreen) setIsFullScreen(false);
              }}
            >
              <img src="/window-nav-icons/cross.svg" alt="" />
            </div>
            <div className="dot yellow">
              <img src="/window-nav-icons/minus.svg" alt="" />
            </div>
            <div
              className="dot green"
              onClick={() => {
                setIsFullScreen(isFullScreen ? false : true);
              }}
            >
              <img src="/window-nav-icons/expand.svg" alt="" />
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
