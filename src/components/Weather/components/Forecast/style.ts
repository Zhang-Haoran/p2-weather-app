import styled from 'styled-components'
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`

export const Body = styled.div`
  display: flex;
`

export const Card = styled.div`
  background-color: white;
  margin: 0 1.5rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  text-align: center;
  flex-shrink: 0;
  &:hover {
    box-shadow: 0 0.2rem 0.5rem 0 black;
  }
`

export const Text = styled.p`
  font-size: 1.5rem;
  margin: 0.2rem;
`

export const Title = styled.h2`
  font-size: 3rem;
  margin: 0;
`
export const WeatherIcon = styled.img`
  align-self: center;
`
