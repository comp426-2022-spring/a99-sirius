import { Button, DialogContent } from '@mui/material'
import { Dialog } from '@mui/material'
import React,{ useState } from 'react'
import { DialogTitle } from '@mui/material'
import { Box } from '@mui/material'
import { Grid } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import { TextField } from '@mui/material'
import { Typography } from '@mui/material';
import { ToggleButton } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { spacing } from '@mui/system';


const AddTask = (props) => {
    const [value, setValue] = React.useState(null);

    const[openWindow, setOpenWindow] = useState(true)

    const toggleOpenWindow = () => {
        setOpenWindow(!openWindow)
    }
    const [selected, setSelected] = React.useState(false);

    return(
        <Dialog open={openWindow}>
            <DialogTitle textAlign="center">Add a new Task</DialogTitle>
            <DialogContent>
            <Box component="form">
            <Grid container width={550}>
                <Grid item width={550} >
                    <Typography  align="center">
                <TextField
                id="Name"
                label="Please add a task name: "
                multiline
                autoFocus
                required
                >
                </TextField>
                </Typography>
                    <TextField
                    margin = "normal"
                    id="Description"
                    label="Please add a description to your task:"
                    multiline
                    autoFocus
                    fullWidth
                    >
                    </TextField>
                    
                    <Typography  align="right">
                    <TextField
                    id="Date"
                    label="Task Date"
                    type="date"
                    defaultValue="2022-04-27"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    </Typography>

                </Grid>
                </Grid>
                <Box textAlign='center'>
                    <Button variant='contained'>
                        Create Task!
                         </Button>
                        </Box>
                <Button onClick={toggleOpenWindow}>
                Close
                </Button>
                </Box>
                </DialogContent> 
        </Dialog>
    )
}
export default AddTask