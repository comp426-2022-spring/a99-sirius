import React, {Component} from 'react'
import { Route, Redirect, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from'../store/actions/actions'

import LoginContainer from './containers/LoginContainer'

class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return(
            <div>
                <Route exact path="/">
                    {this.props.auth.authenticated ? <Redirect to={"/" + this.props.auth.user.login}/> : <LoginContainer/>}
                </Route>
                <Route exact path={ "/" + this.props.auth.user.login}>
                    <div>
                        <h1>DashBaord Component</h1>
                        <h2> Hello {this.props.auth.user.firstName}</h2>
                        <h3> You were redirected to the dashboard component!</h3>
                        <h3> Feel free to logout by typing https://siriustodoapp.herokuapp.com/logout </h3>
                    </div>
                </Route>
            </div>
        );
    }  
};

function mapStateToProps( { auth }){
    return {
        auth
    }
}

export default connect(mapStateToProps, actions)(App)