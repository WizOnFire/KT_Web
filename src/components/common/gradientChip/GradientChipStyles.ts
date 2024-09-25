import styled from "styled-components"
import colors from "../../../assets/Colors"

export type TGradient = {
    margin?:string;
    padding?:string;
}

export type TGradientCircle = {
    width?:string;
    height?:string;
    fontFamily?:string;
    padding?:string;
    margin?:string;
    textGradient?: string;
    backgroundColor?: string;
    color?: string;
    border?: string;
    hoverBackgroundColor?: string;
    hoverColor?: string;
}

export const GradientContainer = styled.div<TGradient>`
    display: flex;
    gap: 10px;
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
`

export const GradientCircle = styled.div<TGradientCircle>`
    width: ${({width}) => width || "60px"};
    height: ${({height}) => height || "20px"};
    border-radius: 20px;
    border: ${({border}) => border || `3px solid ${colors.beige}`};
    background-color: ${({backgroundColor}) => backgroundColor || `${colors.redGradient}`} ;
    color : ${({color}) => color};
    display: flex;
    justify-content: center;
    align-items: center;
    caret-color: transparent;
    font-family: ${({fontFamily}) => fontFamily || "Noto Sans KR"} ;
    padding: ${({padding}) => padding || '0'};
    margin: ${({margin}) => margin || '0'};
    cursor: pointer;
    &:hover {
        background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor || colors.redQuaternary};
        color: ${({ hoverColor }) => hoverColor || colors.white};
        border: none;
    }
    span{
        font-family:"PartialSansKR" ;
        font-weight: 500;
        font-size: 11px;
        background: ${({textGradient}) => textGradient || `linear-gradient(to bottom, white 22%, ${colors.beige}, ${colors.redGradient})`};
        -webkit-background-clip: text;
        color: transparent;
    }
`

export const GradientTitle = styled.span`
    font-family: KBO_Gothic_bold;
    font-weight: 600;
    display: flex;
    align-items: center;
`