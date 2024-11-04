import styled from "styled-components";
import { SkeletonBox } from "../regular/boxScore/recordButton/score/ScoreSkeleton";
import colors from "../../assets/Colors";

export const StartImage = styled(SkeletonBox)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 1000px;
`;

const StartWizNews = styled.section`
    position: absolute;
    bottom: 100px;
    left: 20%;
    font-size: 14px;
    z-index: 23;
    
    p:nth-of-type(1) {
        width: 100%;
        height: 20px;
        font-size: 20px;
        border-radius: 20px;
        background-color: lightgray;
    }

    p:nth-of-type(2) {
        text-align: left;
        width: 400px;
        height: 20px;
        font-size: 14px;
        line-height: 1.5;
        white-space: normal;
        color: ${colors.mediumGray};
        border-radius: 20px;
        background-color: lightgray;
    }

    p:nth-of-type(3) {
        width: 150px;
        height: 20px;
        border-radius: 20px;
        background-color: lightgray;
    }
`;

const TitleBadge = styled.div`
    width: 100px;
    height: 30px;
    border-radius: 20px;
    background-color: lightgray;
`;

const HomeSkeleton = () => {
    return (
        <StartImage>
            <StartWizNews>
                <TitleBadge />
                <>
                    <p></p>
                    <p></p>
                    <p></p>
                </>
            </StartWizNews>
        </StartImage>
    );
};

export default HomeSkeleton;
