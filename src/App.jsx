import Dock from "./components/Dock";
import "./app.scss";
import Nav from "./components/Nav";
import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";
import { useState } from "react";

function App() {
  const [windowState, setWindowState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <main>
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
    </main>
  );
}

export default App;
