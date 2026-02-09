import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MacWindow from "./MacWindow";
import "./notes.scss";

const Note = ({windowName, setWindowState}) => {
  const [markdown, setMarkdown] = useState(null);

  // Removed part from UI => <Markdown>{markdown}</Markdown> : <p>Loading...</p>

  useEffect(() => {
    fetch("/note.txt")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="note-window">
        {markdown ? (
          <SyntaxHighlighter language="typescript" style={atelierDuneDark}>
            {markdown}
          </SyntaxHighlighter>
        ) : (
          ""
        )}
      </div>
    </MacWindow>
  );
};

export default Note;
