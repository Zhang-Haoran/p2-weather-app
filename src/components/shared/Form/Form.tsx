import { FormProps } from '../../../types'

const Form: React.FC<FormProps> = ({ onSubmit, children, className }) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  )
}
export default Form
