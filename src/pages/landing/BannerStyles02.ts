import styled from "styled-components";
import colors from "../../assets/Colors";

export const ShopContainer = styled.section`
    width: 100%;
    height: 200px;
    position: relative;
    background: linear-gradient(to right,  ${colors.redPrimary}, ${colors.beige});
    caret-color: transparent;
    color: ${colors.white};
    margin-top: 100px;
`
export const ShopImg01 = styled.img`
scale: 40%;
margin: -300px 0 0 0;
`
export const ShopImg02 = styled.img`
z-index: 29;
position: relative;
scale: 65%;
left: 0;
`
export const ShopImgBox = styled.span`
    display: flex;
    align-items: center;
    span{
        padding-top: 10px;
    }
`
export const BannerShop = styled.div`
    z-index: 30;
    position: absolute;
    bottom:28px;
    left: 450px;
    display: flex;
    flex-direction: column;
`
export const BannerPlayerLink= styled.a`
    text-decoration: none; 
    color: ${colors.redGradient};
    font-size: 14px;
    font-weight: 700;
    margin-top: 7%;
`
export const BannerLogo = styled.img`
    position: absolute;
    scale: 65%;
    bottom: 67%;
    right: 25%; 
`
export const BannerPlayerBox = styled.div`
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