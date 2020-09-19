import styled from "styled-components";
import { inputGrey, selectBlue, textGrey } from "./Colors";

export const StyledInputField = styled.input`
  width: auto;
  height: 1rem;
  padding: 0.5rem 0.5rem;
  background: ${inputGrey};
  color: ${textGrey};
  font-size: 1rem;
  font-weight: 500;
  border: transparent;
  outline: none;

  :focus {
      outline: 0.1rem solid ${selectBlue};
  }
`;