import styled from 'styled-components';
import { backgroundGrey } from './Colors';

export const SearchAndReplaceBox = styled.div`
display: flex;
flex-start: left;
flex-flow: column;
padding: 0.5rem;
background: ${backgroundGrey};
height: auto;
width: auto;

div:not(:last-child) {
  margin-bottom: 0.5rem;
}
`;

export const RowWrapper = styled.div`
display: flex;
padding-left: 0.5rem;
height: 2rem;
width: auto;

*:not(:last-child) {
  margin-right: 0.2rem;
}
`;