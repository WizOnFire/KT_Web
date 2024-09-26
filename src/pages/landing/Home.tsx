import GradientChip from "../../components/common/gradientChip/GradientChip";
import useFetchData from "../../hooks/useFetchData";
import { THotIssue } from "../../types/landing";
import Banner01 from "./banner/Banner01";
import Banner02 from "./banner/Banner02";
import Gallery from "./gallery/Gallery";
import HighLight from "./highLight/HighLight";
import HomeSkeleton from "./HomeSkeleton";
import { StartImage, StartWizNews } from "./HomeStyles"
import TeamMatch from "./teamMatch/TeamMatch";

const Home = () => {
  const { data, isLoading, error } = useFetchData<THotIssue[]>('media/hotissue?count=10'); 

  console.log('data',data);
  if (isLoading) return <HomeSkeleton/>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {/* 랜딩페이지 */}
      <StartImage>
        <StartWizNews>
          <GradientChip main="KTWIZ" title="위즈소식"/>
          {data && (
            <>
              <p>{data[0].artcTitle}</p>
              <p>{data[0].artcContents}</p>
              <a href="/media/wiznews/190436"> 
                자세히보기&nbsp;&gt;
              </a>
            </>
          )}
        </StartWizNews>
      </StartImage>
      <TeamMatch />
      <Banner01/>
      <HighLight/>
      <Banner02/>
      <Gallery/>
    </>
  );
};

export default Home;

