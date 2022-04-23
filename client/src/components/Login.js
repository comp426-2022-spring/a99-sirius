import React, {useState} from 'react'
import { Link } from 'react-router-dom'

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
    const [passwordShown, setPasswordShown] = useState(false)

    function onLoginSubmit(event) {
        event.preventDefault()

        props.login({
            username,
            password
        })
        .then((loginMessage) => {
            if(loginMessage){
                //report to the user that there was a problem during login
                setLoginMessage(loginMessage)
            }
        })
    }

    function togglePassword() {
        setPasswordShown(!passwordShown)
    }

    return( 
        <div>
            <form className="loginForm" onSubmit={onLoginSubmit}>
                <h1>😁 Login Here!</h1>
                <label className="loginUsername">
                    <input required type="text" placeholder="Username" onChange={e => {setUserName(e.target.value) 
                        setLoginMessage("")}}/>
                </label>
                <label className="loginPassword">
                    <input  required type={passwordShown ? "text" : "password"} placeholder="Password" onChange={e => {setPassword(e.target.value)
                    setLoginMessage("")}}/>
                </label>

                <button type="button" className="showPassword"style={{}} onClick={togglePassword}>Show Password</button>

                <button className="btn" type="submit" href="/">Login</button>
                <span className="err login" style={loginMessageStyle}>{loginMessage}</span>

                <div className="links">
                <a href="/auth/google"><GoogleButton label="Login with Google"/></a>
                <a href="/auth/github"><GitHubButton label="Login with Github"/></a>
                </div>
            </form>
        </div>
    )
}

export default Login
