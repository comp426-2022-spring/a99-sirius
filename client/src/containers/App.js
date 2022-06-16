import React, { Component } from 'react'
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
                    </Route>
                </Switch>
            </div>
        );
    }
}

const ProtectedRoute = ({children, redirectPath, authenticated}) => {
    if(!authenticated){
        return <Redirect to={redirectPath}/>
    }
    return children
}

function mapStateToProps({ auth }) {
    return {
        auth
    }
}

export default connect(mapStateToProps, actions)(App)