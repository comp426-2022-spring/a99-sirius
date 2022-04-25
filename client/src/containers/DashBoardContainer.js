import { connect } from 'react-redux'
<<<<<<< HEAD
import * as taskActions from '../store/actions/tasks.actions'

import Tasks from '../components/Tasks'
=======
import * as UserActions from '../store/actions/actions'
import TodoApp from './TodoApp'

const mapStateToProps = (state, ownProps) => {

    let nextPathname = "/"

    try {
        nextPathname = ownProps.location.state.nextPathname
    }
    catch (err) {

    }
>>>>>>> 971b070 (Fixed design issues for To-do page)

const mapStateToProps = (state) => {
    
    return {
<<<<<<< HEAD
        user: state.auth.user,
        tasks: state.tasks,
=======
        user: state.user,
        nextPathname

>>>>>>> 971b070 (Fixed design issues for To-do page)
    }

}

<<<<<<< HEAD


export default connect(mapStateToProps, taskActions)(Tasks)
=======
export default connect(mapStateToProps, UserActions)(TodoApp)
>>>>>>> 971b070 (Fixed design issues for To-do page)
