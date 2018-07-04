import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

/**
 * Weather List Component
 * 
 * @class
 */
class WeatherList extends Component {
  
  // Render Weather Chart
  renderWeather(cityData) {
    const 
      cityName = cityData.city.name,
      temps = cityData.list.map(weather => weather.main.temp),
      pressures = cityData.list.map(weather => weather.main.pressure),
      humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td><Chart data={temps} color="red" units="K" /></td>
        <td><Chart data={pressures} color="orange" units="hPa" /></td>
        <td><Chart data={humidities} color="green" units="%" /></td>
      </tr>
    );
  }

  // Render
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th width="25%">City</th>
            <th width="25%">Temperature</th>
            <th width="25%">Pressure</th>
            <th width="25%">Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
};

// Reducers State To Props
function mapStateToProps({ weather}) {
  return { weather };
}

// Connect To Redux
export default connect(mapStateToProps)(WeatherList);