import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as userActions from '../store/actions/actions'

const Header = (props) => {

    const onLogout = async () => {
        await props.logout()
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <img src={require('../logo.png')} width="80px" height="64px" />
                <Link to={props.auth.authenticated ? "/" + props.auth.user.login : '/'}
                    className="left brand-logo" >
                    To-do App
                </Link>
                {props.auth.authenticated
                    ? <ul className="right">
                        <li>{props.auth.user.login}</li>
                        <li><a href="/logout" onClick={onLogout}>Logout</a></li>
                    </ul>
                    : <ul className="right">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to='/'>Sign Up</Link></li>
                    </ul>
                }
            </div>
        </nav>
    )
}

function mapStateToProps({ auth }) {
    return {
        auth
    }
}

export default connect(mapStateToProps, userActions)(Header)