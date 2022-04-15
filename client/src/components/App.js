import React, {Component} from 'react'
import { Route, Redirect, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from'../store/actions/actions'


class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
        
    }
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path="/">
                        {this.props.session.loggedIn ? <Redirect to={"/" + this.props.session.user.login}/> : <h1>Landing Page Component</h1>}
                    </Route>
                    <Route exact path={ "/" + this.props.session.user.login}>
                        <h1>DashBoard Component</h1>
                    </Route>
                </Switch>
            </div>
        );
    }  
};

function mapStateToProps( {session }){
    return {session}
}

export default connect(mapStateToProps, actions)(App)