import {
  SearchBarContainer,
  TopContainer,
  GridContainer,
  CoachCard,
  CoachImage,
  TextWrapper,
} from "./CoachStyles"; // 스타일을 import
import useFetchData from "../../../hooks/useFetchData";
import SearchBar from "../../../components/common/searchbar/SearchBar";

type TStaff = {
  playerName: string;
  position: string;
  pcode: string;
  playerPrvwImg: string;
  backnum: string;
};

type TList = {
  list: TStaff[];
};

const Coach = () => {
  const { data: coaches, isLoading, error } = useFetchData<{ data: TList }>("player/coachlist");
  console.log(coaches?.data.list);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <SearchBarContainer>    
        <SearchBar placeholder="검색어를 입력해주세요." containerWidth="220px" height="29px" buttonWidth="45px" />
      </SearchBarContainer>

      <TopContainer>
        <GridContainer>
          {coaches && coaches.data.list.length > 0 ? (
            coaches.data.list.map((coach) => (
              <CoachCard key={coach.pcode}>
                <CoachImage
                  src={coach.playerPrvwImg ? coach.playerPrvwImg : "https://via.placeholder.com/100"}
                  alt={coach.playerName}
                />
                <TextWrapper>
                  <p style={{ color: "#ec0a0b" }}>No. {coach.backnum}</p>
                  <p>{coach.playerName}</p>
                </TextWrapper>
              </CoachCard>
            ))
          ) : (
            <p>No coach data available</p>
          )}
        </GridContainer>
      </TopContainer>
    </>
  );
};

export default Coach;
