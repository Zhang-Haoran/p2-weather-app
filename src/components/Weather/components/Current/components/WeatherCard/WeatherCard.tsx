import React from 'react'
import { findWeatherIcon } from '../../../../../../utils'
import { Card, Text, Title } from './style'
import { WeatherCardProps } from '../../../../../../types'
import Meta from './components/Meta/Meta'

const WeatherCard: React.FC<WeatherCardProps> = ({ currentWeather }) => {
  console.log(currentWeather)
  return (
    <Card type="Weather">
      <Title type="Subtitle">{currentWeather.date}</Title>
      <Title type="Title">
        {currentWeather.city},{currentWeather.country}
      </Title>
      <Text type="Temperature">
        {currentWeather.currentTemperature.toFixed(1)}&#176;
      </Text>
      <Meta currentWeather={currentWeather} />
    </Card>
  )
}
export default WeatherCard
