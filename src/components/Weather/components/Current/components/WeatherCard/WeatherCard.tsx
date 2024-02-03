import React from 'react'
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import ReactAnimatedWeather from 'react-animated-weather'
import { findWeatherIcon } from '../../../../../../utils'
import { Card, Text, Flex } from './style'
import { WeatherCardProps } from '../../../../../../types'

const WeatherCard: React.FC<WeatherCardProps> = ({ currentWeather }) => {
  return (
    <Card type="Weather">
      <ReactAnimatedWeather
        icon={findWeatherIcon(
          currentWeather.weather,
          new Date().toTimeString().split(' ')[0]
        )}
        size={204}
      />
      <Flex>
        <Text type="Temperature">
          {currentWeather.currentTemperature.toFixed(1)}&#176;
        </Text>
        <Text type="Weather">{currentWeather.weatherDescription}</Text>
      </Flex>
    </Card>
  )
}
export default WeatherCard
