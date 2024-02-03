import React from 'react'
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import ReactAnimatedWeather from 'react-animated-weather'
import { findWeatherIcon } from '../../../../utils'
import { Body, Card, Container, Text, Title } from './style'
import { ForecastProps } from '../../../../types'

const Forecast: React.FC<ForecastProps> = ({ forecastWeather }) => {
  return (
    <Container>
      <Title>Forecast</Title>
      <Body>
        {forecastWeather.map((data) => {
          return (
            <Card key={data.date + data.time}>
              <Text>{data.date.substr(5, 5)}</Text>
              <Text>{data.time.substr(0, 5)}</Text>
              <ReactAnimatedWeather
                icon={findWeatherIcon(data.weather, data.time)}
              />
              <Text>{data.temperature.toFixed(1)}&#176;</Text>
            </Card>
          )
        })}
      </Body>
    </Container>
  )
}
export default Forecast
