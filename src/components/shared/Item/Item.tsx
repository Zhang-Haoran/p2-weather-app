import { ItemProps } from '../../../types'
import Image from '../Image/Image'
const Item: React.FC<ItemProps> = ({ img, alt, value, className }) => {
  return (
    <div className="flex flex-col justify-center">
      <Image img={img} alt={alt} className={className} />
      {value}
    </div>
  )
}

export default Item
