import styled from "styled-components";

export const SearchBarContainer = styled.div`
  //position: fixed;
  //top: 10px; /* 위쪽에서 고*/
margin: inherit;
position: relative;
top:-40px;
left:13%;

  @media (max-width: 1200px) {
    left: 1%; /* 작은 화면일 때 오른쪽 위치 조정 */
  }
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

export const GridContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  min-height: 100px;
  width: 75%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CoachCard = styled.div`
  position: relative;
  text-align: center;
  min-height: 200px;
`;

export const CoachImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: -10px;
  right: 10px;
  color: black;
  font-size: 17px;

  p {
    margin: 0;
  }
`;
