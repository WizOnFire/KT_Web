import colors from "../../../assets/Colors";
import { item01, item02 } from "../../../assets/assets";
import GradientChip from "../../../components/common/gradientChip/GradientChip";
import useFetchData from "../../../hooks/useFetchData";
import { TRanking } from "../../../types/landing";
import {
  BannerContainer,
  BannerImg01,
  BannerImg02,
  BannerRanking,
  BannerRankingInfo,
  RankingNubmer,
  BannerBottomLine,
  BannerCenterLine,
  BannerParkBox,
  BannerParkLink
} from "./BannerStyles01"
import { TRanking } from "../../../types/landing";

const Banner01 = () => {

  const { data } = useFetchData<TRanking>("game/ktwizteamrank"); 
  const ranking = data?.data?.ktWizTeamRank;

  return (
    <BannerContainer>
      <BannerImg01 src={item01}/>
      <BannerRanking>
        <GradientChip
          textGradient={`linear-gradient(to bottom,${colors.white}, ${colors.white})`}
          main="팀 순위" title=""
        />
        {
          ranking && (
        <BannerRankingInfo>
            <RankingNubmer><strong>{ranking.rank}</strong>위</RankingNubmer>
            <div>
              <span>{ranking.wldName}</span>
              <BannerBottomLine/>
              <span>총 {ranking.game}경기, 승률 {ranking.wra}</span>
            </div>
        </BannerRankingInfo>
          )
        }
      </BannerRanking>
      <BannerCenterLine/> 
      <BannerImg02 src={item02}/>
      <BannerParkBox>
        <GradientChip
          width="150px"
          margin="0 0 20px 0 "
          textGradient={`linear-gradient(to bottom,${colors.white}, ${colors.white})`}
          main="수원 케이티 위즈 파크" title=""
        />
        <span>사전 주차 예약제 안내</span>
        <BannerParkLink to="/wizpark/parking">
          사전주차 예약하기 →
        </BannerParkLink>
      </BannerParkBox>
    </BannerContainer>
  );
}
export default Banner01;