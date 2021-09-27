import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const StyledSearchContainer = styled.div`
  position: relative;
  width: 140px;
`;
export const StyledMagGlas = styled(AiOutlineSearch)`
  color: ${({ theme }) => theme.secondaryBlue};
  font-size: 20px;
  position: absolute;
  right: -10%;
  top: 25%;
`;
export const StyledSearchInput = styled.input`
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  padding: 10px;
  outline: none;
  font-family: "Oswald", sans-serif;
  width: 100%;
  &::placeholder {
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
  }
`;
