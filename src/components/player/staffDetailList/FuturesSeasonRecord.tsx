import { useMemo } from "react";
import { TFutureLeagueProps } from "../../../types/player";
import { useTableWithoutApi } from "../../../hooks/useTableWithoutApi";
import { HitRecordHeaderCell, HitRecordTable, HitRecordRow, HitRecordCell } from '../../../pages/regular/boxScore/recordButton/hitRecords/HitRecordStyles';
import { TableWrapper } from "./RegularSeasonRecord";
import { flexRender } from '@tanstack/react-table';

const FuturesSeasonRecord = ({futureRecord,isCatcher}:{futureRecord:TFutureLeagueProps,isCatcher:boolean}) => {

    const column =useMemo (() => {
        return isCatcher ? [
            { header: '타율', accessorKey: 'hra' },    // Batting Average
            { header: '경기', accessorKey: 'gamenum' }, // Games Played
            { header: '타수', accessorKey: 'ab' },        // At-Bats
            { header: '득점', accessorKey: 'run' },       // Runs
            { header: '안타', accessorKey: 'hit' },       // Hits
            { header: '2루타', accessorKey: 'h2' },       // Doubles
            { header: '3루타', accessorKey: 'h3' },       // Triples
            { header: '홈런', accessorKey: 'hr' },        // Home Runs
            { header: '타점', accessorKey: 'rbi' },       // RBIs
            { header: '도루', accessorKey: 'sb' },        // Stolen Bases
            { header: '볼넷', accessorKey: 'bb' },        // Walks
            { header: '사구', accessorKey: 'hp' },        // Hit by Pitch
            { header: '삼진', accessorKey: 'kk' },        // Strikeouts
            { header: '장타율', accessorKey: 'slg' },     // Slugging Percentage
            { header: '출루율', accessorKey: 'bra' },     // On-Base Percentage
    ]:[
        { header: '평균 자책점', accessorKey: 'era' },
        { header: '경기수', accessorKey: 'gamenum' },
        { header: '승', accessorKey: 'w' },
        { header: '패', accessorKey: 'l' },
        { header: '세이브', accessorKey: 'sv' },
        { header: '홀드', accessorKey: 'hold' },
        { header: '승률', accessorKey: 'wra' },
        { header: '이닝', accessorKey: 'innDisplay' },
        { header: '피안타', accessorKey: 'hit' },
        { header: '피홈런', accessorKey: 'hr' },
        { header: '볼넷', accessorKey: 'bb' },        // Walks
        { header: '사구', accessorKey: 'hp' },        // Hit by Pitch
        { header: '탈삼진', accessorKey: 'kk' },
        { header: '실점', accessorKey: 'r' },
        { header: '자책점', accessorKey: 'er' },
    ]
    },[isCatcher])

    const rowTable=useTableWithoutApi<TFutureLeagueProps>({
        data:[futureRecord],
        columnDefs:column,
    })

  return (
    <>
     <TableWrapper>
        <HitRecordTable>
            <thead>
            {rowTable.getHeaderGroups().map((headerGroup) => (
              <HitRecordRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <HitRecordHeaderCell key={header.id} colSpan={header.colSpan}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </HitRecordHeaderCell>
                ))}
              </HitRecordRow>
            ))}
          </thead>
          <tbody>
            {rowTable.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <HitRecordCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </HitRecordCell>
                  ))}
                </tr>
              ))}
          </tbody>
        </HitRecordTable>
     </TableWrapper>
    </>
  );
}
export default FuturesSeasonRecord