import React from "react";
import MacWindow from "./MacWindow";
import ConsoleEmulatorModule from "react-console-emulator";
import "./cli.scss";

const ConsoleEmulator = ConsoleEmulatorModule.default;

const commands = {
  echo: {
    description: "Print text back to the terminal.",
    usage: "echo <message>",
    fn: (...args) => args.join(" "),
  },

  about: {
    description: "Who I am & what I build.",
    usage: "about",
    fn: () =>
      `
👋 Hi, I'm Anil Solanki
Full Stack Developer | BCA (2027)

I build clean, interactive, and performance-focused web experiences.
From elegant UI to solid backend logic — I enjoy crafting things that feel smooth, modern, and purposeful.
    `.trim(),
  },

  skills: {
    description: "My technical skill stack.",
    usage: "skills",
    fn: () =>
      `
⚡ Frontend
HTML • CSS • SCSS • JavaScript (ES6+) • React • Tailwind

⚙ Backend
Node.js • Express • MongoDB • REST APIs • JWT • bcrypt

🛠 Tools
Git • GitHub • Postman • Vercel

📚 Currently Learning
TypeScript • Next.js • Framer Motion • GSAP • Three.js • Docker • AWS
    `.trim(),
  },

  projects: {
    description: "Highlighted real-world projects.",
    usage: "projects",
    fn: () =>
      `
🚀 Selected Projects

• Astratto — Design Agency Website
  Premium React + Tailwind site with responsive layouts and AI-generated visuals.

• Productivity Dashboard
  Todo, Planner, Pomodoro, Weather & Goals — all in one smooth SPA.

• Web-Based Visual Editor
  Figma-inspired editor with drag, resize, layers & export support.
    `.trim(),
  },

  github: {
    description: "Explore my open-source work.",
    usage: "github",
    fn: () => "🐙 GitHub → https://github.com/anilsolanki9",
  },

  resume: {
    description: "Quick professional summary.",
    usage: "resume",
    fn: () =>
      `
📄 Resume Snapshot

Full Stack Developer with hands-on experience in React, Node.js, Express, and MongoDB.
Strong at building responsive UIs, API integrations, and secure authentication systems.
Actively seeking opportunities to grow through real-world challenges.
    `.trim(),
  },

  contact: {
    description: "How to reach me.",
    usage: "contact",
    fn: () =>
      `
📬 Contact

Email    → anilsolanki.work1@gmail.com
LinkedIn → https://linkedin.com/in/anil-solanki
    `.trim(),
  },
};

// add a dynamic help command that lists available commands and usage

const welcomeMessage = [
  "        ANIL SOLANKI - DEV TERMINAL            ",
  "   Full Stack Developer • BCA (2027)           ",
  "------------------------------------",
  "Type a command to explore my work:",
  "",
  "› help       - List all available commands",
  "› clear      - Clear the terminal screen",
  ...Object.keys(commands).map(
    (cmd) => `› ${cmd.padEnd(10)} - ${commands[cmd].description}`,
  ),
  "",
  "Tip: start with `about` or `projects` 🚀",
];

const Cli = ({ windowName, setWindowState, isFullScreen, setIsFullScreen }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
      isFullScreen={isFullScreen}
      setIsFullScreen={setIsFullScreen}
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
