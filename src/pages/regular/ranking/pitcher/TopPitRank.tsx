import styled from "styled-components";
import SharedTop3 from "../shared/SharedTop3";
import SharedAvgTop5 from "../shared/SharedAvgTop5";
import colors from "../../../../assets/Colors";

const PitTopContainer = styled.div`
  display: flex;
`
const TitleText = styled.span`
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  padding: 5px;
  border-radius: 10px;
  strong{
    color: ${colors.redQuaternary};
  }
`

const TopPitRank = () => {
  return (
    <PitTopContainer>
          <SharedTop3 
            condition="pitcherEra"
          >
              <h4>평균자책점</h4>
              <h1>TOP3</h1>
          </SharedTop3>
          <SharedTop3 
            condition="pitcherWins"
          >
              <h4>승리</h4>
              <h1>TOP3</h1>
          </SharedTop3>
        <SharedAvgTop5 condition="pitcher">
            <TitleText><strong>전체 투수 평균자책점</strong> TOP5</TitleText>
        </SharedAvgTop5>
      </PitTopContainer>
  );
}
export default TopPitRank;