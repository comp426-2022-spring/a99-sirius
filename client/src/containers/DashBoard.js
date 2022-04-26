import { connect } from 'react-redux'
import * as taskActions from '../store/actions/tasks.actions'


import Header from '../components/Header'

const DashBoard = (props) => {
    return(
        <Header/>
    )
}

const mapStateToProps = (state) => {

    return {
        user: state.auth.user,
        tasks: state.tasks,
    }
}


export default connect(mapStateToProps, taskActions)(DashBoard)