import Sunny from '../assets/images/Sunny.png'
import Cloudy_day from '../assets/images/Cloudy_day.png'
import Rain from '../assets/images/Rain.png'
import Snow from '../assets/images/Snow.png'
import Hail from '../assets/images/Hail.png'
import Cloudy from '../assets/images/Cloudy.png'
import { WeatherForecast } from '../types'

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

export const formatDate = (dateString: string, onlyDayMonth: boolean  = false) => {
  const date = new Date(dateString)

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const dayOfWeek = daysOfWeek[date.getDay()]
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })

  const currentTime = new Date()
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  
  return onlyDayMonth ? `${day} ${month}` : `${day} ${month}, ${dayOfWeek} ${hours}:${minutes}`;
}
