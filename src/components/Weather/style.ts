import styled, { css } from 'styled-components'
import { ContainerProps } from '../../types'
//主页背景图片
export const Container = styled.div<ContainerProps>`
  background: url(${({ img }) => img}) center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  @media (max-height: 718px) {
    ${({ isResultFetched }) =>
      isResultFetched &&
      css`
        height: 100%;
      `}
  }
  @media (max-width: 509px) {
    width: 100vh;
  }
`
export const Right = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
