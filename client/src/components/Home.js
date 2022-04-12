import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'

// Import Auxiliary Components
import Landing from './Landing'

// Import Login and SignUp Component
class Home extends Component {
    renderContent(){
        switch(this.props.auth){
            case null:
                return
            case false:
                return <Landing/>
            default:
                return <h1>UserInfo</h1>
        }
    }
    render() {
        return(
            <div className="container">
                {this.renderContent()}
            </div>
        )
    }
}

function mapStateToProps( {auth} ){
    return { auth }
}

export default connect(mapStateToProps)(Home)