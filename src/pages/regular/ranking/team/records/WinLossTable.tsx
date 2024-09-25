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
  ];

  const { getHeaderGroups, getRowModel } = useTable<TTeamMatchupTableType>({
    apiUrl: '/game/rank/teamvs',
    columnDefs,
      transformData: (data: TTeamMatchupResponse) => {
        //teamCodes[index]에 해당하는 팀의 경기 데이터 꺼내오기
        const transformedData = teamNames.map((team,index) => {
          const teamMatchups = data?.data?.list.filter(
            (match) => match.teamCode === teamCodes[index]
          );

          //빈 객체 생성 = team을 각 행의 열로 표시
          const matchupObject: TTeamMatchupTableType = {teamName : team};

          //teamMatchups : 필터링된 경기데이터
          // vsTeamCode를 키로, 승-패-무 데이터를 값으로 저장
          teamMatchups.forEach((matchup) => {
            matchupObject[matchup.vsTeamCode] = `${matchup.win}-${matchup.lose}-${matchup.drawn}`;
          });
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