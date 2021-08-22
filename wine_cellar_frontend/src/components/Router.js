import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Home'
import UsersList from './UsersList'
// import About from '../components/About'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Users' component = {UsersList} />
        </Switch>
    )
}

export default Router