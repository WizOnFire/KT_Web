import styled from "styled-components";
import colors from "../../assets/Colors";
import { subBackground, subBg } from "../../assets/assets";

export const SidebarContainer = styled.div`
  width: 100%;
  height: 255px;
  margin-top: 110px;
  background-color: ${colors.darkGray}; /* 기존 #333 대신 colors 사용 */
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 300px;
  /* background: url(${subBackground}) no-repeat center center; */
  background: url(${subBg}) no-repeat;
  background-size: cover;
  color: ${colors.white}; /* 기존 'white' 대신 colors 사용 */
`;

export const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 10px;
  color: ${colors.white}; /* 타이틀 색상을 colors.white로 설정 */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
`;

interface ButtonProps {
  active: boolean;
}

export const SidebarButton = styled.button<ButtonProps>`
  background: none;
  border: none;
  font-size: 20px;
  padding-bottom: 10px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: border-bottom 1s ease;
  color: ${({ active }) => (active ? colors.redSecondary : colors.white)}; /* colors 객체 사용 */

  &:hover {
    border-bottom: 2px solid ${colors.redPrimary}; /* hover 상태에서도 colors 사용 */
  }

  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid ${colors.redSecondary}; /* 버튼 클릭시 버튼 밑에 밑줄 상태 */
  `}
`;

export const ContentContainer = styled.div`
  padding: 40px;
  text-align: left;
`;

// export const ContentText = styled.p`
//   font-size: 20px;
//   line-height: 1;
//   color: ${colors.black}; /* 텍스트 색상에 colors 사용 */
// `; 