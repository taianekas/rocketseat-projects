import styled from 'styled-components'

export const Container = styled.a`
  background-color: ${(props) => props.theme['base-post']};
  width: 41.6rem;
  height: 26rem;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  padding: 3.2rem;

  &:hover {
    border: 1px solid ${(props) => props.theme['base-label']};
  }

  .description {
    display: -webkit-box; /* Define o elemento como um bloco flexível */
    -webkit-line-clamp: 4; /* Define o número máximo de linhas que o texto pode ocupar */
    -webkit-box-orient: vertical; /* Define a orientação das caixas flexíveis como vertical */
    margin: 2rem 0 0;
    height: 12rem;
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  h1 {
    width: 28.3rem;
    font-size: 2rem;
    color: ${(props) => props.theme['base-title']};
  }
`
