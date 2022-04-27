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

    async function toggleCompleted(){
        setCompleted(!completed)
        return props.update({taskId: props.task.taskId, completed: !completed, reminder: reminder})
    }

    async function toggleReminder(){
        setReminder(!reminder)
        return props.update({taskId: props.task.taskId, completed: completed, reminder: !reminder})
    }

    return(
        <Grid item xs={12}
            sx={{border: "2px solid blue",
                borderRadius: 2,
                marginTop: 2,
                }}>
            <Grid container rowSpacing={1} sx={{paddingTop: 0}}>
                <Grid item xs={12}sx={{display: 'flex', direction: 'row', overflow: 'hidden', paddingTop: 0}}>
                    <Box sx={{display: 'flex', alignItems: 'center', flexGrow: 1}}>
                        <IconButton component="span" onClick={toggleCompleted} >
                            {!completed ? <CheckBoxOutlineBlankIcon /> : <CheckBoxIcon color="success"/>}
                        </IconButton>
                        <Typography 
                            component="h6" 
                            variant="subtitle1"
                            flexGrow={1}
                            noWrap
                        > {props.task.name}
                        </Typography>
                        <FormControlLabel
                        control={<Switch checked={reminder != null ? reminder : false} color="primary"/>}
                        label="reminder?"
                        labelPlacement="start"
                        onClick={toggleReminder}
                        >
                        </FormControlLabel>
                    </Box>
                    <Box sx={{display: "flex", alignItems: 'center'}}>
                        {completed ? <CheckIcon color="success"/> : <MoreHorizIcon/>}
                        <Typography
                            variant="subtitle2"
                            sx={{
                                p:3,
                                pr: 1,
                                pl: 0,
                                overflow: 'visible',
                                textAlign: "center",
                            }}
                            noWrap
                            fontSize={15}
                        > 
                        {completed ? "completed" : "pending"}
                        </Typography>
                    </Box>
                    
                    <IconButton color="error">
                        <DeleteIcon/>
                    </IconButton>
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