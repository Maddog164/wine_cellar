// import React from 'react'
// import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const UserCard = (props) => {

    console.log("I am in UserCard")
    
    const user = props.user
        
    return(
        <div>
           <p key={user.id}><Link to={{pathname: `/users/${user.id}`, state: user}} > {user.first_name} {user.last_name}</Link></p>
        </div>
    )
    }


export default UserCard