import { ColumnDef, flexRender } from "@tanstack/react-table";
import { useTable } from "../../../../../hooks/useTable";
import {
  TeamRankingTable,
  TeamRankingHeaderCell,
  TeamRankingRow,
  TeamRankingCell
} from "./TeamRecordStyles"
import { TBattRankResponse, TBattRankType } from "../../../../../types/ranking";

const TeamBatter = () => {

  const columnDefs: ColumnDef<TBattRankType>[] = [
    { header: "팀명", accessorKey: "teamName" },
    { header: "안타", accessorKey: "hit" },
    { header: "2루타", accessorKey: "h2" },
    { header: "3루타", accessorKey: "h3" },
    { header: "홈런", accessorKey: "hr" },
    { header: "타점", accessorKey: "rbi" },
    { header: "도루", accessorKey: "sb" },
    { header: "볼넷", accessorKey: "bb" },
    { header: "고의4구", accessorKey: "ib" },
    { header: "사구", accessorKey: "hp" },
    { header: "삼진", accessorKey: "kk" },
    { header: "병살", accessorKey: "gd" },
    { header: "장타율", accessorKey: "slg" },
    { header: "출루율", accessorKey: "bra" },
    { header: "실책", accessorKey: "err" },
    { header: "OPS", accessorKey: "ops" },
    { header: "타율", accessorKey: "hra" }
  ];

  const { getHeaderGroups, getRowModel } = useTable<TBattRankType>({
    apiUrl: '/game/rank/batting',
    columnDefs,
    transformData: (data: TBattRankResponse) => {
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
export default TeamBatter;