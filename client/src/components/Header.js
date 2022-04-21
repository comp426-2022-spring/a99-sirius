import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as userActions from '../store/actions/actions'

const Header = (props) => {

    const onLogout = async () => {
        await props.logout()
    }

    return(
        <nav>
            <div className="nav-wrapper">
                <Link to={ props.auth.authenticated ? "/" + props.auth.user.login : '/'}
                    className="left brand-logo"> APP-NAME-AND-LOGO </Link>
                {props.auth.authenticated 
                    ? <ul className = "right">
                        <li>{props.auth.user.login}</li>
                        <li><Link to="/" onClick={onLogout}>Logout</Link></li>
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

function mapStateToProps( {auth} ) {
    return {
        auth
    }
}

export default connect(mapStateToProps, userActions)(Header)