import styled from "styled-components";
import colors from "../../assets/Colors";
import { landingBackground01 } from "../../assets/assets"

export const StartImage = styled.div`
    height: 1000px;
    width: auto;
    background-image: url(${landingBackground01});
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    gap:900px;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const ArrowWapper=styled.img`
    width:90px;
    height:80px;

`
export const StartWizNews = styled.section`
    z-index: 23;
    position: absolute;
    color: ${colors.white};
    bottom: 50px;
    left: 20%;
    font-size : 14px;

    p:nth-of-type(1){
        font-size : 20px;
    }
    
    p:nth-of-type(2){
        color: ${colors.mediumGray};
        width: 400px;
        font-size : 14px;
        white-space: normal;
        line-height: 1.5;
        text-align: left;
        overflow: hidden;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-line-break: 2;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
`
