import { useParams } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import { NewsContainer, Title, MetaInfo, Views, ViewsIcon, Thumbnail } from './NewsStyles';


interface Article {
  artcSeq: number;
  artcTitle: string;
  viewCnt: number;
  regDttm: number;
  artcContents: string;
  thumbnailUrl?: string; 
  imgFilePath: string;
}

interface ApiResponse {
  data: {
    article: Article;
  };
}
export const formatArticleContents = (contents: string) => {
  const baseUrl = 'https://wizzap.ktwiz.co.kr/';
  return contents.replace(/src="\/files/g, `src="${baseUrl}/files`);
};
const NewsDetail = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const { data, isLoading } = useFetchData<ApiResponse>(`/article/newsdetail?artcSeq=${newsId}`);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  if (isLoading) {
    return;
  }

  const article = data?.data?.article;

  if (!article) {
    return;
  }

  return (
    <NewsContainer>
      <Title>{article.artcTitle}</Title>
      <MetaInfo>
        <Views>
          <ViewsIcon color="gray" />
          {article.viewCnt}
        </Views>
      </MetaInfo>
      {article.thumbnailUrl && (
        <Thumbnail src={article.thumbnailUrl} alt="Article Thumbnail" />
      )}
      <div dangerouslySetInnerHTML={{ __html: formatArticleContents(article.artcContents) }} />
    </NewsContainer>
  );
};

export default NewsDetail;
