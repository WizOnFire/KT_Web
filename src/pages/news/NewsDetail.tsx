import { useParams } from "react-router-dom";
import useFetchData from '../../hooks/useFetchData';
import { NewsContainer, Title, MetaInfo, Views, ViewsIcon, Thumbnail } from './NewsStyles';
import { formatArticleContents } from "./News";  // If this function is in a utility file
import { useEffect } from "react";

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

const NewsDetail = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const { data, isLoading } = useFetchData<ApiResponse>(`/article/newsdetail?artcSeq=${newsId}`);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Access the article object directly
  const article = data?.data?.article;

  if (!article) {
    return <div>No data available</div>;
  }

  return (
    <NewsContainer>
      <Title>{article.artcTitle}</Title>
      <MetaInfo>
        <Views>
          <ViewsIcon color="gray" />
          {article.viewCnt} views
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
