import styled from "styled-components";

export const StyledRow = styled.div`
  display: table-row;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;
