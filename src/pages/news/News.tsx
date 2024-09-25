import useFetchData from '../../hooks/useFetchData';
import { NewsContainer, NewsList, NewsItem, Title, MetaInfo, Views, SearchBarWrapper, Pagination, Thumbnail, ViewsIcon, ArticleIndex, SkeletonViews, SkeletonSearchBarWrapper, SkeletonSearchIcon } from './NewsStyles';
import { SkeletonWrapper, SkeletonNewsItem, SkeletonThumbnail, SkeletonTitle} from './NewsStyles';
import { useState, useEffect } from 'react';
import Button from '../../components/common/button/Button';
import SearchBar from '../../components/common/searchbar/SearchBar';
import colors from '../../assets/Colors';
import { useNavigate } from 'react-router-dom';

interface Article {
  artcSeq: number;
  artcTitle: string;
  viewCnt: number;
  regDttm: number;
  artcContents: string;
  thumbnailUrl?: string;  // 썸네일 URL 필드 추가
  imgFilePath:string;
}

interface ApiResponse {
  data: {
    list: Article[];
  };
}
// 본문 이미지 경로를 변환하는 함수
export const formatArticleContents = (contents: string) => {
  const baseUrl = 'https://wizzap.ktwiz.co.kr/';
  return contents.replace(/src="\/files/g, `src="${baseUrl}/files`);
};

// 썸네일 URL을 변환하는 함수 (formatArticleContents와 유사하게 처리)
const formatThumbnail = (thumbnailUrl: string) => {
  const baseUrl = 'https://wizzap.ktwiz.co.kr/';
  
  // /files 경로가 포함된 썸네일 URL을 절대 경로로 변환
  return thumbnailUrl.replace(/src="\/files/g, `src="${baseUrl}/files`);
};

const News = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data, isLoading, error } = useFetchData<ApiResponse>(`/article/newslist?searchWord=${searchTerm}`);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [currentItems, setCurrentItems] = useState<Article[]>([]);
  const [startPage, setStartPage] = useState(1);
  const maxVisibleButtons = 5;
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.data && data.data.list) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const paginatedItems = data.data.list.slice(indexOfFirstItem, indexOfLastItem);

      const updatedArticles = paginatedItems.map((article: Article) => {
        const thumbnailUrl = article.thumbnailUrl ? formatThumbnail(article.thumbnailUrl) : '';
        return {
          ...article,
          thumbnailUrl,
        };
      });

      setCurrentItems(updatedArticles);
    }
  }, [currentPage, data]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSelectedArticle(null);

    if (pageNumber > startPage + maxVisibleButtons - 1) {
      setStartPage(startPage + maxVisibleButtons);
    } else if (pageNumber < startPage) {
      setStartPage(Math.max(pageNumber - maxVisibleButtons + 1, 1));
    }
  };

  const totalPages = Math.ceil((data?.data?.list.length || 0) / itemsPerPage);
  const endPage = Math.min(startPage + maxVisibleButtons - 1, totalPages);

  const handleClick = (article: Article) => {
    navigate(`/media/wiznews/${article.artcSeq}`);;
  };
  
if (isLoading) {
  return (
    <SkeletonWrapper>
        <SkeletonSearchBarWrapper />
        <SkeletonSearchIcon />
      {Array.from({ length: itemsPerPage }).map((_, index) => (
        <SkeletonNewsItem key={index}>
          <SkeletonThumbnail />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <SkeletonTitle />
            <SkeletonViews />
          </div>
        </SkeletonNewsItem>
      ))}
    </SkeletonWrapper>
  );
}


  if (error) {
    return <div>{error}</div>;
  }

  return (
    <NewsContainer>
      <SearchBarWrapper>
        <SearchBar 
        placeholder="검색어를 입력해주세요." 
        containerWidth="140px" 
        height="29px" 
        buttonWidth="45px"
        onSearch={(term)=>setSearchTerm(term)} 
        />
      </SearchBarWrapper>
      {selectedArticle ? (
        <div>
          <Title>{selectedArticle.artcTitle}</Title>
          <MetaInfo>
            <Views>
              <ViewsIcon color="gray" />
              {selectedArticle.viewCnt}
            </Views>
          </MetaInfo>
          <div dangerouslySetInnerHTML={{ __html: formatArticleContents(selectedArticle.artcContents) }} />
          <Button
            onClick={() => setSelectedArticle(null)}
            backgroundColor={colors.black}
            fontColor={colors.white}
            padding="10px 15px"
          >
            돌아가기
          </Button>
        </div>
      ) : (
          <>
            <NewsList>
              {currentItems.length > 0 ? (
                currentItems.map((article: Article, index: number) => (
                  <NewsItem key={article.artcSeq} onClick={() => handleClick(article)}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <ArticleIndex>{index + 1 + (currentPage - 1) * itemsPerPage}</ArticleIndex>
                      <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Thumbnail src={article.imgFilePath} alt="사진" style={{ marginRight: '20px' }} />
                        <div>
                          <Title>{article.artcTitle}</Title>
                          <MetaInfo>
                            <Views>
                              <ViewsIcon color="gray" />
                              {article.viewCnt}
                            </Views>
                          </MetaInfo>
                        </div>
                      </div>
                    </div>
                  </NewsItem>
                ))
              ) : (
                  <div>No data</div>
              )}
            </NewsList>
          <Pagination>
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              backgroundColor={currentPage === 1 ? colors.ashGray : colors.darkGray}
              fontColor={colors.white}
              padding="10px 15px"
            >
              &lt;
            </Button>
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
              const page = startPage + index;
              return (
                <Button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  backgroundColor={currentPage === page ? colors.redPrimary : colors.silverGray}
                  fontColor={colors.white}
                  padding="10px 15px"
                >
                  {page}
                </Button>
              );
            })}
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              backgroundColor={currentPage === totalPages ? colors.ashGray : colors.darkGray}
              fontColor={colors.white}
              padding="10px 15px"
            >
              &gt;
            </Button>
          </Pagination>
        </>
      )}
    </NewsContainer>
  );
};

export default News;
