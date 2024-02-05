import React from 'react'
import { ForecastProps } from '../../../types'
import Card from '../../shared/Card/Card'
import { findWeatherIcon } from '../../../utils'

const Forecast: React.FC<ForecastProps> = ({ forecastWeather }) => {
  return (
    <div className="flex flex-initial items-center p-4 space-x-6">
      {forecastWeather.slice(0, 4).map((data) => {
        return (
          <Card
            key={data.date + data.time}
            weekday={new Date(data.date.substr(5, 5)).toLocaleDateString(
              'en-US',
              { weekday: 'long' }
            )}
            date={new Date(data.date.substr(5, 5)).toLocaleDateString('en-US', {
              month: 'long',
              day: '2-digit',
            })}
            img={findWeatherIcon(data.weather)}
            highestTemperature={data.highestTemperature}
            lowestTemperature={data.lowestTemperature}
          />
        )
      })}
    </div>
  )
}
export default Forecast
