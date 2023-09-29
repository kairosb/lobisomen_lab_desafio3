import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
  background: ${props => props.theme.colors.primary};
`;

export const Wrapper = styled.div``;

export const Header = styled.h4`
  color: ${props => props.theme.colors.text};
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 1.4rem;
  overflow: hidden; // Removendo barra de rolagem
  text-overflow: ellipsis; // Adicionando "..." ao final
  display: -webkit-box;
  -webkit-line-clamp: 5; // Quantidade de linhas
  -webkit-box-orient: vertical;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
`;

export const Info = styled.span`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

export const TextInfo = styled.span`
  color: ${props => props.theme.colors.text};
  font-size: 1.4rem;
  margin-left: 3px;
`;
