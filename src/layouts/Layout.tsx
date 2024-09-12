import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PageLocation from "../components/common/pageLocation/PageLocation";
import SideBar from "../components/common/Sidebar";

const PageContainer = styled.div.attrs<{minheight:string}>(({minheight: minHeight})=>({style:{minHeight}}))`//DOM으로 props가 전달되지 않도록 해야 함.(스타일에만 한정)
  display: flex;
  flex-direction: column;
  //min-height: 120vh;  // 전체 뷰포트 높이를 채우도록 설정

`;

const MainContent = styled.main`
  flex-grow: 1;  // 메인 컨텐츠 영역이 가능한 많은 공간을 차지하도록 설정
  overflow-y: auto;
  //max-height: 480vh;
`;


const Layout = () => {
  const location=useLocation();

  const getDifferMainSize=()=>{
    const lp=location.pathname;
    //console.log(lp);
    if(lp==='/'){
      return "120vh";
    }
    else if(lp ==='/player/coach'){
      return "270vh";
    }
    else return "140vh";
  }

  return (
    <PageContainer minheight={getDifferMainSize()}>
      <Header />
      <SideBar/>
      <MainContent>
      <PageLocation/>
        <Outlet /> 
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Layout;