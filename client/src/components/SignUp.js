import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class SignUp extends Component{
    render(){
        return(
            <div>
                <input id="first_name" type="text" required></input>
                <label for="first_name"> First Name</label>
                <input id="last_name" type="text" required />
                <label for="last_name"> Last Name</label>
                <input id="email" type="text" required />
                <label for="email">Email</label>
                <input id="password" type="text" required/>
                <label for="password">Password</label>
                <input id="re_password" type="text" required />
                <label for="re_password">Confirm Password</label>
                <Link to = '/auth/signup'>
                    <Button className="btn">Sign up</Button>
                </Link>
            </div>
        )
    }
}

export default SignUp