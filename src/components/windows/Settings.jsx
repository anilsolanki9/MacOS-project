import React from "react";
import MacWindow from "./MacWindow";
import "./settings.scss";
const ids = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37
];

const Settings = ({
  windowName,
  setWindowState,
  isFullScreen,
  setIsFullScreen,
  setWallpaperIndex,
}) => {
  const handleWallpaperChange = (e) => {
    const selectedId = parseInt(e.target.id);
    setWallpaperIndex(selectedId);
    localStorage.setItem("selectedWallpaper", selectedId);
  };

  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
      isFullScreen={isFullScreen}
      setIsFullScreen={setIsFullScreen}
      width="70vw"
    >
      <div className="wallpapers">
        {ids.map((id) => {
          return (
            <div className="wallpaper">
              <img
                loading="eager"
                className="wallpaperImage"
                src={`/wallpapers/${id}.jpg`}
                alt=""
                id={id}
                onClick={handleWallpaperChange}
              />
            </div>
          );
        })}
      </div>
    </MacWindow>
  );
};

export default Settings;
