import React, {Component} from 'react'
import UserForm from './UserForm'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addUser, getAllUsers} from '../actions/userActions'
// import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
// import UserWinesContainer from './UserWinesContainer'

// import {addUser, getAllUsers} from './actions/userActions'

class UserContainer extends Component {

    componentDidMount() {
        this.props.getAllUsers()
    }

    handleAddUser = (user) => {
        // this.props.addUser(user)
        this.props.addUser()
    }

    render() {
        return(
            <div>
                <UserForm handleAddUser={this.handleAddUser}/>
                <br></br>
                Current Owners:
                {this.props.users && this.props.users.map(user => (
                    // <p key={user.id}><Link to={`/users/${user.id}`, state: user} > {user.first_name} {user.last_name} </Link></p>
                    <p key={user.id}><Link to={{pathname: `/users/${user.id}`, state: user}} > {user.first_name} {user.last_name} </Link></p>
                ))}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {users: state.userReducer.users}
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: (user) => dispatch(addUser(user)),
        getAllUsers: () => dispatch(getAllUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
