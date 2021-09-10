import React, { useState, useEffect } from "react"

import hljs from 'highlight.js'

import Editor from "./components/Editor"
import Previewer from "./components/Previewer"
import Markdown from "./markdown.md"

import { Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	grid: {
		backgroundColor: theme.palette.primary.dark
	}
}))

function App() {

	const [value, setValue] = useState("")
	const classes = useStyles();

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
			<Grid 
				container
				className={classes.grid}
			>
				<Grid 
					item
					xs={12}
					sm={4}
					children={
						<Editor
							value={value}
							handleChange={(e) => setValue(e.target.value)}
						/>
					}
				/>	
				<Grid 
					item
					xs={12}
					sm={8}
					children={<Previewer source={value} />}
				/>
			</Grid>
		</React.Fragment>
	)
}

export default App
