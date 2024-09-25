// import { useEffect, useState } from "react";
// import { GrPrevious, GrNext } from "react-icons/gr";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { MdOutlineCalendarToday } from "react-icons/md";
// import useFetchData from "../../../../../hooks/useFetchData";
// import ScoreBox from "../../../../landing/teamMatch/ScoreBox";
// import {
//     ScoreBoxWrapper,
//     ScoreArrowAndInfoBox,
//     ScoreWrapper,
//     ScoreArrowBox,
//     ScoreInfo,
// } from "./ScoreStyles";
// import { TBoxscoreData, TScheduleInfo } from "../../../../../types/game";

// const Score = ({ apiUrl }: { apiUrl: string }) => {
//     const [currentGame, setCurrentGame] = useState<TScheduleInfo | null>(null);
//     const [gameUrl, setGameUrl] = useState(apiUrl); // 불러올 URL을 상태로 관리
//     const { data: gameData, isLoading } = useFetchData<TBoxscoreData>(gameUrl); // useFetchData를 컴포넌트에서 호출

//     // 게임 데이터를 처리하여 currentGame 설정
//     useEffect(() => {
//         if (gameData?.schedule?.current) {
//             setCurrentGame(gameData.schedule.current);
//         }
//     }, [gameData]);

//     // 이전 게임 불러오기
//     const fetchPrevGame = () => {
//         if (gameData?.schedule?.prev) {
//             const prevGame = gameData.schedule.prev;
//             setGameUrl(`/game/boxscore?gameDate=${prevGame.gameDate}&gmkey=${prevGame.gmkey}`);
//         }
//     };

//     // 다음 게임 불러오기
//     const fetchNextGame = () => {
//         if (gameData?.schedule?.next) {
//             const nextGame = gameData.schedule.next;
//             setGameUrl(`/game/boxscore?gameDate=${nextGame.gameDate}&gmkey=${nextGame.gmkey}`);
//         }
//     };

//     return (
//         <>
//             <ScoreWrapper>
//                 <ScoreArrowAndInfoBox>
//                     <ScoreArrowBox>
//                         <GrPrevious size={25} onClick={fetchPrevGame} />
//                         <ScoreInfo>
//                             <span>{`${currentGame?.gyear}년 ${currentGame?.gmonth}월 ${currentGame?.gday}일`}</span>
//                             <div>
//                                 <span><MdOutlineCalendarToday />{`${currentGame?.gtime} ${currentGame?.stadium}`}</span>
//                                 <span>|</span>
//                                 <span><FaMapMarkerAlt />{`관중: ${currentGame?.crowdCn?.toLocaleString()}명`}</span>
//                             </div>
//                         </ScoreInfo>
//                         <GrNext size={25} onClick={fetchNextGame} />
//                     </ScoreArrowBox>
//                 </ScoreArrowAndInfoBox>
//                 <ScoreBoxWrapper>
//                     <ScoreBox
//                         scale="80%"
//                         margin="-40px 0 30px 0"
//                         width="200px"
//                         height="200px"
//                         backgroundColor="white"
//                         imageSrc={currentGame?.homeLogo}
//                         teamName={currentGame?.homeKey}
//                         score={currentGame?.hscore}
//                     />
//                     <ScoreBox
//                         scale="80%"
//                         margin="-40px 0 30px 0"
//                         width="200px"
//                         height="200px"
//                         backgroundColor="white"
//                         hiddenLeft="95%"
//                         scoreLeft="83%"
//                         transform="50%"
//                         imageSrc={currentGame?.visitLogo}
//                         teamName={currentGame?.visitKey}
//                         score={currentGame?.vscore}
//                     />
//                 </ScoreBoxWrapper>
//             </ScoreWrapper>
//         </>
//     );
// };

// export default Score;


// /