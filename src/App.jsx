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

  return (
    <main>
      <Nav windowState={windowState} setWindowState={setWindowState} />
      <Dock windowState={windowState} setWindowState={setWindowState} />

      {windowState.github && <Github windowName="github" setWindowState={setWindowState} />}
      {windowState.note && <Note windowName="note" setWindowState={setWindowState} />}
      {windowState.resume && <Resume windowName="resume" setWindowState={setWindowState} />}
      {windowState.spotify && <Spotify windowName="spotify" setWindowState={setWindowState} />}
      {windowState.cli && <Cli windowName="cli" setWindowState={setWindowState} />}
    </main>
  );
}

export default App;
