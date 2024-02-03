export interface WeatherForecast {
  date: string
  time: string
  temperature: number
  weather: string
  weatherDescription: string
}

export interface WeatherForecastResponse {
  dt_txt: string
  main: {
    temp: number
  }
  weather: [
    {
      main: string
      description: string
    }
  ]
}

export interface FormProps {
  isResultFetched: boolean
}

export interface SearchBarProps {
  isResultFetched: boolean
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  submit: (event: React.FormEvent<HTMLFormElement>) => void
}

export interface ForecastProps {
  forecastWeather: WeatherForecast[]
}

export interface CurrentWeather {
  country: string
  city: string
  weatherDescription: string
  weather: string
  currentTemperature: number
  highestTemperature: number
  lowestTemperature: number
  humidity: number
  windSpeed: number
  date: string
}

export interface WeatherCardProps {
  currentWeather: CurrentWeather
}

export interface StyleComponentProps {
  type: string
}

export interface WindCardProps {
  currentWeather: CurrentWeather
}

export interface CurrentProps {
  currentWeather: CurrentWeather
}

export interface ContainerProps {
  img: string
  isResultFetched: boolean
}
