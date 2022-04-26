import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Toolbar } from '@material-ui/core';

const theme = createTheme();

const Header = (props) => {

   
    const onLogout = async () => {
        await props.logout()
    }

    return(
        <h1>Hello</h1>
    )

    // return (
    //     <nav>
    //         <div className="nav-wrapper">
    //             <img alt="App logo" src={require('../logo.png')} width="80px" height="64px"/>
    //             <Link to={props.auth.authenticated ? "/" + props.auth.user.login : '/'}
    //                 className="left brand-logo" >
    //                 To-do App
    //             </Link>
    //             {props.auth.authenticated
    //                 ? <ul className="right">
    //                     <li>{props.auth.user.login}</li>
    //                     <li><a href="/logout" onClick={onLogout}>Logout</a></li>
    //                 </ul>
    //                 : <ul className="right">
    //                     <li><a href="/login">Login</a></li>
    //                     <li><a href='/'>Sign Up</a></li>
    //                 </ul>
    //             }
    //         </div>
    //     </nav>
    // )
}

export default Header