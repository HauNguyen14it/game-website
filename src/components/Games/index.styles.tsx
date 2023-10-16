import styled from "styled-components";
import { colorDark } from "../../config/colors";

export const GamesContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  margin-bottom: 30px;
`;

export const TitleStyled = styled.h3`
  width: 100%;
  border: 0;
  color: ${colorDark};
  font-size: 28px;
  font-weight: bold;
  margin: 15px;
  text-align: center;
`;