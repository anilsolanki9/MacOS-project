import React from 'react'
import MacWindow from './MacWindow'
import './resume.scss'

const Resume = ({windowName, setWindowState, isFullScreen, setIsFullScreen}) => {
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState} isFullScreen={isFullScreen} setIsFullScreen={setIsFullScreen}>
        <div className="resume-window">
            <embed src="/resume.pdf" frameBorder="0"></embed>
        </div>
    </MacWindow>
  )
}

export default Resume