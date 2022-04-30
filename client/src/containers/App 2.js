import React, { Component } from 'react'
<<<<<<< Updated upstream
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
=======
import { Route, Switch} from 'react-router-dom'
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
                <Switch>
                    <Route exact path="/login">
                        <SignInContainer/>
                    </Route>
                    <Route path="/dashboard">
                        <ProtectedRoute redirectPath={"/"} authenticated={this.props.auth.authenticated}>
                            <DashBoard ownPassword={this.props.auth.user.ownPassword} />
                        </ProtectedRoute>
                    </Route>
                    <Route path="/">
                        <SignUpContainer/>
>>>>>>> Stashed changes
                    </Route>
                </Switch>
            </div>
        );
    }
}

<<<<<<< Updated upstream
=======
const ProtectedRoute = ({children, redirectPath, authenticated}) => {
    if(!authenticated){
        return <Redirect to={redirectPath}/>
    }
    return children
}

>>>>>>> Stashed changes
function mapStateToProps({ auth }) {
    return {
        auth
    }
}

export default connect(mapStateToProps, actions)(App)