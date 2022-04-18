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
                        {this.props.session.loggedIn ? <Redirect to={"/" + this.props.session.user.login}/> : <div>
                                <h1>Landing Page Component</h1>
                                <h2>This is the landing Page of our application in production</h2>
                                <h3>TO-DO:</h3>
                                <li>
                                    Make sure you pull changes from the main branch into your personal branch!
                                </li>
                                <li>Add the following to your config/dev file: URL: 'http://localhost:3000' </li>

                                <h3> Testing this!</h3>
                                <li>In your browser, in the ULR at the top you should see: https://siriustodoapp.herokuapp.com </li>
                                <li>Type https://siriustodoapp.herokuapp.com/auth/google or https://siriustodoapp.herokuapp.com/auth/github</li>
                                <h3> The last step should redirect you to a dashboard page and the URL is going to have your username</h3>
                            </div>}
                    </Route>
                    <Route exact path={ "/" + this.props.session.user.login}>
                        <div>
                            <h1>DashBaord Component</h1>
                            <h2> Hello {this.props.session.user.firstName}</h2>
                            <h3> You were redirected to the dashboard component!</h3>
                            <h3> Feel free to logout by typing https://siriustodoapp.herokuapp.com/logout </h3>
                        </div>
                    </Route>
                </Switch>
            </div>
        );
    }  
};

function mapStateToProps( {session }){
    return { session }
}

export default connect(mapStateToProps, actions)(App)