import { ColumnDef, flexRender } from "@tanstack/react-table";
import { useTable } from "../../../../../hooks/useTable";
import {
  TeamRankingTable,
  TeamRankingHeaderCell,
  TeamRankingRow,
  TeamRankingCell
} from "./TeamRecordStyles"
import { TPitRankResponse, TPitRankType } from "../../../../../types/ranking";

const TeamPitcher = () => {

  const columnDefs: ColumnDef<TPitRankType>[] = [
    { header: "팀명", accessorKey: "teamName" },
    { header: "희타", accessorKey: "sh" },
    { header: "희비", accessorKey: "sf" },
    { header: "볼넷", accessorKey: "bb" },
    { header: "고의4구", accessorKey: "ib" },
    { header: "사구", accessorKey: "hp" },
    { header: "탈삼진", accessorKey: "kk" },
    { header: "폭투", accessorKey: "wp" },
    { header: "보크", accessorKey: "bk" },
    { header: "실점", accessorKey: "r" },
    { header: "자책점", accessorKey: "er" },
    { header: "블론세이브", accessorKey: "bs" },
    { header: "WHIP", accessorKey: "whip" },
    { header: "피안타율", accessorKey: "oavg" },
    { header: "QS", accessorKey: "qs" }
  ];

  const { getHeaderGroups, getRowModel } = useTable<TPitRankType>({
    apiUrl: '/game/rank/pitching',
    columnDefs,
      transformData: (data: TPitRankResponse) => {
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
export default TeamPitcher;