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
        return (
            <div>
                <Redirect from="/auth/" to="/"></Redirect>
                {this.props.auth.authenticated ? <Redirect from="/" to={"/" + this.props.auth.user.login} /> : <></>}
                <Header />
                <Switch>
                    <Route exact path="/login">
                        <LandingContainer />
                    </Route>
                    <Route exact path={"/" + this.props.auth.user.login}>
                        <DashBoardContainer />
                    </Route>
                    <Route exact path="/">
                        <LandingContainer />
                    </Route>
                </Switch>
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