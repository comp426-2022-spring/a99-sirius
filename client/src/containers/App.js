import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../store/actions/actions'

import DashBoardContainer from './DashBoardContainer'
import Header from '../components/Header'
import LandingContainer from './Landing Container'

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        if(this.props.auth.authenticated){
            return <DashBoardContainer/>
        }
        return (
            <div>
                <Route exact path="/login">
                    <LandingContainer/>
                </Route>
                <Route exact path="/">
                    <LandingContainer/>
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