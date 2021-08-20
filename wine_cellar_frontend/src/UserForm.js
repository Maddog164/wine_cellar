import React, {Component} from 'react'
// import React, {useState} from 'react'
import {addUser} from './actions/userActions'
import {connect} from 'react-redux'

class UserForm extends Component {

    state = {
        first_name: "",
        last_name: "",
        // id: 1

    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = e => {
        e.preventDefault()
        console.log("in userform", this.state.first_name, this.state.last_name)
        this.props.addUser(this.state)


        this.setState(prevState =>({
            first_name: "",
            last_name: "",
            // id: prevState.id + 1
        }))

    }

    render() {
        return(
            <form onSubmit ={this.handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleOnChange}></input>
                <br/>
                <label>Last Name:</label>
                <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleOnChange}></input>
                <br/>
                <input type="submit" value="Create New User" />
            </form>

        )
    }
}

export default connect(null, {addUser})(UserForm)