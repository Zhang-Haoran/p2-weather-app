//根据天气预报的气象信息 找到对应的天气图标
export const findWeatherIcon = (eachWeather: string, eachTime: string) => {
  const hours = parseInt(eachTime.substr(0, 2))
  const weatherIcon: { [key: string]: string } = {
    Clear: hours >= 18 || hours <= 5 ? 'CLEAR_NIGHT' : 'CLEAR_DAY',
    Clouds:
      hours >= 18 || hours <= 5 ? 'PARTLY_CLOUDY_NIGHT' : 'PARTLY_CLOUDY_DAY',
    Drizzle: 'RAIN',
    Rain: 'SLEET',
    Thunderstorm: 'SLEET',
    Snow: 'SNOW',
    Fog: 'FOG',
    Default: 'Cloudy',
  }
  return weatherIcon[eachWeather] || weatherIcon['Default']
}
