import { TRecent5FuturesRecord, TRecent5FuturesRecordsProps, TRecent5FuturesRecordsProps_C } from "../../../types/player";
import { useMemo } from "react";
import { ColumnDef, flexRender } from '@tanstack/react-table';
import { HitRecordHeaderCell,HitRecordTable,HitRecordRow,HitRecordCell} from '../../../pages/regular/boxScore/recordButton/hitRecords/HitRecordStyles';
import { TableWrapper } from './RegularSeasonRecord';
import { parseInningToNumber } from "./Recent5Record";
import { useTableWithoutApi } from "../../../hooks/useTableWithoutApi";

const Recent5FuturesRecord = ({recent5gameFuturesRecords,isCatcher}:{recent5gameFuturesRecords:TRecent5FuturesRecord,isCatcher:boolean}) => {

    const columns:ColumnDef<TRecent5FuturesRecordsProps|TRecent5FuturesRecordsProps_C>[]=useMemo(()=>{
        return isCatcher?[
            { header: '일자', accessorKey: 'displayDate' },       // Displayed Date (일자)
            { header: '상대', accessorKey: 'matchTeamName' },     // Opponent Team Name (상대)
            { header: '타율', accessorKey: 'hra' },               // Batting Average (타율)
            { header: '타수', accessorKey: 'ab' },                // At-bats (타수)
            { header: '득점', accessorKey: 'run' },               // Runs Scored (득점)
            { header: '안타', accessorKey: 'hit' },               // Hits (안타)
            { header: '2루타', accessorKey: 'h2' },               // Doubles (2루타)
            { header: '3루타', accessorKey: 'h3' },               // Triples (3루타)
            { header: '홈런', accessorKey: 'hr' },                // Home Runs (홈런)
            { header: '타점', accessorKey: 'rbi' },               // Runs Batted In (타점)
            { header: '도루', accessorKey: 'sb' },                // Stolen Bases (도루)
            { header: '도실', accessorKey: 'cs' },                // Caught Stealing (도루실패)
            { header: '볼넷', accessorKey: 'bb' },                // Walks (볼넷)
            { header: '사구', accessorKey: 'hp' },                // Hit by Pitch (사구)
            { header: '삼진', accessorKey: 'kk' },                // Strikeouts (삼진)
            { header: '병살', accessorKey: 'gd' },        
            ]              
        :[
            { header: '일자', accessorKey: 'displayDate' },  
            {header:'상대', accessorKey:'matchTeamName'},
            {header:'결과',accessorKey:'wls',
                cell:({getValue})=>{
                    const result=getValue<string>();
                    return result==='W'?'승':result==='L'?'패':result;
                },}, 
            {header:'평균자책점',
            cell: ({ row }:any) => {
                const er = row.original.er ?? 0; // 자책점
                const innDisplay = row.original.innDisplay ?? "0"; // 이닝 (문자열)
                // 이닝을 실수형으로 변환 (예: "6.2" -> 6 + (2/3))
                const innings = parseInningToNumber(innDisplay);
                
                // 평균 자책점 계산
                const era = innings > 0 ? ((er * 9) / innings).toFixed(2) : "0.00"
                return era;
        }},
        {header:'타자',accessorKey:'pa'},
        {header:'이닝',accessorKey:'innDisplay'},
        {header:'피안타',accessorKey:'hit'},
        {header:'피홈런',accessorKey:"hr"},
        {header:'볼넷',accessorKey:'bb'},
        {header:'사구',accessorKey:'hp'},
        {header:'탈삼진',accessorKey:'kk'},
        {header:'실점',accessorKey:'r'},
        {header:'자책점',accessorKey:'er'}
            

        ]
    },[isCatcher]);

    const rowTable = useTableWithoutApi<TRecent5FuturesRecordsProps|TRecent5FuturesRecordsProps_C>({
    data:recent5gameFuturesRecords,
    columnDefs:columns
  })

  const hasData =  recent5gameFuturesRecords&& recent5gameFuturesRecords.length > 0;
  return (
    <>
        <TableWrapper>
        <HitRecordTable>
            <thead>
                {rowTable.getHeaderGroups().map((headerGroup)=>(
                    <HitRecordRow key={headerGroup.id}>
                        {headerGroup.headers.map(header=>(
                            <HitRecordHeaderCell key={header.id} colSpan={header.colSpan}>
                                {flexRender(header.column.columnDef.header,header.getContext())}
                            </HitRecordHeaderCell>
                        ))}
                    </HitRecordRow>
                ))}
            </thead>
            <tbody>
                {hasData ? (
                            rowTable.getRowModel().rows.map(row => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map(cell => (
                                        <HitRecordCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </HitRecordCell>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <HitRecordRow>
                                <HitRecordCell colSpan={columns.length}>
                                    데이터가 없습니다.
                                </HitRecordCell>
                            </HitRecordRow>
                        )}
            </tbody>


        </HitRecordTable>
      </TableWrapper>
    </>
  );
}
export default Recent5FuturesRecord