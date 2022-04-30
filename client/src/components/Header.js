import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import UserDropMenu from "./UserDropMenu";


const Header = (props) => {

    return (
        <AppBar position="absolute">
            <Toolbar>
                <Typography variant="h6"
                    component="h1"
                    sx={{ flexGrow: 1 }}
                    noWrap>
                    TO-DO APP
                </Typography>
                <UserDropMenu user={props.user} props={props.props}/>
            </Toolbar>
        </AppBar>
    );
}

export default Header