import { ImageProps } from '../../../types'

const Image: React.FC<ImageProps> = ({ img, alt, className }) => (
  <img src={img} alt={alt} className={className} />
)

export default Image
