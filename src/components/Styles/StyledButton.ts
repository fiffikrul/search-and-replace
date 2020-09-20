import styled from 'styled-components';
import { backgroundGrey, selectBlue, textGrey } from './Colors';

export const Button = styled.button`
  padding: 0rem 0.5rem;
  width: 100%;
  background: ${backgroundGrey};
  color: ${textGrey};
  font-size: 0.9rem;
  font-weight: 500;
  border: none;
  outline: none;
  opacity: 1;
  cursor: pointer;

  transition-duration: 0.3s;
  :hover {opacity: 0.8}

  :active {
    transform: translateY(1px);
  }

  :focus {
    outline: 0.1rem solid ${selectBlue};
  }

  &.replace {
    padding: 0;
  }
`;

export const Icon = styled.img`
  height: 20px;
  width: 20px;
  padding: 5px;
`;
