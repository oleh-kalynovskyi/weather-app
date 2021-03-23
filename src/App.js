
import './App.css';
import React, { Component } from 'react'

import Info from './component/Info'
import Form from './component/Form'
import Weather from './component/Weather'

const API_KEY = '773411df19335a4ee21f3d753a23e6c2';


export default class App extends Component {

  state = {
    weather:undefined,
    icon: undefined,
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&exclude=daily&appid=${API_KEY}`)
      const data = await api_url.json();

    if(api_url.ok) {
      // sunset time
      let sunset = new Date();
      sunset.setTime(data.sys.sunset*1000);
      let sunsetTime = sunset.getHours() + ":" + sunset.getMinutes();
      // sunrise time
      let sunrise = new Date();
      sunrise.setTime(data.sys.sunrise*1000);
      let sunriseTime = sunrise.getHours() + ":" + sunrise.getMinutes();
      // icon weather
      let icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

      this.setState({
        icon: icon,
        weather: data.weather[0].description,
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunrise: sunriseTime,
        sunset: sunsetTime,
        error: undefined
      });
    } else {
      this.setState({
        icon: undefined,
        weather: undefined,
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Write city"
      });
    }

  }

  render() {
    return (
      <div className="App">
        <Info />
        <Form weatherMethod={this.getWeather}/>
        <Weather 
          icon={this.state.icon}
          weather={this.state.weather}
          temp={this.state.temp}
          city={this.state.city}
          pressure={this.state.pressure}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}


