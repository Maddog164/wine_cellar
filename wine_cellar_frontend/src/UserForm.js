import React, {Component} from 'react'

class UserForm extends Component {

    state = {
        firstName: "",
        lastName: ""

    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleAddUser(this.state)


        this.setState({
            firstName: "",
            lastName: ""
        })

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

export default UserForm