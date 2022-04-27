import { Button, DialogContent } from '@mui/material'
import { Dialog } from '@mui/material'
import React,{ useState } from 'react'
import { DialogTitle } from '@mui/material'
import { Box } from '@mui/material'
import { Grid } from '@mui/material'
import { TextField } from '@mui/material'
import { Typography } from '@mui/material';

const AddTask = (props) => {

    const[openWindow, setOpenWindow] = useState(true)

    const toggleOpenWindow = () => {
        setOpenWindow(!openWindow)
    }



    return(
        <Dialog open={openWindow}>
            <DialogTitle textAlign="center">Add a new Task</DialogTitle>
            <DialogContent>
            <Box component="form">
            <Grid container width={550}>
                <Grid item width={550} >
                    <TextField
                    id="Description"
                    label="Please add a description to your task:"
                    multiline
                    autoFocus
                    fullWidth
                    >
                    </TextField>
                </Grid>
                </Grid>
                <Button onClick={toggleOpenWindow}>
                Close
                </Button>
                </Box>
                </DialogContent> 
        </Dialog>
    )
}

export default AddTask