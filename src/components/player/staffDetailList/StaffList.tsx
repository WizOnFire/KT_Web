import {
  SearchBarContainer,
  GridContainer,
  CoachCard,
  CoachImage,
  TextWrapper,
} from "./StaffListStyles"
import useFetchData from "../../../hooks/useFetchData";
import SearchBar from "../../common/searchbar/SearchBar";
import { Container } from "../../../pages/PagesStyles";
import { useNavigate} from "react-router-dom";
import ListSkeleton from "../../common/skeleton/gridskeleton/ListSkeleton";
import { useState } from "react";

export type TStaff = {
  playerName: string;
  position: string;
  pcode: string;
  playerPrvwImg: string;
  backnum: string;
};

export type TStaffListProps= {
  apiUrl:string;
  staffType:string
};


export type TCoachData = {
  data: {
    list: TStaff[];
  };
};

const StaffList = ({apiUrl,staffType}:TStaffListProps) => {
  const { data: staffs, isLoading, error } = useFetchData<TStaff[]>(apiUrl);
  const [searchTerm, setSearchTerm] = useState<string>(""); 
  const navigate=useNavigate();
    let stafflist: TStaff[] = [];

    if (staffType === "coach" && (staffs as unknown as TCoachData)?.data?.list) {
    stafflist = (staffs as unknown as TCoachData).data.list;
    } else {
    stafflist = staffs as TStaff[];
    }

  if(isLoading) return <ListSkeleton columns={4} count={20} margin="0px" width="240px" height="275px" borderRadius="0px"/>
  if (error) return <p>{error}</p>;

  const onClick=(pcode:string)=>{
    navigate(`/player/${staffType}/detail?pcode=${pcode}`);
  }

  const filteredStaffList = stafflist?.length > 0
    ? stafflist.filter((staff) =>
        staff.playerName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  return (
    <>
    <Container >
      <SearchBarContainer>    
        <SearchBar 
        placeholder="검색어를 입력해주세요." 

        containerWidth="140px" 
        height="29px" 
        buttonWidth="45px"
        onSearch={(term)=>setSearchTerm(term)} 
        />
      </SearchBarContainer>
        <GridContainer columns={4}>
          {staffs ? (
            filteredStaffList.map((staff) => (
              <CoachCard key={staff.pcode}>
                <CoachImage
                  src={staff.playerPrvwImg ? staff.playerPrvwImg : "https://via.placeholder.com/100"}
                  alt={staff.playerName}
                  onClick={()=>onClick(staff.pcode)}
                />
                <TextWrapper>
                  <p style={{ color: "#ec0a0b" }}>No. {staff.backnum}</p>
                  <p>{staff.playerName}</p>
                </TextWrapper>
              </CoachCard>
            ))
          ) : (
            <p>No coach data available</p>
          )}
        </GridContainer>
</Container>
      
    </>
  );
};

export default StaffList;
