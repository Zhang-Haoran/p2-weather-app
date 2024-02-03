import styled, { css } from 'styled-components'
import { StyleComponentProps } from '../../../../types'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`

export const Body = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Title = styled.h2<StyleComponentProps>`
  margin: 0;
  ${({ type }) =>
    type === 'Title' &&
    css`
      font-size: 3rem;
    `}
  ${({ type }) =>
    type === 'Subtitle' &&
    css`
      font-size: 1.5rem;
    `}
`
