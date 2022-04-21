import { connect } from 'react-redux'
import * as UserActions from '../store/actions/actions'
import SignUp from '../components/SignUp'

const mapStateToProps = (state, ownProps) => {

    let nextPathname = "/"
    try {
        nextPathname = ownProps.location.state.nextPathname
    }
    catch(err){
        //empty
    }

    return {
        user: state.user,
        nextPathname
    }
}

export default connect(mapStateToProps, UserActions)(SignUp)