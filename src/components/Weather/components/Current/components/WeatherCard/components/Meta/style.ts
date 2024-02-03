import styled, { css } from 'styled-components'
import { StyleComponentProps } from '../../../../../../../../types'

export const Card = styled.div<StyleComponentProps>`
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  &:hover {
    box-shadow: 0 0.2rem 0.5rem 0 black;
  }
  ${({ type }) =>
    type === 'Weather' &&
    css`
      display: flex;
    `}
  ${({ type }) =>
    type === 'Wind' &&
    css`
      background-color: rgb(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
    `}
`

export const Image = styled.img`
  height: 1.5rem;
  margin-right: 0.5rem;
`

export const Text = styled.p<StyleComponentProps>`
  margin: 1rem;
  ${({ type }) =>
    type === 'Weather' &&
    css`
      font-size: 2rem;
    `}
  ${({ type }) =>
    type === 'Temperature' &&
    css`
      font-size: 5rem;
    `}
  ${({ type }) =>
    type === 'Other' &&
    css`
      font-size: 1.75rem;
    `}
`
