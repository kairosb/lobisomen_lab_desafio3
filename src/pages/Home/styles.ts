import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 250px;
  width: 100%;
  text-align: center;
`;

export const Logo = styled.img``;

export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  color: ${props => props.theme.colors.text};
  border-bottom: 5px solid ${props => props.theme.colors.secondary};
  background: transparent;
  margin-top: 30px;
`;

export const SearchButton = styled.button`
  width: 100%;
  border: none;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${props => props.theme.colors.textButton ?? props.theme.colors.text};
  padding: 10px;
  cursor: pointer;
  border-radius: 6px;
  background: ${props => props.theme.colors.secondary};
  margin-top: 30px;
  margin-bottom: 20px;
`;
