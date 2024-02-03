import styled from 'styled-components'
import { BackgroundProps } from '../../types'
//主页背景图片
export const Background = styled.div<BackgroundProps>`
  background: url(${({ img }) => img}) center;
  background-size: cover;
  height: 100vh;
  @media (max-width: 509px) {
    width: 100vh;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
  width: 80%;
  background-color: white;
  border-radius: 1.5rem;
`
