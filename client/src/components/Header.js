import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Header extends Component {
    renderContent() {
        switch(this.props.auth){
            case null:
                return
            case false: 
                return (
                <ul className="right">
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/'>Sign Up</a></li>
                </ul>
                )
            default:
                return <ul className="right">
                        <li>{this.props.auth.firstName}</li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>
        }
    }
    render() {
        console.log(this.props)
        return(
          <nav>
            <div className = "nav-wrapper">
                <Link to={this.props.auth ? '/' : '/'}
                    className='left brand-logo'>
                        TO-DO
                </Link>
                {this.renderContent()}
            </div>
          </nav>  
        )
    }
}

function mapStateToProps( {auth} ){
    return { auth }
}

export default connect(mapStateToProps)(Header)