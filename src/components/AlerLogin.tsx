import React, { Dispatch , SetStateAction } from 'react'
import { useState , useContext } from "react"
import { Dialog, DialogActions, DialogContent, TextField, Button } from "@material-ui/core"
import Login from "./Login"
import { AuthContex } from "../contexts/AuthContext"

interface DataProps {
    isShow: boolean
    handleOff :  Dispatch<SetStateAction<boolean>>
  }
const AlerLogin = ( {isShow,handleOff} : DataProps) => {
const [loginOpen , setLoginOpen] = useState(false)
const {authInfo : { isAuthent } , login} = useContext(AuthContex)
const handleSubmit =() =>{
    if(isAuthent){
        login('')
    }else{
        setLoginOpen(true)
        handleOff(false)
    }
}
  return (
    <>
        <Login isOpen = {loginOpen} handleClose = {setLoginOpen} />
        <Dialog open={isShow} >
            <DialogContent>
                Please Login to use all Feature
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleSubmit} >
                    I agree
                </Button>            
                <Button onClick={ () => handleOff(false) } color="secondary" variant= "contained">
                    Close
                </Button>
            </DialogActions>
    </Dialog>
    </>
    
  )
}

export default AlerLogin