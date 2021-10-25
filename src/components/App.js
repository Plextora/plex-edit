import React, { useState } from "react";
import Editor from "./Editor";

function App() {
  const [html, setHTML] = useState("")
  const [css, setCSS] = useState("")
  const [js, setJS] = useState("")

  const srcDoc = `
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
  `

  return (
    <>
      <div className = "pane top">
        <Editor
        language = "xml" 
        displayName = "HTML" 
        value = {html} onChange = {setHTML} />
        <Editor 
        language = "css" 
        displayName = "CSS" 
        value = {css} onChange = {setCSS} />
        <Editor 
        language = "javascript" 
        displayName = "JAVASCRIPT" 
        value = {js} onChange = {setJS} />
      </div>
      <div className = "pane">
        <iframe
         srcDoc = {srcDoc}
         title = "live-website"
         sandbox = "allow-scripts"
         frameBorder = "2"
         width = "100%"
         height = "100%" // All of this sets up the live preview of your website in the editor
        />
      </div>
    </>
  );
}

export default App;
