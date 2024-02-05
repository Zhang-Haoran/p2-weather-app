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

export interface SearchBarProps {
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

export interface MetaProps {
  currentWeather: CurrentWeather
}

export interface CurrentProps {
  currentWeather: CurrentWeather
}

export interface BackgroundProps {
  img: string
}

export interface ImageProps {
  img: string
  alt: string
  className: string
}

export interface TextProps {
  value: string
  className: string
}
