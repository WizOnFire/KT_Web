import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  //position: sticky; /* 위치를 부모 요소에 상대적으로 조정 */
  position: relative;
  // margin-right: 60%;
  top: -87px;  /* 현재 위치에서 20px 위로 이동 */

`;

export type TGridContainerProps={
  columns:number;
}
export const GridContainer = styled.div<TGridContainerProps>`
  display: grid;
  grid-template-columns: repeat(${props=>props.columns},1fr);
  gap: 20px;
  min-height: 100px;
  //width: 00%;

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
