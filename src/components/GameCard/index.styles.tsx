import styled from "styled-components";
import { colorGreen, colorWhite, colorDark } from "../../config/colors";

export const BackdropStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  display: none;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  background-color: ${colorDark};
  border-radius: 16px;
`;

export const ContentWrapperStyled = styled.div`
  position: absolute;
  z-index: 99;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: none;
`;

export const ButtonStyled = styled.button`
  padding: 10px;
  border-radius: 8px;
  height: 40px;
  width: 100px;
  background-color: ${colorGreen};
  border: 0;
  color: ${colorWhite};
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const TitleStyled = styled.h3`
  border: 0;
  color: ${colorWhite};
  font-size: 28px;
  font-weight: bold;
  margin: 15px;
  text-align: center;
`;

export const CardContainerStyled = styled.div`
  display: flex;
  position: relative;
  margin: 10px;

  &:hover ${BackdropStyled}{
    display: flex;
  }

  &:hover ${ContentWrapperStyled}{
    display: flex;
  }
`;

export const ImageStyled = styled.img`
  max-width: 250px;
  min-width: 250px;
  max-height: 160px;
  border-radius: 16px;
  background-color: ${colorGreen};
`;

export const JackpotsStyled = styled.div`
  position: absolute;
  z-index: 9;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
  opacity: 0.5;
  background-color: ${colorDark};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const JackpotsNumbStyled = styled.span`
  position: absolute;
  z-index: 11;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: bold;
  color: ${colorWhite};
`;

export const TopBadgeStyled = styled.img`
  max-width: 40px;
  max-height: 40px;
  position: absolute;
  z-index: 19;
`;

export const NewBadgeStyled = styled.img`
  max-width: 80px;
  max-height: 80px;
  position: absolute;
  z-index: 19;
  right: 0;
`;

