import React from 'react'
import PM from './img/PM.svg'
import temperature from './img/temperature.svg'
import wind from './img/wind.svg'
import humidity from './img/humidity.svg'
import { Card, Text, Image } from './style'
import { MetaProps } from '../../../../../../../../types'

const Meta: React.FC<MetaProps> = ({ currentWeather }) => {
  return (
    <Card type="Wind">
      <Text type="Other">
        <Image src={temperature} />
        {currentWeather.highestTemperature.toFixed(1)}&#176;
      </Text>
      <Text type="Other">
        <Image src={PM} />
        {currentWeather.lowestTemperature.toFixed(1)}&#176;
      </Text>
      <Text type="Other">
        <Image src={humidity} />
        {currentWeather.humidity}%
      </Text>
      <Text type="Other">
        <Image src={wind} />
        {currentWeather.windSpeed}mph
      </Text>
    </Card>
  )
}
export default Meta
