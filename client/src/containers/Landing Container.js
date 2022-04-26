import React from 'react' 
import {Route} from 'react-router-dom'
import SignInContainer from './SignInContainer'
import SignUpContainer from './SignUpContainer'

const LandingContainer = () => {

    return(
        <div className="container">
            <Route exact path="/login">
                <SignInContainer/>
            </Route>
            <Route exact path="/">
                <SignUpContainer/>
            </Route>
        </div>
    )   
}

export default LandingContainer