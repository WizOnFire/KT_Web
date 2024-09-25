import { AiFillHome } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { PageLocationContainer, PageLocationBox, PageLocationInfo } from "./PageLocationStyles";

import { useLocation, useNavigate } from "react-router-dom";


let locationMap = new Map([
  ['player', 'Player'],
  ['coach', '코칭스텝'],
  ['pitcher', '투수'],
  ['catcher', '타자'],
  ['cheer', '응원단'],
  ['detail', '상세보기'],
  ['포수', '포수'],
  ['infielder', '내야수'],
  ['outfielder', '외야수'],
  ['game', 'Game'],
  ['regular', '정규리그'],
  ['boxscore', '박스스코어'],
  ['schedule', '경기 일정'],
  ['ranking', '순위기록'],
  ['team', '팀순위'],
  ['watchPoint', '관전포인트'],
  ['wizpark', 'Suwon kt wiz park'],
  ['kt wiz park', 'kt wiz park'],
  ['intro', '구장소개'],
  ['guide', '구장 안내도'],
  ['location', '찾아오기'],
  ['ktwiz', 'kt wiz'],
  ['kt wiz는?', 'kt wiz는?'],
  ['about', '구단 소개'],
  ['history', '구단 연혁'],
  ['media', 'MEDIA'],
  ['wiznews', 'wiz 뉴스'],
  ['wizpress', 'wiz 보도자료'],
]);

let navMap = new Map([
  ['Player', '/player/coach'],
  ['코칭스텝', '/player/coach'],
  ['투수', '/player/pitcher'],
  ['포수', '/player/catcher'],
  ['타자','/player/catcher'],
  ['내야수', '/player/infielder'],
  ['외야수', '/player/outfielder'],
  ['응원단', '/player/cheer'],


  ['Game', '/game/regular/schedule'],
  ['정규리그', '/game/regular/schedule'],
  ['경기일정', '/game/regular/schedule'],
  ['박스스코어', '/game/regular/boxscore'],
  ['순위기록', '/game/regular/ranking/team'],
  ['팀순위', '/game/regular/ranking/team'],
  ['관전포인트', '/game/regular/watchPoint'],
  ['kt wiz', '/ktwiz/about'],
  ['kt wiz는?', '/ktwiz/about'],
  ['구단 소개', '/ktwiz/about'],
  ['구단 연혁', '/ktwiz/history'],
  ['Suwon kt wiz park', '/wizpark/intro'],
  ['kt wiz park', '/wizpark/intro'],
  ['구장 소개', '/wizpark/intro'],
  ['구장 안내도', 'wizpark/guide'],
  ['MEDIA', '/media/wiznews'],
  ['wiz 뉴스', '/media/wiznews'],
  ['wiz 보도자료', '/media/wizpress'],
]);

const PageLocation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === "/";
  const pathItems = location.pathname.split("/").filter(Boolean);
  const pathItems2 = [...pathItems];

  if (pathItems2[1] === 'catcher') {
    pathItems2.splice(2, 0, '포수');
  } else if (pathItems2[1] === 'infielder' || pathItems2[1] === 'outfielder') {
    pathItems2.splice(1, 0, 'catcher');
  } else if (pathItems2[0] === 'ktwiz') {
    pathItems2.splice(1, 0, 'kt wiz는?');
  } else if (pathItems2[1] === 'intro') {
    pathItems2.splice(1, 0, 'kt wiz park');
  }

  const isShopOrSponsor = ["shop", "스폰서"].includes(location.pathname);
  const truncatedPathItems = (pathItems2.length > 3 && (pathItems2[2] === "schedule" || pathItems2[2] === "boxscore")) ? pathItems2.slice(0, 3) : pathItems2;

  return (
    !(isLandingPage || isShopOrSponsor) && (
      <PageLocationContainer>
        <PageLocationBox>
          <PageLocationInfo>
            <span><AiFillHome /></span>
            <span onClick={() => navigate("/")}>Home</span>
            {truncatedPathItems.map((item, index) => {
              const isLastItem = index === truncatedPathItems.length - 1;
              const mappedValue = locationMap.get(item);
              const path = navMap.get(mappedValue || "") || ""; // 빈 문자열 또는 null 대응
              console.log(path)
              return (
                <span key={index}>
                  <span><MdArrowForwardIos /></span>
                  <span
                    style={{ color: isLastItem ? "red" : "inherit", cursor: isLastItem ? "none" : "pointer" }}
                    onClick={(e) => {path && navigate(path)
                    console.log(e)
                    }} // path가 유효한 경우에만 navigate 실행
                  >
                    {mappedValue}
                  </span>
                </span>
              );
            })}
          </PageLocationInfo>
        </PageLocationBox>
      </PageLocationContainer>
    )
  );
};

export default PageLocation;
