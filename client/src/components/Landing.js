import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

// Import auxiliary Components
import SignUp from './SignUp'
import LogIn from './Login'

class Landing extends Component{
    render(){
        return(
            <div>
            <h3>Information about the Website</h3>
            <BrowserRouter>
                <Route exact path='/' component={SignUp}/>
                <Route exact path='/login' component={LogIn}/>
            </BrowserRouter>
            </div>
        )
    }

}

export default Landing