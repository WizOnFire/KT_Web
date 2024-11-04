import StaffList from "../../../components/player/staffDetailList/StaffList";

const Coach = () => {
  return (
    <>
      <StaffList apiUrl="player/coachlist.json" staffType="coach"/>
    </>
  );
}
export default Coach