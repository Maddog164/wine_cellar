// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
// import {getUserWines} from '../actions/userActions'
import {useLocation, Link} from 'react-router-dom'

// import {addUser, getAllUsers} from './actions/userActions'

// class UserWinesContainer extends Component {

    // componentDidMount() {
    //     this.props.getUserWines()
    // }

// const UserWinesContainer = _ => {
const UserWinesContainer = (props) => {
    // super(props)
    console.log("I am in UserWinesContainer");
    // const { state } = useLocation();
    // console.log(state)
    // console.log(state.users.first_name)
    // console.log(state.users.last_name)
    
    // const {state} = this.props.user
//    const user = this.props
    console.log(props.location.state)
    const user = props.location.state

    
    console.log(user.wines)
    
        
    // render() {
        return(
            <div>
                Owner {user.first_name} {user.last_name} Wine List:
                {user.wines.map(wine => (
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
