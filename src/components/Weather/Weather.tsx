import React, { useEffect } from 'react'
import { useState } from 'react'
import { getCurrentWeatherFromAPI, getForecastWeatherFromAPI } from '../../api'
import { CurrentWeather, WeatherForecast } from '../../types'
import Background from '../shared/Background/Background'
import bg from '../../assets/images/bg.png'
import Container from '../shared/Container/Container'
import Current from './components/Current'

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
  useEffect(() => {
    //设置默认城市
    getCurrentWeatherFromAPI('Melbourne,AU').then((weatherObject) => {
      setCurrentWeather(weatherObject as CurrentWeather)
    })
    getForecastWeatherFromAPI('Melbourne,AU').then((weatherObject) => {
      setForecastWeather(weatherObject as WeatherForecast[])
    })
  }, [])
  //当当前天气和天气预报的state不为undefined，显示当前天气和天气预报
  return (
    <Background
      img={bg}
      className={'h-screen bg-cover flex items-center font-alimama'}
    >
      <Container className="md:w-fit h-fit mx-auto rounded-3xl bg-white overflow-hidden shadow-blue-800 grid grid-cols-6 grid-rows-6">
        {currentWeather && forecastWeather && (
          <Container
            className="row-span-6 col-span-2 m-6 rounded-3xl  relative"
            style={{
              backgroundImage:
                'linear-gradient(152deg, #899bf0 1%, #3f55e4 54%, #3f55e4 96%)',
            }}
          >
            <Current currentWeather={currentWeather} />
          </Container>
        )}
      </Container>
    </Background>
  )
}
export default Weather
