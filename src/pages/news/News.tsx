import useFetchData from '../../hooks/useFetchData';
import { NewsContainer, NewsList, NewsItem, Title, MetaInfo, Views, SearchBarWrapper, Pagination, Thumbnail, ViewsIcon, ArticleIndex } from './NewsStyles';
import { useState, useEffect } from 'react';
import SearchBar from '../../components/common/searchbar/SearchBar';
import colors from '../../assets/Colors';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button/Button';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface Article {
  artcSeq: number;
  artcTitle: string;
  viewCnt: number;
  regDttm: number;
  thumbnailUrl?: string;
  imgFilePath: string;
}

interface ApiResponse {
  data: {
    list: Article[];
  };
}

// 썸네일 URL을 변환하는 함수
const formatThumbnail = (thumbnailUrl: string) => {
  const baseUrl = 'https://wizzap.ktwiz.co.kr/';
  return thumbnailUrl.replace(/src="\/files/g, `src="${baseUrl}/files`);
};

const News = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data, isLoading, error } = useFetchData<ApiResponse>(`/article/newslist?searchWord=${searchTerm}`);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [currentItems, setCurrentItems] = useState<Article[]>([]);
  const [startPage, setStartPage] = useState(1);
  const maxVisibleButtons = 5;
  const navigate = useNavigate();

  // 검색어 변경 시 새로운 데이터 가져오기
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

  // 페이지 변경 처리
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 페이지 그룹 앞으로 이동
  const handleNextGroup = () => {
    if (currentPage + maxVisibleButtons <= totalPages) {
      setCurrentPage(currentPage + maxVisibleButtons);
      setStartPage(startPage + maxVisibleButtons);
    } else {
      setCurrentPage(totalPages);
      setStartPage(totalPages - maxVisibleButtons + 1);
    }
  };

  // 페이지 그룹 뒤로 이동
  const handlePrevGroup = () => {
    if (currentPage - maxVisibleButtons > 0) {
      setCurrentPage(currentPage - maxVisibleButtons);
      setStartPage(startPage - maxVisibleButtons);
    } else {
      setCurrentPage(1);
      setStartPage(1);
    }
  };

  const totalPages = Math.ceil((data?.data?.list.length || 0) / itemsPerPage);
  const endPage = Math.min(startPage + maxVisibleButtons - 1, totalPages);

  const handleClick = (article: Article) => {
    navigate(`/media/wiznews/${article.artcSeq}`);
  };

  if (isLoading) {
    return (
      <>
      <NewsContainer>
        <Skeleton width={169} height={29} style={{ marginBottom: '-2px', top: '-40px' }} />
        <NewsList>
          {Array.from({ length: itemsPerPage }).map((_, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '20px', borderBottom: `1px solid ${colors.ashGray}` }}>
              <Skeleton width={50} height={25} style={{ marginRight: '10px' }} /> {/* 인덱스 */}
              <Skeleton width={250} height={125} style={{ marginRight: '20px' }} /> {/* 썸네일 */}
              <div style={{ flex: 1 }}>
                <Skeleton width={`60%`} height={25} style={{ marginBottom: '10px' }} /> {/* 제목 */}
                <Skeleton width={80} height={15} /> {/* 조회수 */}
              </div>
            </div>
          ))}
        </NewsList>
      </NewsContainer>
      </>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
    <NewsContainer>
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
  {/* 이전 그룹으로 이동 */}
  <Button
    onClick={handlePrevGroup}
    backgroundColor={currentPage === 1 ? colors.ashGray : colors.darkGray}
    fontColor={colors.white}
    padding="10px 15px"
  >
    &lt;&lt;
  </Button>

  {/* 개별 페이지 버튼 */}
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

  {/* 다음 그룹으로 이동 */}
  <Button
    onClick={handleNextGroup}
    backgroundColor={currentPage === totalPages ? colors.ashGray : colors.darkGray}
    fontColor={colors.white}
    padding="10px 15px"
  >
    &gt;&gt;
  </Button>
</Pagination>
    </NewsContainer>
    </>
  );
};

export default News;
