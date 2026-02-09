import React from 'react'
import MacWindow from './MacWindow'
import './spotify.scss'

const Spotify = ({windowName, setWindowState, isFullScreen, setIsFullScreen}) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState} isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen}>
        <div className="spotify-window">
            <iframe data-testid="embed-iframe" style={{borderRadius:'0px'}} src="https://open.spotify.com/embed/playlist/7B8glHHGH2AU71tgpnmUJF?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify