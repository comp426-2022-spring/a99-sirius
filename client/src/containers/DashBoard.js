import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import * as taskActions from '../store/actions/tasks.actions'
import { changePassword } from '../store/actions/actions'
import ChangePass from '../components/ChangePass';
import { Container, Grid, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material'
import { Box } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Paper } from '@mui/material'
import Task from '../components/MaterialUIDesignComponents/Task'
import Tasks from '../components/MaterialUIDesignComponents/Tasks'

const theme = createTheme()

const DashBoard = (props) => {

    const {fetched} = props.tasks.fetched
    const {login} = props.user.login
    const {fetchTasks} = props

    const[openPasswordDialog, setOpenPasswordDialog] = useState(false)

    useEffect(() => {
        setOpenPasswordDialog(!props.user.ownPassword)
        fetchTasks(login)
    },[props.user.ownPassword, login, fetchTasks, fetched])
    
    return(
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', overflow: 'auto'}}>
                <Header/>
                {/* <ChangePass openPasswordDialog={openPasswordDialog} login={props.user.login} setOpenPasswordDialog={setOpenPasswordDialog} props={props}/> */}
                <Box 
                    component="main"
                    sx={{
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                <Toolbar/>
                    <Container maxWidth="lg" sx={{mt:0, mb: 4}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={8} lg={9} xl={15}>
                                <Paper
                                    sx={{
                                        p:2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240
                                    }}>
                                    <Tasks/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            
            
        </ThemeProvider>
    )
}

const mapStateToProps = (state) => {

    return {
        user: state.auth.user,
        tasks: state.tasks,
    }
}


export default connect(mapStateToProps, { ...taskActions, changePassword })(DashBoard)
