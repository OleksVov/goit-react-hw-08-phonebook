import { NavLink } from "react-router-dom";
import styled from '@emotion/styled'; 

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 12px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orange;
  }
`;