import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const UserShow = (props) => {

    const user = props.users.find(user => user.id === parseInt(props.match.params.id, 10))
    return(
        <div>
            {user ? <div>
            {user.firstName} {user.lastName}
            <br/>
                <Link to={{pathname: `${user.id}/wines/new`}}>Add new wine</Link>
                </div> : <p>User not found</p>}
        </div>
    )

}

const mapStateToProps = state => {

    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(UserShow)