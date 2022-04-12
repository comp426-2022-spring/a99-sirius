import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from'../actions'

// Import Components Here!!
import Header from './Header'

class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                    </div>
                </BrowserRouter>
            </div>
        );
    }  
};

export default connect(null, actions)(App)