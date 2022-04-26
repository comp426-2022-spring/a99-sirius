import React, { Component } from 'react'
import { Route} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../store/actions/actions'
import {Redirect} from 'react-router-dom'

import DashBoard from './DashBoard'
import SignInContainer from './SignInContainer'
import SignUpContainer from './SignUpContainer'


class App extends Component {
    
    componentDidMount() {
        this.props.fetchUser();
    }
    
    render() {
        return (
            <div>
                {this.props.auth.authenticated ? <Redirect to={"/dashboard/" + this.props.auth.user.login}/> : <></>}
                <Route exact path="/login">
                    <SignInContainer/>
                </Route>
                <Route exact path="/">
                    <SignUpContainer/>
                </Route>
                <Route path="/dashboard">
                    <DashBoard/>
                </Route>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return {
        auth
    }
}

export default connect(mapStateToProps, actions)(App)