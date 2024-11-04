import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { MetaInfo, Title, Views, ViewsIcon, WizPressContainer } from "./WizPressStyles";

interface Article {
  artcSeq: number;
  artcTitle: string;
  viewCnt: number;
  artcContents: string;
}

interface ApiResponse {
  data: {
    article: Article;
  };
}

// 이미지 경로를 절대 경로로 변환하는 함수
const formatArticleContents = (contents: string) => {
  const baseUrl = 'https://wizzap.ktwiz.co.kr/';
  return contents.replace(/src="\/files/g, `src="${baseUrl}/files`);
};

export const WizPressDetail = () => {
    const { wizpressId } = useParams<{ wizpressId: string }>();

    const { data, isLoading } = useFetchData<ApiResponse>(`article/wizpressdetail-artcSeq-${wizpressId}.json`);
    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    if (isLoading) {
        return;   
    }

    const article = data?.data?.article;

    if (!article) {
        return;
    }

    return (
        <WizPressContainer>
            <Title>{article.artcTitle}</Title>
            <MetaInfo>
                <Views>
                    <ViewsIcon color="gray" />
                    {article.viewCnt}
                </Views>
            </MetaInfo>
            <div dangerouslySetInnerHTML={{ __html: formatArticleContents(article.artcContents) }} />
        </WizPressContainer>
    );
};

export default WizPressDetail;
