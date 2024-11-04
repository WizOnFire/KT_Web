import styled from "styled-components";
import { Outlet, matchPath, useLocation} from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PageLocation from "../components/common/pageLocation/PageLocation";
import SideBar from "../components/common/Sidebar";
import ScrollToTop from "../hooks/ScrollToTop";

const PageContainer = styled.div`//DOM으로 props가 전달되지 않도록 해야 함.(스타일에만 한정)
  display: flex;
  flex-direction: column;
`;
const MainContent = styled.main<{height?:string}>`
  flex-grow: 1;  // 메인 컨텐츠 영역이 가능한 많은 공간을 차지하도록 설정
  //coach일때 컨텐츠 영역을 조절해야함
  height:${(props)=>props.height};
`;

const Layout = () => {
  const location=useLocation();
  const isCoachPage=location.pathname==='/player/coach/detail';
  const isBoxscorePage = matchPath('/game/regular/boxscore/:gameDate/:gmkey', location.pathname);
  return (
    <>
    <PageContainer>
    {!isBoxscorePage && <ScrollToTop />}
      <Header />
      <SideBar />
      <MainContent height={isCoachPage ? '600px' : 'auto'} >
      <PageLocation />
      <Outlet />
      </MainContent>
    <Footer />
    </PageContainer>
    </>
  );
}

export default Layout;