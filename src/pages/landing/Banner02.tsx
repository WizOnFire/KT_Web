import colors from "../../assets/Colors";
import { shopItem, ktwizEnLogo } from "../../assets/assets";
import GradientChip from "../../components/common/gradientChip/GradientChip";
import { BannerCenterLine } from "./BannerStyles01";
import {
  ShopContainer,
  ShopImg01,
  ShopImg02,
  ShopImgBox,
  BannerLogo,
  BannerShop,
  BannerPlayerBox,
  BannerPlayerLink
} from "./BannerStyles02"

const Banner02 = () => {

  return (
    <ShopContainer>
      <ShopImg01 src={shopItem}/>
      <BannerShop>
        <GradientChip
          width="60px"
          textGradient={`linear-gradient(to bottom,${colors.white}, ${colors.white})`}
          main="공식" title=""
        />
        <ShopImgBox>
        <span>온라인 스토어</span>
          <ShopImg02 src={ktwizEnLogo}/>
          <span>의</span>
        </ShopImgBox>
        <span>익스클루시브한 아이템을 만나보세요!</span>
        <BannerPlayerLink href="https://www.ktwizstore.co.kr/">
          바로가기 →
        </BannerPlayerLink>
      </BannerShop>
      <BannerCenterLine/> 
      <BannerLogo src={ktwizEnLogo}/>
      <BannerPlayerBox>
        <GradientChip
          width="90px"
          height="22px"
          margin="0 0 20px 0 "
          textGradient={`linear-gradient(to bottom,${colors.white}, ${colors.white})`}
          main="이달의 선수" title=""
        />
        <span>14</span>
        <span>천성호</span>
      </BannerPlayerBox>
    </ShopContainer>
  );
}
export default Banner02;