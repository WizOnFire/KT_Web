import { ColumnDef } from '@tanstack/react-table';
import { TBoxScoreResponse, TEtcgame } from '../../../../../types/game';
import { useTable } from '../../../../../hooks/useTable';
import { MainStatsTable, MainStatsCell, MainStatsTr } from "./MainRecordStyles"
import MainRecordSkeleton from './MainRecordSkeleton';

const columnDefs: ColumnDef<TEtcgame>[] = [
    { header: '결승타', accessorKey: 'how' },
    { header: '결과', accessorKey: 'result' },
];

const MainRecords = ({apiUrl} : {apiUrl: string}) => {

    const { getRowModel, isLoading, error } = useTable<TEtcgame>({
        apiUrl: apiUrl,
        columnDefs,
        transformData: (data: TBoxScoreResponse) => {
            if (data?.data?.etcgames) {
                return data.data.etcgames;
            } else {
                console.error("etcgames 데이터를 찾을 수 없습니다.", data);
                return [];
            }
        },
});
    if (isLoading) return <MainRecordSkeleton columnDefs={columnDefs} />;
    if(error) return <>Error...</>;

    return (
        <MainStatsTable>
            <tbody>
                {getRowModel().rows.map(row => (
                    <MainStatsTr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <MainStatsCell key={cell.id}>{String(cell.getValue())}</MainStatsCell>
                        ))}
                    </MainStatsTr>
                ))}
            </tbody>
        </MainStatsTable>
    );
};

export default MainRecords;
