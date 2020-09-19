import styled from 'styled-components';
import { backgroundGrey, selectBlue, textGrey } from './Colors';

export const Button = styled.button`
padding: 0.2rem 0.5rem;
width: auto;
background: ${backgroundGrey};
color: ${textGrey};
font-size: 0.9rem;
font-weight: 600;
border: none;
outline: none;
opacity: 1;

:hover {opacity: 0.8}

transition-duration: 0.3s;
:active {
  transform: translateY(1px);
  opacity: 0.6;
}

:focus {
  outline: 0.1rem solid ${selectBlue};
}

&.replace {
  padding: 0;
}
`;

export const Icon = styled.img`
padding: 4px;
height: 24px;
width: 24px;
`;
