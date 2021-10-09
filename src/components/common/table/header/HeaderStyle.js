import styled from "styled-components";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export const StyledHeader = styled.div`
  display: table-cell;
  position: relative;
  font-size: 14px;
  font-weight: 500;
  line-height: 42px;
  padding-left: 20px;
`;

export const StyledChevronUp = styled(TiArrowSortedUp)`
  position: absolute;
  top: 25%;
  right: 20%;
  color: ${({ theme }) => theme.lightGray};
  width: 18px;
`;

export const StyledChevronDown = styled(TiArrowSortedDown)`
  position: absolute;
  top: 40%;
  right: 20%;
  color: ${({ theme }) => theme.darkGray};
  width: 18px;
`;
