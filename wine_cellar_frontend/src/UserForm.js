import React, {Component} from 'react'

class UserForm extends Component {

    state = {
        firstName: "",
        lastName: ""

    }

    render() {
        return(
            <form onSubmit ={}>
                <label>First Name:</label>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleOnChange}></input>
                <br/>
                <label>Last Name:</label>
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleOnChange}></input>
            </form>

        )
    }
}

export default UserForm