import React, {Component} from 'react'
import UserForm from './UserForm'
import {connect} from 'react-redux'
import {addUser} from './userActions'

class NewWineContainer extends Component {
    
    render() {
        const findUser = this.props.users.find(user => user.id == this.props.match.params.user)
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
        users: state}
}

const mapDispatchToProps = dispatch => {
    return {
        addUser: (user) => dispatch(addUser(user))
    }
}

export default connect(mapStateToProps)(NewWineContainer)