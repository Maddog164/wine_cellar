// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// // import {Link} from 'react-router-dom'
// import {getUserWines} from '../actions/userActions'
import {useLocation, Link} from 'react-router-dom'

// import {addUser, getAllUsers} from './actions/userActions'

// class UserWinesContainer extends Component {

    // componentDidMount() {
    //     this.props.getUserWines()
    // }

const UserWinesContainer = _ => {
    const { state } = useLocation();
    console.log(state)
    console.log(state.users.first_name)
    console.log(state.users.last_name)
        
    // render() {
        return(
            <div>
                Owner {state.users.first_name} {state.users.last_name} Wine List:
                {state.users.wines.map(wine => (
                    <p><Link to={{pathname: `/wines/${wine.id}`, state: {wines: wine.id}}} > </Link>
                
                        <img
                        src = {wine.image_url}
                        alt = "new"
                         />
                        {wine.name} {wine.color} {wine.grape} {wine.country} {wine.avg_price}
                    
                    </p>
                ))}
                
            </div>
        )
    
}


// const mapStateToProps = state => {
//     return {users: state.userReducer.users}
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         getUserWines: (user) => dispatch(getUserWines(user))
//     }
// }

export default UserWinesContainer
