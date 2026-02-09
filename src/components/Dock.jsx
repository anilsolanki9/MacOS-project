import React from 'react';
import './dock.scss';

const Dock = ({windowState, setWindowState}) => {
  return (
    <footer className="dock">
      {/* icon-1 */}
      <div className="iconBox" onClick={() => setWindowState({...windowState, github: !windowState.github})}>
        <img src="/doc-icons/github-light.svg" alt="" className="icon github" />
      </div>

      {/* icon-2 */}
      <div className="iconBox" onClick={() => setWindowState({...windowState, note: !windowState.note})}>
        <img src="/doc-icons/note.svg" alt="" className="icon note" />
      </div>

      {/* icon-3 */}
      <div className="iconBox" onClick={() => setWindowState({...windowState, resume: !windowState.resume})}>
        <img src="/doc-icons/pdf-light.svg" alt="" className="icon pdf" />
      </div>

      {/* icon-4 */}
      <div onClick={()=>{window.open('https://calendar.google.com/', "_blank")}} className="iconBox">
        <img
          src="/doc-icons/calender-light.svg"
          alt=""
          className="icon calender"
        />
      </div>

      {/* icon-5 */}
      <div className="iconBox" onClick={() => setWindowState({...windowState, spotify: !windowState.spotify})}>
        <img src="/doc-icons/spotify.svg" alt="" className="icon spotify" />
      </div>

      {/* icon-6 */}
      <div className="iconBox" onClick={()=>{window.open("mailto:anilsolanki.work1@gmail.com", '_blank')}}>
        <img src="/doc-icons/mail-light.svg" alt="" className="icon mail" />
      </div>

      {/* icon-7 */}
      <div className="iconBox" onClick={()=>{window.open('https://www.linkedin.com/in/anil-solanki-150142326/', '_blank')}}>
        <img src="/doc-icons/link-light.svg" alt="" className="icon link" />
      </div>

      {/* icon-8 */}
      <div className="iconBox" onClick={() => setWindowState({...windowState, cli: !windowState.cli})}>
        <img src="/doc-icons/cli-light.svg" alt="" className="icon cli" />
      </div>
    </footer>
  );
};

export default Dock;
