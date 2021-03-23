import React, { Component } from 'react'

export default class Weather extends Component {
    render() {
        return (
        <>
        { this.props.city &&
            <div className="Weather">
                <p><img alt={this.props.weather} src={this.props.icon}/></p>
                <p>Location: {this.props.city} {this.props.country}</p>
                <p>Weather: {this.props.weather}</p>
                <p>Temp: {this.props.temp}°C</p>
                <p>Pressure: {this.props.pressure}hPa</p>
                <p>Sunrise: {this.props.sunrise}</p>
                <p>Sunset: {this.props.sunset}</p>
            </div>
        }
        { <p> {this.props.error} </p> }
        </>
        )
    }
}
