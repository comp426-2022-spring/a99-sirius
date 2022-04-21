import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import GoogleButton from 'react-google-button'
import GitHubButton from 'react-github-login-button'

const loginMessageStyle = {
    color: "red"
}

const Signup = (props) => {
    const[signUpMessage, setSignUpMessage] = useState("")
    const[login, setLogin] = useState()
    const[password, setPassword] = useState()
    const[firstName, setFirstName] = useState()
    const[lastName, setLastName] = useState()
    const[email, setEmail] = useState()

    function onSignUpSubmit(event) {
        event.preventDefault()

        props.signUp({
            email,
            login,
            firstName,
            lastName,
            password,
        })
        .then((signUpMessage) => {
            if(signUpMessage){
                //report to the user that there was a problem during signUp
                setSignUpMessage(signUpMessage)
            }
        })
    }

    return(
        <div>
            <h3>This is the SignUp Component</h3>
            <h2> Sign Up Form </h2>
            <form onSubmit={onSignUpSubmit}>
                <input required type="text" placeholder="First Name" onChange={e => {setFirstName(e.target.value.split(" ")[0])}}/>
                <input required type="text" placeholder="Last Name" onChange={e => {setLastName(e.target.value)}}/>
                <input required type="email" placeholder="Email" onChange={e => {setEmail(e.target.value)}}/>
                <input required type="text" placeholder="Username" onChange={e => {setLogin(e.target.value)}}/>
                <input required type="password" placeholder="Password" onChange={e => {setPassword(e.target.value)}}/>
                <input required type="password" placeholder="Password" onChange={e => {setPassword(e.target.value)}}/>
                <Link className="btn" type="submit" to="/login" onClick={onSignUpSubmit}>Sign Up</Link>
                <span className="span"style = {loginMessageStyle}>{signUpMessage}</span>
            </form>
            <a href="/auth/google"><GoogleButton/></a>
            <a href="/auth/github"><GitHubButton/></a>
        </div>
    )
}

export default Signup