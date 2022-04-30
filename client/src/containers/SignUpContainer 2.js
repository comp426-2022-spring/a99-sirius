import { connect } from 'react-redux'
import * as UserActions from '../store/actions/actions'
import SignUp from '../components/SignUp'

<<<<<<< Updated upstream
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
=======
const mapStateToProps = (state) => {
    return {
        user: state.user
>>>>>>> Stashed changes
    }
}

export default connect(mapStateToProps, UserActions)(SignUp)