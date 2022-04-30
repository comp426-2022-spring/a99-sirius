import { connect } from 'react-redux'
import * as userActions from '../store/actions/actions'
import Login from '../components/SignIn'

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, userActions)(Login)