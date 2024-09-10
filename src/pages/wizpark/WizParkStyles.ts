import styled from "styled-components";
import colors from "../../assets/Colors";

//Intro에 쓸 CSS
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: ${colors.white};
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1136px; 
  margin-bottom: 20px;
`;

export const Image = styled.img`
  max-width: 1136px;
  height: auto;
  border-radius: 10px;
`;

export const TextContainer = styled.div`
  width: 100%;
  max-width: 1136px;
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: ${colors.redSecondary};
  margin-top: 20px;
  position: relative;
  text-align: left;

  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background-color: ${colors.redSecondary};
    margin: 10px 0;
  }
`;

export const SubTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin: 20px 0;
  color: #333;
  text-align: left;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: ${colors.mediumGray};
  margin: 20px 0;
  text-align: left;
`;
