import React from 'react'
import { CurrentProps } from '../../../types'
import Container from '../../shared/Container/Container'
import bg from '../../../assets/images/Cloudy_day_background.png'
import Image from '../../shared/Image/Image'
import Text from '../../shared/Text/Text'
const Current: React.FC<CurrentProps> = ({ currentWeather }) => {
  return (
    <Container className="flex flex-col items-center space-y-6 shadow-md mb-4">
      <Image
        img={bg}
        alt={'weather image'}
        className={'absolute top-0 right-0'}
      />
      <Text value={currentWeather.date} className={'text-white'} />
      <Text
        value={`${currentWeather.city},${currentWeather.country}`}
        className={'text-white text-3xl font-bold'}
      />
      <Text
        value={`${currentWeather.currentTemperature.toFixed(1)}`}
        className={'text-slate-200 text-6xl font-bold'}
      />
      &#176;
      <Text
        value={`${currentWeather.highestTemperature.toFixed(1)}
        ${currentWeather.lowestTemperature.toFixed(1)}`}
        className={'text-white'}
      />
      &#176;
      <Text
        value={`${currentWeather.lowestTemperature.toFixed(1)}`}
        className={'text-white'}
      />
      &#176;
    </Container>
  )
}
export default Current
