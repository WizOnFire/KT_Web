import { ColumnDef, flexRender } from '@tanstack/react-table';
import { useTableWithoutApi } from '../../../hooks/useTableWithoutApi';
import { TRegularLeagueProps } from '../../../types/player';
import { MainStatsHeaderCell,MainStatsTable,RowTr,MainStatsCell} from '../../../pages/regular/boxScore/recordButton/hitRecords/HitRecordStyles';
import styled from 'styled-components';


const TableWrapper=styled.div`
    width:1100px;
    justify-content: center;
    align-items: center;
    @media (max-width: 1200px) {
        max-width: 900px; 
  }
  `
const RegularSeasonRecord = ({ regularLeagueData }: { regularLeagueData: TRegularLeagueProps }) => {
    //console.log("rendering")
  // 첫 번째 줄에 렌더링할 14개의 컬럼
  const firstRowColumns: ColumnDef<TRegularLeagueProps>[] = [
    { header: '평균 자책점', accessorKey: 'era' },            
    { header: '경기수', accessorKey: 'gamenum' },             
    { header: '완투', accessorKey: 'cg' },                     
    { header: '완봉', accessorKey: 'sho' },                    
    { header: '승', accessorKey: 'w' },                        
    { header: '패', accessorKey: 'l' },                        
    { header: '세이브', accessorKey: 'sv' },                   
    { header: '홀드', accessorKey: 'hold' },                   
    { header: '승률', accessorKey: 'wp' },                     
    { header: '타자', accessorKey: 'bf' },                     
    { header: '투구수', accessorKey: 'tugucount' },            
    { header: '이닝', accessorKey: 'innDisplay' },             
    { header: '피안타', accessorKey: 'hit' },                  
    { header: '피홈런', accessorKey: 'hr' }, 
    { header: '',id:'empty', accessorKey: '', enableSorting: false, cell: () => null }, // 빈열 추가                  
  ];

  // 두 번째 줄에 렌더링할 15개의 컬럼
  const secondRowColumns: ColumnDef<TRegularLeagueProps>[] = [
    { header: '희비', accessorKey: 'sfi' },                   
    { header: '희타', accessorKey: 'sh' },                    
    { header: '볼넷', accessorKey: 'bb' },                    
    { header: '고의4구', accessorKey: 'ib' },                 
    { header: '사구', accessorKey: 'hp' },                    
    { header: '탈삼진', accessorKey: 'kk' },                  
    { header: '폭투', accessorKey: 'wp' },                    
    { header: '보크', accessorKey: 'bk' },                    
    { header: '실점', accessorKey: 'r' },                     
    { header: '자책점', accessorKey: 'er' },                  
    { header: '블론 세이브', accessorKey: 'bs' },             
    { header: 'WHIP', accessorKey: 'whip' },                  
    { header: '피안타율', accessorKey: 'oavg' },              
    { header: 'QS', accessorKey: 'qs' },                      
    { header: 'K/BB', accessorKey: 'kbb' },                   
  ];


const handleData = (data: TRegularLeagueProps): TRegularLeagueProps => {
  return {
    era: data.era ?? 0,                  // 평균 자책점
    gamenum: data.gamenum ?? 0,          // 경기수
    cg: data.cg ?? 0,                    // 완투
    sho: data.sho ?? 0,                  // 완봉
    w: data.w ?? 0,                      // 승
    l: data.l ?? 0,                      // 패
    sv: data.sv ?? 0,                    // 세이브
    hold: data.hold ?? 0,                // 홀드
    wp: data.wp ?? 0,                    // 승률
    bf: data.bf ?? 0,                    // 타자
    tugucount: data.tugucount ?? 0,      // 투구수
    innDisplay: data.innDisplay ?? "0",  // 이닝 (문자열로 표시되는 값일 가능성이 크므로 0을 문자열로 반환)
    hit: data.hit ?? 0,                  // 피안타
    hr: data.hr ?? 0,                    // 피홈런
    sfi: data.sfi ?? 0,                  // 희비
    sh: data.sh ?? 0,                    // 희타
    bb: data.bb ?? 0,                    // 볼넷
    ib: data.ib ?? 0,                    // 고의4구
    hp: data.hp ?? 0,                    // 사구
    kk: data.kk ?? 0,                    // 탈삼진
    wp: data.wp ?? 0,                    // 폭투
    bk: data.bk ?? 0,                    // 보크
    r: data.r ?? 0,                      // 실점
    er: data.er ?? 0,                    // 자책점
    bs: data.bs ?? 0,                    // 블론 세이브
    whip: data.whip ?? 0,                // WHIP (이닝당 안타와 볼넷 허용률)
    oavg: data.oavg ?? 0,                // 피안타율
    qs: data.qs ?? 0,                    // QS (퀄리티 스타트)
    kbb: data.kbb ?? 0,                  // K/BB 비율
  };
};
  // 훅은 최상위에서 호출해야 함. useMemo로 감쌌더니 반복 렌더링하고 난리남
  const firstRowTable = useTableWithoutApi<TRegularLeagueProps>({
    data: [regularLeagueData],
    columnDefs: firstRowColumns,
    transformData:handleData,
  });

  const secondRowTable = useTableWithoutApi<TRegularLeagueProps>({
    data: [regularLeagueData],
    columnDefs: secondRowColumns,
    transformData:handleData,
  });

  return (
    <>
    <TableWrapper>
    <MainStatsTable style={{justifyContent:"center", alignContent:"center"}}>
      {/* <table> */}
        {/* 첫 번째 줄 헤더 */}
        <thead>
          {firstRowTable.getHeaderGroups().map(headerGroup => (
            <RowTr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <MainStatsHeaderCell key={header.id} colSpan={header.colSpan}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </MainStatsHeaderCell>
              ))}
            </RowTr>
          ))}
        </thead>
        <tbody>
          {/* 첫 번째 줄 데이터 */}
          {firstRowTable.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <MainStatsCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </MainStatsCell>
              ))}
            </tr>
          ))}
        </tbody>

        {/* 두 번째 줄 헤더 */}
        <thead>
          {secondRowTable.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <MainStatsHeaderCell key={header.id} colSpan={header.colSpan}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </MainStatsHeaderCell>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {/* 두 번째 줄 데이터 */}
          {secondRowTable.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <MainStatsCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </MainStatsCell>
              ))}
            </tr>
          ))}
        </tbody>
      {/* </table> */}
      </MainStatsTable>
      </TableWrapper>
    </>
  );
};

export default RegularSeasonRecord;
