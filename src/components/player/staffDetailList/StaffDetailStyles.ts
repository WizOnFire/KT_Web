import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  //background-color: red;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //position: relative;
`;

export const Img = styled.img`
  display: block;
    @media (max-width: 1200px) {
        max-width: 900px; 
    }
  //margin-bottom: 1px;

`;

export const StaffInfo = styled.dl``;

export const MainInfo = styled.dt`
  position: relative;
  color: white;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  top: -300px;//늘어날수록 아래로 감
  right: 70px;
  gap: 10px;
  font-size: 54px;

  span {
    font-size: 44px;
  }
`;

export const InfoList = styled.dd`
  position: relative;
  top: -460px;
  left: 200px;
  color: white;
  gap: 20px;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 16px;
    font-weight: 100;
    line-height: 26.5px;
    margin-bottom: 10px;
  }
`;


// RecordNav 스타일 수정
export const RecordNav = styled.nav<{ imgWidth?: number }>`
  height: 40px;
  align-items: center;
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: -300px;
  background-color: #1d1d1d; /* KT Wiz의 블랙 테마 */
  padding: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
  width: ${({ imgWidth }) => (imgWidth ? `${imgWidth}px` : "auto")};

  @media (max-width: 1200px) {
    max-width: 900px;
  }
`;

export const CategoryItem = styled.h1<{ isSelected: boolean }>`
  font-size: 20px;
  color: ${({ isSelected }) => (isSelected ? "#c00000" : "#ffffff")};
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 0.3s ease;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: ${({ isSelected }) => (isSelected ? "100%" : "0")};
    height: 3px;
    background-color: #c00000;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease;
  }
  &:hover {
    color: #c00000;
  }
  &:hover:before {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div<{ imgWidth?: number }>`
  display: flex;
  justify-content: flex-end; // 버튼을 오른쪽 끝으로 정렬
  width: ${({ imgWidth }) => (imgWidth ? `${imgWidth}px` : "auto")}; // 네비게이션 바와 동일한 너비로 설정
  margin-top: 20px; // 버튼과 네비게이션 사이에 약간의 여백 추가
  
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column; // 세로 정렬 유지
  align-items: center;
  position: relative;
`;
