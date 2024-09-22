import { ColumnDef, SortingState, Updater, flexRender } from "@tanstack/react-table";
import { useTable } from "../../../../hooks/useTable";
import {
    BattRankingTable,
    BattRankingHeaderCell,
    BattRankingRow,
    BattRankingCell
} from "./css/BatterRankStyles";
import { useMemo} from "react";

type RankingTableProps<T> = {
    apiUrl: string;
    columnDefs?: ColumnDef<T>[];
    transformData?: (data: any) => T[];
    sorting: SortingState;
    onSortingChange: (updaterOrValue: Updater<SortingState>) => void;
};

const BatterRankTable = <T,>({
    apiUrl,
    columnDefs: customColumnDefs,
    transformData,
    sorting,
    onSortingChange
}: RankingTableProps<T>) => {
    const defaultSorting: SortingState = useMemo(() => [{ id: "avg", desc: false }], []);
    
    // columnDefs는 useMemo로 메모이제이션
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

    // customColumnDefs가 있으면 결합, 없으면 defaultColumnDefs 사용
    const columnDefs = useMemo(() => {
        return customColumnDefs ? [...customColumnDefs, ...defaultColumnDefs] : defaultColumnDefs;
    }, [customColumnDefs, defaultColumnDefs]);

    // sorting 상태가 변경될 때만 새로운 배열을 만들지 않도록 useMemo 사용
    const table = useTable<T>({
        apiUrl,
        columnDefs,
        transformData,
        sorting: sorting.length === 0 ? defaultSorting : sorting,
        onSortingChange
    });
console.log('apiurl 테이블 먼저니?!?!!?');
    return (
    <>
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
