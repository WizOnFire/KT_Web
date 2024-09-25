import styled from "styled-components"
import colors from "../../../../assets/Colors"
import { SkeletonBox } from "../../boxScore/recordButton/score/ScoreSkeleton"

const Top5Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid  ${colors.ashGray};
    padding: 40px;
    border-radius: 20px;
    margin-bottom: 100px;
`

const SkeletonTitle = styled(SkeletonBox)`
    width: 250px;
    height: 15px;
    margin-top: 15px;
`
const Top5TextLi = styled.li`
    list-style: none;
    display: flex;
    padding-top: 20px; 
    
    &:first-of-type {
        margin-top: 15px;
    }
`

const SkeletonTextWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const SkeletonLeft = styled.div`
    display: flex;
    gap: 10px;
`

const NumLeft = styled(SkeletonBox)`
    width: 20px;
    height: 20px;
`
const NameLeft = styled(SkeletonBox)`
    width: 80px;
    height: 20px;
`
    
const Top5BottomLine = styled.div`
    height: 10px;
    width: 100%;
    border-bottom: 1px solid ${colors.ashGray};
`

const EraText = styled(SkeletonBox)`
    width: 40px;
    height: 20px;
`;

const SkeletonSeasonText = styled(SkeletonBox)`
    width: 100px;
    height: 25px;
    margin-top: 20px;
    margin-left: auto;
`

const PitcherTop5Skeleton = () => {
    const pithcherPlayer = Array(5).fill(0);
    return (
    <>
        <Top5Container>
            <SkeletonTitle/>
            {pithcherPlayer?.map((_,index) => (
            <div key={index}>
                <Top5TextLi key={index}>
                <>
                    <SkeletonTextWrapper>
                        <SkeletonLeft>
                            <NumLeft/>
                            <NameLeft/>
                        </SkeletonLeft>
                        <EraText/>
                    </SkeletonTextWrapper>
                </>
                </Top5TextLi>
                <Top5BottomLine/>
            </div>
            ))}
            <SkeletonSeasonText/>
        </Top5Container>
    </>
    );
}
export default PitcherTop5Skeleton;