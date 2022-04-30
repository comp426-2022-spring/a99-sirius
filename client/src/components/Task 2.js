<<<<<<< Updated upstream
import React from 'react'

const Task = ({taskInfo}) => {
    return (
        <div>
            <h1>{taskInfo.taskName}</h1>
            <h2>{taskInfo.taskDescription}</h2>
        </div>
=======
import { Grid } from '@mui/material'
import { IconButton } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import React, {useEffect, useState} from 'react'
import { FormControlLabel } from '@mui/material';
import { Switch } from '@mui/material';

const Task = (props) => {

    const[reminder, setReminder] = useState(props.task.reminder)
    const[completed,setCompleted] = useState(props.task.completed)
    const[color, setColor] = useState("")

    function toggleCompleted(){
        setCompleted(!completed)
        return props.update({taskId: props.task.taskId, completed: !completed, reminder: reminder})
    }

    function toggleReminder(){
        setReminder(!reminder)
        return props.update({taskId: props.task.taskId, completed: completed, reminder: !reminder})
    }

    function onDelete(){
        return props.delete({taskId: props.task.taskId})
    }
 
    useEffect(() => {
        priorityColor(props.task.priority)
    })
    

    function priorityColor(priority = props.task.priority){
        switch (priority){
            case "high":
               return setColor("red")
            case "low":
                return setColor("green")
            case "medium":
                return setColor("orange")
            default:
                return 
        }
    }

    return(
        <Grid item xs={12}
            sx={{border: "2px solid blue",
                borderRadius: 2,
                marginTop: 2,
                }}>
            <Grid container rowSpacing={1} sx={{paddingTop: 0}}>
                <Grid item xs={12}sx={{display: 'flex', direction: 'row', overflow: 'hidden', paddingTop: "0px !important"}}>
                    <Box sx={{display: 'flex', alignItems: 'center', flexGrow: 1}}>
                        <IconButton sx={{paddingBottom: "10px"}} component="span" onClick={toggleCompleted} >
                            {!completed ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon color="success"/>}
                        </IconButton>
                        <Typography 
                            component="h6" 
                            variant="h6"
                            flexGrow={1}
                            fontSize="20px"
                        > {props.task.name}
                        </Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: 'space-evenly', alignItems: "center"}}>
                        <Typography style={{color: color}}>
                            {props.task.priority}
                        </Typography>
                        <FormControlLabel
                            control={<Switch size="small" checked={reminder != null ? reminder : false} color="primary"/>}
                            label="alerts"
                            labelPlacement="top"
                            onClick={toggleReminder}
                            >
                        </FormControlLabel>
                        <IconButton color="error" onClick={onDelete}>
                            <DeleteIcon/>
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item  xs={12} display='flex' justifyContent={"center"}>
                <Typography 
                        component="h6"
                        variant="subtitle1"
                    >
                         Description:
                    </Typography>

                </Grid>
                <Grid item xs={12}>
                <Typography 
                        component="h6"
                        variant="subtitle1"
                        sx={{
                            marginLeft: 2,
                            marginRigth: 2,
                        }}
                    >
                        {props.task.description}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
>>>>>>> Stashed changes
    )
}

export default Task