import styled from "styled-components";

export const StyledTable = styled.div`
  display: table;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  border-collapse: collapse;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.white};
  margin: 25px 0;
`;
