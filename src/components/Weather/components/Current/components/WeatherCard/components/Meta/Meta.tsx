import React from 'react'
import PM from './images/PM.svg'
import temperature from './images/temperature.svg'
import wind from './images/wind.svg'
import humidity from './images/humidity.svg'
import { Card, Text, Image } from './style'
import { MetaProps } from '../../../../../../../../types'

const Meta: React.FC<MetaProps> = ({ currentWeather }) => {
  return (
    <Card type="Wind">
      <Text type="Other">
        <Image src={wind} />
        {currentWeather.windSpeed}mph
      </Text>
      <Text type="Other">
        <Image src={humidity} />
        {currentWeather.humidity}%
      </Text>
      <Text type="Other">
        <Image src={PM} />
        {currentWeather.lowestTemperature.toFixed(1)}μg
      </Text>
      <Text type="Other">
        <Image src={temperature} />
        {currentWeather.highestTemperature.toFixed(1)}&#176;
      </Text>
    </Card>
  )
}
export default Meta
