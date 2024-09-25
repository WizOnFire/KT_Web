import { useSearchParams } from "react-router-dom";
import useFetchData from "../../../hooks/useFetchData";
import { Container } from "../../../pages/PagesStyles";
import { Wrapper, Contents, Img, MainInfo, InfoList } from "./StaffDetailStyles"; // Import styles
import styled, { css } from "styled-components";
import { useMemo, useState, useEffect, useRef } from "react";
import RegularSeasonRecord from "./RegularSeasonRecord";
import Recent5Record from "./Recent5Record";
import TotalRecord from "./TotalRecord";
import Button from "../../common/button/Button";

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

// RecordNav 스타일 수정
const RecordNav = styled.nav<{ imgWidth?: number }>`
  height: 40px;
  align-items: center;
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: -300px;
  background-color: #1d1d1d; /* KT Wiz의 블랙 테마 */
  padding: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  width: ${({ imgWidth }) => (imgWidth ? `${imgWidth}px` : "auto")};

  @media (max-width: 1200px) {
    max-width: 900px;
  }
`;

const CategoryItem = styled.h1<{ isSelected: boolean }>`
  font-size: 20px;
  color: ${({ isSelected }) => (isSelected ? "#c00000" : "#ffffff")};
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 0.3s ease;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: ${({ isSelected }) => (isSelected ? "100%" : "0")};
    height: 3px;
    background-color: #c00000;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease;
  }
  &:hover {
    color: #c00000;
  }
  &:hover:before {
    width: 100%;
  }
`;

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

 //console.log(isCatcher);

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

  const [isRegular,setIsRegular]=useState("true");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>에러 발생: {error}</p>;
  if (!staff) return <p>정보를 찾을 수 없습니다.</p>;

  return (
    <>
      <Container>
        <Wrapper>
          <Contents>
            <Img ref={imgRef} src={staffData?.playerPrvwImg2} alt={staffData?.backnum} onLoad={handleImageLoad} />
            <MainInfo>
              <span style={{ color: "#c00000" }}>No. {staffData?.backnum}</span>
              {staffData?.playerName}
              <span style={{ fontSize: "18px" }}> {staffData?.engName}</span>
            </MainInfo>
            <InfoList>
              <ul>
                <li>포지션&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {staffData?.position}</li>
                <li>생년월일&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formattedBirthDate}</li>
                <li>
                  체격&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{staffData?.height}cm, {staffData?.weight}kg
                </li>
                <li>출신교&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {parseDataToString}</li>
              </ul>
            </InfoList>
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

            <Button>퓨처스리그 기록 보기</Button>
            {whichDetail === categoryList[0] && <RegularSeasonRecord regularLeagueData={regularLeagueData} isCatcher={isCatcher} />}
            {whichDetail === categoryList[1] && <Recent5Record recent5gameRecords={recent5gameRecords} isCatcher={isCatcher} />}
            {whichDetail === categoryList[2] && <TotalRecord totalRecords={totalRecords} isCatcher={isCatcher} />}
          </>
        )}
      </Container>
    </>
  );
};

export default StaffDetail;
