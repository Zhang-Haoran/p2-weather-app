import { ContainerProps } from '../../../types'

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
export default Container
