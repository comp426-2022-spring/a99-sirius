import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import * as taskActions from '../store/actions/tasks.actions'
import {changePassword} from '../store/actions/actions'
import ChangePass from '../components/ChangePass';

const DashBoard = (props) => {

    const[openPasswordDialog, setOpenPasswordDialog] = useState(false)

    useEffect(() => {
        setOpenPasswordDialog(!props.user.ownPassword)
    },[props.user.ownPassword])
    
    return(
        <div>
            <Header/>
            <ChangePass openPasswordDialog={openPasswordDialog} login={props.user.login} setOpenPasswordDialog={setOpenPasswordDialog} props={props}/>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        user: state.auth.user,
        tasks: state.tasks,
    }
}


export default connect(mapStateToProps,{...taskActions, changePassword})(DashBoard)