import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

import GoogleButton from 'react-google-button'
import GitHubButton from 'react-github-login-button'

const MessageStyle = {
    color: "red"
}

const Signup = (props) => {
    const[errorMessage, setErrorMessage] = useState({
        signUp : '',
        password: '',
        confirmPassword: '',
    })

    const[input, setInput] = useState({
        login: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [passwordShown, setPasswordShown] = useState(false)
    const [confirmPassShown, setConfirmPassShown] = useState(false)

    function onSignUpSubmit(event) {
        event.preventDefault()

        props.signUp(input)
        .then((error) => {
            if(error){
                //report to the user that there was a problem during signUp
                setErrorMessage({...errorMessage, signUp : error})
            }
        })
    }

    function handleChange(event){
        let { name, value } = event.target

        switch(name){
            case "firstName":
                value = value.split(" ")[0]
                break
            default:
                
        }
        setInput(prev => ({
            ...prev,
            [name] : value
        }))
        validateInput(event)
    }

    function validateInput(event) {
        let {name, value} = event.target
        setErrorMessage( prev => {
            const stateObj = { ...prev, [name]: "" }
        
        switch(name){
            case "password":
                if(!value) {
                    stateObj[name] = "Please enter Password!"
                    stateObj["signUp"] = ""
                }else{
                    if(!validPassword.test(value)){
                        stateObj["signUp"] = "Make Sure password is of length 8-20, contains one upper-case letter, one digit and one special character (._:$!&-@*):"
                        return stateObj
                    }
                    stateObj["signUp"] = ""
                    if(input.confirmPassword && value !== input.confirmPassword){
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match"
                    } else{
                        stateObj["confirmPassword"] = input.confirmPassword ? "" : errorMessage.confirmPassword
                    }
                }
                break
            case "confirmPassword":
                if(!value){
                    stateObj[name] = "Please enter Confirm Password"
                } else{
                    if(input.password && value !== input.password){
                        stateObj[name] = "Password and Confirm Password do not match.";
                    }
                }
            break
            default: 
                break
        }

        return stateObj
    })
    }

    function togglePassword() {
        setPasswordShown(!passwordShown)
    }

    function toggleConfirmPassword() {
        setConfirmPassShown(!confirmPassShown)
    }


    const validPassword = new RegExp(
        '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}:;<>,.?~_+-=|]).{8,32}'
    )

    return(
        <div>
            <form className="registration" onSubmit={onSignUpSubmit}>
                <h1>👋 Register Here!</h1>
                
                <label>
                    <input required type="text" name="firstName" placeholder="First Name" onChange={e => {handleChange(e)}}/>
                </label>
    
                
                <label >
                    <input required type="text" name="lastName" placeholder="Last Name" onChange={e => {handleChange(e)}}/>
                </label>

                <label>
                    <input required type="text" name="login" placeholder="Enter username" onChange={e => {handleChange(e)}}/>
                </label>
                
                
                <label className="email">
                <input required type="email" name="email" placeholder="Enter email address" onChange={e => {handleChange(e)}}/>
                </label>
                    
                <label>
                    <input required type={passwordShown ? "text" : "password"} name="password" placeholder="Enter password" onChange={e => {handleChange(e)}}/>
                    <button class="showPassword" type="button" style={{}} onClick={togglePassword}>Show Password</button>
            
                </label>
                    
                <label>
                <input required type={confirmPassShown ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" onChange={e => {handleChange(e)}}/>
                <button class="showPassword" type="button" style={{}} onClick={toggleConfirmPassword}>Show Password</button>
                    
                </label>
                    
                
                <button className="btn" type="submit" href="/login" >Sign Up</button>

                {errorMessage.password && <span className="err password" style={MessageStyle}>{errorMessage.password}</span>}
                {errorMessage.confirmPassword && <span className="err passwordConf" style={MessageStyle}>{errorMessage.confirmPassword}</span>}
                {errorMessage.signUp && <span className="err signUp"style ={MessageStyle}>{errorMessage.signUp}</span>}

                <div className="links">
                    <a href="/auth/google"><GoogleButton/></a>
                    <a href="/auth/github"><GitHubButton/></a>
                </div>
            </form>
        </div>
    )
}

export default Signup