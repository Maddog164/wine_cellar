import React, {Component} from 'react'
import UserForm from './UserForm'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {addUser} from './userActions'

class UserContainer extends Component {

    handleAddUser = (user) => {
        // this.props.addUser(user)
        this.props.dispatch()
    }

    render() {
        return(
            <div>
                <UserForm handleAddUser={this.handleAddUser}/>
                {this.props.users.map(user => (
                    <p>{user.firstName} {user.lastName}</p>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {users: state.users}
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: (user) => dispatch(addUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
