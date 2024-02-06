import Sunny from '../assets/images/Sunny.png'
import Cloudy_day from '../assets/images/Cloudy_day.png'
import Rain from '../assets/images/Rain.png'
import Snow from '../assets/images/Snow.png'
import Hail from '../assets/images/Hail.png'
import Cloudy from '../assets/images/Cloudy.png'
import { WeatherForecast } from '../types'

//根据天气预报的气象信息 找到对应的天气图标
export const findWeatherIcon = (eachWeather: string) => {
  const weatherIcon: { [key: string]: string } = {
    Clear: Sunny,
    Clouds: Cloudy_day,
    Drizzle: Rain,
    Rain: Rain,
    Snow: Snow,
    Fog: Hail,
    Default: Cloudy,
  }
  return weatherIcon[eachWeather] || weatherIcon['Default']
}

export const getForecastWeatherWithUniqueDate = (
  forecastWeather: WeatherForecast[]
) => {
  return forecastWeather.reduce<WeatherForecast[]>((accumulator, current) => {
    if (!accumulator.find((item) => item.date === current.date)) {
      accumulator.push(current)
    }
    return accumulator
  }, [])
}
