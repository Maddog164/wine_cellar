import React, {Component} from 'react'
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import Navigate from './Nav'
import About from './About'
import Home from './Home'
import Search from './Search'
import UserContainer from './UserContainer'
import WineContainer from './WineContainer'
import UserWinesContainer from './UserWinesContainer'
import {getAllUsers} from '../actions/userActions'
import {getAllWines} from '../actions/wineActions'

class Routing extends Component {

    componentDidMount() {
        this.props.getAllUsers()
        this.props.getAllWines()
    };

    render() {
        return (
        <Router>
            <div>
                <Navigate />
                    <Switch>
                        <Route exact path="/Home" component={Home}/>
                        <Route exact path = "/">
                            <Redirect to="/Home" />
                        </Route>
                        <Route exact path="/About" component={About} />
                        <Route
                            exact path="/users"
                            users={this.props.users}
                            wines={this.props.wines}
                            component = {UserContainer}
                         />
                        <Route exact path = "/users/:id"
                            component = {UserWinesContainer} /> 

                        <Route exact path = "/wines" component = {WineContainer} />
                        <Route exact path="/Search" component={Search} />
                
                    </Switch>
            </div>
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