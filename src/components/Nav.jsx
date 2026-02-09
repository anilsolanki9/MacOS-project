import React from 'react';
import './nav.scss';
import DateTime from './DateTime';

const Nav = ({windowState, setWindowState}) => {
  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="/nav-icons/apple.svg" alt="" />
        </div>
        <div className="nav-item first">
          <p>Anil Solanki</p>
        </div>
        <div className="nav-item">
          <p>File</p>
        </div>
        <div className="nav-item">
          <p>Window</p>
        </div>
        <div className="nav-item">
          <p className='terminal-btn' onClick={() => setWindowState({...windowState, cli: !windowState.cli})}>Terminal</p>
        </div>
      </div>
      <div className="right">
        <div className="wifi-icon">
          <img src="/nav-icons/wifi.svg" alt="" />
        </div>
        <DateTime />
      </div>
    </nav>
  );
};

export default Nav;
