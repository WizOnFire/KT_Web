import styled, { keyframes } from "styled-components";
import { Container } from "../../../../pages/PagesStyles";
import { TGridContainerProps } from "../../../player/staffDetailList/StaffListStyles";

const loadingAnimation = keyframes`
    100% {
        background-position: -100% 0;
    }
`;

export const Shining = styled.span`
  background: linear-gradient(
    120deg,
    #e5e5e5 30%,
    #f0f0f0 38%,
    #f0f0f0 40%,
    #e5e5e5 48%
  );
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: ${loadingAnimation} 1s infinite;
`;

const SkeletonLine = styled(Shining)<{ visible: boolean }>`
  height: 1.5rem;
  border-radius: 1rem;
  display: inline-block;
  background: ${({ visible }) => !visible && 'white'};
`;

const SkeletonGrid = styled.div<TGridContainerProps>`
  display: grid;
  grid-template-columns: repeat(${props=>props.columns},1fr);
  gap: 24px; 
  margin-top: 0px;
`;

interface SkeletonPropsType {
  width?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
  visible?: boolean;
}

function Skeleton({
  width="240px", 
  height="275px",//프롭으로 받기 
  margin, //프롭으로 받기
  borderRadius = "0px", 
  visible = true,
}: SkeletonPropsType) {
  return (
    <SkeletonLine
      visible={visible}
      style={{borderRadius:borderRadius,width,margin,height }}>
    </SkeletonLine>
  );
}
interface SkeletonGridProps {
  count: number;
  columns:number;
  margin?:string;
  width?:string;
  height?:string;
  borderRadius?:string;
}

export const SkeletonGridContainer = ({ count, columns,width,height,margin,borderRadius }: SkeletonGridProps) => {
  return (
    <Container>
      <SkeletonGrid columns={columns} >
        {Array.from({ length: count }).map((_, index) => (
          <Skeleton key={index} width={width} height={height} margin={margin} borderRadius={borderRadius}/>
        ))}
      </SkeletonGrid>
      </Container>
 
  );
};

export default SkeletonGridContainer;

