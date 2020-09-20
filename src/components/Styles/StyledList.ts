import styled from 'styled-components';
import { backgroundGrey, highlightedTextYellow, inputGrey, selectBlue, textGrey } from './Colors';

export const ListBox = styled.div`
  display: flex;
  flex-flow: column;
  height: 80%;
  width: 500px;
  padding: 0.5rem;
  background: ${backgroundGrey};

  div:not(:last-child) {
    margin-bottom: 0.25rem;
  }
`;

export const ListRow = styled.div`
  display: flex;
  flex-flow: column;
  height: auto;
  width: auto;
  background: ${inputGrey};
  border-radius: 0.25rem;
`;

export const Title = styled.span`
  height: auto;
  width: auto;
  font-size: 1rem;
  font-weight: 600;
  color: ${selectBlue}

`;

export const Content = styled.span`
  height: auto;
  width: auto;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${textGrey};

  & > .searchmatch {
    padding: 0 0.1rem;
    color: ${backgroundGrey};
    background: ${highlightedTextYellow};
  }
`;