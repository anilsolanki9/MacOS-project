import React from 'react';
import './dock.scss';

const Dock = ({windowState, setWindowState}) => {
  return (
    <footer className="dock">
      {/* icon-1 */}
      <div className="iconBox" onClick={() => setWindowState({...windowState, github: !windowState.github})}>
        <img src="/doc-icons/github-desktop.webp" alt="" className="icon github" />
      </div>

      {/* icon-2 */}
      <div className="iconBox" onClick={() => setWindowState({...windowState, note: !windowState.note})}>
        <img src="/doc-icons/notes.webp" alt="" className="icon note" />
      </div>

      {/* icon-3 */}
      <div className="iconBox" onClick={() => setWindowState({...windowState, resume: !windowState.resume})}>
        <img src="/doc-icons/resume.webp" alt="" className="icon pdf" />
      </div>

      {/* icon-4 */}
      <div onClick={()=>{window.open('https://calendar.google.com/', "_blank")}} className="iconBox">
        <img
          src="/doc-icons/MacCalender.webp"
          alt=""
          className="icon calender"
        />
      </div>

      {/* icon-5 */}
      <div className="iconBox" onClick={() => setWindowState({...windowState, spotify: !windowState.spotify})}>
        <img src="/doc-icons/music.webp" alt="" className="icon spotify" />
      </div>

      {/* icon-6 */}
      <div className="iconBox" onClick={()=>{window.open("mailto:anilsolanki.work1@gmail.com", '_blank')}}>
        <img src="/doc-icons/MacMail.webp" alt="" className="icon mail" />
      </div>

      {/* icon-7 */}
      <div className="iconBox" onClick={()=>{window.open('https://www.linkedin.com/in/anil-solanki-150142326/', '_blank')}}>
        <img src="/doc-icons/contact.webp" alt="" className="icon link" />
      </div>

      {/* icon-8 */}
      <div className="iconBox" onClick={() => setWindowState({...windowState, cli: !windowState.cli})}>
        <img src="/doc-icons/terminal.webp" alt="" className="icon cli" />
      </div>

      {/* icon-9 */}
      <div className="iconBox" onClick={() => setWindowState({...windowState, settings: !windowState.settings})}>
        <img src="/doc-icons/settings.webp" alt="" className="icon settings" />
      </div>
    </footer>
  );
};

export default Dock;
