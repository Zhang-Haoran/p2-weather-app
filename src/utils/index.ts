//根据天气预报的气象信息 找到对应的天气图标
export const findWeatherIcon = (eachWeather: string) => {
  const weatherIcon: { [key: string]: string } = {
    Clear: 'Sunny',
    Clouds: 'Cloud_day',
    Drizzle: 'Rain',
    Rain: 'Rain',
    Snow: 'Snow',
    Fog: 'Hail',
    Default: 'Cloudy',
  }
  return weatherIcon[eachWeather] || weatherIcon['Default']
}
