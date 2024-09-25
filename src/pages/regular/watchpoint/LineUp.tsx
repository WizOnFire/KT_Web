import { TeamWrapper, TeamLogo, FieldWrapper, PlayerPosition, PlayerInfo, LineUpBox, VSWrapper, VS } from "./LineUpStyles";

const positions: { [key: string]: { top: string; left: string } } = {
    "1": { top: '55%', left: '50%' }, // 박지원
    "2": { top: '80%', left: '50%' }, // 김진주
    "3": { top: '60%', left: '80%' }, // 상대선수3
    "4": { top: '45%', left: '75%' }, // 상대선수4
    "5": { top: '65%', left: '25%' }, // 상대선수5
    "6": { top: '48%', left: '28%' }, // 상대선수8
    "7": { top: '37%', left: '20%' }, // 상대선수9
    "8": { top: '25%', left: '50%' }, // 상대선수6
    "9": { top: '30%', left: '80%' }, // 상대선수7
    "D": { top: '78%', left: '15%' }, // 상대선수10
};
  const positionMap: { [key: string]: string } = {
    "1": "P",
    "2": "C",
    "3": "1B",
    "4": "2B",
    "5": "3B",
    "6": "SS",
    "7": "LF",
    "8": "CF",
    "9": "RF",
    "D": "DH",
  };

////////////////////////////수정?
const LineUp = ({ lineup, logo }: { lineup: { pos: string; playerName: string }[]; logo: string }) => { // pos 타입을 string으로 변경
    return (
        <>
        <LineUpBox>
        <TeamLogo src={logo} alt="Team Logo" />
      <TeamWrapper>
        <FieldWrapper>
          {lineup.map((player, index) => (
            
            <PlayerPosition
              key={index} // pcode 대신 index 사용
              top={positions[player.pos]?.top || '50%'}
              left={positions[player.pos]?.left || '50%'}
            >
              <PlayerInfo>
              {positionMap[player.pos] || player.pos}. {player.playerName}
              </PlayerInfo>
            </PlayerPosition>
          ))}
        </FieldWrapper>

      </TeamWrapper>
      </LineUpBox>
      </>
    );
  };

  export default LineUp