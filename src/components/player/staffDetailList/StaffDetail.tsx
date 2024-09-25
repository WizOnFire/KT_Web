import { useSearchParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import { Container } from "../../../pages/PagesStyles";
import { Wrapper, Contents, Img, MainInfo, InfoList,CategoryItem,RecordNav,ButtonContainer } from "./StaffDetailStyles"; // Import styles

import { useMemo, useState, useEffect, useRef } from "react";
import RegularSeasonRecord from "./RegularSeasonRecord";
import Recent5Record from "./Recent5Record";
import TotalRecord from "./TotalRecord";
import Button from "../../common/button/Button";
import FuturesSeasonRecord from "./FuturesSeasonRecord";
import Recent5FuturesRecord from "./Recent5FuturesRecord";
import styled from "styled-components";

export type TDetailStaff = {
  playerName: string;
  engName: string;
  backnum: string;
  position: string;
  birth: string;
  height: string;
  weight: string;
  career: string; // 출신교
  playerPrvwImg2: string;
  pcode: string;
};

export type TCoachData = {
  coachstep: TDetailStaff;
};

type TStaffDetailProps = {
  detailPath: string;
};

export type TGamePlayerProps = {
  gameplayer: TDetailStaff;
  recentgamerecordlist: any;
  recentgamerecordlistfutures: any;
  seasonsummary: any;
  seasonsummaryfutures: any;
  yearrecordlist: any;
};


const SummaryInfo=styled.dd`
  position: relative;
  top: -377px;
  left: 200px;
  color: white;
  gap: 20px;
  font-weight: 50;

`
const StaffDetail = ({ detailPath }: TStaffDetailProps) => {
  //console.log(detailPath)
  const [params] = useSearchParams();
  const pcode = params.get("pcode");
  const { data: staff, isLoading, error } = useFetchData<{ data: TGamePlayerProps } | { data: TCoachData }>(
    `player/${detailPath}?pcode=${pcode}`
  );
  //console.log(staff);

  const categoryList = ["정규리그 기록", "최근 5경기", "통산기록"];
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgWidth, setImgWidth] = useState<number>(1100);
  //console.log("imgWidth:", imgWidth);
  const isCatcher = ["catcherdetail", "infielderdetail", "outfielderdetail"].includes(detailPath);

  let staffData: TDetailStaff | any;
  let parsedData: string[] = [];
  let parseDataToString: string = "";

  if (detailPath === "coachdetail") {
    staffData = (staff?.data as TCoachData)?.coachstep;
  } else {
    staffData = (staff?.data as TGamePlayerProps)?.gameplayer;
  }

  parsedData = staffData?.career.split("-");
  if (parsedData?.length > 4) {
    parsedData = parsedData.slice(0, 4);
  }
  parseDataToString = parsedData?.join("-");

  const regularLeagueData = useMemo(() => (staff?.data as TGamePlayerProps)?.seasonsummary, [staff]);
  const recent5gameRecords = useMemo(() => (staff?.data as TGamePlayerProps)?.recentgamerecordlist, [staff]);
  const totalRecords = useMemo(() => (staff?.data as TGamePlayerProps)?.yearrecordlist, [staff]);
  console.log(totalRecords);
  const futureRecord=useMemo(()=>(staff?.data as TGamePlayerProps)?.seasonsummaryfutures,[staff]);//시즌 퓨처스 기록
  //console.log("futureRecord: ",futureRecord);
  const recent5gameFuturesRecords=useMemo(()=>(staff?.data as TGamePlayerProps)?.recentgamerecordlistfutures,[staff]);
  console.log("퓨처스 최근 5경기",recent5gameFuturesRecords)
  

  const formatDate = (dateString: string) => {
    return dateString.replace(/(\d{4})(\d{2})(\d{2})/, "$1.$2.$3");
  };

  useEffect(() => {
    if (imgRef.current) {
      setImgWidth(imgRef.current.offsetWidth);
    }
  }, [staffData]);

  const handleImageLoad = () => {
    if (imgRef.current) {
      setImgWidth(imgRef.current.offsetWidth);
    }
  };

  const [whichDetail, setWhichDetail] = useState(categoryList[0]);
  const onClick = (category: string) => {
    setWhichDetail(category);
  };

  const formattedBirthDate = staffData?.birth ? formatDate(staffData.birth) : "";

  const [isRegular,setIsRegular]=useState(true);
  const onClickedFuture=()=>{
    setIsRegular(prev=>!prev);
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>에러 발생: {error}</p>;
  if (!staff) return <p>정보를 찾을 수 없습니다.</p>;


  return (
    <>
      <Container>
        <Wrapper>
          <Contents>
            <Img ref={imgRef} src={staffData?.playerPrvwImg2} alt={staffData?.backnum} onLoad={handleImageLoad}>
            </Img>
            <MainInfo>
              <span style={{ color: "#c00000" }}>No. {staffData?.backnum}</span>
              {staffData?.playerName}
              <span style={{ fontSize: "18px" ,right:"50px"}}>{staffData?.engName}</span>
            </MainInfo>2
            <InfoList>
              <ul>
                <li>포지션&nbsp;&nbsp;&nbsp;&ensp;&ensp;&nbsp;{staffData?.position}</li>
                <li>생년월일&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formattedBirthDate}</li>
                <li>
                  체격&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{staffData?.height}cm, {staffData?.weight}kg
                </li>
                <li>출신교&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {parseDataToString}</li>
              </ul>
            </InfoList>
            {
            (detailPath !== "coachdetail" && isCatcher )? 
            <SummaryInfo> {totalRecords[0].gyear} 정규리그 성적: 타율 {regularLeagueData.hra} {regularLeagueData.hit}안타 {regularLeagueData.rbi}타점 {regularLeagueData.hr}홈런</SummaryInfo>
            : detailPath!=="coachdetail" ? <SummaryInfo>{totalRecords[0].gyear} 정규리그 성적: 평균자책점 {regularLeagueData.era} {regularLeagueData.w}승 {regularLeagueData.l}패 {regularLeagueData.sv}세이브</SummaryInfo>:null
            }
          </Contents>
        </Wrapper>
        {detailPath !== "coachdetail" && (
         <>
            <RecordNav imgWidth={imgWidth}>
              {categoryList.map((category, index) => (
                <CategoryItem
                  key={index}
                  onClick={() => onClick(category)}
                  isSelected={whichDetail === category} // isSelected를 이용해 스타일 적용
                >
                  {category}
                </CategoryItem>
              ))}
            </RecordNav>
              {/* <Button style={{backgroundColor:"gray",color:"black",display:"flex"}} onClick={()=>onClickedFuture()} height="40px"> {isRegular?"퓨처스리그 기록 보기":"정규리그 보기"}</Button> */}
            {(whichDetail === categoryList[0] && isRegular)&& <RegularSeasonRecord regularLeagueData={regularLeagueData} isCatcher={isCatcher} />}
            {(whichDetail === categoryList[0] && !isRegular)&& <FuturesSeasonRecord futureRecord={futureRecord} isCatcher={isCatcher}/>}
            {(whichDetail === categoryList[1] && isRegular) && <Recent5Record recent5gameRecords={recent5gameRecords} isCatcher={isCatcher} />}
            {(whichDetail === categoryList[1] && !isRegular)&& <Recent5FuturesRecord recent5gameFuturesRecords={recent5gameFuturesRecords} isCatcher={isCatcher}/>}

            {whichDetail === categoryList[2] && <TotalRecord totalRecords={totalRecords} isCatcher={isCatcher} />}
            {/* </NavWrapper> */}
               {whichDetail!==categoryList[2] &&
                <ButtonContainer imgWidth={imgWidth}>
                  <Button style={{backgroundColor:"rgb(239, 239, 239)",color:"black"}} onClick={()=>onClickedFuture()} height="40px" border="none" borderRadius="10px">{isRegular?"퓨처스리그 기록 보기":"정규리그 보기"}</Button>
                </ButtonContainer>}
          </>
        )}
      </Container>
    </>
  );
};

export default StaffDetail;
