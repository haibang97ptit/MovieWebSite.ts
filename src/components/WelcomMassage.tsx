import {Box} from "@material-ui/core"

interface WelcomMassageProps{
    position ?: string
    country ?: string
}

const WelcomMassage = ({ position ="" , country= ""} : WelcomMassageProps) => {
    return (
        <Box mb={2}> 
            Welcome {position} from {country}
        </Box>
    )
}

export default WelcomMassage