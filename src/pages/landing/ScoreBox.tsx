import {
    EachTeamBox,
    ScoreBold,
    HiddenBlackBox } from "./ScoreBoxStyles"

type TScoreBoxType = {
    hiddenLeft?: string;
    scoreLeft?: string;
    transform?: string;
    imageSrc?: string;
    teamName?: string;
    score?: number;
    
}


const ScoreBox = ({ 
    hiddenLeft,
    scoreLeft,
    transform,
    imageSrc,
    teamName,
    score
  }:TScoreBoxType) => {
    console.log('Image Source:', imageSrc);
    console.log('Team Name:', teamName);
  return (
    <>
        <EachTeamBox>
          <HiddenBlackBox left={hiddenLeft} />
          <ScoreBold
            left={scoreLeft}
            transform={transform}
            >
              {score || 0}
          </ScoreBold>
          {/* <ScoreBold
            left={scoreLeft}
            transform={transform}
            >
            12
          </ScoreBold> */}
          <div>
            <img src={imageSrc} alt={teamName} />
            <span>{teamName}</span>
          </div>
        </EachTeamBox>
    </>
  );
}
export default ScoreBox;