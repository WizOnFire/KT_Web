import StaffList from "../../components/player/staffDetailList/StaffList";

const Outfielder = () => {
  return (
    <>
      <StaffList apiUrl="player/outfielderlist" staffType="outfielder"/>
    </>
  );
}
export default Outfielder