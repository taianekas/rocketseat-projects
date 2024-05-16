import styled from 'styled-components'

export const Container = styled.main`
  width: 86.4rem;
  height: 100vh;
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
`

export const PostContainer = styled.div`
  width: 100%;
  max-height: 84.4rem;
  margin: 4.8rem 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;
  overflow: scroll;
`
