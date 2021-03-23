import React, { Component } from 'react'

export default class Form extends Component {

    render() {
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="city"/>
                <button>Show Weather</button>
            </form>
        )
    }
}

// {this.props.weatherMethod}
