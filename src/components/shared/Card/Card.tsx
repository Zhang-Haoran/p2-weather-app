import { CardProps } from '../../../types'
import Text from '../Text/Text'
import Image from '../Image/Image'

const Card: React.FC<CardProps> = ({
  weekday,
  date,
  img,
  highestTemperature,
  lowestTemperature,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Text value={weekday} className="font-bold  text-xl" />
      <Text value={date} />
      <Image img={img} alt={'weather icon'} />
      <Text value={`${lowestTemperature}° ~ ${highestTemperature}°`} />
    </div>
  )
}
export default Card
