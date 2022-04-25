import { connect } from 'react-redux'
import * as UserActions from '../store/actions/actions'
import TodoApp from './TodoApp'

const mapStateToProps = (state, ownProps) => {

    let nextPathname = "/"

    try {
        nextPathname = ownProps.location.state.nextPathname
    }
    catch (err) {

    }

    return {
        user: state.user,
        nextPathname

    }

}

export default connect(mapStateToProps, UserActions)(TodoApp)