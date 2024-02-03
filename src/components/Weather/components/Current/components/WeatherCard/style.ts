import styled, { css } from 'styled-components'
import { StyleComponentProps } from '../../../../../../types'

export const Card = styled.div<StyleComponentProps>`
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
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
