import Dock from "./components/Dock";
import "./app.scss";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import { useState } from "react"; 
import Settings from "./components/windows/Settings";

function App() {
  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    settings: false,
  });

  const [isFullScreen, setIsFullScreen] = useState(false);

  const [wallpaperIndex, setWallpaperIndex] = useState(localStorage.getItem("selectedWallpaper") || 1);

  return (
    <main style={{backgroundImage:`url("/public/wallpapers/${wallpaperIndex}.jpg")`}}>
      {!isFullScreen && (
        <>
          <Nav windowState={windowState} setWindowState={setWindowState} />
          <Dock windowState={windowState} setWindowState={setWindowState} />
        </>
      )}

      {windowState.github && (
        <Github windowName="github" setWindowState={setWindowState} isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} />
      )}
      {windowState.note && (
        <Note windowName="note" setWindowState={setWindowState} isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} />
      )}
      {windowState.resume && (
        <Resume windowName="resume" setWindowState={setWindowState} isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} />
      )}
      {windowState.spotify && (
        <Spotify windowName="spotify" setWindowState={setWindowState} isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} />
      )}
      {windowState.cli && (
        <Cli windowName="cli" setWindowState={setWindowState} isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} />
      )}
      {windowState.settings && (
        <Settings windowName="settings" setWindowState={setWindowState} isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen} setWallpaperIndex={setWallpaperIndex} />
      )}
    </main>
  );
}

export default App;
