import React from "react"
import { TextareaAutosize } from '@material-ui/core';

function Editor(props) {
    return (
      <section className="markdown__editor relative bg-white p-8">
				<TextareaAutosize
					aria-label="empty textarea"
					placeholder="Empty"
					id="editor"
					value={props.value}
					onChange={props.handleChange}
					className="w-full font-mono"
				/>
      </section>
    )
}

export default Editor
