import React from 'react'
import marked from "marked"
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	markdownPreviewer: {
		color: "whitesmoke",
		fontSize: theme.typography.fontSize,
		fontFamily: theme.typography.fontFamily,
	}
}))

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

	const classes = useStyles()

	return (
		<Container component="section" className={classes.markdownPreviewer}>
			<Box
				id="preview"
				className="border-none"
				dangerouslySetInnerHTML={markdown()}>
			</Box>
		</Container>
	)
}

export default Previewer
