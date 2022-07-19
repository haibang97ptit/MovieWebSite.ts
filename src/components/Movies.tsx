import { Box, Button , TextField, Chip, PropTypes } from "@material-ui/core"
import React, { ChangeEvent, useContext, useState } from 'react'
import {createStyles , makeStyles, Theme} from '@material-ui/core'
import { MovieContex } from '../contexts/MovieContext'
import {ThemeContext} from '../contexts/ThemeContext'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
//style
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
        box : {
            textAlign : 'center',
            marginTop : '15px'
        },
		movieInput : {
            marginRight : '5px',
            height : '10px'
        },
        btnAdd : {
            height : '56px'
        },
        chip : {
            textAlign : 'center',
            marginTop : '35px',
            marginLeft : '3px'
        },
        table : {
            marginBottom : '100px',
            width : '50%',
            marginLeft : '27%',
            marginTop : '30px'
        }
	})
)

const Movies = () => {
    const classes = useStyles()

    //state
    const [movie , setMovie] = useState('')

    //input movie function
    const inputMovie = (event : ChangeEvent<HTMLInputElement>) => setMovie(event.target.value)

    //context
    const { movies , addMovie , removeMovie} = useContext(MovieContex)
    const {theme} = useContext(ThemeContext)
    const themeChip = theme as Exclude<PropTypes.Color, 'inherit'>
    //table
    
    function createData(number : string, item : string) {
        return  {number, item} ;
       }

       var arrayItem = movies.map(item => {
            return createData(item.id , item.title)
       })  
  return (
    <>
        <Box display="flex" justifyContent="center" my={5} className={classes.box}>
            <TextField id ="text" label="Text your favourite movies..." variant="outlined" className={classes.movieInput} onChange={inputMovie} value={movie} />
            <Button
                id="abc" 
                variant="outlined" 
                color="secondary" 
                className={classes.btnAdd}
                onClick={
                 () => {
                        addMovie(movie)
                        setMovie('')
                        }}
                disabled ={movie ===""}>
                Add movie
            </Button> 
            {/* <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
                {movies.map(movie => (
                    <Chip 
                        key={movie.id} 
                        label={movie.title} 
                        clickable 
                        className={classes.chip} 
                        color={themeChip}
                        onDelete={ () => removeMovie(movie.id)}
                    />
                ))}
            </Box> */}
        </Box>
        <TableContainer >
                <Table aria-label="simple table" className={classes.table}>
                        <TableHead>
                            <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align="right">Code</TableCell>
                            </TableRow>
                        </TableHead>
                    <TableBody>
                        {arrayItem.map((row) => (
                            <TableRow key={row.number}>
                                    <TableCell >
                                        <Chip   
                                            label={row.item} 
                                            onDelete={ () => removeMovie(row.number)}  
                                            color={themeChip}
                                            clickable
                                    />
                                    </TableCell>
                                    <TableCell component="th" scope="row" align="right">
                                        {row.number}
                                    </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
        </TableContainer> 
    </>
  )
}

export default Movies