import React from 'react'
import {connect} from 'react-redux'

const UsersList = ({users}) => {
    return (
        <div>
            {users.map(user => <ul><li key={user.id}>{user.first_name} {user.last_name}</li></ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {users: state.users}
}

export default connect(mapStateToProps)(UsersList)