import styled from 'styled-components'
//搜索区域样式

export const Form = styled.form`
  background: white;
  opacity: 65%;
  position: relative;
  width: 30rem;
  min-height: 3rem;
  border-radius: 20px;
  font-family: cursive;
  transition: 0.1s;
  margin: 0 2rem;
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
