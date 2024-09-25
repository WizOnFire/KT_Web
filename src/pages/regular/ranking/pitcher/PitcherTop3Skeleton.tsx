import styled from "styled-components";
import { SkeletonBox } from "../../boxScore/recordButton/score/ScoreSkeleton";

const AvgPitContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    margin-right: 40px;
    margin-left: 30px;
`;

const SkeletonPitText = styled(SkeletonBox)`
    width: 90px; 
    height: 30px;
    margin-bottom: 10px;
    &:nth-child(1){
        width: 80px;  
        height: 18px;
    }
`;

const AvgPitImg = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 75px;
        height: 250px;
        list-style: none;
        &:first-child {
            transform: scale(1.2);  
            order: 2;
            margin-right: 5px;
        }
        &:nth-child(2) {
            order: 1;
        }
        &:nth-child(3) {
            order: 3;
        }
    }
`;

const AvgPitName = styled.div`
    display: flex;
    justify-content: center;
    gap: 7px; 
    li {
        list-style: none;
        display: flex;
        align-items: center;
        &:nth-child(1) {
            order: 2;
        }
        &:nth-child(2) {
            order: 1;
        }
        &:nth-child(3) {
            order: 3;
        }
    }
`;

const SkeletonPitName = styled(SkeletonBox)<{$isFirst: boolean}>`
    width: ${({$isFirst}) => ($isFirst ? '80px' : '60px')};  
    height: ${({$isFirst}) => ($isFirst ? '35px' : '30px')};
`;

const SkeletonMedal = styled(SkeletonBox)<{$isFirst: boolean}>`
    width: ${({$isFirst}) => ($isFirst ? '30px' : '20px')};  
    height: ${({$isFirst}) => ($isFirst ? '30px' : '20px')};
    margin-right: 5px;  
    border-radius: 50%;
`;

const SkeletonPitImg = styled(SkeletonBox)`
    width: 85px;  
    height: 140px;
    border-radius: 50px; 
`;

const PitcherTop3Skeleton = () => {
    const pithcherPlayer = Array(3).fill(0);
    return (
        <>
        <AvgPitContainer>
            <SkeletonPitText/>
            <SkeletonPitText/>
            <AvgPitImg>
                {pithcherPlayer.map((_, index) => (
                    <li key={index}>
                        <SkeletonPitImg/>
                    </li>
                ))}
            </AvgPitImg>
            <AvgPitName>
                {pithcherPlayer.map((_, index) => (
                    <li key={index}>
                        <SkeletonMedal $isFirst={index === 0}/>
                        <SkeletonPitName $isFirst={index === 0}/>
                    </li>
                ))}
            </AvgPitName>
        </AvgPitContainer>
        </>
    );
}
export default PitcherTop3Skeleton;