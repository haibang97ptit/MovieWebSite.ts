import React, { Dispatch, SetStateAction } from 'react'
import { Dialog, DialogActions, DialogContent, TextField, Button } from "@material-ui/core"
import { useState, ChangeEvent, useEffect, useContext } from "react"
import { AuthContex } from "../contexts/AuthContext"

interface LoginProps {
  isOpen: boolean
  handleClose :  Dispatch<SetStateAction<boolean>>
}
const Login = ( {isOpen, handleClose} : LoginProps ) => {
    const {login} = useContext(AuthContex)
    const [username , setUsername] = useState('')
    const onUsernameChange = (event : ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)
    const onLoginSubmit = () => {
      if(username === 'BangNH8'){
        alert('Login Success')
        login(username)
        setUsername('')
        handleClose(false)   
      }else{
        alert('Oops ! Error')
      }
    }
  return (
    <Dialog open={isOpen} >
        <DialogContent>
            <TextField label = "Username" onChange={onUsernameChange} value={username} required/>
        </DialogContent>
        <DialogActions>
            <Button color ="primary" variant= "contained" onClick={onLoginSubmit} disabled={username === ''}>Login</Button>
            <Button onClick={ () => handleClose(false) } color="secondary" variant= "contained">Close</Button>
        </DialogActions>
    </Dialog>
  )
}
export default Login 