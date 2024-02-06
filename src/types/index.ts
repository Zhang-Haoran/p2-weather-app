export interface WeatherForecast {
  date: string
  time: string
  temperature: number
  weather: string
  weatherDescription: string
  highestTemperature: number
  lowestTemperature: number
}

export interface WeatherForecastResponse {
  dt_txt: string
  main: {
    temp: number
    temp_max: number
    temp_min: number
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

export interface CurrentProps {
  currentWeather: CurrentWeather
}

export interface BackgroundProps {
  img: string
}

export interface ImageProps {
  img: string
  alt: string
  className?: string
}

export interface TextProps {
  value: string
  className?: string
}

export interface FormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
  className?: string
}

export interface InputProps {
  type: string
  placeholder: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export interface BackgroundProps {
  img: string
  children: React.ReactNode
  className?: string
}

export interface ContainerProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export interface ItemProps {
  img: string
  alt: string
  className?: string
  value: string
}

export interface CardProps {
  weekday: string
  date: string
  img: string
  highestTemperature: number
  lowestTemperature: number
}

export interface SearchHistoryProps {
  searchHistory: CurrentWeather[]
}
