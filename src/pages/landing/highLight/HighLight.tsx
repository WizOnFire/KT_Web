import GradientChip from "../../../components/common/gradientChip/GradientChip";
import useFetchData from "../../../hooks/useFetchData";
import {
    HighLightContainer,
    HighLightNews,
    HighLightLine,
    HighLightTitle,
    HighLightVedioBox,
    IframeContainer,
    LargeIframe,
    SmallIframeList,
    SmallIframeItem,
    MediumIframeList,
    MediumIframeItem,
    IframeItemInfo,
    IframeItemTitle
} from "./HighLightStyles";
import { GrNext } from "react-icons/gr";
import { GradientCircle } from "../../../components/common/gradientChip/GradientChipStyles";
import colors from "../../../assets/Colors";
import { THighLightResponse } from "../../../types/landing";

const HighLight = () => {
    const { data } = useFetchData<THighLightResponse>("media/highlightlist?count=10");

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
