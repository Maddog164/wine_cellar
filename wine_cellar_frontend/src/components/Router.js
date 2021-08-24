import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {NavBar} from './Navbar'
import About from './About'
import Home from './Home'
import UserForm from './UserForm'
import UsersList from './UsersList'
import UserContainer from './UserContainer'
import WineContainer from './WineContainer'
import UserWinesContainer from './UserWinesContainer'
// import About from '../components/About'



const Router = () => {
    return (
        <Switch>
            <Route exact path="/Home" component={Home}/>
            <Route exact path = "/">
                <Redirect to="/Home" />
            </Route>
            <Route exact path="/About" component={About} />
            <Route path="/users" component = {UserContainer} />
            <Route path = "/wines" component = {WineContainer} />
            <Route path = "/users/:id" component = {UserWinesContainer} />
        </Switch>
    )
}

export default Router