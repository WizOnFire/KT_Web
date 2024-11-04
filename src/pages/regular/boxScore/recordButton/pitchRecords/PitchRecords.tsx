import { useState } from "react";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import { useTable } from "../../../../../hooks/useTable";
import { TBoxScoreResponse, ThpitchersAndvpitchers } from "../../../../../types/game";
import {
  PitchRecordLabel,
  PitchRecordTable,
  PitchRecordHeaderCell,
  PitchRecordRow,
  PitchRecordCell
} from "./PitchRecordStyles"
import styled from "styled-components";
import { SkeletonBox } from "../score/ScoreSkeleton";
import useLoading from "../../../../../hooks/useLoading";

const SkeletonText = styled(SkeletonBox)`
  display: inline-block;
  width: 100px; 
  height: 25px;
  margin: 50px 0 5px 0 ;
`

const SkeletonRankBox = styled(SkeletonBox)`
    max-width: 1100px;
    width: 100%;
    height: 200px;
    font-size: 12px;
    box-sizing: border-box;
    caret-color: transparent;
`

const PitchRecords = ({apiUrl} : {apiUrl: string}) => {

  const columnDefs: ColumnDef<ThpitchersAndvpitchers>[] = [
    { header: '이름', accessorKey: 'name' },
    { header: '등판', accessorKey: 'changeinn' },
    { header: '결과', accessorKey: 'wls' },
    { header: '승', accessorKey: 'w' },
    { header: '패', accessorKey: 'l' },
    { header: '세', accessorKey: 's' },
    { header: '이닝', accessorKey: 'inn' },
    { header: '타자', accessorKey: 'pa' },
    { header: '투구수', accessorKey: 'bf' },
    { header: '타수', accessorKey: 'ab' },
    { header: '피안타', accessorKey: 'hit' },
    { header: '피홈런', accessorKey: 'hr' },
    { header: '사구', accessorKey: 'bbhp' },
    { header: '삼진', accessorKey: 'kk' },
    { header: '실점', accessorKey: 'r' },
    { header: '자책', accessorKey: 'er' },
    { header: '평균 자책점', accessorKey: 'accmErFormatted' },
  ];

  const [homeTeam, setHomeTeam] = useState("홈팀");
  const [visitTeam, setVisitTeam] = useState("원정팀");

  const calculateERA = (accmEr: number, accmInn2: number) => {
    const parseAccmInn2 = parseFloat((accmInn2 / 3).toFixed(2));
    const era = (accmEr / parseAccmInn2) * 9;
    const roundedEra = Math.round(era * 100)/100;
    return roundedEra.toFixed(2);
  }

  const isLoading = useLoading();

  const homeTable = useTable<ThpitchersAndvpitchers>({
    apiUrl: apiUrl,
    columnDefs,
    transformData: (data: TBoxScoreResponse) => {
      const homeLabel = data?.data?.schedule?.current?.home;
      setHomeTeam(homeLabel);
      if (data?.data?.hpitchers) {
        return data.data.hpitchers.map(pitcher => ({
          // 평균 자책점 
          ...pitcher,
          accmEr: Number(pitcher.accmEr),
          accmErFormatted: calculateERA(Number(pitcher.accmEr), pitcher.accmInn2), 
        }));
      } else {
        console.error("홈팀 투수 데이터를 찾을 수 없습니다.", data);
        return [];
      }
    }
  });
  
  const visitTable = useTable<ThpitchersAndvpitchers>({
    apiUrl: apiUrl,
    columnDefs,
    transformData: (data: TBoxScoreResponse) => {
      const visitLabel = data?.data?.schedule?.current?.visit;
      setVisitTeam(visitLabel);
      if (data?.data?.vpitchers) {
        return data.data.vpitchers.map(pitcher => ({
          ...pitcher,
          accmEr: Number(pitcher.accmEr),
          accmErFormatted: calculateERA(Number(pitcher.accmEr), pitcher.accmInn2), 
        }));
      } else {
        console.error("홈팀 투수 데이터를 찾을 수 없습니다.", data);
        return [];
      }
    }
  });

  return (
    <>
      {isLoading ? (
        <>
          <SkeletonText/>
          <SkeletonRankBox/>
          <SkeletonText/>
          <SkeletonRankBox/>
        </>
      ):(
      <>
      <PitchRecordLabel>{homeTeam} 투수 기록</PitchRecordLabel>
        <PitchRecordTable>
          <thead>
            {homeTable.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <PitchRecordHeaderCell key={header.id} colSpan={header.colSpan}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </PitchRecordHeaderCell>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {homeTable.getRowModel().rows.map(row => (
                <PitchRecordRow key={row.id}>
                  {row.getVisibleCells().map(cell=> (
                    <PitchRecordCell key={cell.id}>
                        {String(cell.getValue())}
                    </PitchRecordCell>
                  ))}
                </PitchRecordRow>
              ))}
          </tbody>
        </PitchRecordTable>
    
        <PitchRecordLabel>{visitTeam} 투수 기록</PitchRecordLabel>
        <PitchRecordTable>
          <thead>
            {visitTable.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <PitchRecordHeaderCell key={header.id} colSpan={header.colSpan}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </PitchRecordHeaderCell>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {visitTable.getRowModel().rows.map(row => (
              <PitchRecordRow key={row.id}>
                {row.getVisibleCells().map(cell=> (
                  <PitchRecordCell key={cell.id}>
                      {String(cell.getValue())}
                  </PitchRecordCell>
                ))}
              </PitchRecordRow>
            ))}
          </tbody>
        </PitchRecordTable>
      </>
      )}
    </>
  );
}
export default PitchRecords;
