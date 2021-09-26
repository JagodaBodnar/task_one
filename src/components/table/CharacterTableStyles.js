import styled from "styled-components";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

export const StyledChevronUp = styled(TiArrowSortedUp)`
  position: absolute;
  top: 20%;
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
