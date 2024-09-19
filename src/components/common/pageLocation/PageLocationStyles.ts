import styled from "styled-components";
import colors from "../../../assets/Colors";

export const PageLocationContainer = styled.div`
    display: flex;
    justify-content: center;
` 

export const PageLocationBox = styled.div`
    max-width: 1100px;
    width: 100%;
    margin-top: 100px;//진주: 마진 조정했습니다!
    height: 33px;
     @media (max-width: 1200px) {
        max-width: 900px; 
    }

    @media (max-width: 768px) {
        max-width: 600px; /
    }

    @media (max-width: 480px) {
        max-width: 400px; 
    }
` 

export const PageLocationInfo = styled.div`
    width: 100%;
    border-bottom : 1.5px solid ${colors.redPrimary};
    text-align: right;
    z-index: 20;
    padding-bottom: 15px;
    color: ${colors.ashGray};
    span{
        padding-right: 10px;
         /* &:last-child{
        color: ${colors.redPrimary};
        }  */
    }

`