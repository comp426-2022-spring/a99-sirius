import { connect } from 'react-redux'
import * as taskActions from '../store/actions/tasks.actions'

import Tasks from '../components/Tasks'

const mapStateToProps = (state) => {

    return {
        user: state.auth.user,
        tasks: state.tasks,
    }
}



export default connect(mapStateToProps, taskActions)(Tasks)