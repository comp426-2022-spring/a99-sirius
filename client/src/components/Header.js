import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


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