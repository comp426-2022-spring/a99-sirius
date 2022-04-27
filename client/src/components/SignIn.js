import React, {useState} from 'react';
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
import { Alert} from '@mui/material';
import { AlertTitle } from '@mui/material';
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from '@mui/material/InputAdornment';


// Import Buttons
import GoogleButton from 'react-google-button'
import GitHubButton from 'react-github-login-button'
import Copyright from './Copyright';

const theme = createTheme();

const Login = (props) => {
    const[loginMessage, setLoginMessage] = useState("")
    const[loginError, setLoginError] = useState(false)
    const[passwordVisibility, setPasswordVisibility] = useState(false)

    const toggleVisibility = () => {
        setPasswordVisibility(!passwordVisibility)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        
        props.login({username: data.get("username"), password: data.get("password")})
        .then(loginMessage => {
            setLoginError(true)
            setLoginMessage(loginMessage)
        })
    }

    return( 
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth='xs'>
                <CssBaseline/>
                <Box 
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor:'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    {loginError ? <Alert severity="error">
                        <AlertTitle severity="error">Error - {loginMessage}</AlertTitle>
                    </Alert> : <></>}
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1}}>
                        <TextField 
                            margin='normal'
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={e => setLoginError(false)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name='password'
                            id="password"
                            label="Password"
                            type={passwordVisibility ? "text" : "password"}
                            autoComplete='current-password'
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <Button color="primary" disableElevation onClick={toggleVisibility}><Visibility/></Button>
                                </InputAdornment>
                            }}
                            
                            onChange={e => setLoginError(false)}
                        />
                       <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        > Sign In</Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/" variant="body2">
                                    Don't have an account? Sing Up
                                </Link>
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
                        disabled
                        href="/auth/github"
                        sx={{
                            marginTop: 2
                        }}
                    >
                        <GitHubButton disabled/>
                    </Link>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
}

export default Login
