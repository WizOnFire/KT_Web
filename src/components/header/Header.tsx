import { useState,useEffect } from "react";
import { useScroll, useMotionValueEvent, useAnimation,AnimatePresence } from "framer-motion";
import { UpNav, Logo, Category, BottomNav, SubCategoryColumn, SubCategory } from "./HeaderStyles"; // 스타일 불러오기
import { useLocationStore } from "../../stores/useLocation.store";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import newLogo from "../../assets/images/common/newLogo.png"

const Header = () => {
  const categories = [
    "kt wiz",
    "wiz park",
    "Game",
    "Player",
    "Media",
    "Shop",
    "스폰서",
    "티켓구매",
  ];

  const categoriesForNav=[
    "ktwiz","wizpark","game","player","media","shop","sponsor","ticket"
  ]

  const subCategories: string[][] = [
    ["kt wiz는?", "구단 BI", "회원 정책", "스폰서", "월페이퍼"],
    ["수원 kt wiz park", "주차 예약", "찾아오기", "익산야구장"],
    ["경기일정","박스스코어","순위기록","관전포인트"],
    ["코칭스텝", "투수", "타자", "응원단", "응원가", "응원가 저작권"],
    ["wiz 뉴스", "wiz 스토리", "시구자 정보", "wiz 포토", "Live 영상모음"],
    [],
    [],
    ["티켓예매", "단체관람", "입장 및 좌석 정보"],
  ];
  const subCategoriesForNav:string[][]=[
    ["about","bi","policy","sponsor","wallpaper"],
    [ "intro","parking","location","iksan"],
    ["schedule","boxscore","ranking","watchPoint"],
    ["coach","pitcher","catcher","cheer","song","song-copyright"],
    ["wiznews","wizstory","firstpitch","photos","highlight","live"],
   [],
   [],
    ["reservation","group","seatmap"]]

    const sidebars = [
      [
        ["구단 소개","구단 연혁"],
        ["심볼마크", "워드마크", "엠블럼", "마스코트", "유니폼"],
      ],
      [
        ["구단 소개","구단 연혁"],
        ["심볼마크","워드마크"],
      ],
      [
        ["경기일정", "박스스코어", "순위기록", "관전포인트"]
      ],
      [
        ["구단 소개","구단 연혁"],
        ["심볼마크","워드마크"],
      ],
      [
        ["구단 소개","구단 연혁"],
        ["심볼마크","워드마크"],
      ],
      [
        []
      ],
      [
        ["구단 소개","구단 연혁"],
        ["심볼마크","워드마크"],
      ],
      [
        ["구단 소개","구단 연혁"],
        ["심볼마크","워드마크"],
      ],
    ];
  
  const [isHovered, setIsHovered] = useState(false);
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  const [hoveredCategory,setHoveredCategory]=useState("");//어떤 게 호버가 되는지를 기억해야 함.

  const location=useLocation();
  const isLandingPage=location.pathname==="/";

  const { setSelectedCategory, setSelectedSubCategory,  setSelectedSidebar } = useLocationStore();
  const navigate = useNavigate();
  useEffect(() => {
      if (isLandingPage) {
        navAnimation.start({ backgroundColor: "rgba(0,0,0,0)" });
      } else {
        navAnimation.start({ backgroundColor: "rgba(0,0,0,1)" });
      }
    }, [isLandingPage, navAnimation]);

  const handleMouseEnterCategory=(category:string)=>{
    setHoveredCategory(category);
    //console.log(hoveredCategory)
  }

  const handleMouseLeaveCategory=()=>{//왜 호버가 떠나도 안먹
    setHoveredCategory("");
  }


  useMotionValueEvent(scrollY, "change", () => {
    const currentScrollY = scrollY.get();
    if(isLandingPage){
      if(currentScrollY<=1000){
        navAnimation.start({ backgroundColor: "rgba(0,0,0,0)" });
      }
      else if(currentScrollY > 1000 && !isHovered) {
          navAnimation.start({ backgroundColor: "rgba(0,0,0,1)" });
      }
    }

  });

  const handleMouseEnter = () => {
    setIsHovered(true);
    navAnimation.start({ backgroundColor: "white" });
  };

  const handleMouseLeave = () => {//호버가 끝나면 무조건 네비바는 검은색임
    setIsHovered(false);
    if(isLandingPage && scrollY.get()<=900){
      navAnimation.start({ backgroundColor: "rgba(0,0,0,0)" });
    }
    else{
      navAnimation.start({ backgroundColor: "rgba(0,0,0,1)" })
    }
  };

  const handleCategoryClick = (category: string) => {
    const firstSubCategory = subCategories[categories.indexOf(category)][0];
    setSelectedCategory(category);
    setSelectedSubCategory(firstSubCategory);
    setSelectedSidebar(sidebars[categories.indexOf(category)][0][0] || null);
  };

  const handleSubCategoryClick = (subCategory: string,subIndex:number) => {
    const categoryIndex = subCategories.findIndex(item => item.includes(subCategory));
    const category = categories[categoryIndex];
    const forNav = categoriesForNav[categoryIndex];

    console.log("forNav: ",forNav)
    console.log("subIndex: ",subIndex)
    
    setSelectedCategory(category);
    setSelectedSubCategory(subCategory);
    setSelectedSidebar(sidebars[categoryIndex][0][0] || null);
    if(forNav==="game"){
      if(subCategoriesForNav[categoryIndex][subIndex]==="ranking"){
        navigate(`/${forNav}/regular/${subCategoriesForNav[categoryIndex][subIndex]}/team`);
        console.log("checking")
      }
      else{
        navigate(`/${forNav}/regular/${subCategoriesForNav[categoryIndex][subIndex]}`);
      }
      return;
    }

    navigate(`/${forNav}/${subCategoriesForNav[categoryIndex][subIndex]}`); // 경로를 제대로 작성
    console.log("here2");
  };
  return (
    <>
    <header>         
      <UpNav
        animate={navAnimation}
        initial={{ backgroundColor: isLandingPage ? "rgba(0,0,0,0)" : "rgba(0,0,0,1)" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isHovered={isHovered}
      >
{categories.map((category, index) => (
  <React.Fragment key={index}>
    {/* 카테고리 렌더링 */}
    <Category
      hoveredCategory={category}
      href={`/${categoriesForNav[index]}/${subCategoriesForNav[index][0]}`}
      onMouseEnter={() => handleMouseEnterCategory(category)}
      onMouseLeave={handleMouseLeaveCategory}
      isHovered={hoveredCategory !== "" && hoveredCategory === category}
      onClick={() => handleCategoryClick(category)}
    >
      {category}
    </Category>

      {/* 3번 인덱스 다음에 로고를 렌더링 */}
    {index === 3 &&                   
    <Logo isHovered={isHovered} >
    <img
        onClick={() => {
          console.log('clicked');
          navigate('/')
        }}
        // src={isHovered ? "https://www.ktwiz.co.kr/v2/imgs/img-logo-black.svg" : ktwiz}
        src={newLogo}
        alt="logo"
      /></Logo>
      }
  </React.Fragment>
))}
      </UpNav>
      {/* <Border/> */}

{/* exit이면 바텀네브가 사라지는 걸 transition으로: AnimatePresence로 감싸야 함 */}
      <AnimatePresence>  
      {isHovered && (
        <BottomNav 
        initial={{opacity:0,height:0}} 
        animate={{opacity:1,height:300}}//투명도가 1이 되어 완전히 보이는 상태
        exit={{opacity:0,height:0}}
        transition={{duration:0.4}}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >
          {categories.map((_, index) => (
            <SubCategoryColumn key={index}
            // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            >
              {subCategories[index].length > 0 ? (
                subCategories[index].map((subCategory,subIndex) => (
                  <SubCategory key={subCategory} onClick={() => handleSubCategoryClick(subCategory,subIndex)}>
                    {subCategory}
                  </SubCategory>
                ))
              ) : (
                <div style={{ width: "50px" }} /> 
              )}
            </SubCategoryColumn>
          ))}
        </BottomNav>
      )}    
      </AnimatePresence>
    </header>
    </>
  );
};

export default Header; 