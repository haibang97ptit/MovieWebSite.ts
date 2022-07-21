import { AppBar, Toolbar, Box, Typography, FormControl, Select , MenuItem , Button , Chip} from "@material-ui/core"
import { useState, ChangeEvent, useEffect, useContext } from "react"
import WelcomMassage from "./WelcomMassage"
import {ProcessContext} from '../contexts/ProcessContext'
import {ThemeContext} from '../contexts/ThemeContext'
import {createStyles , makeStyles, Theme} from '@material-ui/core'
import Login from "./Login"
import AlerLogin from "./AlerLogin"
import { AuthContex } from "../contexts/AuthContext"
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		positionSelect: {
			color: 'white',
			borderBottom: '1px solid white'
		},
        box :{
            width : '100%',
            marginTop : -44,
            textAlign : 'center'
           
        },
        appbar: {
            height : '150px'
        },
        select : {
            textAlign : 'center',
            marginLeft : '120%'
        },
        time : {
            textAlign : 'center',
            marginLeft : '77%',
            marginTop : '-8%'
        }
	})
)
const Navbar = () => {
    //style 
    const classes = useStyles()    
    //contex
    const {lastTime, status} = useContext(ProcessContext)
    const {theme} = useContext(ThemeContext)
    const {authInfo : { isAuthent } , login} = useContext(AuthContex)
    //state position 
    const [position , setPosition] = useState<string>('Full-stack Developer')
    const onPositionChange = (
            event: ChangeEvent<{
                value: unknown;
        }>
    ) => {setPosition(event.target.value as string )} 
    
    //state country
    const [country,setCountry] = useState<string>('Viet Nam')
    const onCountryChange =(
            event: ChangeEvent<{
                 value: unknown;
        }>
    ) => {setCountry(event.target.value as string)}

    //state time
    const [time , setTime] = useState<Date>( () => new Date(Date.now()))
    const [loginOpen , setLoginOpen] = useState(false)
    const [showAlert , setShowAlert] = useState(true)
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date(Date.now())), 100)
        return () => clearInterval(timer)
    },[])
    return (
        <AppBar position="static" color={theme} className={classes.appbar} >
            <Toolbar>
                <Box 
                    display ="flex" 
                    justifyContent="space-between" 
                    alignItems ="center" 
                    width={1} 
                    py={2}
                >
                    <Typography variant="h6">My movies</Typography>
                </Box>
            </Toolbar >
            <Box textAlign="center" className={classes.box} flexDirection="row">
                        <WelcomMassage position={position} country={country} />
                        <Chip label={`Last time working on this project : ${lastTime} - status: ${status}`} />
                        <Box mt={1} style={{
                                    width: 500,
                                    color: 'success.main',
                                }}>
                            <FormControl className={classes.select}>
                                <Select value={position} onChange={onPositionChange}>
                                    <MenuItem value="Full-stack Developer">Full-stack Developer</MenuItem>
                                    <MenuItem value="Back-end Developer">Back-end Developer</MenuItem>
                                    <MenuItem value="Front-end Developer">Front-end Developer</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box mt={1} >
                            <FormControl>
                                <Select value={country} onChange={onCountryChange}>
                                    <MenuItem value="Viet Nam">Viet Nam</MenuItem>
                                    <MenuItem value="Laos">Laos</MenuItem>
                                    <MenuItem value="Cambodia">Combodia</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box textAlign="center" className={classes.time}>
                        <Box my={1}>
                            <Typography variant="h6" >{time.toUTCString()}</Typography> 
                            <Button variant="contained" onClick={isAuthent ? () => {login('')} : () => setLoginOpen(true)}>
                                { isAuthent ? 'Logout' : 'Login'}
                            </Button>
                        </Box>
                        <Login isOpen = {loginOpen} handleClose = {setLoginOpen} />
                        <AlerLogin isShow={showAlert} handleOff={setShowAlert} />
                    </Box>
        </AppBar>
    )
}

export default Navbar