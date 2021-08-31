import React, { useState, useEffect } from "react"

import hljs from 'highlight.js'

import Editor from "./components/Editor"
import Previewer from "./components/Previewer"
import Markdown from "./markdown.md"

function App() {

    const [value, setValue] = useState("")

    useEffect(() => {
        fetch(Markdown)
        .then(res => res.text())
        .then(text => {
            return setValue(text)
        });
    }, [])

    useEffect(() => {
        hljs.highlightAll()
    })

    return (
        <React.Fragment>
            <main className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Editor
									value={value}
									handleChange={(e) => setValue(e.target.value)}
								/>
                <Previewer source={value} />
            </main>
        </React.Fragment>
    )
}

export default App
