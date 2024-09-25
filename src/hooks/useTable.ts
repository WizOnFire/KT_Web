import { useState, useEffect, useMemo } from "react";
import { ColumnDef, SortingState, Updater, getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import axios from "axios";

type TableParams<TData> = {
    apiUrl: string;
    columnDefs: ColumnDef<TData>[];
    transformData?: (data: any) => TData[];
    sorting?: SortingState;
    onSortingChange?: (updaterOrValue: Updater<SortingState>) => void;
};

export const useTable = <TData,>({
    apiUrl,
    columnDefs,
    transformData,
    sorting,
    onSortingChange,
}: TableParams<TData>) => {

    const [data, setData] = useState<TData[]>([]); 
    const [isLoading, setIsLoading] = useState<boolean>(true); 
    const [error, setError] = useState<string | null>(null); 
    const BASE_URL = import.meta.env.VITE_BASE_URL || '';

    const fetchData = async () => {
        setIsLoading(true); 
        setError(null);
        try {
            const response = await axios.get(`${BASE_URL}${apiUrl}`); 
            const resultData = transformData ? transformData(response.data) : response.data;
            setData(resultData);
        } catch (error) {
            setError("데이터를 가져오는 데 실패했습니다.");
            console.error("데이터를 가져오는데 실패했습니다.", error);
        } finally {
            setIsLoading(false); 
        }
    };
    useEffect(() => {
        if (apiUrl) {
            fetchData();
        }
    }, [apiUrl]);

    const columns = useMemo(() => columnDefs, [columnDefs]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: {sorting},  
        onSortingChange, 
    });

    return { 
        getHeaderGroups: table.getHeaderGroups,
        getRowModel: table.getRowModel,
        isLoading,
        error };
};
