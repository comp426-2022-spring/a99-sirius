import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from "@mui/material";
import { deepOrange} from '@mui/material/colors';
import ChangePass from './ChangePass';

const UserDropMenu = (props) => {
 
    const [anchorEl, setAnchorEl] = useState(null)
    const [openPasswordDialog, setOpenPasswordDialog] = useState(false)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null)    
    }

    const handleChangePassword = () => {
      setOpenPasswordDialog(true)
    }

    return (
        <div>
        <Button
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Avatar sx={{ backgroundColor: deepOrange[500] }} alt={props.user.firstName + props.user.lastName}>
                    {props.user.firstName[0] + props.user.lastName[0]}
          </Avatar>
        </Button>
        <Menu
          id="demo-positioned-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <p style={{textAlign:'center', margin: 0, fontSize: "15px", fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>{props.user.firstName + " " + props.user.lastName}</p>
          <MenuItem onClick={handleClose}>
              <Button
              size="small"
              onClick={handleChangePassword}
              >
                  Change Password
              </Button>
          </MenuItem>
          <MenuItem  sx={{marginTop: "0", justifyContent: "center"}}>
            <Button
                href="/logout"
                size="small"
                >Logout
            </Button>
          </MenuItem>
        </Menu> 
        <ChangePass openPasswordDialog={openPasswordDialog} login={props.user.login} setOpenPasswordDialog={setOpenPasswordDialog} changePassword={props.props.changePassword}/>
      </div>
    )
}

export default UserDropMenu