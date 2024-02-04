import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  margin: 1rem;
`

export const Body = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 1.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
