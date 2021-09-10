import React from "react"
import { Container, TextareaAutosize } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
	markdownEditor: {
		backgroundColor: "transparent",
		border: "none",
		color: "whitesmoke",
		fontFamily: "monospace",
		fontSize: theme.typography.fontSize,
		width: "100%",
		"&:focus": {
			outline: "none"
		}
	}
}))

function Editor(props) {
	const classes = useStyles()
	return (
		<Container component="section">
			<TextareaAutosize
				aria-label="empty textarea"
				placeholder="Empty"
				minRows={20}
				id="editor"
				value={props.value}
				onChange={props.handleChange}
				className={classes.markdownEditor}
			/>
		</Container>
	)
}

export default Editor
