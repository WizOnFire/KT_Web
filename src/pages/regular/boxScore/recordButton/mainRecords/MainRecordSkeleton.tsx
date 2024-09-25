import styled from 'styled-components';
import { ColumnDef } from '@tanstack/react-table';
import { SkeletonBox } from '../score/ScoreSkeleton';

const MainStatsTable = styled(SkeletonBox)`
    width: 100%;
    height: auto;
    border-collapse: collapse;
    caret-color: transparent;
    margin-top: 50px;
    border-radius: 20px;
`;

const SkeletonTr = styled.tr`
    height: 40px;
`;

export type TColumnDefType = {
    columnDefs: ColumnDef<any>[];
}

const MainRecordSkeleton = ({ columnDefs }: TColumnDefType) => {
    const skeletonRows = Array(9).fill(0);

    return (
        <MainStatsTable>
            <tbody>
                {skeletonRows.map((_, rowIndex) => (
                    <SkeletonTr key={rowIndex}>
                        {columnDefs.map((col, colIndex) => (
                            <td key={colIndex} width={col?.size || 'auto'} />
                        ))}
                    </SkeletonTr>
                ))}
            </tbody>
        </MainStatsTable>
    );
};

export default MainRecordSkeleton;
