import StaffList from "../../components/player/staffDetailList/StaffList";

const Pitcher = () => {
  return (
    <>
      <StaffList apiUrl="player/pitcherlist.json" staffType="pitcher"/>
    </>
  );
}
export default Pitcher 