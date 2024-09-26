import useFetchData from '../../hooks/useFetchData';
import { WizPressContainer, NewsList, NewsItem, Title, MetaInfo, Views, SearchBarWrapper, Pagination, ArticleIndex, SkeletonWrapper, SkeletonNewsItem, SkeletonViews,ViewsIcon,SkeletonTitle } from './WizPressStyles';
import { useState, useEffect } from 'react';
import SearchBar from '../../components/common/searchbar/SearchBar';
import colors from '../../assets/Colors';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button/Button';
// import Skeleton from 'react-loading-skeleton';

interface Article {
  artcSeq: number;
  artcTitle: string;
  viewCnt: number;
  regDttm: number;
  artcContents: string;
}

interface ApiResponse {
  data: {
    list: Article[];
  };
}

const WizPress = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');  // 검색어 상태 추가
  const { data, isLoading } = useFetchData<ApiResponse>(`article/wizpresslist?searchWord=${searchTerm}`);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<Article[]>([]);
  const itemsPerPage = 5;
  const maxVisibleButtons = 5;
  const [startPage] = useState(1);
  const navigate = useNavigate();

  // 검색어 변경 시 새로운 데이터 가져오기
  useEffect(() => {
    if (data && data.data && data.data.list) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setCurrentItems(data.data.list.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [currentPage, data]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil((data?.data?.list.length || 0) / itemsPerPage);
  const endPage = Math.min(startPage + maxVisibleButtons - 1, totalPages);

  const handleClick = (article: Article) => {
    navigate(`/media/wizpress/${article.artcSeq}`);
  };

  if (isLoading) {
    return (
      <SkeletonWrapper>
        {/* <Skeleton width={169} height={29} style={{ marginBottom: '-2px',top: '-60px' } }/> */}
        {Array.from({ length: itemsPerPage }).map((_, index) => (
          <SkeletonNewsItem key={index}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <SkeletonTitle />
              <SkeletonViews />
            </div>
          </SkeletonNewsItem>
        ))}
      </SkeletonWrapper>
    );
  }

  return (
    <WizPressContainer>
      <SearchBarWrapper>
        <SearchBar
          placeholder="검색어를 입력해주세요."
          containerWidth="140px"
          height="29px"
          buttonWidth="45px"
          onSearch={(term) => setSearchTerm(term)}
        />
      </SearchBarWrapper>
      <NewsList>
        {currentItems.length > 0 ? (
          currentItems.map((article: Article, index: number) => (
            <NewsItem key={article.artcSeq} onClick={() => handleClick(article)}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ArticleIndex>{index + 1 + (currentPage - 1) * itemsPerPage}</ArticleIndex>
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
    </WizPressContainer>
  );
};

export default WizPress;
