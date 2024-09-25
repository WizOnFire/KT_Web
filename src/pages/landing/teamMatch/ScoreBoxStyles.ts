import styled from "styled-components"
import colors from "../../../assets/Colors"

type LeftProps = {
    left?: string;
    transform?: string;
    backgroundColor?: string;
    fontSize?: string;
    scale?: string;
    margin?: string;
    padding?: string;
}

type TEachTeamBoxType = {
    width?: string;
    height?: string;
    border?: string;
}

export const EachTeamBox = styled.div<TEachTeamBoxType>`
    position: relative;
    width: ${(props) => props.width || "250px"};
    height: ${(props) => props.height || "250px"};
    margin-top: 70px;
    border: ${(props) => props.border || `1px solid ${colors.mediumGray}`};
    border-radius: 15px;
    caret-color: transparent;
    align-content: center;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px 0px inset, rgba(17, 17, 26, 0.05) 0px 8px 32px 0px;
    &:hover{
        box-shadow: rgba(255, 255, 255, 0.5) 0px 4px 16px 0px inset, rgba(17, 17, 26, 0.05) 0px 8px 32px 0px;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
    img{
        width: 150px; 
        height: auto; 
        margin-top: 10px;
    }
`

export const HiddenBlackBox = styled.div<LeftProps>`
    position : absolute;
    z-index: 24;
    width: 30px;
    height: 130px;
    top: 27%;
    left: ${(props) => props.left || '-5%'};
    background-color:${(props) => props.backgroundColor || 'black'};
`

export const ScoreBold = styled.span<LeftProps>`
    position : absolute;
    z-index: 25;
    font-size: ${(props) => props.fontSize || "90px" };
    font-family: KBO_Gothic_bold;
    top: 27%;
    left: ${(props) => props.left || 0 };
    transform: ${(props) => props.transform || "translateX(-70%)" };
`
export const ScoreLogo = styled.img<LeftProps>`
    scale: ${(props) => props.scale || ""};
`

export const ScoreTeamName = styled.span<LeftProps>`
    scale: ${(props) => props.scale || ""};
    margin:${(props) => props.margin || "-25px 0 20px 0"};  
`

