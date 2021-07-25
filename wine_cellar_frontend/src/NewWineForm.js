import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addWine} from './wineActions'

class NewWineForm extends Component {
    state = {
        name: "",
        color: "",
        grape: "",
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addWine(this.state)
    }

    render() {
        return(
            
            <form onSubmit ={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" name="wineName" value={this.state.name} onChange={this.handleOnChange}></input>
                <br/>
                <label>Color:</label>
                <input type="text" name="wineColor" value={this.state.color} onChange={this.handleOnChange}></input>
                <br/>
                <label>Color:</label>
                <input type="text" name="wineGrape" value={this.state.grape} onChange={this.handleOnChange}></input>
                <br/>
                <input type="submit" value="Create New Wine" />
            </form>
        )
    }
}

export default connect(null, {addWine})(NewWineForm)
