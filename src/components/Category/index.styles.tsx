import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colorGreen, colorDark } from "../../config/colors";

export const DrowdownMenuStyled = styled.div`
  position: absolute;
  right: 0;
  top: 52px;
  z-index: 39;
  background-color: ${colorDark};
  border-radius: 8px;
  display: none;
  padding: 5px 0;
  flex-direction: column;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 15px;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  position: relative;

  &:hover {
    background-color: ${colorGreen};
  }

  &:hover ${DrowdownMenuStyled}{
    display: flex;
  }

  .active {
    background-color: ${colorGreen};
  }
`;


