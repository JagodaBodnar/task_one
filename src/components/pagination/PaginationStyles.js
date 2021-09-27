import styled from "styled-components";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export const StyledPagination = styled.ul`
  display: flex;
  align-self: flex-end;
`;
export const StyledPageNumber = styled.li`
  list-style: none;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.paginationBorder};
  margin: 4px;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.white};
`;
export const StyledLink = styled.a`
  text-decoration: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.fontColor};
`;

export const StyledNextIcon = styled(MdNavigateNext)`
  color: ${({ theme }) => theme.fontColor};
  font-size: 20px;
`;
export const StyledPrevIcon = styled(MdNavigateBefore)`
  color: ${({ theme }) => theme.fontColor};
  font-size: 20px;
`;
export const StyledPaginationDots = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
  letter-spacing: 2px;
`;
