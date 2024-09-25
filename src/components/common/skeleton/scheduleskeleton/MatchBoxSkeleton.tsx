import styled, { keyframes, css } from "styled-components";
import colors from "../../../../assets/Colors";
import Button from "../../button/Button";

// 스켈레톤 애니메이션
const loadingAnimation = keyframes`
    100% {
        background-position: -100% 0;
    }
`;

// 스켈레톤 스타일
const skeletonStyle = css`
  background-color: #f0f0f0;
  background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${loadingAnimation} 0.8s infinite;
  border-radius: 4px;
`;

// 기존 스타일에 스켈레톤 효과를 추가하는 공통된 컴포넌트
export const SkeletonWrapper = styled.div<{ isSkeleton?: boolean }>`
  ${({ isSkeleton }) => isSkeleton && skeletonStyle};
`;

export const ScheduleBoxS = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;

  // 가운데 박스를 더 크게 강조하는 스타일 적용
  & > div:nth-child(2) {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // 강조 효과
    z-index: 1;
  }
`;

export const GameBoxS = styled(SkeletonWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #d2d2d2;
  width: 310px;
  height: 170px;
  padding: 20px;
  background-color: #fff;
  margin: 2px;
`;

export const DateContainerS = styled(SkeletonWrapper)`
  color: white;
  width: 100px;
  height: 20px;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeamsContainerS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TeamLogoS = styled(SkeletonWrapper)`
  width: 75px;
  height: 75px;
  margin-left: 12px;
  margin-right: 12px;
  border-radius: 50%;
`;

export const TeamInfoS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin-bottom: 10px;
    font-size: 14px;
    color: ${colors.ashGray};
    &:first-of-type {
      color: ${colors.black};
    }
  }
`;

export const ScoreS = styled(SkeletonWrapper)`
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 15px;
  width: 100px;
  height: 30px;
`;

export const MatchResultS = styled(SkeletonWrapper)`
  color: ${colors.redTertiary};
  margin-bottom: 9px;
  width: 80px;
  height: 20px;
`;

export const ContentBoxS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    font-size: 14px;
    margin-bottom: 12px;
  }
`;

export const SkeletonButton = styled(Button)`
  ${skeletonStyle};
  width: 80px;
  height: 30px;
`;


const MatchBoxSkeleton = () => {
    const skeletonData = Array(3).fill(null); // 3개의 빈 데이터를 가진 배열
  return (
    <>
    <ScheduleBoxS>
        {skeletonData.map((_,index)=>(
            <GameBoxS key={index}>
                <DateContainerS isSkeleton/>
                <TeamsContainerS >
                    <TeamInfoS >
                        <TeamLogoS isSkeleton/>
                    </TeamInfoS>
                    <ContentBoxS>
                        <ScoreS isSkeleton/>
                        <MatchResultS isSkeleton/>
                    </ContentBoxS>
                        <TeamInfoS>
                        <TeamLogoS isSkeleton/>
                    </TeamInfoS>
                </TeamsContainerS>
            </GameBoxS>
        ))}
    </ScheduleBoxS>


      

    </>
  );
}
export default MatchBoxSkeleton