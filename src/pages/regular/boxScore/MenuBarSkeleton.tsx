import styled from "styled-components";
import { LeftMenu, MenuContainer, RightMenu } from "./MenuBarStyles";
import { SkeletonBox } from "./recordButton/score/ScoreSkeleton";

const SkeletonBtnLeft = styled(SkeletonBox)`
    width: 80px;
    height: 28px;
    margin: 0 5px 0 0;
    border-radius: 15px;
`
const SkeletonBtnRight = styled(SkeletonBox)`
    width: 100px;
    height: 27px;
    margin: 0 5px 0 0;
    border-radius: 15px;
`
const MenuBarSkeleton = () => {
    const menu = Array(3).fill(0);
    return (
    <MenuContainer>
        <LeftMenu>
            {menu.map((_,index) => (
                <div key={index}>
                    <SkeletonBtnLeft/>
                </div>
            ))}
        </LeftMenu>
        <RightMenu>
            <div>
                <SkeletonBtnRight/>
            </div>
        </RightMenu>
    </MenuContainer>
    );
}
export default MenuBarSkeleton