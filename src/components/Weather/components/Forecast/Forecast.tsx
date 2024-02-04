import React from 'react'
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { findWeatherIcon } from '../../../../utils'
import { Body, Card, Container, Text, WeatherIcon } from './style'
import { ForecastProps } from '../../../../types'

const Forecast: React.FC<ForecastProps> = ({ forecastWeather }) => {
  return (
    <Container>
      <Body>
        {forecastWeather.slice(0, 4).map((data) => {
          return (
            <Card key={data.date + data.time}>
              <Text>{data.date.substr(5, 5)}</Text>
              <Text>{data.time.substr(0, 5)}</Text>
              <WeatherIcon
                src={`/src/assets/images/${findWeatherIcon(data.weather)}.png`}
                alt="weather icon"
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
