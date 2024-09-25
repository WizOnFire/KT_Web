import styled from "styled-components"
import colors from "../../../assets/Colors"

export const HighLightContainer = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${colors.black};
    margin-top: 100px;
`;

export const HighLightNews = styled.div`
    width: 65%;
    font-size: 14px;
    color: ${colors.redGradient};
    text-align: left; 
`;

export const HighLightTitle = styled.span`
    font-family: PartialSansKR;
    font-size : 60px;
`

export const HighLightLine = styled.div`
    width: 100%;
    border-bottom: 5px solid ${colors.redGradient};
    display: flex;
    margin: 30px 0 70px 0;
    caret-color: transparent;
`
export const HighLightVedioBox = styled.section`
    max-width: 1110px;
    width: 100%;
    display: flex;
    margin-bottom: 30px;
    gap: 15px;
    `;

export const IframeContainer = styled.section`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const LargeIframe = styled.iframe`
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 10px;
    border: none;
    overflow: hidden;
    border: none;
`;

export const SmallIframeList = styled.ul`
    display: flex;
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    gap: 10px;
`;

export const SmallIframeItem = styled.li`
    flex: 1;
    overflow: hidden;
    position: relative;
    
    iframe {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 10px;

    }
`;

export const MediumIframeList = styled.ul`
    width: 30%;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: 0;
    gap: 75px;
`;

export const MediumIframeItem = styled.li`
    aspect-ratio: 16/9;
    iframe {
        width: 100%;
        height: 80%;
        border: none;
        border-radius: 10px;
        padding-top: 15px;
    }
`;

export const IframeItemInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const IframeItemTitle = styled.span`
    font-size:14px;
`;