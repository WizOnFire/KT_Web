import { ColumnDef, SortingState } from "@tanstack/react-table";
import RankingApiTable from "./BatterRankTable";
import { useRankStore } from "../../../../stores/useRank.store";
import { useState } from "react";
import { TBatterRankType, TBatterResponse } from "../../../../types/ranking";
import { transformBatterData } from "../../../../utils/batterUtils";

const AllBatterRank = () => {
  const { year } = useRankStore();
  const [sorting, setSorting] = useState<SortingState>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");  // 실시간 검색어 상태
  const apiUrl = `/game/rank/total/batter?gyear=${year}&pname=${searchTerm}&sortKey=`;
  const transformData = (data: TBatterResponse) => {
    const transformedData = transformBatterData(data);
    return transformedData.map((batter: TBatterRankType, index:number) => ({
        ...batter,
        num: index + 1
      }));
  };

  const addColumnDefs : ColumnDef<TBatterRankType>[] = [
    { header: "순위", accessorKey: "num", enableSorting: false },
  ];

  return (
    <>
      <RankingApiTable
        apiUrl={apiUrl}
        sorting={sorting}
        onSortingChange={setSorting}
        columnDefs={addColumnDefs}
        transformData={transformData}
        setSearchTerm={setSearchTerm}
      />
    </>
  );
}
export default AllBatterRank;
