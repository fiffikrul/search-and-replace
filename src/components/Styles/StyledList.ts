import styled from 'styled-components';
import { backgroundGrey } from './Colors';

export const ListBox = styled.div`
  display: flex;
  flex-flow: column;
  height: 80%;
  width: 500px;
  padding: 0.5rem;
  background: ${backgroundGrey};

  div:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const ListItem = styled.div`
  display: flex;
  height: 100px;
  width: auto;
  padding-left: 0.5rem;

  *:not(:last-child) {
    margin-right: 0.2rem;
  }
`;