import { BackgroundProps } from '../../../types'

const Background: React.FC<BackgroundProps> = ({
  img,
  children,
  className,
}) => (
  <div className={className} style={{ backgroundImage: `url(${img})` }}>
    {children}
  </div>
)

export default Background
