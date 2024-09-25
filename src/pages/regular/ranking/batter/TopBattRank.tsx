import styled from "styled-components";
import SharedTop3 from "../shared/SharedTop3";
import SharedAvgTop5 from "../shared/SharedAvgTop5";
import colors from "../../../../assets/Colors";

const PitTopContainer = styled.div`
  display: flex;
`
const TitleText = styled.span`
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  border-radius: 10px;
  strong{
    color: ${colors.redQuaternary};
    margin-right: 10px;
  }
`
const TopBattRank = () => {
  return (
    <>
        <PitTopContainer>
          <SharedTop3 
            condition="batterHra"
          >
              <h4>타율</h4>
              <h1>TOP3</h1>
          </SharedTop3>
          <SharedTop3 
            condition="batterHr"
          >
              <h4>홈런</h4>
              <h1>TOP3</h1>
          </SharedTop3>
          <SharedAvgTop5 condition="batter">
            <TitleText><strong>전체 타자 타율</strong>TOP5</TitleText>
          </SharedAvgTop5>
        </PitTopContainer>
      </>
  );
}
export default TopBattRank;