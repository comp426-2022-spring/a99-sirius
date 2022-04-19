import React, {useState} from 'react'


// Import Buttons
import GoogleButton from 'react-google-button'
import GitHubButton from 'react-github-login-button'


const loginMessageStyle = { 
    color : "red"
}

const Login = (props) => {
    const [loginMessage, setLoginMessage] = useState("")
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    function onLoginSubmit(event) {
        event.preventDefault()

        props.login({
            username,
            password
        }, "/" + username)
        .then((loginMessage) => {
            if(loginMessage){
                //report to the user that there was a problem during login
                setLoginMessage(loginMessage)
            }
            
        })
    }

    return( 
        <div>
            <h3> If you logged in with google before just type your email username and "password" as the password</h3>
            <h2>Log In Form</h2>
            <form onSubmit={onLoginSubmit}>
                <input required type="username" placeholder="Username" onChange={e => {setUserName(e.target.value)}}/>
                <input  required type="password" placeholder="password" onChange={e => {setPassword(e.target.value)}}/>
                <button className="btn" type="submit">Login</button>
                <span className="span"style = {loginMessageStyle}>{loginMessage}</span>
            </form>
            <GoogleButton />
            <GitHubButton />
        </div>
    )
}

export default Login