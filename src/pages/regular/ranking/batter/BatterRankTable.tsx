import { useTable } from "../../../../hooks/useTable";
import { useMemo } from "react";
import { ColumnDef, SortingState, Updater, flexRender } from "@tanstack/react-table";
import SeasonSelect from "../../../../components/ranking/seasonSelect/SeasonSelect";
import SearchBar from "../../../../components/common/searchbar/SearchBar";
import {
    BattRankingTable,
    BattRankingHeaderCell,
    BattRankingRow,
    BattRankingCell,
    SelectAndSearch
} from "./css/BatterRankStyles";
import RankTableSkeleton from "../shared/RankTableSkeleton";
import useLoading from "../../../../hooks/useLoading";

type RankingTableProps<T> = {
    apiUrl: string;
    columnDefs?: ColumnDef<T>[];
    transformData?: (data: any) => T[];
    sorting: SortingState;
    onSortingChange: (updaterOrValue: Updater<SortingState>) => void;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
};

const BatterRankTable = <T,>({
    apiUrl,
    columnDefs: customColumnDefs,
    transformData,
    sorting,
    onSortingChange,
    setSearchTerm
}: RankingTableProps<T>) => {

    const isLoading = useLoading();
    const defaultSorting: SortingState = useMemo(() => [{ id: "avg", desc: false }], []);
    const defaultColumnDefs: ColumnDef<T>[] = useMemo(() => [
        { header: "선수명", accessorKey: "playerName", enableSorting: false },
        { header: "팀명", accessorKey: "teamName", enableSorting: false },
        { header: "타율", accessorKey: "avg", enableSorting: true }, //타율 = (안타 (hit) / 타수(ab))
        { header: "경기", accessorKey: "gamenum", enableSorting: true },
        { header: "타수", accessorKey: "ab", enableSorting: true },
        { header: "득점", accessorKey: "run", enableSorting: true },
        { header: "안타", accessorKey: "hit", enableSorting: true },
        { header: "2루타", accessorKey: "h2", enableSorting: true },
        { header: "3루타", accessorKey: "h3", enableSorting: true },
        { header: "홈런", accessorKey: "hr", enableSorting: true },
        { header: "타점", accessorKey: "rbi", enableSorting: true },
        { header: "도루", accessorKey: "sb", enableSorting: true },
        { header: "볼넷", accessorKey: "bb", enableSorting: true },
        { header: "사구", accessorKey: "hp", enableSorting: true },
        { header: "삼진", accessorKey: "kk", enableSorting: true },
        { header: "장타율", accessorKey: "slg", enableSorting: true },
        { header: "출루율", accessorKey: "obp", enableSorting: true } // 출루율 계산
    ], []);

    const columnDefs = useMemo(() => {
        return customColumnDefs ? [...customColumnDefs, ...defaultColumnDefs] : defaultColumnDefs;
    }, [customColumnDefs, defaultColumnDefs]);

    const table = useTable<T>({
        apiUrl,
        columnDefs,
        transformData,
        sorting: sorting.length === 0 ? defaultSorting : sorting,
        onSortingChange
    });
          
    if(isLoading) return <RankTableSkeleton/>

    return (
    <>
    <SelectAndSearch>
        <SeasonSelect />
        <SearchBar 
        placeholder="선수의 전체 이름을 입력해주세요 (예: 로하스 전상현)" 
        containerWidth="350px" 
        height="25px" 
        buttonWidth="45px"
        onSearch={(term)=>setSearchTerm(term)} 
        />
        <span>*각 항목을 클릭하시면 순위를 보실 수 있습니다.</span>
    </SelectAndSearch>
        <BattRankingTable>
            <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <BattRankingRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                    <BattRankingHeaderCell
                        key={header.id}
                        colSpan={header.colSpan}
                        onClick={header.column.getToggleSortingHandler()}
                        style={{ cursor: "pointer" }}
                        issorted = {!!header.column.getIsSorted()}
                    >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getCanSort() && "▼"}
                    </BattRankingHeaderCell>
                ))}
                </BattRankingRow>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map((row) => (
                <BattRankingRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                    <BattRankingCell key={cell.id}>
                    {String((cell.getValue()) ?? "")}
                    </BattRankingCell>
                ))}
                </BattRankingRow>
            ))}
            </tbody>
        </BattRankingTable>
    </>
    );
};

export default BatterRankTable;
