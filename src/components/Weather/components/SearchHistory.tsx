import { CurrentWeather, SearchHistoryProps } from '../../../types'
import { findWeatherIcon } from '../../../utils'
import Image from '../../shared/Image/Image'
import Text from '../../shared/Text/Text'
import { v4 as uuidv4 } from 'uuid'
const SearchHistory: React.FC<SearchHistoryProps> = ({ searchHistory }) => {
  {
    return (
      <div className="flex pl-6 space-x-10 text-white">
        {searchHistory.slice(-4).map((data: CurrentWeather) => {
          return (
            <div
              key={uuidv4()}
              className="rounded-2xl w-40 h-32 bg-[#84aaf4] flex flex-col"
            >
              <Image
                img={findWeatherIcon(data.weather)}
                alt={'weather icon'}
                className="w-16 h-16 self-center"
              />
              <Text
                value={data.city}
                className="self-center font-bold text-xl"
              />
              <Text
                value={`${data.lowestTemperature.toFixed(
                  1
                )}° ~ ${data.highestTemperature.toFixed(1)}°`}
                className="self-center text-lg"
              />
            </div>
          )
        })}
      </div>
    )
  }
}
export default SearchHistory
