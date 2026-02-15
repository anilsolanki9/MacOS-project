import Dock from "./components/Dock";
import "./app.scss";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import { useEffect, useState } from "react";
import Settings from "./components/windows/Settings";
import Clock from "./components/Clock";
import Todo from "./components/windows/TodoList";

function App() {
  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    settings: false,
    todo: false,
  });

  const [isFullScreen, setIsFullScreen] = useState(false);

  const [wallpaperIndex, setWallpaperIndex] = useState(
    Number(localStorage.getItem("selectedWallpaper")) || 1,
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--wallpaper",
      `url("/wallpaper-high/${wallpaperIndex}.jpg")`,
    );
    localStorage.setItem("selectedWallpaper", wallpaperIndex);
  }, [wallpaperIndex]);

  function preloadAndSetWallpaper(index) {
    // already genarates image, so to make loading faster
    const img = new Image();

    img.decoding = "async";
    img.fetchPriority = "high";
    img.src = `/wallpaper-high/${index}.jpg`; // use .jpg if you didn’t convert

    img.onload = () => {
      setWallpaperIndex(index);
    };
  }

  return (
    <main>
      {!isFullScreen && (
        <>
          <Nav windowState={windowState} setWindowState={setWindowState} />
          <Dock windowState={windowState} setWindowState={setWindowState} />
        </>
      )}

      <Clock />

      {windowState.github && (
        <Github
          windowName="github"
          setWindowState={setWindowState}
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
        />
      )}
      {windowState.note && (
        <Note
          windowName="note"
          setWindowState={setWindowState}
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
        />
      )}
      {windowState.resume && (
        <Resume
          windowName="resume"
          setWindowState={setWindowState}
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
        />
      )}
      {windowState.spotify && (
        <Spotify
          windowName="spotify"
          setWindowState={setWindowState}
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
        />
      )}
      {windowState.cli && (
        <Cli
          windowName="cli"
          setWindowState={setWindowState}
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
        />
      )}
      {windowState.settings && (
        <Settings
          windowName="settings"
          setWindowState={setWindowState}
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
          // setWallpaperIndex={setWallpaperIndex}
          setWallpaper={preloadAndSetWallpaper}
        />
      )}
      {windowState.todo && (
        <Todo
          windowName="todo"
          setWindowState={setWindowState}
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
        />
      )}
    </main>
  );
}

export default App;
