import { useSearchParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import { Container } from "../../../pages/PagesStyles";
import { Wrapper, Contents, Img,  MainInfo, InfoList } from "./StaffDetailStyles"; // Import styles
import styled from "styled-components";
import { useMemo, useState,useEffect } from "react";
import RegularSeasonRecord from "./regularSeasonRecord";
import React from "react";


export type TDetailStaff={
  playerName:string;
  engName:string;
  backnum:string;
  position:string;
  birth:string;
  height:string;
  weight:string;
  career:string;//출신교
  playerPrvwImg2:string;
  pcode:string;
  //coachstep:string;
}

export type TCoachData={
  coachstep:TDetailStaff
}
type TStaffDetailProps={
  detailPath:string
}

export type TGamePlayerProps={//오타 점검
  gameplayer:TDetailStaff
  recentgamerecordist:any;
  recentgamerecordlistfutures:any;
  seasonsummary:any;
  seasonsummaryfutures:any;
  yearrecodists:any;
}

// const RecordWapper=styled.section`
//   width: 90%;
//   height:100%;
//   justify-content: center;
//   align-items: center;
//   //text-align:center;
// `
// ;

const RecordNav = styled.nav<{ imgWidth?: number }>`
  width: ${({ imgWidth }) => (imgWidth ? `${imgWidth}px` : 'auto')};
  height:40px;
  align-items: center;//텍스트 중간 위치
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: -300px;
  background-color: #1d1d1d; /* KT Wiz의 블랙 테마 */
  padding: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;

  @media (max-width: 1200px) {
        max-width: 900px; 
  }
  h1 {
    font-size: 20px;
    color: #ffffff; /* 흰색 글씨 */
    text-transform: uppercase; /* 대문자로 표시 */
    cursor: pointer;
    padding: 10px 20px;
    transition: all 0.3s ease;
    position: relative;
    

    &:before {
      content: "";
      position: absolute;
      width: 0;
      height: 3px;
      background-color: #c00000; /* KT Wiz의 강렬한 레드 */
      bottom: 0;
      left: 50%;
      transition: all 0.3s ease;
    }
    &:hover {
      color: #c00000; /* 마우스를 올리면 레드로 전환 */
    }
    &:hover:before {
      width: 100%;
      left: 0;
    }
  }
`;

const StaffDetail = ({detailPath}:TStaffDetailProps) => {
  const [params]=useSearchParams();
  const pcode=params.get("pcode");
  const {data:staff,isLoading,error} = useFetchData<{data:TGamePlayerProps}|{data:TCoachData}>(`player/${detailPath}?pcode=${pcode}`);
  //console.log(staff)
//들어오는 객체 타입이 다름. 선수의 경우에는 객체안에 있는 또다른 객체한테 접근해야 함.

  const categoryList=["정규리그 기록","최근 5경기","통산기록"];
  const imgRef = React.useRef<HTMLImageElement>(null);
  const [imgWidth, setImgWidth] = React.useState<number | undefined>();

  // 데이터 타입에 따라 처리 (코치 vs 선수)

  let staffData: TDetailStaff |any;
  let parsedData:string[]=[];
  let parseDataToString:string="";

  if (detailPath === "coachdetail") {
    //staffData = staff?.data.coachstep as TDetailStaff; // 코치 데이터는 직접 할당
    staffData = (staff?.data as TCoachData)?.coachstep;
  } 
  else { 
      staffData = (staff?.data as TGamePlayerProps)?.gameplayer;
   } 
   console.log(staffData)

  //console.log("코치 데이터",staffData?.career)//파싱
  parsedData = staffData?.career.split("-");
  //console.log(parsedData);
  //console.log(parsedData.length);

  if(parsedData?.length>4){//대학교 까지만 출력되게끔
      parsedData=parsedData.slice(0,4);
      console.log(parsedData)
  }

  parseDataToString = parsedData?.join("-");

  const regularLeagueData = useMemo(
    () => (staff?.data as TGamePlayerProps)?.seasonsummary,
    [staff]
  );

const formatDate = (dateString: string) => {
  // YYYYMMDD 형식을 YYYY.MM.DD로 변환
  return dateString.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');
};
  


 useEffect(() => {
    if (imgRef.current) {
      setImgWidth(imgRef.current.offsetWidth);
    }
  }, [staffData]);

  const [whichDetail,setWhichDetail]=useState(categoryList[0]);
  const onClick=(category:string)=>{
    setWhichDetail(category);
  }

  const formattedBirthDate = staffData?.birth ? formatDate(staffData.birth) : '';

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>에러 발생: {error}</p>;
  if (!staff) return <p>정보를 찾을 수 없습니다.</p>;


  return (
    <>
    <Container>
      <Wrapper>
        <Contents>
          <Img  ref={imgRef} src={staffData?.playerPrvwImg2} alt={staffData?.backnum}/>
          {/* <StaffInfo> */}
            <MainInfo>
            <span style={{color:"#c00000"}}>No. {staffData?.backnum}</span>
            {staffData?.playerName}
            <span style={{fontSize:"18px"}}> {staffData?.engName}</span>
            </MainInfo>
            <InfoList>
              <ul>
                <li> 
                포지션&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {staffData?.position}
                </li>
                <li>
                 생년월일&nbsp;&nbsp;&nbsp;&nbsp;  {formattedBirthDate}
                  </li>
                <li>체격&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {staffData?.height}cm, {staffData?.weight}kg</li>
                <li>출신교 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{parseDataToString}</li>
              </ul>
            </InfoList>
          {/* </StaffInfo> */}
        </Contents>
      </Wrapper>
      {detailPath!=='coachdetail' &&(
        <>
        <RecordNav imgWidth={imgWidth}>
            {categoryList.map(category => <h1 onClick={() => onClick(category)}>{category}</h1>)}
          </RecordNav>
          {whichDetail===categoryList[0] &&<RegularSeasonRecord regularLeagueData={regularLeagueData} /> }
          </>
      ) }

      </Container>
    </>
  );
}
export default StaffDetail