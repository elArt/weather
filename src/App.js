import React from "react";
import Info from "./components/info";
import Weatherinfo from "./components/weather_info";
import Form from "./components/form";
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = "59cbeb56ed9085d9cac55ac9e1e6a43a";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city){
      const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

        console.log(data);
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        error: undefined
      });
    }
    else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        error: "Enter city name in English"
      });
    }
  }

  render(){
    return(
      <div className = "wrapper">
        <div className = "main">
            <div className = "container">
              <div className = "row">
                <div className = "col-sm-5 info">
                  <Info />
                </div>
                <div className = "col-sm-7 form">
                  <Form weatherMethod={this.gettingWeather}/>
                  <Weatherinfo
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  pressure={this.state.pressure}
                  error={this.state.error}
                   />
               </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default App;
