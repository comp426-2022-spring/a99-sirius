import { Grid } from '@mui/material'
import { IconButton } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckIcon from '@mui/icons-material/Check';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React, {useState} from 'react'
import { FormControlLabel } from '@mui/material';
import { Switch } from '@mui/material';



const Task = (props) => {

    const[reminder, setReminder] = useState(props.task.reminder)
    const[completed,setCompleted] = useState(props.task.completed)

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

    return(
        <Grid item xs={12}
            sx={{border: "2px solid blue",
                borderRadius: 2,
                marginTop: 2,
                }}>
            <Grid container rowSpacing={1} sx={{paddingTop: 0}}>
                <Grid item xs={12}sx={{display: 'flex', direction: 'row', overflow: 'hidden',}}>
                    <Box sx={{display: 'flex', alignItems: 'center', flexGrow: 1}}>
                        <IconButton component="span" onClick={toggleCompleted} >
                            {!completed ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon color="success"/>}
                        </IconButton>
                        <Typography 
                            component="h4" 
                            variant="h5"
                            sx={completed ? {textDecoration: "line-through 0.7px"} : {}}
                            flexGrow={1}
                            noWrap
                        > {props.task.name}
                        </Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: 'space-evenly', alignItems: "center"}}>

                        {completed ? <CheckIcon color="success"/> : <MoreHorizIcon/>}
                            <Typography
                                variant="h6"
                                sx={{
                                    p:3,
                                    pr: 1,
                                    pl: 0,
                                    overflow: 'visible',
                                    textAlign: "center",
                                }}
                                noWrap
                                fontSize={17}
                            > 
                            {completed ? "completed" : "pending"}
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
                         Description
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
    )
}

export default Task