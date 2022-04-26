import * as React from "react";
// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme } from "@material-ui/core";

const theme = createTheme()

const Header = (props) => {

    const onLogout = async () => {
        await props.logout()
    }

    return (
         <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" 
                    component="div" 
                    sx={{ flexGrow: 1 }}>
                    TO-DO-APP
                </Typography>
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