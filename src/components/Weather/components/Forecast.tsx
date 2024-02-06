import React from 'react'
import { ForecastProps } from '../../../types'
import Card from '../../shared/Card/Card'
import {
  findWeatherIcon,
  getForecastWeatherWithUniqueDate,
} from '../../../utils'
import { v4 as uuidv4 } from 'uuid'

const Forecast: React.FC<ForecastProps> = ({ forecastWeather }) => {
  return (
    <div className="flex flex-initial items-center p-4 space-x-6">
      {getForecastWeatherWithUniqueDate(forecastWeather)
        .slice(0, 4)
        .map((data) => {
          return (
            <Card
              key={uuidv4()}
              weekday={new Date(data.date.substr(5, 5)).toLocaleDateString(
                'en-US',
                { weekday: 'long' }
              )}
              date={new Date(data.date.substr(5, 5)).toLocaleDateString(
                'en-US',
                {
                  month: 'long',
                  day: '2-digit',
                }
              )}
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
