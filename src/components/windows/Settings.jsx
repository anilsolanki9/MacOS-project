import React from "react";
import MacWindow from "./MacWindow";
import "./settings.scss";
const WALLPAPER_COUNT = 37;
const ids = Array.from({ length: WALLPAPER_COUNT }, (_, i) => i + 1);

const Settings = ({
  windowName,
  setWindowState,
  isFullScreen,
  setIsFullScreen,
  setWallpaper,
}) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
      isFullScreen={isFullScreen}
      setIsFullScreen={setIsFullScreen}
      width="70vw">
      <div className="wallpapers">
        {ids.map((id) => {
          return (
            <div className="wallpaper" key={id}>
              <img
                width={"100%"}
                height={"100%"}
                loading="lazy"
                decoding="async"
                className="wallpaperImage"
                src={`/wallpaper-thumbnails/${id}.jpg`}
                alt=""
                id={id}
                onClick={() => {
                  setWallpaper(id);
                }}
                onLoad={(e) => e.target.classList.add("loaded")}
              />
            </div>
          );
        })}
      </div>
    </MacWindow>
  );
};

export default Settings;
