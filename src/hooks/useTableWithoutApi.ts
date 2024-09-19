import { useMemo } from "react";
import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";

type TableParams<TData> = {
    data: TData[]; // 데이터를 프롭으로 받음
    columnDefs: ColumnDef<TData>[];
    transformData?:(data:TData)=>TData
};

export const useTableWithoutApi = <TData,>({
    data,
    columnDefs,
    transformData = (data) => data, // 기본적으로 데이터 가공 없이 그대로 사용
}: TableParams<TData>) => {
    // 모든 데이터의 null 또는 undefined 값을 0으로 변환
    const transformedData = data.map(item => transformData(item));

    const columns = useMemo(() => columnDefs, [columnDefs]);
    const table = useReactTable({
        data: transformedData, // 가공된 데이터를 사용
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return table;
};
