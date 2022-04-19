import { connect } from 'react-redux'
import * as userActions from '../../store/actions/actions'
import Login from '../Login'

const mapStateToProps = (state, ownProps) => {
    
    let nextPathname = "/"

    try{ nextPathname = ownProps.location.state.nextPathname}
    catch(err) {}

    return {
        user: state.user,
        nextPathname
    }
}

export default connect(mapStateToProps, userActions)(Login)