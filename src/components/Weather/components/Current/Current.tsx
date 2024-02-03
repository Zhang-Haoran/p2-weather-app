import React from 'react'
import { Body, Container, Title } from './style'
import { CurrentProps } from '../../../../types'
import WeatherCard from './components/WeatherCard/WeatherCard'
import WindCard from './components/WindCard/WindCard'

const Current: React.FC<CurrentProps> = ({ currentWeather }) => {
  return (
    <Container>
      <Title type="Title">
        {currentWeather.city},{currentWeather.country}
      </Title>
      <Title type="Subtitle">{currentWeather.date}</Title>
      <Body>
        <WeatherCard currentWeather={currentWeather} />
        <WindCard currentWeather={currentWeather} />
      </Body>
    </Container>
  )
}
export default Current
