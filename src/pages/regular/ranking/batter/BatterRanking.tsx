import { useState} from "react";
import { SortingState } from "@tanstack/react-table";
import { useRankStore } from "../../../../stores/useRank.store";
import RankingRankTable from "./BatterRankTable";
import { transformBatterData } from "../../../../utils/batterUtils";

const BatterRanking = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); 
  const [sorting, setSorting] = useState<SortingState>([]);
  const { year } = useRankStore();
  const apiUrl = `/game/rank/kt/batter?gyear=${year}&pname=${searchTerm}&sortKey=`;

  return (
    <>
      <RankingRankTable
        apiUrl={apiUrl}
        sorting={sorting}
        onSortingChange={setSorting}
        transformData={transformBatterData}
        setSearchTerm={setSearchTerm}
      />
    </>
  );
};

export default BatterRanking;
