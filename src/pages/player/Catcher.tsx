import StaffList from "../../components/player/staffDetailList/StaffList";

const Catcher = () => {
  return (
    <>
     <StaffList apiUrl="player/catcherlist.json" staffType="catcher"/>
    </>
  );
}
export default Catcher 