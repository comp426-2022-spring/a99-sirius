import React , {Component} from 'react'
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import GoogleButtonIcon from '../icons/google_signin_buttons/web/1x/btn_google_signin_light_normal_web.png'

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
                <a href="/auth/google"><img alt="Google Login Logo" src={GoogleButtonIcon}/></a>
            </div>
        )
    }
}

export default LogIn