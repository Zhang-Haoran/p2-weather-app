import React from 'react'
import { Body, Container } from './style'
import { CurrentProps } from '../../../../types'
import WeatherCard from './components/WeatherCard/WeatherCard'
const Current: React.FC<CurrentProps> = ({ currentWeather }) => {
  console.log(currentWeather)
  return (
    <Container>
      <Body
        style={{
          backgroundImage:
            'linear-gradient(152deg, #899bf0 1%, #3f55e4 54%, #3f55e4 96%)',
        }}
      >
        <WeatherCard currentWeather={currentWeather} />
      </Body>
    </Container>
  )
}
export default Current
