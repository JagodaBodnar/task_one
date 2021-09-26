import styled from "styled-components";

export const StyledHeader = styled.div`
  display: table-cell;
  position: relative;
  font-size: 14px;
  font-weight: 500;
  line-height: 42px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;
