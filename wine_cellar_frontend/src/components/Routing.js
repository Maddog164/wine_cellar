import React, {Component} from 'react'
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
// import {NavBar} from './Navbar'
import About from './About'
import Home from './Home'
// import UserForm from './UserForm'
// import UsersList from './UsersList'
import UserContainer from './UserContainer'
import WineContainer from './WineContainer'
import UserWinesContainer from './UserWinesContainer'
import {getAllUsers} from '../actions/userActions'
import {getAllWines} from '../actions/wineActions'
// import About from '../components/About'

class Routing extends Component {

    componentDidMount() {
        this.props.getAllUsers()
        this.props.getAllWines()
    };

// const Routes = props => (
    render() {
        return (
        <Router>
            <Switch>
                <Route exact path="/Home" component={Home}/>
                <Route exact path = "/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/About" component={About} />
                <Route
                    path="/users"
                    users={this.props.users}
                    wines={this.props.wines}
                    component = {UserContainer} 
                />

                <Route path = "/wines" component = {WineContainer} />
                <Route path = "/users/:id" component = {UserWinesContainer} />
            </Switch>
        </Router>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.userReducer.users,
        wines: state.wineReducer.wines}
};


export default connect(mapStateToProps, {getAllUsers,getAllWines})(Routing)