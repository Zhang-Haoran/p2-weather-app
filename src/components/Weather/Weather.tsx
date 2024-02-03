import React from 'react'
import { useState } from 'react'
import { getCurrentWeatherFromAPI, getForecastWeatherFromAPI } from '../../api'
import { Container, Right } from './style'
import Current from './components/Current/Current'
import Forecast from './components/Forecast/Forecast'
import SearchBar from './components/SearchBar/SearchBar'
import { CurrentWeather, WeatherForecast } from '../../types'
import bg from './img/bg.png'

// 主页组件
const Weather = () => {
  //搜索栏数值
  const [searchBarValue, setSearchBarValue] = useState('')
  //当前天气，从后端获取
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>()
  //天气预报，从后端获取
  const [forecastWeather, setForecastWeather] = useState<WeatherForecast[]>([])
  //当输入框发生变化时
  const handleSearchBarChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    //改变用户框的state
    setSearchBarValue(event.target.value)
  }
  //提交搜索表单
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //阻止页面跳转
    event.preventDefault()
    //从后端获取天气数据，异步
    getCurrentWeatherFromAPI(searchBarValue).then((weatherObject) => {
      //改变当天天气的state
      setCurrentWeather(weatherObject as CurrentWeather)
    })
    //从后端获取天气预报，异步
    getForecastWeatherFromAPI(searchBarValue).then((weatherObject) => {
      //改变天气预报的state
      setForecastWeather(weatherObject as WeatherForecast[])
    })
  }

  //短路计算，当当前天气和天气预报的state不为undefined，显示当前天气和天气预报
  return (
    <Right>
      <Container
        img={bg}
        isResultFetched={currentWeather && forecastWeather ? true : false}
      >
        <SearchBar
          value={searchBarValue}
          onChange={handleSearchBarChange}
          submit={handleSubmit}
          isResultFetched={currentWeather && forecastWeather ? true : false}
        />
        {currentWeather && forecastWeather && (
          <Current currentWeather={currentWeather} />
        )}
        {currentWeather && forecastWeather && (
          <Forecast forecastWeather={forecastWeather} />
        )}
      </Container>
    </Right>
  )
}
export default Weather
