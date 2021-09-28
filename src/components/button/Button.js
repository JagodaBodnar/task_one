import styled, { css } from "styled-components";

const Button = styled.button`
  color: ${({ theme }) => theme.white};
  font-family: inherit;
  width: 170px;
  border-radius: 5px;
  min-height: 40px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  &::before {
  }
  ${({ deactivate }) =>
    deactivate &&
    css`
      background-color: ${({ theme }) => theme.secondaryBlue};
    `}
  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.primaryRed};
    `}
`;

export default Button;
