import { useState,useEffect } from "react";
import { useScroll, useMotionValueEvent, useAnimation,AnimatePresence } from "framer-motion";
import ktwiz from "../../assets/images/landing/ktwiz.png"
import { UpNav, Logo, Category, BottomNav, SubCategoryColumn, SubCategory } from "./HeaderStyles"; // 스타일 불러오기
import { useLocationStore } from "../../stores/useLocation.store";
import Button from "../common/Button";
import ktwizBtn from "../../assets/images/landing/ktwizBtn.png"
import ktwizBtnWhite from "../../assets/images/landing/ktwizBtnWhite.png"
import { useNavigate } from "react-router-dom";
import { nav } from "framer-motion/client";

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

  const subCategories: string[][] = [
    ["kt wiz는?", "구단 BI", "회원 정책", "스폰서", "월페이퍼"],
    ["수원 kt wiz park", "주차 예약", "찾아오기", "익산야구장"],
    ["정규리그", "퓨처스리그"],
    ["코칭스텝", "투수", "타자", "응원단", "응원가", "응원가 저작권"],
    ["wiz 뉴스", "wiz 스토리", "시구자 정보", "wiz 포토", "Live 영상모음"],
    [],
    [],
    ["티켓예매", "단체관람", "입장 및 좌석 정보"],
  ];

    const sidebars = [
      [
        ["구단 소개","구단 연혁"],
        ["심볼마크", "워드마크", "엠블럼", "마스코트", "유니폼"],
      ],
      [
        ["구장 소개","구장 안내도"],
        ["심볼마크","워드마크"],
      ],
      [
        ["경기일정", "박스스코어", "순위기록", "관전포인트"]
      ],
      [
        ["코칭스텝","투수","타자","응원단"],
        ["심볼마크","워드마크"],
      ],
      [
        ["wiz소식","wiz보도자료"],
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
  

  //const [isVisible, setIsVisible] = useState(false); // 컴포넌트가 보이는 상태를 관리
  const [isHovered, setIsHovered] = useState(false);
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  const [hoveredCategory,setHoveredCategory]=useState("");//어떤 게 호버가 되는지를 기억해야 함.
  const isLandingPage=window.location.pathname==="/";
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
    // console.log(e)
    // console.log(hoveredCategory)
  }


  useMotionValueEvent(scrollY, "change", () => {
    const currentScrollY = scrollY.get();
    if(isLandingPage){
      if(currentScrollY<80){
        navAnimation.start({ backgroundColor: "rgba(0,0,0,0)" });
      }
      else if(currentScrollY > 80 && !isHovered) {
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
    if(isLandingPage && scrollY.get()<80){
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

  const subCategoryRoutes: { [key: string]: string } = {
    "kt wiz는?": "/ktwiz/about",
    "수원 kt wiz park": "/wizpark/intro",
    "찾아오기": "/wizpark/location",
    "정규리그": "/game/regular/schedule",
    "코칭스텝": "/player/coach",
    "투수": "/player/pitcher",
    "타자": "/player/catcher",
    "응원단": "/player/cheer",
};

  const handleSubCategoryClick = (subCategory: string) => {
    const categoryIndex = subCategories.findIndex(item => item.includes(subCategory));
    const category = categories[categoryIndex];
    setSelectedCategory(category);
    setSelectedSubCategory(subCategory);
    setSelectedSidebar(sidebars[categoryIndex][0][0] || null);

    // kt wiz는? 클릭 시 ktwiz/about으로 이동 ~~ 다른것도 똑같음
    const route = subCategoryRoutes[subCategory];
    if (route) {
      navigate(route);
    }
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
      <Logo isHovered={isHovered}>
      <img 
      src={isHovered? "https://www.ktwiz.co.kr/v2/imgs/img-logo-black.svg" :ktwiz}
       alt="logo"/>
      </Logo>
        {categories.map((category, index) => (
          <Category 
          hoveredCategory={category} 
          key={index} href={`/${category}`}
          onMouseEnter={()=>handleMouseEnterCategory(category)}
          onMouseLeave={handleMouseLeaveCategory}
          isHovered={hoveredCategory!=="" && hoveredCategory === category}
          onClick={()=>handleCategoryClick(category)}
          >
            {category}
          </Category>
        ))}
          <Button
                fontColor="blue" fontSize="20px" 
                width="102px" height="45px" 
                borderRadius="10px" 
                backgroundColor={isHovered? "#ECEEF2"  :"rgba(0,0,0,0)"}
                onClick={()=>{}}
                marginRight="-41px"
                border={isHovered?"none":"0.5px solid #ECEEF2"}
                style={{ position: "relative", left: "94px" }} /* 왼쪽으로 이동 */
                >
                 <img src={isHovered?ktwizBtn:ktwizBtnWhite} alt="button" style={{width:"65px", height:"auto"}}/>
                
              </Button>  
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
                subCategories[index].map((subCategory) => (
                  /*
                  <SubCategory key={subCategory} href={`/${subCategory}`}
                  onClick={()=>handleSubCategoryClick(subCategory)}>
                    {subCategory}
                  </SubCategory>
                  */
                  <SubCategory key={subCategory} onClick={() => handleSubCategoryClick(subCategory)}>
                    {subCategory}
                  </SubCategory>
                ))
              ) : (
                <div style={{ width: "53px" }} /> 
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