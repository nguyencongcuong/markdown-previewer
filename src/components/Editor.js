import React from "react"

function Editor(props) {
    return (
        <section className="markdown__editor relative bg-white p-8">
            <form className="">
                <textarea
                    id="editor"
                    className="h-screen w-full p-8"
                    value={props.value}
                    onChange={props.handleChange}
                />
            </form>
        </section>
    )
}

export default Editor
