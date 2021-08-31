import React from 'react'
import marked from "marked"

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
        <section className="markdown__previewer bg-white relative p-8">
            <div
							id="preview"
							className="border-none"
							dangerouslySetInnerHTML={markdown()}>
						</div>
        </section>
    )
}

export default Previewer
