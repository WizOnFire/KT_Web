import styled from "styled-components";
import colors from "../../assets/Colors";
import { Link } from "react-router-dom";

export const BannerContainer = styled.section`
    width: 100%;
    height: 200px;
    position: relative;
    background: linear-gradient(to right,  ${colors.redPrimary}, ${colors.beige});
    caret-color: transparent;
    color: ${colors.white};
`
export const BannerImg01 = styled.img`
    margin: 20px 0 0 50px;
`
export const BannerImg02 = styled.img`
    margin: -54px -70px 0 50px;
    width: 50%;
    height: auto;
    position: absolute;
    right: 0;
    scale: 70%;
`
export const BannerRanking = styled.div`
    z-index: 27;
    position: absolute;
    bottom:30px;
    left: 450px;
    display: flex;
    flex-direction: column;
`
export const BannerRankingInfo = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    gap: 40px;
    word-spacing: 5px;
    div{
        display: flex;
        flex-direction: column;
        width: 220px;
        span {
            display: flex;
            justify-content: center;
            &:first-child{
                font-size: 25px;
            }
            &:last-child{
                font-size: 14px;
            }
        }
    }
`
export const RankingNubmer = styled.span`
    strong {
        font-size: 80px;
    }
`
export const BannerCenterLine = styled.div`
    border-left: thin solid ${colors.white};
    position: absolute;
    height: 70%; 
    left: 50%;
    top: 15%;
    transform: translateX(-50%);
`
export const BannerBottomLine = styled.div`
    border-bottom: 1px solid ${colors.lightGray};
    margin: 5px 0 10px 0;
`
export const BannerParkBox = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 28;
    right: 0;
    top: 15%;
    margin-right: 32%;
    span {
        &:nth-child(2){
        font-size: 25px;
        }
        
    }
`
export const BannerParkLink = styled(Link)`
    text-decoration: none; 
    color: ${colors.redGradient};
    font-size: 14px;
    font-weight: 700;
    margin-top: 7%;
`
