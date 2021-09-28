import styled from "styled-components";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiIndeterminateCircleFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { HiOutlineDotsVertical } from "react-icons/hi";
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

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledActive = styled(IoCheckmarkCircle)`
  font-size: 20px;
  color: ${({ theme }) => theme.activeGreen};
  margin-right: 8px;
`;
export const StyledDeactive = styled(RiIndeterminateCircleFill)`
  font-size: 20px;
  margin-right: 8px;
  color: ${({ theme }) => theme.deactiveGray};
`;

export const StyledBoldText = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledEdit = styled(FiEdit)`
  font-size: 20px;
  color: ${({ theme }) => theme.iconGray};
  margin-right: 30px;
`;

export const StyledActions = styled(HiOutlineDotsVertical)`
  font-size: 20px;
  color: ${({ theme }) => theme.iconGray};
`;
