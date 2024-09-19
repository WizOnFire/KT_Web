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
