import React, {Component} from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from'../../store/actions/actions'

import LoginContainer from './LoginContainer'
import SignUpContainer from './SignUpContainer'
import DashBoardContainer from './DashBoardContainer'

class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return(
            <div>
                {this.props.auth.authenticated ? <Redirect from="/" to={"/" + this.props.auth.user.login}/> : <></> }
                <Switch>
                    <Route exact path = "/login">
                        <LoginContainer/>
                    </Route>
                    <Route exact path = {"/" + this.props.auth.user.login}>
                        <DashBoardContainer/>
                    </Route>
                    <Route exact path="/">
                        <SignUpContainer/>
                    </Route>
                </Switch>
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