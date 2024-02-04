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
  justify-content: space-between;
  background-color: rgb(241, 240, 252);
  border-radius: 1.5rem;
`
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`
