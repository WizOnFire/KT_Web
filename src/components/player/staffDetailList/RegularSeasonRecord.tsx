import { useMemo } from 'react';
import { flexRender } from '@tanstack/react-table';
import { useTableWithoutApi } from '../../../hooks/useTableWithoutApi';
import { TRegularLeagueProps, TRegularLeagueProps_C } from '../../../types/player';
import { HitRecordHeaderCell, HitRecordTable, HitRecordRow, HitRecordCell } from '../../../pages/regular/boxScore/recordButton/hitRecords/HitRecordStyles';
import styled from 'styled-components';


export const TableWrapper = styled.div`
  width: 1100px;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    max-width: 900px;
  }
`;

const RegularSeasonRecord = ({ regularLeagueData, isCatcher }: { regularLeagueData: TRegularLeagueProps | TRegularLeagueProps_C | any, isCatcher: boolean }) => {
  
  // 첫 번째 줄 컬럼을 isCatcher에 따라 분리
  const firstRowColumns = useMemo(() => {
    return isCatcher ? [
      { header: '타율', accessorKey: 'hra' },    // Batting Average
      { header: '경기수', accessorKey: 'gamenum' }, // Games Played
      { header: '타석', accessorKey: 'pa' },        // Plate Appearances
      { header: '타수', accessorKey: 'ab' },        // At-Bats
      { header: '득점', accessorKey: 'run' },       // Runs
      { header: '안타', accessorKey: 'hit' },       // Hits
      { header: '2루타', accessorKey: 'h2' },       // Doubles
      { header: '3루타', accessorKey: 'h3' },       // Triples
      { header: '홈런', accessorKey: 'hr' },        // Home Runs
      { header: '타점', accessorKey: 'rbi' },       // RBIs
      { header: '도루', accessorKey: 'sb' },        // Stolen Bases
      { header: '도실', accessorKey: 'cs' },        // Caught Stealing
      { header: '희타', accessorKey: 'sh' },        // Sacrifice Hits
      { header: '희비', accessorKey: 'sf' },        // Sacrifice Fly
    ] : [
      { header: '평균 자책점', accessorKey: 'era' },
      { header: '경기수', accessorKey: 'gamenum' },
      { header: '완투', accessorKey: 'wCg' },
      { header: '완봉', accessorKey: 'sho' },
      { header: '승', accessorKey: 'w' },
      { header: '패', accessorKey: 'l' },
      { header: '세이브', accessorKey: 'sv' },
      { header: '홀드', accessorKey: 'hold' },
      { header: '승률', accessorKey: 'wra' },
      { header: '타자', accessorKey: 'bf' },
      { header: '투구수', accessorKey: 'tugucount' },
      { header: '이닝', accessorKey: 'innDisplay' },
      { header: '피안타', accessorKey: 'hit' },
      { header: '피홈런', accessorKey: 'hr' },
      {header:'IP/G',cell:({row}:any)=>{
        return ((row.original.innDisplay)/(row.original.gamenum)).toFixed(3);
      }}
    ];
  }, [isCatcher]);

  // 두 번째 줄 컬럼을 isCatcher에 따라 분리
  const secondRowColumns = useMemo(() => {
    return isCatcher ? [
      { header: '볼넷', accessorKey: 'bb' },        // Walks
      { header: '고의4구', accessorKey: 'ib' },     // Intentional Walks
      { header: '사구', accessorKey: 'hp' },        // Hit by Pitch
      { header: '삼진', accessorKey: 'kk' },        // Strikeouts
      { header: '병살', accessorKey: 'gd' },        // Grounded into Double Plays
      { header: '장타율', accessorKey: 'slg' },     // Slugging Percentage
      { header: '출루율', accessorKey: 'bra' },     // On-Base Percentage
      { header: '실책', accessorKey: 'cs' },         // Errors
      { header: '도루성공률',
        cell: ({ row }: any) => {
          const cs = row.original.cs ?? 0;
          const sb = row.original.sb ?? 0;
          return (sb / (cs + sb)).toFixed(3);
        }
      }, // Stolen Base Success Rate
      { header: 'BB/K', accessorKey: 'bbkk' },      // Walk-to-Strikeout Ratio
      { header: '장타/안타', accessorKey: 'xbhrun' }, // Extra-Base Hits per Hit
      { header: 'OPS', accessorKey: 'ops' },        // OPS (On-base Plus Slugging)
      { header: '득점권 타율', accessorKey: 'spHra' }, // Batting Average with Runners in Scoring Position
      { header: 'ISO', cell: ({ row }) => (row.original.slg - row.original.hra).toFixed(3) }
    ] : [
      { header: '희비', accessorKey: 'sf' },
      { header: '희타', accessorKey: 'sh' },
      { header: '볼넷', accessorKey: 'bb' },
      { header: '고의4구', accessorKey: 'ib' },
      { header: '사구', accessorKey: 'hp' },
      { header: '탈삼진', accessorKey: 'kk' },
      { header: '폭투', accessorKey: 'wra' },
      { header: '보크', accessorKey: 'bk' },
      { header: '실점', accessorKey: 'r' },
      { header: '자책점', accessorKey: 'er' },
      { header: '블론 세이브', accessorKey: 'bs' },
      { header: 'WHIP', accessorKey: 'whip' },
      { header: '피안타율', accessorKey: 'oavg' },
      { header: 'QS', accessorKey: 'qs' },
      { header: 'K/BB', accessorKey: 'kbb' },
    ];
  }, [isCatcher]);

  const handleData = (data: any): any => {
    return data ? { ...data } : {};
  };

  const firstRowTable = useTableWithoutApi<TRegularLeagueProps | TRegularLeagueProps_C>({
    data: regularLeagueData ? [regularLeagueData] : [],
    columnDefs: firstRowColumns,
    transformData: handleData,
  });

  const secondRowTable = useTableWithoutApi<TRegularLeagueProps | TRegularLeagueProps_C>({
    data: regularLeagueData ? [regularLeagueData] : [],
    columnDefs: secondRowColumns,
    transformData: handleData,
  });

  const hasData = regularLeagueData && Object.keys(regularLeagueData).length > 0;

  return (
    <>
      <TableWrapper>
        <HitRecordTable>
          {/* 첫 번째 줄 헤더 */}
          <thead>
            {firstRowTable.getHeaderGroups().map((headerGroup) => (
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
            {hasData ? (
              firstRowTable.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <HitRecordCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </HitRecordCell>
                  ))}
                </tr>
              ))
            ) : (
              <HitRecordRow>
                <HitRecordCell colSpan={firstRowColumns.length}>
                  데이터가 없습니다.
                </HitRecordCell>
              </HitRecordRow>
            )}
          </tbody>

          {/* 두 번째 줄 헤더 */}
          <thead>
            {secondRowTable.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <HitRecordHeaderCell key={header.id} colSpan={header.colSpan}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </HitRecordHeaderCell>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {hasData ? (
              secondRowTable.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <HitRecordCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </HitRecordCell>
                  ))}
                </tr>
              ))
            ) : (
              <HitRecordRow>
                <HitRecordCell colSpan={secondRowColumns.length}>
                  데이터가 없습니다.
                </HitRecordCell>
              </HitRecordRow>
            )}
          </tbody>
        </HitRecordTable>
      </TableWrapper>
    </>
  );
};

export default RegularSeasonRecord;
