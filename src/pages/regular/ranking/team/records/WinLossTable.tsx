import { ColumnDef, flexRender } from "@tanstack/react-table";
import { useTable } from "../../../../../hooks/useTable";
import {
  TeamRankingTable,
  TeamRankingHeaderCell,
  TeamRankingRow,
  TeamRankingCell
} from "./TeamRecordStyles"
import { TTeamMatchupResponse, TTeamMatchupTableType } from "../../../../../types/ranking";

const WinLossTable = () => {
  const teamNames = ["KT","삼성","두산","LG","키움","롯데","SSG","NC","KIA","한화"];
  const teamCodes = ["KT","SS","OB","LG","WO","LT","SK","NC","HT","HH"];

  const columnDefs: ColumnDef<TTeamMatchupTableType>[] = [
    { header: "팀명", accessorKey: "teamName" },
    //각 팀에 맞는 열 teamCode로 구분해서 생성
    ...teamNames.map((team,index) => ({
      header: `${team}`,
      accessorKey: teamCodes[index]
    }))
    // { header: "승리", accessorKey: "win" },
    // { header: "패배", accessorKey: "lose" },
    // { header: "무승부", accessorKey: "drawn" },
    // { header: "상대 팀 코드", accessorKey: "vsTeamCode" }
  ];

  const { getHeaderGroups, getRowModel } = useTable<TTeamMatchupTableType>({
    apiUrl: '/game/rank/teamvs',
    columnDefs,
      transformData: (data: TTeamMatchupResponse) => {
        //teamCodes[index]에 해당하는 팀의 경기 데이터 꺼내오기
        // ex) KT 팀이 삼성, 두산과 경기한 데이터 필터링
        const transformedData = teamNames.map((team,index) => {
          const teamMatchups = data?.data?.list.filter(
            (match) => match.teamCode === teamCodes[index]
          );

          //빈 객체 생성 = team을 각 행의 열로 표시
          const matchupObject: TTeamMatchupTableType = {teamName : team};

          //teamMatchups : 필터링된 경기데이터
          //각 팀이 상대 팀과 경기한 결과를 객체에 저장
          //ex)KT가 삼성과 경기를 했다면, matchup.vsTeamCode = "SS"
          // vsTeamCode를 키로, 승-패-무 데이터를 값으로 저장
          //ex) matchupObject["SS"] = "7-5-1";
          teamMatchups.forEach((matchup) => {
            matchupObject[matchup.vsTeamCode] = `${matchup.win}-${matchup.lose}-${matchup.drawn}`;
          });
          /* const matchupObject = {
              teamName: "KT",
              SS: "7-5-1",   // KT가 삼성과 7승 5패 1무
              OB: "9-3-0"    // KT가 두산과 9승 3패 0무
            }; */
          return matchupObject;
        })
        return transformedData || [];
      }
  });

  return (
      <TeamRankingTable>
        <thead>
          {getHeaderGroups().map(headerGroup => (
            <TeamRankingRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TeamRankingHeaderCell key={header.id} colSpan={header.colSpan}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TeamRankingHeaderCell>
              ))}
            </TeamRankingRow>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map(row => (
            <TeamRankingRow key={row.id}>
              {row.getVisibleCells().map(cell => (
                <TeamRankingCell
                  key={cell.id}
                  $isKT={row.original.teamName === 'KT'}
                  $isKTColumn={cell.column.id === 'KT'}
                >
                  {String(cell.getValue() ?? "■")}
                </TeamRankingCell>
              ))}
            </TeamRankingRow>
          ))}
        </tbody>
      </TeamRankingTable>
  );
}
export default WinLossTable;