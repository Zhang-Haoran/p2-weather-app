import styled, { css } from 'styled-components'
import { BackgroundProps, StyleComponentProps } from '../../../../../../types'

export const Card = styled.div<BackgroundProps>`
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background: url(${({ img }) => img}) center;
  background-size: cover;
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
      align-self: center;
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
      align-self: center;
    `}
  ${({ type }) =>
    type === 'Subtitle' &&
    css`
      font-size: 1.5rem;
    `}
`
export const WeatherIcon = styled.img`
  align-self: center;
`
