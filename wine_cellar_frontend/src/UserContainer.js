import React, {Component} from 'react'
import UserForm from './UserForm'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {addUser} from './actions/userActions'
// import {addUser, getAllUsers} from './actions/userActions'

class UserContainer extends Component {

    componentDidMount() {
        this.props.getAllUsers()
    }

    handleAddUser = (user) => {
        // this.props.addUser(user)
        this.props.dispatch()
    }

    render() {
        return(
            <div>
                <UserForm handleAddUser={this.handleAddUser}/>
                {this.props.drivers && this.props.users.map(user => (
                    <p><Link to={{pathname: `/users/${user.id}`}} > {user.firstName} {user.lastName} </Link></p>
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
        addUser: (user) => dispatch(addUser(user))
        // getAllUsers: () => dispatch(getAllUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
