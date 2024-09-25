import styled from "styled-components";
import { SkeletonBox } from "../../boxScore/recordButton/score/ScoreSkeleton";

const SkeletonAudienceDisplay = styled.div`
    display: flex;
    width: 100%; 
    justify-content: space-between;
`;


const SkeletonAudienceLeft = styled(SkeletonBox)`
    display: inline-block;
    width: 170px; 
    height: 25px;
    margin-top: 50px;
    margin-bottom: 20px;
`;

const SkeletonAudienceRight = styled(SkeletonBox)`
    display: inline-block;
    text-align: right;
    width: 100px; 
    height: 25px;
    margin-top: 50px;
    margin-bottom: 20px;
`;

const SkeletonRankBox = styled(SkeletonBox)`
    width: 100%;
    height: 400px;
    font-size: 12px;
    box-sizing: border-box;
    caret-color: transparent;
`;

const SkeletonAudienceBox = styled(SkeletonBox)`
    width: 100%;
    height: 400px;
    font-size: 12px;
    box-sizing: border-box;
    caret-color: transparent;
`;

const AudienceSkeleton = () => {
    return (
        <>
            <SkeletonAudienceLeft />
            <SkeletonRankBox />
            <SkeletonAudienceDisplay>
                <SkeletonAudienceLeft />
                <SkeletonAudienceRight />
            </SkeletonAudienceDisplay>
            <SkeletonAudienceBox/>
        </>
    );
};

export default AudienceSkeleton;
