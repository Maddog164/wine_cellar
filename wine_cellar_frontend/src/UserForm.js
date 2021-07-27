import React, {Component} from 'react'
// import React, {useState} from 'react'
import {addUser} from './actions/userActions'
import {connect} from 'react-redux'

class UserForm extends Component {

    state = {
        firstName: "",
        lastName: "",
        id: 1

    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = e => {
        e.preventDefault()
        console.log("in userform", this.state.firstName, this.state.lastName, this.state.id)
        this.props.addUser(this.state)


        this.setState(prevState =>({
            firstName: "",
            lastName: "",
            id: prevState.id + 1
        }))

    }

    render() {
        return(
            <form onSubmit ={this.handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleOnChange}></input>
                <br/>
                <label>Last Name:</label>
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleOnChange}></input>
                <br/>
                <input type="submit" value="Create New User" />
            </form>

        )
    }
}

export default connect(null, {addUser})(UserForm)