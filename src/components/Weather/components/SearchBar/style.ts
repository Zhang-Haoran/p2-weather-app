import styled from 'styled-components'
import { FormProps } from '../../../../types'
//搜索区域样式

export const Form = styled.form<FormProps>`
  background: white;
  opacity: 65%;
  position: relative;
  top: ${({ isResultFetched }) => (isResultFetched ? '5%' : '40%')};
  width: 30rem;
  min-height: 3rem;
  margin: 0 auto 1.5rem auto;
  border-radius: 20px;
  font-family: cursive;
  transition: 0.1s;
`

export const Icon = styled.span`
  position: absolute;
  top: 0.8rem;
  left: 1rem;
  height: 2rem;
  width: 2rem;
  font-size: 1.5rem;
  font-family: cursive;
`

export const Input = styled.input`
  width: 90%;
  position: absolute;
  left: 10%;
  top: 0.2rem;
  border: none;
  height: 2.5rem;
  border-radius: 20px;
  font-family: cursive;
  font-size: 1.5rem;
  &:focus {
    outline: none;
  }
`
