import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-start: left;
  flex-flow: column;
  height: 80vh;
  width: 80vw;
  padding: 0.5rem;

  div:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;