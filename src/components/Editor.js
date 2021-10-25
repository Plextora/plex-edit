import React, { useState } from "react";
// import hell incoming
import "codemirror/lib/codemirror.css"
import "codemirror/theme/ayu-dark.css"
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"
import { Controlled as ControlledEditor } from "react-codemirror2"


export default function Editor(props) {
    const {
        displayName,
        language,
        value,
        onChange
    } = props

    const [open, setOpen] = useState(true)

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div className = {`edit-container ${open ? '' : 'collapsed'}`}>
            <div className = "edit-title">
                { displayName }
                <button class="button" onClick = {() => setOpen(prevOpen => !prevOpen)}><span>Extend Tab</span></button>
            </div>
            <ControlledEditor 
              onBeforeChange = {handleChange}
              value = {value}
              className = "code-mirror-wrapper"
              options = {{
                  lineWrapping: true,
                  lint: true,
                  mode: language,
                  theme: "ayu-dark",
                  lineNumbers: true
              }}
            />
        </div>
    );
}