import styled from "styled-components";
import MenuBar from "./MenuBar";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Score from "./recordButton/score/Score";

const BoxScoreContainer = styled.div`
    width: 65%;
    font-size: 14px;
    box-sizing: border-box;
    margin: 0 auto;
`;

const BoxScore = () => {
    const [apiUrl, setApiUrl] = useState<string>("");
    const { gameDate, gmkey } = useParams<string>();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!gameDate || !gmkey) {
            // 파라미터가 없을 때
            setApiUrl('/game/boxscore');
        } else {
            // 파라미터가 있을 때
            setApiUrl(`/game/boxscore?gameDate=${gameDate}&gmkey=${gmkey}`);
        }
    }, [gameDate, gmkey]);

    const handlePrevGameClick = (prevGameDate: string, preGmkey: string) => {
        navigate(`/game/regular/boxscore/${prevGameDate}/${preGmkey}`);
    }

    const handleNextGameClick = (nextGameDate: string, nextGmkey: string) => {
        navigate(`/game/regular/boxscore/${nextGameDate}/${nextGmkey}`);
    };

    return (
        <BoxScoreContainer>
            <Score
                apiUrl={apiUrl}
                onPrevClick={handlePrevGameClick}
                onNextClick={handleNextGameClick}
                />
            <MenuBar apiUrl={apiUrl}/>
        </BoxScoreContainer>
    );
}
export default BoxScore;