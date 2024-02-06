import React from 'react'
import { CurrentProps } from '../../../types'
import bg from '../../../assets/images/Cloudy_day_background.png'
import Image from '../../shared/Image/Image'
import Text from '../../shared/Text/Text'
import { findWeatherIcon } from '../../../utils'
import Item from '../../shared/Item/Item'
import wind from '../../../assets/images/wind.svg'
import humidity from '../../../assets/images/humidity.svg'
import PM from '../../../assets/images/PM.svg'
import temperature from '../../../assets/images/temperature.svg'

const Current: React.FC<CurrentProps> = ({ currentWeather }) => {
  return (
    <div className="flex flex-col items-center space-y-6 mb-4">
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
        value={`${currentWeather.currentTemperature.toFixed(1)}°`}
        className={'text-slate-200 text-6xl font-bold'}
      />
      <Text
        value={`${currentWeather.lowestTemperature.toFixed(
          1
        )}° ~ ${currentWeather.highestTemperature.toFixed(1)}°`}
        className={'text-white'}
      />
      <Image
        img={findWeatherIcon(currentWeather.weather)}
        alt={'weather icon'}
      />
      <div className="flex justify-between bg-slate-50 rounded-2xl w-5/6 p-4">
        <Item
          img={wind}
          alt={'wind icon'}
          value={`${currentWeather.windSpeed}mph`}
          className="w-6 h-6"
        />
        <Item
          img={humidity}
          alt={'humidity icon'}
          value={`${currentWeather.humidity}%`}
          className="w-6 h-6"
        />
        <Item
          img={PM}
          alt={'PM icon'}
          value={`${currentWeather.lowestTemperature.toFixed(1)}μg`}
          className="w-6 h-6"
        />
        <Item
          img={temperature}
          alt={'temperature icon'}
          value={`${currentWeather.highestTemperature.toFixed(1)}°`}
          className="w-6 h-6"
        />
      </div>
    </div>
  )
}
export default Current
