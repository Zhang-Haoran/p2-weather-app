import axios from 'axios'
import configuration from '../config'
import { WeatherForecast, WeatherForecastResponse } from '../types'

const API_URL = configuration.REACT_APP_WEATHER_API_URL
const API_KEY = configuration.REACT_APP_KEY
//从后端获取当天天气的数据
export async function getCurrentWeatherFromAPI(searchValue: string) {
  const currentWeatherURL = `${API_URL}weather?q=${searchValue}&APPID=${API_KEY}&units=metric`
  return new Promise((resolve) => {
    axios
      .get(currentWeatherURL)
      .then((result) => {
        const data = result.data
        const dateString = new Date().toString()
        //处理日期格式
        const date = `${dateString.split(' ')[0]} ${dateString.split(' ')[1]} ${
          dateString.split(' ')[2]
        } ${dateString.split(' ')[3]}`
        //构造需要的数据
        const currentWeather = {
          country: data.sys.country,
          city: data.name,
          weatherDescription: data.weather[0].description,
          weather: data.weather[0].main,
          currentTemperature: data.main.temp,
          highestTemperature: data.main.temp_max,
          lowestTemperature: data.main.temp_min,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          date,
        }
        resolve(currentWeather)
      })
      .catch((e: Error) => {
        alert(
          `Invalid input 
          ${e}
        `
        )
      })
  })
}

//从后端获取天气预报的数据
export async function getForecastWeatherFromAPI(searchValue: string) {
  const forecastWeatherURL = `${API_URL}forecast?q=${searchValue}&APPID=${API_KEY}&units=metric`
  return new Promise((resolve) => {
    axios
      .get(forecastWeatherURL)
      .then((result) => {
        const forecastWeatherArray: WeatherForecast[] = []
        result.data.list.map((eachItem: WeatherForecastResponse) => {
          //构造需要的数据
          const forecastWeatherObject = {
            date: eachItem.dt_txt.split(' ')[0],
            time: eachItem.dt_txt.split(' ')[1],
            temperature: eachItem.main.temp,
            weather: eachItem.weather[0].main,
            weatherDescription: eachItem.weather[0].description,
            highestTemperature: eachItem.main.temp_max,
            lowestTemperature: eachItem.main.temp_min,
          }
          forecastWeatherArray.push(forecastWeatherObject)
          return forecastWeatherArray
        })
        resolve(forecastWeatherArray)
      })
      .catch(() => [])
  })
}
