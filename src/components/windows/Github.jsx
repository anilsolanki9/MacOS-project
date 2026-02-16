import React from "react";
import GithubData from "../../assets/Github.json";
import MacWindow from "./MacWindow";
import "./github.scss";

const Github = ({ windowName, setWindowState, isFullScreen, setIsFullScreen }) => {
  return (
    <MacWindow
      windowName={windowName}
      setWindowState={setWindowState}
      isFullScreen={isFullScreen}
      setIsFullScreen={setIsFullScreen}>
      {/* As children pass hoga .cards pura in the MacWindow */}
      <div className="cards">
        {GithubData.map((project, idx) => {
          return (
            <div key={idx} className="card">
              <div className="content">
                <div className="card-image">
                  <img
                    loading="eager"
                    width="100%"
                    height="200px"
                    src={project.image}
                    alt=""
                  />
                </div>
                <h2>{project.title}</h2>
                <p className="description">{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag, idx) => {
                    return tag ? (
                      <p key={idx} className="tag">
                        {tag}
                      </p>
                    ) : (
                      "Loading..."
                    );
                  })}
                </div>
              </div>

              <div className="urls">
                <a
                  title="Go to Github Repository"
                  className="repoLink"
                  target="_blank"
                  href={project.repoLink}>
                  Repsitory
                </a>
                <a
                  title="Open Live Webpage"
                  className="liveLink"
                  target="_blank"
                  href={project.demoLink}>
                  Live Link
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </MacWindow>
  );
};

export default Github;
