import { TextProps } from '../../../types'

const Text: React.FC<TextProps> = ({ value, className }) => (
  <div className={className}>{value}</div>
)

export default Text
