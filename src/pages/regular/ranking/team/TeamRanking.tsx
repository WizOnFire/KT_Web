import styled from "styled-components";
import Chart from "./records/Chart";
import TeamPitcher from "./records/TeamPitcher";
import TeamRecords from "./records/TeamRecords";
import TeamBatter from "./records/TeamBatter";
import WinLossTable from "./records/WinLossTable";
import colors from "../../../../assets/Colors";
import { useEffect, useState } from "react";
import { SkeletonBox } from "../../boxScore/recordButton/score/ScoreSkeleton";

const RankingContainer = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
`
const RankingSection = styled.section`
  margin-top: 50px;
`
const WinLossText = styled.span`
  position: absolute;
  right: 0;
  bottom: 435px;
  width: 150x;
  height: 25px;
  font-weight: 600;
  z-index: 41;
  color:${colors.redPrimary};

  &::before{
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 60px;
    height: 0.8rem;
    background-color: rgba(255, 0, 0, 0.1);
    z-index: -2;
  }
`

//스켈레톤 ui
const SkeletonText = styled(SkeletonBox)`
  display: inline-block;
  width: 170px; 
  height: 25px;
  margin: 20px 0 5px 0 ;
`

const SkeletonWinLossText = styled(SkeletonBox)`
  position: absolute;
  right: 0;
  bottom: 415px;
  width: 100px;
  height: 25px;
  font-weight: 600;
`

const SkeletonRankBox = styled(SkeletonBox)`
    width: 100%;
    height: 400px;
    font-size: 12px;
    box-sizing: border-box;
    caret-color: transparent;
`

const TeamRanking = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true); 
  const title = {
    common : "2024 시즌 팀",
    items : [
      "순위",
      "기록",
      "투수 기록",
      "타자 기록",
      "간 승패표",
    ]
  };

  useEffect(()=>{
    setTimeout(() => {
        setIsLoading(false);
    },500);
},[])

  return (
    <RankingContainer>
      {title.items.map((item,index) => (
        <RankingSection key={index}>
          {isLoading ? (
              <SkeletonText/>
            ):(
              <h3>{title.common} {item}</h3> 
            )}
          {index === 0 && (isLoading ? <SkeletonRankBox/> : <Chart/>)}
          {index === 1 && (isLoading ? <SkeletonRankBox/> : <TeamRecords/>)}
          {index === 2 &&  (isLoading ? <SkeletonRankBox/> : <TeamPitcher/>)}
          {index === 3 && (isLoading ? <SkeletonRankBox/> : <TeamBatter/>)}
          {index === 4 && 
            <>
              {isLoading ? (
                <>
                  <SkeletonRankBox/>
                  <SkeletonWinLossText/>
                </>
              
              ):(
                <>
                  <WinLossTable/>
                  <WinLossText>*경기 성적 (승-패-무)</WinLossText>
                </>
              )}
            </>
          }
        </RankingSection>
      ))}
    </RankingContainer>
  );
}
export default TeamRanking