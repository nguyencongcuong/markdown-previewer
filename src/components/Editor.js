import React from "react"
import Badge from "./Badge"

function Editor(props) {
    return (
        <section className="markdown__editor">
            <Badge name="Editor" />
            <form className="w-100 h-100">
                <textarea
                    id="editor"
                    style={{ background: "transparent", border: "none", fontFamily: "monospace", fontSize: "0.8rem", height: "100%" }}
                    className="w-100"
                    value={props.value}
                    onChange={props.handleChange}
                />
            </form>
        </section>
    )
}

export default Editor