import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'


const Dashboard = () => {
    return <h1>Dashboard</h1>
}

const Landing = () => {
    return <h1> Landing</h1>
}

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={Landing}></Route>
                    <Route exact path='/login' component={Dashboard}></Route>
                </div>
            </BrowserRouter>
        </div>
        
    );
import Home from './Home'
import SignUp from './SignUp'

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
                        <Route exact path='/signup' component={Home}/>
                        <Route exact path='/login' component={Home}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }  
};

export default App