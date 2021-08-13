import React from 'react'
import marked from "marked"
import Badge from "./Badge"

function Previewer(props) {
    marked.setOptions({
        pedantic: false,
        gfm: true,
        breaks: true,
        sanitize: false,
        smartLists: true,
    });
    const markdown = () => {
        return {
            __html: marked(props.source)
        }
    }
    return (
        <section className="markdown__previewer">
            <Badge name="Previewer" />
            <div id="preview" dangerouslySetInnerHTML={markdown()}></div> 
        </section>
    )
}

export default Previewer