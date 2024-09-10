import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLocationStore } from '../../stores/useLocation.store';
import { ButtonContainer, ContentContainer, SectionContainer, SidebarButton, SidebarContainer } from './SidebarStyles';

const categories = [
  { title: "kt wiz는?" },
  { title: "수원 kt wiz park" },
  { title: "찾아오기" },
  { title: "정규 리그" },
  { title: "코칭스텝", subtitles: ["투수", "타자", "응원단"] },
  { title: "wiz 뉴스" },
];

const sidebars = [
  [
    { title: "구단 소개", route: "/ktwiz/about" },
    { title: "구단 연혁", route: "/ktwiz/history" },
  ],
  [
    { title: "구장 소개", route: "/wizpark/intro" },
    { title: "구장 안내도", route: "/wizpark/guide" },
  ],
  [
    { title: "찾아오기", route: "/wizpark/location" },
  ],
  [
    { title: "경기 일정", route: "/game/regular/schedule" },
    { title: "박스스코어", route: "/game/regular/boxscore" },
    { title: "순위기록", route: "/game/regular/ranking/team" },
    { title: "관전포인트", route: "/game/regular/watchPoint" },
  ],
  [
    { title: "코칭스텝", route: "/player/coach" },
    { title: "투수", route: "/player/pitcher" },
    { title: "타자", route: "/player/catcher" },
    { title: "응원단", route: "/player/cheer" },
  ],
  [
    { title: "wiz 뉴스", route: "/media/wiznews" },
    { title: "wiz 보도자료", route: "/media/wizpress" },
  ],
];

// SideBar 컴포넌트
const SideBar = () => {
  const isLandingPage = window.location.pathname === "/";
  const { selectedCategory } = useLocationStore();
  const isShopOrSponsor = ["shop","스폰서"].includes(selectedCategory);

  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<string>(''); // 현재 활성화된 탭
  const [categoryIndex, setCategoryIndex] = useState<number>(0); // 현재 카테고리 인덱스

  useEffect(() => {
    const currentPath = location.pathname;
    const activeCategoryIndex = sidebars.findIndex((sidebar) =>
      sidebar.some((item) => currentPath.includes(item.route))
    );
    if (activeCategoryIndex !== -1) {
      const activeTabData = sidebars[activeCategoryIndex].find((item) =>
        currentPath.includes(item.route)
      );
      setCategoryIndex(activeCategoryIndex);
      setActiveTab(activeTabData?.title || '');
    }
  }, [location.pathname]);

  // 사이드바 밑 컨텐츠들 여기에 표시
  const renderContent = () => {
    const activeContent = sidebars[categoryIndex].find((item) => item.title === activeTab);
    if (activeContent) {
      return (
        <div>
          {/* <ContentText>{}</ContentText> */}
          {/*메인 컨텐츠 */}
        </div>
      );
    }
    return <div>404 not found</div>;
  };

  const getTitle = () => {
    const category = categories[categoryIndex];
    if (category.subtitles && activeTab && category.subtitles.includes(activeTab)) {
      return activeTab;
    }
    return category.title;
  };

  return (
    !(isLandingPage || isShopOrSponsor) && (
    <SidebarContainer>
      <SectionContainer>
        <h1>{getTitle()}</h1>

        <ButtonContainer>
          {sidebars[categoryIndex]?.map((subCategory, index) => (
            <SidebarButton
              key={index}
              active={activeTab === subCategory.title}
              onClick={() => {
                setActiveTab(subCategory.title);
                navigate(subCategory.route);
              }}
            >
              {subCategory.title}
            </SidebarButton>
          ))}
        </ButtonContainer>
      </SectionContainer>

      <ContentContainer>{renderContent()}</ContentContainer>
    </SidebarContainer>
    )
  );
};

export default SideBar;  
 