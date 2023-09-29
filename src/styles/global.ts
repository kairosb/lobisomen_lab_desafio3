import { createGlobalStyle } from 'styled-components';

export const GlobalSyles =  createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    background: ${props => props.theme.colors.background};
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
  }
`;
