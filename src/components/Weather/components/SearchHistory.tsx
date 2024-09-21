import { CurrentWeather, SearchHistoryProps } from '../../../types'
import { findWeatherIcon } from '../../../utils'
import Image from '../../shared/Image/Image'
import Text from '../../shared/Text/Text'
import { v4 as uuidv4 } from 'uuid'
import City1 from '../../../assets/images/City1.png'
import City2 from '../../../assets/images/City2.png'
import City3 from '../../../assets/images/City3.png'
import City4 from '../../../assets/images/City4.png'

const SearchHistory: React.FC<SearchHistoryProps> = ({ searchHistory }) => {
  const cityImages = [City1, City2, City3, City4]
    return (
      <div className="flex pl-6 space-x-10 text-white">
        {searchHistory.slice(-4).map((data: CurrentWeather, index: number) => {
          return (
            <div
              key={uuidv4()}
              className="rounded-2xl w-40 h-32 bg-[#84aaf4] flex flex-col relative"
            >
              <Image img={cityImages[index]} alt={'background'} className="absolute opacity-15"/>
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
export default SearchHistory
