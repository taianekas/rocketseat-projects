import styled from 'styled-components';
import backgroundImg from '../../Assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 13.6rem;
  text-align: center;

  h1 {
    font-size: 4.8rem;
    line-height: 6.3rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.C_FONT_3};
    
  }

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.C_FONT_4};
    margin-bottom: 4.8rem;
  }

  > h2 {
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.C_FONT_1};
    margin-bottom: 4.8rem;
    align-self: flex-start;
  }

  button {
    margin-top: 2.4rem;
  }

 a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.C_FONT_3};
    margin-top: 5.2rem;
    gap: .8rem;
  }
  
`

export const Background = styled.div `
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`