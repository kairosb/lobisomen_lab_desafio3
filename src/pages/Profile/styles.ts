import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 40px;

  @media (max-width: 800px) {
    padding: 30px;
  }

  @media (max-width: 800px) {
    padding: 30px;
  }
`;

export const ReposArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 610px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
