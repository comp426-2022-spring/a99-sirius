import Visibility from '@mui/icons-material/Visibility'
import { DialogContent } from '@mui/material'
import { DialogTitle } from '@mui/material'
import { InputAdornment } from '@mui/material'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { Dialog } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Alert} from '@mui/material';
import { AlertTitle } from '@mui/material';
import { Box } from '@mui/material'
import { Grid } from '@mui/material'




const ChangePass = (props) => {

    const[openPasswordDialog, setOpenPasswordDialog] = useState(false)
    const[passwordVisibility, setPasswordVisibility] = useState(false)
    const[verifiedPassword, setVerifiedPassword] = useState(true)

    const toggleVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
    }
    useEffect(() => {
        setOpenPasswordDialog(props.props.user.ownPassword)
    }, [props])

    const validPassword = new RegExp(
        '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}:;<>,.?~_+-=|]).{8,32}'
    )

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        var info = {
            password : data.get("newPassword"),
            login: props.props.user.login
        }
        if(validPassword.test(info.password)){
            props.props.changePassword(info)
            .then( () => {
                setOpenPasswordDialog(false)
            })
        }else{
            setVerifiedPassword(false)
        }
    }

    return(
        <Dialog open={openPasswordDialog}>
            <DialogTitle>Set Up Account Password</DialogTitle>
            <DialogContent>
                <Box component="form" onSubmit={handleSubmit}>
                    <Grid container width={350}>
                        <Grid item width={350} >
                            <TextField
                                name="newPassword"
                                required
                                fullWidth
                                id="newPassword"
                                label="New Password"
                                autoFocus
                                type={passwordVisibility ? "text" : "password"}
                                sx={{ marginTop: 1}}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                        <Button color="primary" disableElevation onClick={toggleVisibility}><Visibility/></Button>
                                    </InputAdornment>}}
                                error={!verifiedPassword}
                                onChange={e => {setVerifiedPassword(true)}}
                            />
                        </Grid>
                        <Grid item width={350}>
                            {!verifiedPassword ? <Alert sx={{marginTop: 1}} severity="error">
                            <AlertTitle severity="error">Password Requirements Not Met</AlertTitle>
                                <ul>Password Must:
                                    <li>Be at least 8 characters long</li>
                                    <li>Contain at least one upper case Letter</li>
                                    <li>Contain at least one lower case letter</li>
                                    <li>Contain at least one special character</li>
                                </ul>
                            </Alert> 
                            : <></>}
                        </Grid>
                        <Grid item width={350}>
                            <Button type="submit"
                                fullWidth
                                variant="contained"
                                sx={{marginTop: 2}}
                                >Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                
                   
                    
            </DialogContent>
        </Dialog>

    )
}

export default ChangePass