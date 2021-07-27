import React, {Component} from 'react'
// import UserForm from './UserForm'
import NewWineForm from './NewWineForm'
import {connect} from 'react-redux'
import {addUser} from './actions/userActions'

class NewWineContainer extends Component {
    
    render() {
        const findUser = this.props.users.find(user => user.id === parseInt(this.props.match.params.id))
        console.log('findWine', this.props)
        return(
            <div>
                <h2>{findUser.firstName}</h2>
                <NewWineForm />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users}
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: (user) => dispatch(addUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewWineContainer)