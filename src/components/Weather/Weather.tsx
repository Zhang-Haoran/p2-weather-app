import React, { useEffect } from 'react'
import { useState } from 'react'
import { getCurrentWeatherFromAPI, getForecastWeatherFromAPI } from '../../api'
import { CurrentWeather, WeatherForecast } from '../../types'
import Background from '../shared/Background/Background'
import bg from '../../assets/images/bg.png'
import Current from './components/Current'
import Forecast from './components/Forecast'
import SearchBar from './components/SearchBar'
import SearchHistory from './components/SearchHistory'

const Weather = () => {
  const [searchBarValue, setSearchBarValue] = useState('')
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>()
  const [forecastWeather, setForecastWeather] = useState<WeatherForecast[]>([])
  const [searchHistory, setSearchHistory] = useState<CurrentWeather[]>([])

  const handleSearchBarChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchBarValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (searchBarValue !== '') {
      getCurrentWeatherFromAPI(searchBarValue).then((weatherObject) => {
        //改变当天天气的state
        setCurrentWeather(weatherObject as CurrentWeather)
        setSearchHistory((prevSearchHistory) => [
          ...prevSearchHistory,
          weatherObject as CurrentWeather,
        ])
      })
      getForecastWeatherFromAPI(searchBarValue).then((weatherObject) => {
        //改变天气预报的state
        setForecastWeather(weatherObject as WeatherForecast[])
      })
    }
  }

  useEffect(() => {
    //设置默认城市
    getCurrentWeatherFromAPI('Melbourne,AU').then((weatherObject) => {
      setCurrentWeather(weatherObject as CurrentWeather)
      setSearchHistory((prevSearchHistory) => [
        ...prevSearchHistory,
        weatherObject as CurrentWeather,
      ])
    })
    getForecastWeatherFromAPI('Melbourne,AU').then((weatherObject) => {
      setForecastWeather(weatherObject as WeatherForecast[])
    })
  }, [])

  return (
    <Background
      img={bg}
      className={'h-screen bg-cover flex items-center font-alimama'}
    >
      {currentWeather && forecastWeather && (
        <div className="md:w-fit h-fit mx-auto rounded-3xl bg-slate-100 overflow-hidden shadow-blue-800 grid grid-cols-6 grid-rows-6">
          <div
            className="row-span-6 col-span-2 m-6 rounded-3xl  relative"
            style={{
              backgroundImage:
                'linear-gradient(152deg, #899bf0 1%, #3f55e4 54%, #3f55e4 96%)',
            }}
          >
            <Current currentWeather={currentWeather} />
          </div>
          <div className="row-span-3 col-span-4 m-6">
            <Forecast forecastWeather={forecastWeather} />
          </div>
          <div className="row-span-1 col-span-4 m-6">
            <SearchBar
              value={searchBarValue}
              onChange={handleSearchBarChange}
              submit={handleSubmit}
            />
          </div>
          <div className="row-span-2 col-span-4 m-6">
            <SearchHistory searchHistory={searchHistory} />
          </div>
        </div>
      )}
    </Background>
  )
}
export default Weather
