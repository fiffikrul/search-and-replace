import styled from "styled-components";
import { inputGrey, selectBlue, textGrey } from "./Colors";

export const StyledInputField = styled.input`
  height: auto;
  width: auto;
  padding: 0.2rem 0.5rem;
  background: ${inputGrey};
  color: ${textGrey};
  border: none;
  outline: none;
  font-size: 0.8rem;
  font-weight: 500;

  :focus {
      outline: 0.1rem solid ${selectBlue};
  }
`;