import React, {Component} from 'react'
// import UserForm from './UserForm'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllWines} from '../actions/wineActions'

// import {addUser, getAllUsers} from './actions/userActions'

class WineContainer extends Component {

    componentDidMount() {
        this.props.getAllWines()
    }

    // handleAddUser = (user) => {
    //     // this.props.addUser(user)
    //     this.props.addUser()
    // }

    render() {
        return(
            <div>
                Current Wine List:
                {this.props.wines && this.props.wines.map(wine => (
                    <p>
                        <img
                        src = {wine.image_url}
                        alt = "new"
                         />
                        <Link to={{pathname: `/wines/${wine.id}`}} >  {wine.name} </Link>
                    {wine.color} {wine.grape} {wine.country} {wine.avg_price}
                    
                    </p>
                ))}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {wines: state.wineReducer.wines}
}

const mapDispatchToProps = dispatch => {
    return {
        // addUser: (user) => dispatch(addUser(user)),
        getAllWines: () => dispatch(getAllWines())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineContainer)