import React from 'react'
import highest from './img/highest.png'
import lowest from './img/lowest.png'
import wind from './img/wind.png'
import humidity from './img/humidity.png'
import { Card, Text, Image } from './style'
import { WindCardProps } from '../../../../../../types'

const WindCard: React.FC<WindCardProps> = ({ currentWeather }) => {
  return (
    <Card type="Wind">
      <Text type="Other">
        <Image src={highest} />
        Highest: {currentWeather.highestTemperature.toFixed(1)}&#176;
      </Text>
      <Text type="Other">
        <Image src={lowest} />
        Lowest: {currentWeather.lowestTemperature.toFixed(1)}&#176;
      </Text>
      <Text type="Other">
        <Image src={humidity} />
        Humidity: {currentWeather.humidity}%
      </Text>
      <Text type="Other">
        <Image src={wind} />
        Wind: {currentWeather.windSpeed}mph
      </Text>
    </Card>
  )
}
export default WindCard
