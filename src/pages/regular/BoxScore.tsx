import styled from "styled-components";
import MenuBar from "./boxScore/MenuBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BoxScoreContainer = styled.div`
    width: 65%;
    font-size: 14px;
    box-sizing: border-box;
    padding-top: 50px;
    margin: 0 auto;
`;

const BoxScore = () => {
    const [apiUrl, setApiUrl] = useState<string>("");
    const { gameDate, gmkey } = useParams<string>();
    
    useEffect(() => {
        if (!gameDate || !gmkey) {
            // 파라미터가 없을 때
            setApiUrl(`game/boxscore?gameDate=20240914&gmkey=20240914KTOB0`);
        } else {
            // 파라미터가 있을 때
            setApiUrl(`game/boxscore?gameDate=${gameDate}&gmkey=${gmkey}`);
        }
    }, [gameDate, gmkey]);

    return (
        <BoxScoreContainer>
            <MenuBar apiUrl={apiUrl}/>
        </BoxScoreContainer>
    );
}
export default BoxScore;