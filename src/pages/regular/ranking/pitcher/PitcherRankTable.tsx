import { useTable } from "../../../../hooks/useTable";
import { ColumnDef, SortingState, Updater, flexRender } from "@tanstack/react-table";
import SeasonSelect from "../../../../components/ranking/seasonSelect/SeasonSelect";
import SearchBar from "../../../../components/common/searchbar/SearchBar";
import {
    PitRankingTable,
    PitRankingHeaderCell,
    PitRankingRow,
    PitRankingCell,
    SelectAndSearch
} from "./css/PitcherRankStyles";
import { useMemo } from "react";

type RankingTableProps<T> = {
    apiUrl: string;
    columnDefs?: ColumnDef<T>[]; 
    transformData?: (data: any) => T[];
    sorting: SortingState;
    onSortingChange: (updaterOrValue: Updater<SortingState>) => void;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
};

const PitcherRankTable = <T,>({
    apiUrl,
    columnDefs: customColumnDefs,
    transformData,
    sorting,
    onSortingChange,
    setSearchTerm
}: RankingTableProps<T>) => {
    const defaultSorting: SortingState = useMemo(() => [{ id: "era", desc: false }], []);
    const defaultColumnDefs: ColumnDef<T>[] = useMemo(() => [
        { header: "팀명", accessorKey: "teamName", enableSorting: false },
        { header: "선수명", accessorKey: "playerName", enableSorting: false },
        { header: "평균자책점", accessorKey: "era", enableSorting: true },
        { header: "경기수", accessorKey: "gamenum", enableSorting: true },
        { header: "승", accessorKey: "w", enableSorting: true },
        { header: "패", accessorKey: "l", enableSorting: true },
        { header: "세이브", accessorKey: "sv", enableSorting: true },
        { header: "홀드", accessorKey: "hold", enableSorting: true },
        { header: "승률", accessorKey: "wra", enableSorting: true },
        { header: "이닝", accessorKey: "inn", enableSorting: true },
        { header: "피안타", accessorKey: "hit", enableSorting: true },
        { header: "피홈런", accessorKey: "hr", enableSorting: true },
        { header: "볼넷", accessorKey: "bb", enableSorting: true },
        { header: "사구", accessorKey: "hp", enableSorting: true },
        { header: "탈삼진", accessorKey: "kk", enableSorting: true },
        { header: "실점", accessorKey: "r", enableSorting: true },
        { header: "자책점", accessorKey: "er", enableSorting: true },
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

    return (
    <>
    <SelectAndSearch>
            <SeasonSelect />
            <SearchBar 
            placeholder="선수의 전체 이름을 입력해주세요 (예: 엄상백 소형준)" 
            containerWidth="350px" 
            height="25px" 
            buttonWidth="45px"
            onSearch={(term)=>setSearchTerm(term)} 
            />
        <span>*각 항목을 클릭하시면 순위를 보실 수 있습니다.</span>
    </SelectAndSearch>
        <PitRankingTable>
            <thead>
            {table.getHeaderGroups().map((headerGroup) => (
                <PitRankingRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                    <PitRankingHeaderCell
                        key={header.id}
                        colSpan={header.colSpan}
                        onClick={header.column.getToggleSortingHandler()}
                        style={{ cursor: "pointer" }}
                        issorted = {!!header.column.getIsSorted()}
                    >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.getCanSort() && "▼"}
                    </PitRankingHeaderCell>
                ))}
                </PitRankingRow>
            ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map((row) => (
                <PitRankingRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                    <PitRankingCell key={cell.id}>
                    {String((cell.getValue()) ?? "")}
                    </PitRankingCell>
                ))}
                </PitRankingRow>
            ))}
            </tbody>
        </PitRankingTable>
    </>
    );
};

export default PitcherRankTable;
