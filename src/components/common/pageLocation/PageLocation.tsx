import { AiFillHome } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import {PageLocationContainer, PageLocationBox , PageLocationInfo} from "./PageLocationStyles"
import { useLocationStore } from "../../../stores/useLocation.store";
import { useLocation } from "react-router-dom";



const PageLocation = () => {
  /* 메모이제이션 try,,,,
  const category = useLocationStore((state) => state.selectedCategory)
  const subCategory = useLocationStore((state) => state.selectedSubCategory)
  const sidebar = useLocationStore((state) => state.selectedSidebar)
  */
 const location=useLocation();
 console.log(location.pathname);
  const isLandingPage = location.pathname === "/";
  //pathname이 player/coach이면 이를 파싱해서 써먹을 순 없을까
  const pathItems = location.pathname.split("/").filter(Boolean); // This will break down '/player/coach' into ['player', 'coach']
  console.log(pathItems)

  const { selectedCategory, selectedSubCategory, selectedSidebar} = useLocationStore();
  const isShopOrSponsor = ["shop","스폰서"].includes(selectedCategory);
  //console.log(selectedCategory,selectedSubCategory,selectedSidebar)
  //console.log(location)

  const truncatedPathItems =( pathItems.length > 3 && pathItems[2]==="schedule" )? pathItems.slice(0, 3) : pathItems;
  

  return (   
      !(isLandingPage || isShopOrSponsor) && (
      <PageLocationContainer>
        <PageLocationBox>
          <PageLocationInfo>
            <span><AiFillHome /></span>
            <span>Home</span>
          {truncatedPathItems.map((item, index) => {
            const isLastItem = index === truncatedPathItems.length - 1;
            return(
                  <span key={index}>
              <span><MdArrowForwardIos /></span>
              <span style={{ color: isLastItem ? "red" : "inherit" }}>{item}</span>
            </span>
            )
          })}

            {/* <span>{selectedSubCategory}</span>
            {selectedSidebar !== null ? (
                <>
                  <span><MdArrowForwardIos /></span>
                  <span>{selectedSidebar}</span>
                </>
              ) : null } */}
              
          </PageLocationInfo>
        </PageLocationBox>
      </PageLocationContainer>
      )
  );
}
export default PageLocation;