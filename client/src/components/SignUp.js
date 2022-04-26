import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import { Alert} from '@mui/material';
import { AlertTitle } from '@mui/material';

import GoogleButton from 'react-google-button'
import GitHubButton from 'react-github-login-button'
import Copyright from './Copyright';

const theme = createTheme();

const SignUp = (props) => {

    const[passwordVisibility, setPasswordVisibility] = useState(false)
    const[signUpMessage, setSignUpMessage] = useState("")

    const[emailError, setEmailError] = useState(false)
    const[usernameError, setUsernameError] = useState(false)
    const[verifiedPassword, setVerifiedPassword] = useState(true)
    

    const toggleVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        var info = {
            login: data.get("username"),
            email: data.get("email"),
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            password: data.get("password")
        }
        if(validPassword.test(info.password)){
            props.signUp(info)
                .then(signUpStatus => {
                setSignUpMessage(signUpStatus.message)
                setEmailError(signUpStatus.emailError)
                setUsernameError(signUpStatus.usernameError)
            })
        }else{
            setVerifiedPassword(false)
        }
    }

    const validPassword = new RegExp(
        '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}:;<>,.?~_+-=|]).{8,32}'
    )


    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt : 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete='given-name'
                                    name="firstName"
                                    required
                                    fullWidth
                                    id='firstName'
                                    label='First Name'
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name='lastName'
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    onChange={e => {setUsernameError(false)}}
                                    error={usernameError}
                                    helperText={usernameError ? signUpMessage : ""}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    error={emailError}
                                    helperText={emailError ? signUpMessage : ""}
                                    onChange={e => {setEmailError(false)}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    id="password"
                                    type={passwordVisibility ? "text" : "password"}
                                    autoComplete="new-password"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                            <Button color="primary" disableElevation onClick={toggleVisibility}><Visibility/></Button>
                                        </InputAdornment>,
                                    }}
                                    error={!verifiedPassword}
                                    onChange={e => {setVerifiedPassword(true)}}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {!verifiedPassword ? <Alert severity="error">
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
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 1, mb: 2}}
                                > Sign In
                                </Button>
                            </Grid>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                    <Link
                    href="/auth/google"
                        sx={{
                            marginTop: 3
                        }}>
                        <GoogleButton/>
                    </Link>
                    <Link
                        href="/auth/github"
                        sx={{
                            marginTop: 2
                        }}
                    >
                        <GitHubButton/>
                    </Link>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    )
}

export default SignUp