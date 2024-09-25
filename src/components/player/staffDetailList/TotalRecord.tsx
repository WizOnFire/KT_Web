import { ColumnDef, flexRender } from '@tanstack/react-table';
import { useTableWithoutApi } from '../../../hooks/useTableWithoutApi';
import { TTotalRecordProps, TTotalRecordProps_C, TTotalRecords} from '../../../types/player';
import { HitRecordHeaderCell,HitRecordTable,HitRecordRow,HitRecordCell} from '../../../pages/regular/boxScore/recordButton/hitRecords/HitRecordStyles';
import { TableWrapper } from './RegularSeasonRecord';
import { useMemo } from 'react';

const TotalRecord = ({totalRecords,isCatcher}:{totalRecords:TTotalRecords|TTotalRecordProps_C|any; isCatcher:boolean}) => {
    const columns:ColumnDef<TTotalRecordProps>[]=useMemo(()=>{
        return isCatcher?  [
        { header: '연도', accessorKey: 'gyear' },            // Game Year (연도)
        { header: '팀', accessorKey: 'teamName' },           // Team Name (팀)
        { header: '타율', accessorKey: 'hra' },              // Batting Average (타율)
        { header: '경기', accessorKey: 'gamenum' },          // Games Played (경기)
        { header: '타수', accessorKey: 'ab' },               // At-bats (타수)
        { header: '득점', accessorKey: 'run' },              // Runs Scored (득점)
        { header: '안타', accessorKey: 'hit' },              // Hits (안타)
        { header: '2루타', accessorKey: 'h2' },              // Doubles (2루타)
        { header: '3루타', accessorKey: 'h3' },              // Triples (3루타)
        { header: '홈런', accessorKey: 'hr' },               // Home Runs (홈런)
        { header: '타점', accessorKey: 'rbi' },              // Runs Batted In (타점)
        { header: '도루', accessorKey: 'sb' },               // Stolen Bases (도루)
        { header: '도실', accessorKey: 'cs' },               // Caught Stealing (도실)
        { header: '볼넷', accessorKey: 'bb' },               // Walks (볼넷)
        { header: '사구', accessorKey: 'hp' },               // Hit by Pitch (사구)
        { header: '삼진', accessorKey: 'kk' },               // Strikeouts (삼진)
        { header: '병살', accessorKey: 'gd' },               // Grounded into Double Play (병살)
        { header: '장타율', accessorKey: 'slg' },            // Slugging Percentage (장타율)
        { header: '출루율', accessorKey: 'bra' },         // On-base Percentage (출루율)
        ]:
        [
        {header: '연도',accessorKey:'gyear'},
        {header: '팀',accessorKey:'teamName'},
        {header: '평균자책점',accessorKey:'era'},
        {header: '경기',accessorKey:'gamenum'},
        {header: '완투', accessorKey: 'wCg' },  
        {header: '완봉', accessorKey: 'sho' }, 
        {header: '승', accessorKey: 'w' },                        
        {header: '패', accessorKey: 'l' },
        {header: '세',accessorKey:'sv'},
        {header: '홀',accessorKey:'hold'},
        {header: '승률', accessorKey: 'wra' },    
        {header: '타자',accessorKey:'hit'},
        {header: '이닝',accessorKey:'innDisplay'},
        {header: '피안타',accessorKey:'hit'},
        {header: '피홈런',accessorKey:"hr"},
        {header: '볼넷',accessorKey:'bb'},
        {header: '사구',accessorKey:'hp'},
        {header: '탈삼진',accessorKey:'kk'},
        {header: '실점',accessorKey:'r'},
        {header: '자책점',accessorKey:'er'}
    ]
    },[isCatcher])

    const rowTable=useTableWithoutApi<TTotalRecordProps|TTotalRecordProps_C|any>({
        data:totalRecords,
        columnDefs:columns,
    })

    const hasData = totalRecords && totalRecords.length > 0;
  
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
export default TotalRecord