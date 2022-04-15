import React from 'react'
import {} from 'react-router-dom'

<<<<<<< Updated upstream
const Header = () => {
    return <h1> Hello this is a Header!</h1>
=======
class Header extends Component {
    renderContent() {
        switch(this.props.auth){
            case null:
                return
            case false: 
                return (
                <ul className="right">
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/signup'>Sign Up</a></li>
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
>>>>>>> Stashed changes
}

export default Header