import styled from "styled-components";
import { SkeletonBox } from "../../boxScore/recordButton/score/ScoreSkeleton";
import { TColumnDefType } from "../../boxScore/recordButton/mainRecords/MainRecordSkeleton";
import {
    TeamRankingTable,
    TeamRankingRow,
    TeamRankAudienceCell,
    TeamRankingCell
} from "../team/records/TeamRecordStyles";

const SkeletonAudienceWrapper = styled(SkeletonBox)`
    display: inline-block;
    width: 170px; 
    height: 25px;
    margin-top: 50px;
    margin-bottom: 20px;
`;

const SkeletonRankBox = styled(SkeletonBox)`
    width: 100%;
    height: 400px;
    font-size: 12px;
    box-sizing: border-box;
    caret-color: transparent;
`;

const SkeletonCell = styled(SkeletonBox)`
    width: 80%;
    height: 20px;
    margin: 5px 0;
    text-align: center;
`;

const AudienceSkeleton = ({ columnDefs }: TColumnDefType) => {
    const skeletonRows = Array(10).fill(0); // 스켈레톤으로 보여줄 행의 개수

    return (
        <>
            <SkeletonAudienceWrapper />
            <SkeletonRankBox />
            <SkeletonAudienceWrapper />

            <TeamRankingTable>
                <thead>
                    <TeamRankingRow>
                        {columnDefs.map((col, colIndex) => (
                            <TeamRankAudienceCell key={colIndex}>
                                <SkeletonCell />
                            </TeamRankAudienceCell>
                        ))}
                    </TeamRankingRow>
                </thead>
                <tbody>
                    {skeletonRows.map((_, rowIndex) => (
                        <TeamRankingRow key={rowIndex}>
                            {columnDefs.map((col, colIndex) => (
                                <TeamRankingCell key={colIndex}>
                                    <SkeletonCell />
                                </TeamRankingCell>
                            ))}
                        </TeamRankingRow>
                    ))}
                </tbody>
            </TeamRankingTable>
        </>
    );
};

export default AudienceSkeleton;
