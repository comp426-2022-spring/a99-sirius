import { connect } from 'react-redux'
import * as UserActions from '../store/actions/actions'
import SignUp from '../components/SignUp'

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, UserActions)(SignUp)