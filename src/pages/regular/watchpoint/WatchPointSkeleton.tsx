import styled, { keyframes } from 'styled-components';

import { Wrapper, WatchPointWrapper, TableBox, PitchTable,LineUpWrapper, TeamInfoWrapper, LineUpContainer } from './WatchPointBoxStyles';
import { PitchRecordLabel } from '../boxScore/recordButton/pitchRecords/PitchRecordStyles';
import { LineUpBox, TeamWrapper, VSWrapper } from './LineUpStyles';
import { vs } from '../../../assets/assets';
import { SkeletonBox } from '../boxScore/recordButton/score/ScoreSkeleton';

const loadingAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

const SkeletonBlock = styled.div`
  width: 100%; 
  height: 100%;
  background-color: #e0e0e0;
  animation: ${loadingAnimation} 1.5s infinite;
`;

const RankSkeletonWrapper = styled.div`
  width: 100%; 
  height: 144px; 
  position: relative;
  border: 1px solid #ddd; 
  border-radius: 4px; 
  overflow: hidden; 
  margin-bottom: 20px; 
`;

const TableSkeletonWrapper = styled.div`
  width: 100%; 
  height: 108px;
  position: relative;
  border: 1px solid #ddd; 
  border-radius: 4px; 
  overflow: hidden; 
  margin-bottom: 20px; 
`;

const TeamInfoBox = styled(SkeletonBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px 0px inset, rgba(17, 17, 26, 0.05) 0px 8px 32px 0px;
  margin-top: 200px;
  width: 200px;
  height: 200px;
`;

const TeamLogo = styled(SkeletonBox)`
  width: 90px;
  height: 90px;
  margin-top: 50px;
  margin-bottom: -20px;
  border-radius: 5px;
`;

const WatchPointSkeleton = () => {
  return (
    <>
      <Wrapper>
        <WatchPointWrapper>
          <TeamInfoWrapper>
            <TeamInfoBox>
              {/* Team Info Content */}
            </TeamInfoBox>
            <TeamInfoBox>
              {/* Team Info Content */}
            </TeamInfoBox>
          </TeamInfoWrapper>
        </WatchPointWrapper>

        {/* 팀 순위 테이블 스켈레톤 */}
        <TableBox>
          <tbody>
            <tr>
              <td colSpan={4}>
                <RankSkeletonWrapper>
                  <SkeletonBlock />
                </RankSkeletonWrapper>
              </td>
            </tr>
          </tbody>
        </TableBox>
      </Wrapper>

      <PitchTable>
        <PitchRecordLabel>선발투수 비교</PitchRecordLabel>
        <TableSkeletonWrapper>
          <SkeletonBlock />
        </TableSkeletonWrapper>
      </PitchTable>

      <LineUpContainer style={{marginTop:'-21px'}}>
        <PitchRecordLabel>라인업</PitchRecordLabel>
        <LineUpWrapper>
          <LineUpBox>
            <TeamLogo />
            <TeamWrapper>
              {/* Team Info Content */}
            </TeamWrapper>
          </LineUpBox>
          <VSWrapper>
            <img src={vs} alt="vs" />
          </VSWrapper>
          <LineUpBox>
            <TeamLogo />
            <TeamWrapper>
              {/* Team Info Content */}
            </TeamWrapper>
          </LineUpBox>
        </LineUpWrapper>
      </LineUpContainer>
    </>
  );
}

export default WatchPointSkeleton;
