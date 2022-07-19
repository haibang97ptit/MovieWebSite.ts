import {Box} from "@material-ui/core"
import { useContext } from "react"
import { AuthContex } from "../contexts/AuthContext"
interface WelcomMassageProps{
    position ?: string
    country ?: string
}

const WelcomMassage = ({ position ="" , country= ""} : WelcomMassageProps) => {
    const { authInfo : {username} } = useContext(AuthContex)
    return (
        <Box mb={2}> 
            Welcome {username} - role : {position} from {country}
        </Box>
    )
}

export default WelcomMassage