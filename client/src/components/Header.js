import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from '@mui/material/colors';


const Header = (props) => {

    const onLogout = async () => {
        await props.logout()
    }

    return (
         <AppBar position="absolute">
            <Toolbar>
                <Typography variant="h6" 
                    component="h1" 
                    sx={{ flexGrow: 1 }}
                    noWrap>
                    TO-DO-APP
                </Typography>
                <Avatar sx={{ backgroundColor: deepOrange[500] }} alt={props.user.firstName + props.user.lastName}>
                    {props.user.firstName[0] + props.user.lastName[0]}
                </Avatar>
                <Button 
                    color="inherit"
                    href="/logout"
                    onClick={onLogout}
                >Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header