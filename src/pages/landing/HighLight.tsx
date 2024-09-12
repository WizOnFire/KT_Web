import styled from "styled-components";
import GradientChip from "../../components/common/gradientChip/GradientChip";
import useFetchData from "../../hooks/useFetchData";
import {
    HighLightContainer,
    HighLightNews,
    HighLightLine,
    HighLightTitle,
} from "./HighLightStyles";
import { GrNext } from "react-icons/gr";
import { GradientCircle } from "../../components/common/gradientChip/GradientChipStyles";
import colors from "../../assets/Colors";

const HighLightVedioBox = styled.section`
    max-width: 1110px;
    width: 100%;
    display: flex;
    margin-bottom: 30px;
    gap: 15px;
    `;

const IframeContainer = styled.section`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const LargeIframe = styled.iframe`
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 10px;
    border: none;
    overflow: hidden;
    border: none;
`;

const SmallIframeList = styled.ul`
    display: flex;
    width: 100%;
    list-style-type: none;
    padding: 0;
    margin: 0;
    gap: 10px;
`;

const SmallIframeItem = styled.li`
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

const MediumIframeList = styled.ul`
    width: 30%;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: 0;
    gap: 75px;
`;

const MediumIframeItem = styled.li`
    aspect-ratio: 16/9;
    iframe {
        width: 100%;
        height: 80%;
        border: none;
        border-radius: 10px;
        padding-top: 15px;
    }
`;

const IframeItemInfo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const IframeItemTitle = styled.span`
    font-size:14px;
`;



const HighLight = () => {
    const { data } = useFetchData<THighLightResponse>("/media/highlightlist?count=10");

    return (
        <HighLightContainer>
            <HighLightNews>
                <GradientChip
                    main="KTWIZ" title="하이라이트" />
                <HighLightTitle>HIGHLIGHTS</HighLightTitle>
                <HighLightLine />
            </HighLightNews>
            <HighLightVedioBox>
                <IframeContainer>
                    <LargeIframe
                        src={`https://tv.naver.com/embed/${data?.data.list[0].videoLink.split('clipNo=')[1]}`}
                        title={data?.data.list[0].artcTitle}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <SmallIframeList>
                        {data?.data.list
                        .slice(1,4)
                        .map(highlight => (
                            <SmallIframeItem key={highlight.artcSeq}>
                                <iframe
                                    src={`https://tv.naver.com/embed/${highlight.videoLink.split('clipNo=')[1]}`}
                                    title={highlight.artcTitle}
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </SmallIframeItem>
                        ))}
                    </SmallIframeList>
                </IframeContainer>
                <MediumIframeList>
                    {data?.data.list
                    .slice(6,8)
                    .map((highlight) => (
                        <MediumIframeItem key={highlight.artcSeq}>
                        <IframeItemInfo>
                            <GradientChip
                                main="KTWIZ" title="하이라이트" />
                                <span>{highlight.contentsDate}</span>
                        </IframeItemInfo>
                        <IframeItemTitle>{highlight.artcTitle}</IframeItemTitle>
                            <iframe
                                src={`https://tv.naver.com/embed/${highlight.videoLink.split('clipNo=')[1]}`}
                                title={highlight.artcTitle}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </MediumIframeItem>
                    ))}
                </MediumIframeList>
            </HighLightVedioBox>
            <GradientCircle
                    width="160px"
                    height="35px"
                    fontFamily="KBO_Gothic_bold"
                    backgroundColor={`${colors.white}`}
                    >
                    더 많은 영상보기
                    <GrNext />
                </GradientCircle>
        </HighLightContainer>
    );
};

export default HighLight;
