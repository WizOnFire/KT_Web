import { useEffect, useState } from "react";
import { LogoBox, TableBox, TeamInfoBox, TeamInfoWrapper, WatchPointWrapper, Wrapper, WatchPointHeader, PitchTable, LineUpWrapper } from "./WatchPointBoxStyles";
import useFetchData from "../../../hooks/useFetchData";
import { TGameData, TGameResponse } from "../../../types/landing";
import { TWatchPointResponse } from "../../../types/game";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import { useTable } from "../../../hooks/useTable";
import { ScoreArrowBox, ScoreCell, ScoreHeaderCell, ScoreRow } from "../boxScore/recordButton/score/ScoreStyles";
import { GrPrevious, GrNext } from "react-icons/gr";
import { PitchRecordLabel, PitchRecordTable } from "../boxScore/recordButton/pitchRecords/PitchRecordStyles";
import LineUp from "./LineUp";
import { VSWrapper, VS } from "./LineUpStyles";

const WatchPointBox = () => {
  // 가장 최신 게임 가져오기
  const { data: game } = useFetchData<TGameResponse>("//game/recentGames");
  const current: TGameData | undefined = game?.data?.current;

  const [apiUrl, setApiUrl] = useState<string>("");
  const [gameData, setGameData] = useState<TWatchPointResponse | null>(null);

  // 계산된 승률
  const calculatedWinRate = gameData
    ? (
        gameData?.data.visitTeamWinLose?.win! /
        (gameData.data.visitTeamWinLose?.win! + gameData.data.visitTeamWinLose?.lose!)
      ).toFixed(3)
    : 0;

  // 컬럼 정의 - 팀 순위 테이블
  const teamRankColumnDefs: ColumnDef<any>[] = [
    { header: '승', accessorKey: 'win' },
    { header: '패', accessorKey: 'lose' },
    { header: '무', accessorKey: 'drawn' },
    { 
      header: '승률', 
      accessorKey: 'wra',
      cell: (info) => info.getValue() ?? calculatedWinRate // wra가 없으면 calculatedWinRate 사용
    },
    { header: 'VS', accessorKey: 'vs' },
    { header: '승', accessorKey: 'win2' },
    { header: '패', accessorKey: 'lose2' },
    { header: '무', accessorKey: 'drawn2' },
    { 
      header: '승률', 
      accessorKey: 'wra2',
      cell: (info) => info.getValue() ?? calculatedWinRate // wra가 없으면 calculatedWinRate 사용
    },
  ];

  // 컬럼 정의 - 투수 비교 테이블
  const pitcherColumnDefs: ColumnDef<any>[] = [
    { header: '팀', accessorKey: 'team' },
    { header: '이름', accessorKey: 'name' },
    { header: '평균자책점', accessorKey: 'era' },
    { header: '경기', accessorKey: 'gamenum' },
    { header: '승', accessorKey: 'w' },
    { header: '패', accessorKey: 'l' },
    { header: '세', accessorKey: 'sv' },
    { header: '홀', accessorKey: 'hold' },
    { header: '승률', accessorKey: 'wra' },
    { header: '이닝', accessorKey: 'innDisplay' },
    { header: '피안타', accessorKey: 'hit' },
    { header: '피홈런', accessorKey: 'hr' },
    { header: '볼넷', accessorKey: 'bb' },
    { header: '사구', accessorKey: 'hp' },
    { header: '삼진', accessorKey: 'kk' },
    { header: '실점', accessorKey: 'r' },
    { header: '자책점', accessorKey: 'er' },
  ];

  // 팀 순위 테이블 데이터 변환
  const transformTeamRankData = (data: TWatchPointResponse) => {
    setGameData(data); // 원본 데이터 저장
    return [
      {
        win: data.data.homeTeamRank?.win,
        lose: data.data.homeTeamRank?.lose,
        drawn: data.data.homeTeamRank?.drawn,
        wra: data.data.homeTeamRank?.wra,
        vs: '시즌 성적',
        win2: data.data.visitTeamRank?.win,
        lose2: data.data.visitTeamRank?.lose,
        drawn2: data.data.visitTeamRank?.drawn,
        wra2: data.data.visitTeamRank?.wra,
      },
      {
        win: data.data.homeTeamWinLose?.win,
        lose: data.data.homeTeamWinLose?.lose,
        drawn: data.data.homeTeamWinLose?.drawn,
        wra: calculatedWinRate, // calculatedWinRate를 wra로 사용
        vs: '시즌 상대 전적',
        win2: data.data.visitTeamWinLose?.win,
        lose2: data.data.visitTeamWinLose?.lose,
        drawn2: data.data.visitTeamWinLose?.drawn,
        wra2: calculatedWinRate, // calculatedWinRate를 wra로 사용
      },
      {
        win: `${data.data.homeTeamRank?.rank}위`,
        lose: '', // 빈 칸 처리
        drawn: '', // 빈 칸 처리
        wra: '', // 빈 칸 처리
        vs: '시즌 순위',
        win2: `${data.data.visitTeamRank?.rank}위`,
        lose2: '', // 빈 칸 처리
        drawn2: '', // 빈 칸 처리
        wra2: '', // 빈 칸 처리
        isRankRow: true, // 마지막 행 표시
      },
    ];
  };
  
  // 투수 비교 테이블 데이터 변환
  const transformPitcherData = (data: TWatchPointResponse) => {
    return [
      {
        team: data.data.gameScore?.home,
        name: data.data.homePitcher?.playerName,
        era: data.data.homePitcher?.era,
        gamenum: data.data.homePitcher?.gamenum,
        w: data.data.homePitcher?.w,
        l: data.data.homePitcher?.l,
        sv: data.data.homePitcher?.sv,
        hold: data.data.homePitcher?.hold,
        wra: data.data.homePitcher?.wra,
        innDisplay: data.data.homePitcher?.innDisplay,
        hit: data.data.homePitcher?.hit,
        hr: data.data.homePitcher?.hr,
        bb: data.data.homePitcher?.bb,
        hp: data.data.homePitcher?.hp,
        kk: data.data.homePitcher?.kk,
        r: data.data.homePitcher?.r,
        er: data.data.homePitcher?.er,
      },
      {
        team: data.data.gameScore?.visit,
        name: data.data.visitPitcher?.playerName,
        era: data.data.visitPitcher?.era,
        gamenum: data.data.visitPitcher?.gamenum,
        w: data.data.visitPitcher?.w,
        l: data.data.visitPitcher?.l,
        sv: data.data.visitPitcher?.sv,
        hold: data.data.visitPitcher?.hold,
        wra: data.data.visitPitcher?.wra,
        innDisplay: data.data.visitPitcher?.innDisplay,
        hit: data.data.visitPitcher?.hit,
        hr: data.data.visitPitcher?.hr,
        bb: data.data.visitPitcher?.bb,
        hp: data.data.visitPitcher?.hp,
        kk: data.data.visitPitcher?.kk,
        r: data.data.visitPitcher?.r,
        er: data.data.visitPitcher?.er,
      }
    ];
  };
  
  // 팀 순위 테이블
  const { getHeaderGroups, getRowModel } = useTable({
    apiUrl: apiUrl,
    columnDefs: teamRankColumnDefs, // 팀 순위 테이블 컬럼 정의
    transformData: transformTeamRankData,
  });
  
  // 투수 비교 테이블
  const { getHeaderGroups: getPitcherHeaderGroups, getRowModel: getPitcherRowModel } = useTable({
    apiUrl: apiUrl,
    columnDefs: pitcherColumnDefs, // 투수 비교 테이블 컬럼 정의
    transformData: transformPitcherData,
  });

  const homeLineupData = gameData?.data.homeLineup?.map(player => ({
    playerName: player.playerName!,
    pos: player.pos || '', // pos가 undefined일 경우 빈 문자열로 대체
  })) ?? [];



  const visitLineupData = gameData?.data.visitLineup?.map(player => ({
    playerName: player.playerName!,
    pos: player.pos || '', // pos가 undefined일 경우 빈 문자열로 대체
  })) ?? [];


  useEffect(() => {
    if (current) {
      setApiUrl(`/game/watchpoint?gameDate=${current.gameDate}&gmkey=${current.gmkey}`);
    }
  }, [current]);

  // Next 버튼 클릭 시 호출되는 함수
  const handleNextGame = () => {
    if (gameData?.data?.schedule?.next) {
      const nextGameDate = gameData.data.schedule.next.gameDate;
      const nextGmkey = gameData.data.schedule.next.gmkey;
      setApiUrl(`/game/watchpoint?gameDate=${nextGameDate}&gmkey=${nextGmkey}`);
    }
  };

  // Prev 버튼 클릭 시 호출되는 함수
  const handlePrevGame = () => {
    if (gameData?.data?.schedule?.prev) {
      const prevGameDate = gameData.data.schedule.prev.gameDate;
      const prevGmkey = gameData.data.schedule.prev.gmkey;
      setApiUrl(`/game/watchpoint?gameDate=${prevGameDate}&gmkey=${prevGmkey}`);
    }
  };

  return (
    <>
    <Wrapper>
      <WatchPointWrapper>
        <WatchPointHeader>
          <ScoreArrowBox>
            <GrPrevious onClick={handlePrevGame} style={{ scale: "150%" }} />
            <div>{gameData?.data?.gameScore?.displayDate}</div>
            <GrNext onClick={handleNextGame} style={{ scale: "150%" }} />
          </ScoreArrowBox>
        </WatchPointHeader>
        <TeamInfoWrapper>
          <TeamInfoBox>
            <LogoBox src={gameData?.data?.gameScore?.homeLogo} alt="Home Team" />
            <span>{gameData?.data?.gameScore?.home}(홈)</span>
          </TeamInfoBox>
          <TeamInfoBox>
            <LogoBox src={gameData?.data?.gameScore?.visitLogo} alt="Visit Team" />
            <span>{gameData?.data?.gameScore?.visit}(원정)</span>
          </TeamInfoBox>
        </TeamInfoWrapper>
      </WatchPointWrapper>
  
      {/* 팀 순위 테이블 */}
      <TableBox>
        <thead>
          {getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <ScoreHeaderCell key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </ScoreHeaderCell>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map((row) => (
            <ScoreRow key={row.id}>
              {row.original.isRankRow ? (
                <>
                  <ScoreCell colSpan={4}>{row.original.win}</ScoreCell>
                  <ScoreCell>{row.original.vs}</ScoreCell>
                  <ScoreCell colSpan={4}>{row.original.win2}</ScoreCell>
                </>
              ) : (
                row.getVisibleCells().map((cell) => (
                  <ScoreCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </ScoreCell>
                ))
              )}
            </ScoreRow>
          ))}
        </tbody>
      </TableBox>
    </Wrapper>
    
    {/* 투수 비교 테이블 */}
    <PitchTable>
      <PitchRecordLabel>선발투수 비교</PitchRecordLabel>
      <PitchRecordTable>
        <thead>
          {getPitcherHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <ScoreHeaderCell key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </ScoreHeaderCell>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getPitcherRowModel().rows.map((row, index) => (
            <ScoreRow key={row.id} style={index === 0 ? { color: 'red' } : {}}>
              {row.getVisibleCells().map((cell, cellIndex) => (
                <ScoreCell key={cell.id} style={{ color: cellIndex === 1 ? 'black' : (index === 0 ? 'red' : 'inherit') }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </ScoreCell>
              ))}
            </ScoreRow>
          ))}
        </tbody>
      </PitchRecordTable>
    </PitchTable>
    <LineUpWrapper>
      <LineUp lineup={homeLineupData} logo={gameData?.data.gameScore?.homeLogo || ''} />
      <VSWrapper>
          <VS>VS</VS>
        </VSWrapper>
      <LineUp lineup={visitLineupData} logo={gameData?.data.gameScore?.visitLogo || ''} />
    </LineUpWrapper>
    </>
  );
}

export default WatchPointBox;