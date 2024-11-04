import styled from "styled-components";
import colors from "../../../assets/Colors";

// shop
export const ShopContainer = styled.section`
    width: 100%;
    height: 200px;
    position: relative;
    background: linear-gradient(to right, ${colors.redPrimary} ,${colors.beige});
    caret-color: transparent;
    color: ${colors.white};
    margin-top: 100px;
`
export const ShopImg01 = styled.img`
    scale: 40%;
    margin: -300px 0 0 0;
`
export const ShopImg02 = styled.img`
    z-index: 30;
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
    z-index: 31;
    position: absolute;
    bottom:30px;
    left: 450px;
    display: flex;
    flex-direction: column;
`
// player
export const BannerPlayerLink= styled.a`
    text-decoration: none; 
    color: ${colors.redGradient};
    font-size: 14px;
    font-weight: 700;
    margin-top: 15px;
`
export const BannerPlayerBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 29;
    right: 0;
    top: 0;
    span {
        &:nth-child(2){
            font-size: 60px;
            font-family: PartialSansKR;
            color: ${colors.redGradient};
            margin-left: 30px;
        }
        &:nth-child(3){
            font-size: 30px;
            color: ${colors.white};
            letter-spacing: 8px;
            margin: 10px 0 0 25px;
        }
    }
    @media screen and (max-width: 1560px) {
        right: -150px;
        span {
        &:nth-child(2){
            font-size: 60px;
            font-family: PartialSansKR;
            color: ${colors.redGradient};
            margin-left: 30px;
        }
        &:nth-child(3){
            font-size: 30px;
            color: ${colors.white};
            letter-spacing: 8px;
            margin: 10px 0 0 15px;
        }
    }
    }
`
export const BannerLogo = styled.img`
    scale: 65%;
`
export const BannerPlayerImg = styled.div<{imgFilePath: string | undefined}>`
    position: relative;
    width: 400px;
    height: 200px;
    background: 
    linear-gradient(to right,#CE6D5F, rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)),
    url(${(props) => props.imgFilePath});
    background-size: cover;
    background-position: center;
    z-index: 32;
    @media screen and (max-width: 1560px) {
        transform: translateX(-35%);
        z-index: -5;
    }

`
export const BannerLight = styled.img`
    z-index: 33;
    position: absolute;
    scale: 15%;
    opacity: 40%;
    margin:0 0 10px 250px;
    transform: rotate(45deg);
`