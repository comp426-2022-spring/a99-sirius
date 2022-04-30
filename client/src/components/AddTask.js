import { Autocomplete, Button, DialogContent } from '@mui/material'
import { Dialog } from '@mui/material'
import React, { useState } from 'react'
import { DialogTitle } from '@mui/material'
import { Box } from '@mui/material'
import { Grid } from '@mui/material'
import { TextField } from '@mui/material'
import { Typography } from '@mui/material';
import { FormGroup } from '@mui/material'
import { FormControlLabel } from '@mui/material'
import { Switch } from '@mui/material'

const AddTask = (props) => {
    
    const priority = [ "high", "medium", "low", ""]

    const[value, setValue] = useState('')

    const login = props.login
    const {open, openWindow} = props
    const[reminder, setReminder] = useState(false)
 
    const getDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0")
        var mm = String(today.getMonth() + 1).padStart(2, '0')
        var yyyy = today.getFullYear()
        var min = String(today.getMinutes())
        var hours = today.getHours()
        if(min < 10){
            min = "0" + min
        }
        var time = yyyy + '-' + mm + '-' + dd + 'T' + hours + ':' + min
        return time
    }

    function handleClose() {
        openWindow(false)
    }

    const toggleReminder = () => {
        setReminder(!reminder)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget)
        var info = {
            login: login,
            name: data.get("taskName"),
            description: data.get("taskDescription"),
            reminder: reminder,
            completed: false,
            dueDate: data.get("date"),
            priority: value
        }
        await props.addTask(info)
        handleClose()
    }

    return(
        <Dialog open={open}>
            <DialogTitle textAlign="center">Add New Task</DialogTitle>
            <DialogContent>
            <Box component="form" marginTop={1} onSubmit={handleSubmit}>
            <Grid container columnSpacing={2} rowSpacing={2}>
                <Grid item xs={12} md={7} >
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
                <Grid item xs={9} md={5}>
                    <Box container display={"flex"} flexDirection="column">
                        {/* <BasicDateTimePicker /> */}
                        <TextField
                            id="Date"
                            label="Task Date"
                            type="datetime-local"
                            size="small"
                            required
                            name="date"
                            defaultValue={getDate()}
                            InputLabelProps={{
                                shrink: true,
                                max: "2100-01-01"
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item  display={"flex"}md={12}>
                    <Autocomplete
                        value={value}
                        disablePortal
                        onChange={(event, newValue) => {
                            setValue(newValue)
                        }}
                        size="small"
                        options={priority}
                        sx={{width: "140px"}}
                        renderInput={(params) => <TextField size="small" {...params} label="Priority"/>}
                    />
                    <FormGroup>
                        <FormControlLabel 
                            size="small" 
                            labelPlacement="start" 
                            control={<Switch/>} 
                            label="Reminder"
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