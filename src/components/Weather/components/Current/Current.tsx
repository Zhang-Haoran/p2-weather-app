import React from 'react'
import { Body, Container } from './style'
import { CurrentProps } from '../../../../types'
import WeatherCard from './components/WeatherCard/WeatherCard'
const Current: React.FC<CurrentProps> = ({ currentWeather }) => {
  return (
    <Container>
      <Body>
        <WeatherCard currentWeather={currentWeather} />
      </Body>
    </Container>
  )
}
export default Current
