import { ColumnDef, flexRender } from "@tanstack/react-table";
import { useTable } from "../../../../../hooks/useTable";
import {
  TeamRankingTable,
  TeamRankAudienceCell,
  TeamRankingRow,
  TeamRankingCell
} from "./TeamRecordStyles"
import { TTeamRankResponse, TTeamRankType } from "../../../../../types/ranking";

const TeamRecords = () => {

  const columnDefs: ColumnDef<TTeamRankType>[] = [
    { header: "순위", accessorKey: "rank" },
    { header: "팀명", accessorKey: "teamName" },
    { header: "경기 수", accessorKey: "game" },
    { header: "승", accessorKey: "win" },
    { header: "패", accessorKey: "lose" },
    { header: "무", accessorKey: "drawn" },
    { header: "승률", accessorKey: "wra" },
    { header: "타수", accessorKey: "ab" },
    { header: "연속", accessorKey: "continue1" },
    { header: "출루율", accessorKey: "bra" },
    { header: "장타율", accessorKey: "lra" },
    { header: "타율", accessorKey: "hra" },
    { header: "자책점", accessorKey: "er" },
    { header: "득점", accessorKey: "run" },
    { header: "실점", accessorKey: "r" },
    { header: "홈런", accessorKey: "hr" },
  ];

  const { getHeaderGroups, getRowModel } = useTable<TTeamRankType>({
    apiUrl: '/game/teamrankbyyear',
    columnDefs,
      transformData: (data: TTeamRankResponse) => {
        return data?.data?.list || [];
      }
  });

  return (
    <>
      <TeamRankingTable>
        <thead>
          {getHeaderGroups().map(headerGroup => (
            <TeamRankingRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TeamRankAudienceCell key={header.id} colSpan={header.colSpan}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TeamRankAudienceCell>
              ))}
            </TeamRankingRow>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map(row => (
            <TeamRankingRow key={row.id}>
              {row.getVisibleCells().map(cell => (
                <TeamRankingCell key={cell.id} $isKT={row.original.teamName === 'KT'}>
                  {String(cell.getValue())}
                </TeamRankingCell>
              ))}
            </TeamRankingRow>
          ))}
        </tbody>
      </TeamRankingTable>
    </>
  );
}
export default TeamRecords;