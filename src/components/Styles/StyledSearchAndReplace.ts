import styled from 'styled-components';
import { backgroundGrey } from './Colors';

export const SearchAndReplaceBox = styled.div`
  display: flex;
  flex-start: left;
  flex-flow: column;
  height: auto;
  width: 240px;
  padding: 0.5rem;
  background: ${backgroundGrey};

  div:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  height: 30px;
  width: auto;
  padding-left: 0.5rem;

  *:not(:last-child) {
    margin-right: 0.2rem;
  }
`;