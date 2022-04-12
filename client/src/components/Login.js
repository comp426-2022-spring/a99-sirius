import React , {Component} from 'react'
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

// Import Buttons
import GoogleButton from 'react-google-button'
import GitHubButton from 'react-github-login-button'

class LogIn extends Component{
    render() {
        return(
            <div>
                <input id="email" type="text" />
                <label for="email">Email</label>
                <input id="password" type="text"/>
                <label for="password">Password</label>
                <Link to = '/auth/login'>
                    <Button className="btn">Login</Button>
                </Link>
                <a href='/auth/google'><GoogleButton label='Login with Google'/></a>
                <a href='/auth/github'><GitHubButton label='Login with GitHub'/></a>
            </div>
        )
    }
}

export default LogIn