import styled from 'styled-components'

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
