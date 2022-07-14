import React from 'react'
import { Fab } from '@material-ui/core'
import {createStyles , makeStyles, Theme} from '@material-ui/core'
import { ThemeContext } from '../contexts/ThemeContext'
import { useContext } from "react"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		floatBtn: {
			position: 'fixed',
			right: '3rem',
            bottom : '3rem'
		}
	})
)
const ToggleTheme = () => {
    const classes = useStyles()
	//reuse Context theme
	const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <Fab color='primary' variant ='extended' className={classes.floatBtn} onClick={toggleTheme.bind(this, theme === 'primary' ? 'secondary' : 'primary')}>Change Theme</Fab>
  )
}

export default ToggleTheme