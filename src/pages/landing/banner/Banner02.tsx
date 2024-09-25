import colors from "../../../assets/Colors";
import { shopItem, ktwizEnLogo, light } from "../../../assets/assets";
import GradientChip from "../../../components/common/gradientChip/GradientChip";
import useFetchData from "../../../hooks/useFetchData";
import { TMonthlyPlayer } from "../../../types/landing";
import { BannerCenterLine } from "./BannerStyles01";
import {
  ShopContainer,
  ShopImg01,
  ShopImg02,
  ShopImgBox,
  BannerLogo,
  BannerShop,
  BannerPlayerBox,
  BannerPlayerLink,
  BannerPlayerImg,
  BannerLight
} from "./BannerStyles02";
import { TMonthlyPlayer } from "../../../types/landing";

const Banner02 = () => {

  const { data } = useFetchData<TMonthlyPlayer>("media/monthlyPlayer");

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
      <BannerPlayerBox>
        <div>
          <GradientChip
            width="90px"
            height="22px"
            textGradient={`linear-gradient(to bottom,${colors.white}, ${colors.white})`}
            main="이달의 선수" title=""
          />
          <BannerLogo src={ktwizEnLogo}/>
        </div>
        <span>{data?.num}</span>
        <span>{data?.name}</span>
        <BannerPlayerImg imgFilePath={data?.imgFilePath} />
        <BannerLight src={light}/>
      </BannerPlayerBox>
    </ShopContainer>
  );
};

export default Banner02;
