import { ColumnDef, flexRender } from "@tanstack/react-table";
import { useTable } from "../../../../hooks/useTable";
import { TAudienceResponse, TAudienceType } from "../../../../types/ranking";
import { useRankStore } from "../../../../stores/useRank.store";
import {
    TeamRankingTable,
    TeamRankingRow,
    TeamRankAudienceCell,
    TeamRankingCell
} from "../team/records/TeamRecordStyles"
import Graph from "./Graph";
import styled from "styled-components";
import SeasonSelect from "../../../../components/ranking/seasonSelect/SeasonSelect";

const AudienceWrapperContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
`
const AudienceWrapper = styled.h3`
    margin-top: 50px;
    margin-bottom: 20px;
`
const AudienceSelect = styled.div`
    margin-top: 50px;
`

const AudienceRecord = () => {
    const { year,setYear } = useRankStore();
    
    const handleYearChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setYear(e.target.value);
    }

    const columnDefs: ColumnDef<TAudienceType>[] = [
        { header: "순위", accessorKey: "num" }, 
        { header: "팀명", accessorKey: "teamName" },
        { header: "경기 수", accessorKey: "game" }, 
        { 
            header: "누적관중", 
            accessorKey: "crowd", 
            cell: info => (info.getValue() as number).toLocaleString()  // 누적관중 콤마 적용
        },
        { 
            header: "평균관중", 
            accessorKey: "avgCrowd", 
            cell: info => (info.getValue() as number).toLocaleString()  // 평균관중 콤마 적용
        },
    ];

    /*
    useEffect(() => {
        if (!gyear) {
            // 파라미터가 없을 때
            setApiUrl('/game/regular/ranking/team');
        } else {
            // 파라미터가 있을 때
            setApiUrl(`/game/rank/crowd?gyear=${gyear}`);
        }
    }, [gyear]);
    */

    const {getHeaderGroups, getRowModel} = useTable({
        apiUrl: (`/game/rank/crowd?gyear=${year}`),
        columnDefs,
        transformData: (data: TAudienceResponse) => {
            return data?.data?.list.map((audience, index) => {
                const crowd = audience.crowd ?? 0;
                const game = Number(audience.game) ?? 1;  
                const avgCrowd = game > 0 ? (crowd / game).toFixed(0) : 0; 

                return {
                    ...audience,
                    num: index + 1,
                    avgCrowd: Number(avgCrowd),
                    crowd, 
                };
            }) || [];
        }
    });

    const graphData = getRowModel().rows.map(row => ({
        teamName: row.original.teamName,
        crowd: row.original.crowd,
    }))
    return (
    <>
        <AudienceWrapper>{year} 시즌 누적관중</AudienceWrapper>
        <Graph graphData={graphData}/>
        <AudienceWrapperContainer>
            <AudienceWrapper>{year} 시즌 관중기록</AudienceWrapper>
            <AudienceSelect>
                <SeasonSelect />
            </AudienceSelect>
        </AudienceWrapperContainer>
        <TeamRankingTable>
            <thead>
            {getHeaderGroups().map(headerGroup => (
                <TeamRankingRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                    <TeamRankAudienceCell key={header.id} colSpan={header.colSpan}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    </TeamRankAudienceCell>
                ))}
                </TeamRankingRow>
            ))}
            </thead>
            <tbody>
            {getRowModel().rows.map(row => (
                <TeamRankingRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                    <TeamRankingCell key={cell.id} $isKT={row.original.teamName === 'KT'}>
                    {typeof cell.getValue() === 'number' ?
                    (cell.getValue() as number).toLocaleString() :String(cell.getValue())}
                    </TeamRankingCell>
                ))}
                </TeamRankingRow>
            ))}
            </tbody>
        </TeamRankingTable>
    </>
);
    }
export default AudienceRecord