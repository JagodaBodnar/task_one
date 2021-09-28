import styled from "styled-components";

export const StyledTableNavWrapper = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr 1fr;
`;

export const StyledButtonIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.primaryRed};
  border-radius: 50%;
  position: relative;
  &::before {
    content: "";
    width: 10px;
    height: 2px;
    background-color: ${({ theme }) => theme.white};
    position: absolute;
    top: 9px;
    left: 5px;
  }
`;
