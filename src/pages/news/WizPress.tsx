import useFetchData from '../../hooks/useFetchData';
import { WizPressContainer, NewsList, NewsItem, Title, MetaInfo, Views, SearchBarWrapper, Pagination } from './WizPressStyles';
import { useState, useEffect } from 'react';
import Button from '../../components/common/button/Button';
import SearchBar from '../../components/common/searchbar/SearchBar';
import colors from '../../assets/Colors'; // Import your colors

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

// 이미지 경로를 절대 경로로 변환하는 함수
const formatArticleContents = (contents: string) => {
  const baseUrl = 'https://wizzap.ktwiz.co.kr/';
  return contents.replace(/src="\/files/g, `src="${baseUrl}/files`);
};

const WizPress = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');  // 검색어 상태 추가
  const { data, isLoading, error } = useFetchData<ApiResponse>(`article/wizpresslist?searchWord=${searchTerm}`);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<Article[]>([]);
  const itemsPerPage = 5;
  const maxVisibleButtons = 5;
  const [startPage, setStartPage] = useState(1);

  // 검색어 변경 시 useEffect로 새로운 데이터 가져오기
  useEffect(() => {
    if (data && data.data && data.data.list) {
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      setCurrentItems(data.data.list.slice(indexOfFirstItem, indexOfLastItem));
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
    setSelectedArticle(article);
  };

  // 검색어 제출 시 호출되는 함수
  const handleSearchSubmit = (term: string) => {
    setSearchTerm(term);  // 검색어 제출 시 상태 업데이트
    setCurrentPage(1);    // 검색 시 첫 페이지로 이동
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <WizPressContainer>
      <SearchBarWrapper>
        <SearchBar 
          containerWidth="15%"
          height="40px"
          lineHeight="1.5"
          buttonWidth="60px"
          placeholder="검색어를 입력해주세요" onSearch={function (term: string): void {
            throw new Error('Function not implemented.');
          }}
          // onSearch={handleSearchSubmit}
        />
      </SearchBarWrapper>
      {selectedArticle ? (
        <div>
          <Title>{selectedArticle.artcTitle}</Title>
          <MetaInfo>
            <Views>Views: {selectedArticle.viewCnt}</Views>
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
              currentItems.map((article: Article) => (
                <NewsItem key={article.artcSeq} onClick={() => handleClick(article)}>
                  <Title>{article.artcTitle}</Title>
                  <MetaInfo>
                    <Views>Views: {article.viewCnt}</Views>
                  </MetaInfo>
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
              // disabled={currentPage === 1}
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
              // disabled={currentPage === totalPages}
            >
              &gt;
            </Button>
          </Pagination>
        </>
      )}
    </WizPressContainer>
  );
};

export default WizPress;
