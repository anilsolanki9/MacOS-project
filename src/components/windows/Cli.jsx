import React from "react";
import MacWindow from "./MacWindow";
import ConsoleEmulatorModule from "react-console-emulator";
import "./cli.scss";

const ConsoleEmulator = ConsoleEmulatorModule.default;

let commands = {
  echo: {
    description: "Echo a passed string.",
    usage: "echo <string>",
    fn: (...args) => args.join(" "),
  },
  about: {
    description: "Short bio about the portfolio owner.",
    usage: "about",
    fn: () =>
      "Hi — I build interactive React experiences. This portfolio demos projects and skills.",
  },
  skills: {
    description: "List primary skills.",
    usage: "skills",
    fn: () => "React • JavaScript • CSS • Node.js • UX",
  },
  projects: {
    description: "Show a few project names.",
    usage: "projects",
    fn: () => "Portfolio, Spotify UI clone, Notes app, CLI emulator",
  },
  github: {
    description: "Show the GitHub profile link.",
    usage: "github",
    fn: () => "https://github.com/your-username",
  },
  resume: {
    description: "Quick resume summary.",
    usage: "resume",
    fn: () => "Frontend developer with experience building React apps.",
  },
  contact: {
    description: "How to contact.",
    usage: "contact",
    fn: () => "Email: hello@example.com — LinkedIn: linkedin.com/in/your-name",
  },
};

// add a dynamic help command that lists available commands and usage

const welcomeMessage = [
  "Welcome to the portfolio CLI — interactive commands below:",
  "",
  ...Object.keys(commands).map((k) => `${k}  — ${commands[k].description}`),
  "",
  "Type 'help' for usage examples.",
];

const Cli = ({ windowName, setWindowState }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
      width="45vw"
    >
      <div className="cli-window">
        <ConsoleEmulator
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"anilsolanki:~$"}
          promptLabelStyle={{ color: "#549cf4" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
