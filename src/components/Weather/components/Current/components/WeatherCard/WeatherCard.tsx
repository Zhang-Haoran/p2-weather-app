import React from 'react'
import { findWeatherIcon } from '../../../../../../utils'
import { Card, Text, Title, WeatherIcon } from './style'
import { WeatherCardProps } from '../../../../../../types'
import Meta from './components/Meta/Meta'
import bg from './images/Cloudy_day_background.png'

const WeatherCard: React.FC<WeatherCardProps> = ({ currentWeather }) => {
  return (
    <Card img={bg}>
      <Title type="Subtitle">{currentWeather.date}</Title>
      <Title type="Title">
        {currentWeather.city},{currentWeather.country}
      </Title>
      <Text type="Temperature">
        {currentWeather.currentTemperature.toFixed(1)}&#176;
      </Text>
      <WeatherIcon
        src={`/src/assets/images/${findWeatherIcon(
          currentWeather.weather
        )}.png`}
        alt="weather icon"
      />
      <Meta currentWeather={currentWeather} />
    </Card>
  )
}
export default WeatherCard
