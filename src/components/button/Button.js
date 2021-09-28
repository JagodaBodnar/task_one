import styled, { css } from "styled-components";

const Button = styled.button`
  color: ${({ theme }) => theme.white};
  font-family: inherit;
  border-radius: 5px;
  min-height: 40px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  align-self: flex-end;
  justify-content: space-around;
  display: flex;
  align-items: center;
  max-width: 170px;
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
