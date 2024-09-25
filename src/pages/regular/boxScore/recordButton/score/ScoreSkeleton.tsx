import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
    0% {
        background-position: 100% 0;
    }
    100% {
        background-position: -100% 0;
    }
`;

export const SkeletonBox = styled.div`
    background: linear-gradient(
        120deg,
        #e5e5e5 30%,
        #f0f0f0 38%,
        #f0f0f0 40%,
        #e5e5e5 48%
    );
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: ${loadingAnimation} 1.5s infinite;
    border-radius: 1rem;
    height: 1.5rem;
`;

const ScoreWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 300px;
    margin-bottom: 50px;
`;

const ScoreTable = styled(SkeletonBox)`
    position: absolute;
    width: 32%;
    height: 12%;
    margin: 0 auto;
    top: 650px;
    left: 34%;
    font-size: 12px;
    z-index: 37;
`;

const ScoreArrowAndInfoBox = styled.div`
    z-index: 40;
    width: 100%;
    position: absolute;
    top: 90px;
`;

const ScoreArrowBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 3%;

    div {
        margin-bottom: 10px;
    }
`;

const ScoreArrows = styled(SkeletonBox)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: relative;
    bottom: 15px;
`;

const ScoreInfoTop = styled(SkeletonBox)`
    width: 300px;
    height: 18px;
    z-index: 38;
    position: relative;
    bottom: 20px;
`;

const ScoreInfoBottom = styled(SkeletonBox)`
    width: 300px;
    height: 18px;
    z-index: 38;
    position: relative;
    bottom: 20px;
`;

const ScoreNumBox = styled(SkeletonBox)`
    width: 200px;
    height: 200px;
    margin-top: 70px;
    border-radius: 15px;
`;

const ScoreBoxWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 55%;
`;

const ScoreSkeleton = () => {
    return (
        <>
            <ScoreWrapper>
                <ScoreArrowAndInfoBox>
                    <ScoreArrowBox>
                        <ScoreArrows />
                        <div>
                            <ScoreInfoTop />
                            <ScoreInfoBottom />
                        </div>
                        <ScoreArrows />
                    </ScoreArrowBox>
                </ScoreArrowAndInfoBox>
                <ScoreBoxWrapper>
                    <ScoreNumBox />
                    <ScoreNumBox />
                </ScoreBoxWrapper>
            </ScoreWrapper>
            <ScoreTable />
        </>
    );
};

export default ScoreSkeleton;
