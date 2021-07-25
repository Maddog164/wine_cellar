import React, {Component} from 'react'
import UserForm from './UserForm'
import {connect} from 'react-redux'

class UserContainer extends Component {
    handleAddUser = (user) => {
        this.props.dispatch({type: 'ADD_USER', user: user})
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
    return {users: state}
}

export default connect(mapStateToProps)(UserContainer)
