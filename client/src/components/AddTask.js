import { Button, DialogContent } from '@mui/material'
import { Dialog } from '@mui/material'
import React,{ useState } from 'react'
import { DialogTitle } from '@mui/material'
import { Box } from '@mui/material'
import { Grid } from '@mui/material'
import { TextField } from '@mui/material'
import { Typography } from '@mui/material';
import { FormGroup } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import { Switch } from '@mui/material'

const AddTask = (props) => {

    const login = props.login
    const {open, openWindow} = props
    const[reminder, setReminder] = useState(false)

    function handleClose() {
        openWindow(false)
    }

    const toggleReminder = () => {
        setReminder(!reminder)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget)
        var info = {
            login: login,
            name: data.get("taskName"),
            description: data.get("taskDescription"),
            reminder: reminder,
            completed: false
        }
        return props.addTask(info)
    }

    return(
        <Dialog open={open}>
            <DialogTitle textAlign="center">Add New Task</DialogTitle>
            <DialogContent>
            <Box component="form" marginTop={1} onSubmit={handleSubmit}>
            <Grid container rowSpacing={2}>
                <Grid item xs={7} >
                    <TextField
                    id='TaskName'
                    label="Task Name:"
                    name="taskName"
                    required
                    autoFocus
                    fullWidth
                    size="small"
                    >
                    </TextField>
                </Grid>
                <Grid item xs={5}>
                    <FormGroup>
                        <FormControlLabel 
                            size="small" 
                            labelPlacement="start" 
                            control={<Switch/>} 
                            label="Set Reminder"
                            onClick={toggleReminder}
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="TaskDescription"
                        label="Description:"
                        name="taskDescription"
                        fullWidth
                        multiline
                        size={"small"}
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                    <Button type="submit" variant='contained'>
                        Create Task
                    </Button>
                </Grid>
            </Grid>
                <Button size={"small"} variant="outlined" onClick={handleClose}>
                Close
                </Button>
                </Box>
                </DialogContent> 
        </Dialog>
    )
}

export default AddTask