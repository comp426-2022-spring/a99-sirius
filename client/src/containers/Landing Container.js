import React from 'react' 
import {Route} from 'react-router-dom'
import LoginContainer from './LoginContainer'
import SignUpContainer from './SignUpContainer'

const LandingContainer = () => {

    return(
        <div className="container">
            <div className="intro">
                <h3>Keeping Up with Your Daily Tasks!</h3>
                <h4>The best way to keep track of your daily duties and activities!</h4>
            </div>
            <Route exact path="/login">
                <LoginContainer/>
            </Route>
            <Route exact path="/">
                <SignUpContainer/>
            </Route>
        </div>
    )   
}

export default LandingContainer