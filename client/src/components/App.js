import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from'../actions'

// Import Components Here!!
import Header from './Header'


const Dashboard = () => {
    return <h1>Dashboard</h1>
}

const Landing = () => {
    return <h1> Landing</h1>
}

class App extends Component {
    render(){
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path='/' component={Landing}></Route>
                    </div>
                </BrowserRouter>
            </div>
            
        );
    }  
};

export default App