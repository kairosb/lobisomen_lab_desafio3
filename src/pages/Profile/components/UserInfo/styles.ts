import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;
  margin: 0 auto;

  @media (max-width: 950px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 0;
  }
`;

export const Avatar = styled.img`
  width: 180px;
  border-radius: 50%;

  @media (max-width: 950px) {
    margin-bottom: 15px;
  }
`;

export const Wrapper = styled.div`
  margin: 0px 35px;
  max-width: 500px;
  width: 100%;

  @media (max-width: 950px) {
    margin-bottom: 20px;
  }
`;

export const Username = styled.h2`
  color: ${props => props.theme.colors.secondary};
`;

export const Social = styled.span`
  color: ${props => props.theme.colors.text};
`;

export const TextInfoArea = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TextInfo = styled.span`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text};
  margin-right: 8px;
`;

export const Text = styled.span`
  margin-left: 5px;
  max-width: 270px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InfoReposArea = styled.div`
  min-width: 160px;
  padding: 20px 10px;
  text-align: center;
  border-radius: 6px;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.primary};
`;

export const TextReposArea = styled.span`
  display: flex;
  align-items: center;
  font-size: 2rem;
  justify-content: center;
  color: ${props => props.theme.colors.text};
  margin-top: 5px;
`;
