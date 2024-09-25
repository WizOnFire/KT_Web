import {
    EachTeamBox,
    ScoreBold,
    HiddenBlackBox,
    ScoreLogo,
    ScoreTeamName
  } from "./ScoreBoxStyles"

type TScoreBoxType = {
    hiddenLeft?: string;
    scoreLeft?: string;
    transform?: string;
    imageSrc?: string;
    teamName?: string;
    score?: number;
    backgroundColor?: string;
    fontSize?: string;
    width?: string;
    height?: string;
    scale?: string;
    margin?: string;
    border?: string;
}

const ScoreBox = ({ 
    hiddenLeft,
    scoreLeft,
    transform,
    imageSrc,
    teamName,
    score,
    backgroundColor,
    fontSize,
    width,
    height,
    scale,
    margin,
    border,
  }:TScoreBoxType) => {
    return (
      <>
          <EachTeamBox width={width} height={height} border={border}>
            <HiddenBlackBox
              left={hiddenLeft}
              backgroundColor={backgroundColor}
            />
            <ScoreBold
              left={scoreLeft}
              transform={transform}
              fontSize={fontSize}
              >
                {score || 0}
            </ScoreBold>
            <div>
              <ScoreLogo src={imageSrc} alt={teamName} scale={scale}/>
              <ScoreTeamName margin={margin}>{teamName}</ScoreTeamName>
            </div>
          </EachTeamBox>
      </>
    );
}
export default ScoreBox;