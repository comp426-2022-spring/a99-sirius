import { Grid } from '@mui/material'
import { IconButton } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EditIcon from '@mui/icons-material/Edit';

import React from 'react'


const Task = (props) => {

    return(
        <Grid item xs={12}
            sx={{backgroundColor: 'red',
                borderRadius: 2}}>
            <Grid container spacing={2}>
                <Grid item xs={12}sx={{display: 'flex', direction: 'row', overflow: 'hidden'}}>
                    <IconButton>
                        <CheckBoxOutlineBlankIcon/>
                        <CheckBoxIcon/>
                    </IconButton>
                    <Typography 
                        component="h3" 
                        variant="h6"
                        sx={{
                            p: 3,
                        }}
                        flexGrow={1}
                        noWrap
                    > Task Name Here
                    </Typography>
                    <Typography
                        component="h4"
                        variant="h6"
                        sx={{
                            p:3,
                            overflow: 'visible',
                        }}
                        noWrap
                    > Status
                    </Typography>
                    <IconButton>
                        <EditIcon/>
                        <DeleteIcon/>
                    </IconButton>
                </Grid>
                <Grid item display='flex'>
                        <Typography 
                            component="h6"
                            variant="h6"
                        >
                            Description
                        </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Task