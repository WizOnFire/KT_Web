import GradientChip from "../../../components/common/gradientChip/GradientChip";
import { rightArrow, leftArrow } from "../../../assets/assets";
import ScoreBox from "./ScoreBox";
import { GradientCircle } from "../../../components/common/gradientChip/GradientChipStyles";
import { GrNext } from "react-icons/gr";
import useFetchData from "../../../hooks/useFetchData";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TGameResponse } from "../../../types/landing";
import {
    TeamMatchContainer,
    TeamMathNews,
    TeamMatchLine,
    TeamMathTitle,
    TeamMatchArrowBox,
    TeamMatchArrow,
    ScoreContainer,
    MatchInfo,
} from "./TeamMatchStyles"

const TeamMatch = () => {
    const navigate = useNavigate();
    const { data : game } = useFetchData<TGameResponse>("game/recentGames");
    const { current, prev, next } = game?.data || {};
    const [ index, setIndex ] = useState(1);

    const games = [prev, current, next].filter(Boolean);
    const show = games[index];

    useEffect(()=>{
        setIndex(1);
    },[game]);

    const onChangeShowPrevGame = () => {
        if(index > 0) {
            setIndex(index - 1);
        }
    }
    
    const onChangeShowNextGame = () => {
        if(index < games.length -1 ) {
            setIndex(index + 1);
        }
    }

    const formatDate = (date:string | undefined):string => {
        const year = date?.substring(0, 4) || "";
        const month = date?.substring(4, 6) || "";
        const day = date?.substring(6, 8) || "";
        return  `${year}.${month}.${day}`;
    }
    const formattedDate = show ? formatDate(show.displayDate) : "";

    return (
    <TeamMatchContainer>
        <TeamMathNews>
            <GradientChip
                margin="0 0 1% 21%"
                main="KTWIZ" title="위즈게임" />
            <TeamMathTitle>TEAM&nbsp;&nbsp;MATCHES</TeamMathTitle>
            <TeamMatchLine />
        </TeamMathNews>
        <TeamMatchArrowBox>
            <TeamMatchArrow src={leftArrow} onClick={onChangeShowPrevGame}/>
            <TeamMatchArrow src={rightArrow} onClick={onChangeShowNextGame}/>
        </TeamMatchArrowBox>
        {show && (
            <>
                <MatchInfo>
                    <span>{formattedDate}</span>
                    <span>{show.stadium} {show.gtime}</span>
                </MatchInfo>
                <ScoreContainer>
                    <ScoreBox
                        imageSrc={show.homeLogo}
                        teamName={show.homeKey}
                        score={show.homeScore}
                        />
                    <strong>vs</strong>
                    <ScoreBox
                        hiddenLeft="95%"
                        scoreLeft="87%"
                        transform="50%"
                        imageSrc={show.visitLogo}
                        teamName={show.visitKey}
                        score={show.visitScore}
                        />
                </ScoreContainer>
                <GradientCircle
                    width="120px"
                    height="35px"
                    fontFamily="KBO_Gothic_bold"
                    padding="0 0 0 7px"
                    onClick={()=>navigate(`/game/regular/boxscore?gameDate=${show.gameDate}&gmkeye=${show.gmkey}`)}
                    >
                    경기정보 
                    <GrNext />
                </GradientCircle>
            </>
        )}
    </TeamMatchContainer>
    );
}
export default TeamMatch