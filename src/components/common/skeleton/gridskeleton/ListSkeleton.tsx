
import SkeletonGridContainer from "./SkeletonGridContainer";
import LottieComponent from "../../../../lottie/LottieComponent"
import loadingAnimation from "../../../../lottie/lottieloading.json"
import { Container } from "../../../../pages/PagesStyles";

type TListSkeletonProps = {
  columns: number;
  width: string;
  height: string;
  margin: string;
  borderRadius: string;
  isCheer?:boolean;
}

const speed = 1;
const isPaused = false;
const isStopped = false;

const ListSkeleton = (props: TListSkeletonProps) => {
  const {isCheer}=props;
  return (
    <>
    <Container style={{padding:"10px"}}>
     <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* MatchBoxSkeleton은 기본적으로 부모의 크기를 차지 */}
      <SkeletonGridContainer count={20} {...props} /> 
      {/* 배경을 흐리게 만들 오버레이 */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.6)", // 반투명 흰색 배경
        backdropFilter: "blur(1px)", // 배경 흐림 효과
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10, // 로딩 오버레이가 최상단에 있도록 설정
      }}>
        {/* 중앙에 로딩 애니메이션 */}
        <LottieComponent
          animationData={loadingAnimation}
          speed={speed}
          isPaused={isPaused}
          isStopped={isStopped}
          style={{ width: "130px", height: "130px",transform: isCheer?"translateY(-1504px)":"translateY(-700px)"}} // 로딩 애니메이션 크기 조정
        />
      </div>
    </div>
      {/* props를 그대로 전달 */}
    </Container>
    </>
  );
}

export default ListSkeleton;
