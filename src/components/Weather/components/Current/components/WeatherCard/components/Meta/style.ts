import styled, { css } from 'styled-components'
import { StyleComponentProps } from '../../../../../../../../types'

export const Card = styled.div<StyleComponentProps>`
  margin-top: 2rem;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  ${({ type }) =>
    type === 'Weather' &&
    css`
      display: flex;
    `}
  ${({ type }) =>
    type === 'Wind' &&
    css`
      background-color: rgb(239, 237, 251);
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
