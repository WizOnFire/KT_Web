import { useCallback, useState } from "react";
import { useTable } from "../../../../../hooks/useTable";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import ScoreBox from "../../../../landing/teamMatch/ScoreBox";
import { TBoxScoreResponse, TScheduleInfo, TScoreboard } from "../../../../../types/game";
import { GrPrevious, GrNext } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa6";
import {
    ScoreBoxWrapper,
    ScoreArrowAndInfoBox,
    ScoreWrapper,
    ScoreTable,
    ScoreHeaderCell,
    ScoreRow,
    ScoreCell,
    ScoreArrowBox,
    ScoreInfo,
} from "./ScoreStyles"

type TScoreType = {
    apiUrl: string;
    onPrevClick: (prevGameDate: string, preGmkey: string) => void;
    onNextClick: (nextGameDate: string, nextGmkey: string) => void;
}

const Score = ({apiUrl,onPrevClick,onNextClick} : TScoreType) => {
    const [currentGame,setCurrentGame] = useState<TScheduleInfo | null>(null);
    const [prevGame,setPrevGame] = useState<TScheduleInfo | null>(null);
    const [nextGame,setNextGame] = useState<TScheduleInfo | null>(null);

    const columnDefs: ColumnDef<TScoreboard>[] = [
        { header: '팀', accessorKey: 'bhomeName' },
        { header: '1', accessorKey: 'score1' },
        { header: '2', accessorKey: 'score2' },
        { header: '3', accessorKey: 'score3' },
        { header: '4', accessorKey: 'score4' },
        { header: '5', accessorKey: 'score5' },
        { header: '6', accessorKey: 'score6' },
        { header: '7', accessorKey: 'score7' },
        { header: '8', accessorKey: 'score8' },
        { header: '9', accessorKey: 'score9' },
        { header: '10', accessorKey: 'score10' },
        { header: '11', accessorKey: 'score11' },
        { header: '12', accessorKey: 'score12' },
        { header: 'R', accessorKey: 'run' },
        { header: 'H', accessorKey: 'hit' },
        { header: 'E', accessorKey: 'error' },
        { header: 'B', accessorKey: 'ballfour' },
    ];

    const { getHeaderGroups, getRowModel } = useTable({
        apiUrl: apiUrl,
        columnDefs,
        transformData: (data: TBoxScoreResponse) => {
            const { prev, current, next } = data?.data?.schedule;
            setPrevGame(prev || null);
            setCurrentGame(current || null);
            setNextGame(next || null);
            return data?.data?.scoreboard;
        }
    });

    const memoizedPrevClick = useCallback(() => {
        if (prevGame) onPrevClick(prevGame.gameDate, prevGame.gmkey);
    }, [prevGame, onPrevClick]);

    const memoizedNextClick = useCallback(() => {
    if (nextGame) onNextClick(nextGame.gameDate, nextGame.gmkey);
    }, [nextGame, onNextClick]);

    return (
        <>
        <ScoreWrapper>
            <ScoreArrowAndInfoBox>
                <ScoreArrowBox>
                    <GrPrevious size={25} onClick={memoizedPrevClick} />
                    <ScoreInfo>
                        <span>{`${currentGame?.gyear}년 ${currentGame?.gmonth}월 ${currentGame?.gday}일`}</span>
                        <div>
                            <span>
                                <FaRegCalendar/>
                                {`${currentGame?.gtime} ${currentGame?.stadium}`}
                            </span>
                            <span>|</span>
                            <span>
                                <FaMapMarkerAlt/>
                                {`관중 : ${currentGame?.crowdCn.toLocaleString()} 명`}
                            </span>
                        </div>
                    </ScoreInfo>
                    <GrNext size={25} onClick={memoizedNextClick} />
                </ScoreArrowBox>
            </ScoreArrowAndInfoBox>
            <ScoreBoxWrapper>
                <ScoreBox
                    scale="80%"
                    margin="-40px 0 30px 0"
                    width="200px"
                    height="200px"
                    backgroundColor="white"
                    border="none"
                    imageSrc={currentGame?.homeLogo}
                    teamName={currentGame?.homeKey}
                    score={currentGame?.hscore}
                />
                <ScoreBox
                    scale="80%"
                    margin="-40px 0 30px 0"
                    width="200px"
                    height="200px"
                    backgroundColor="white"
                    hiddenLeft="95%"
                    scoreLeft="83%"
                    transform="50%"
                    border="none"
                    imageSrc={currentGame?.visitLogo}
                    teamName={currentGame?.visitKey}
                    score={currentGame?.vscore}
                />
            </ScoreBoxWrapper>
        </ScoreWrapper>
        <ScoreTable>
            <thead>
                {getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <ScoreHeaderCell key={header.id} colSpan={header.colSpan}>
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </ScoreHeaderCell>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {getRowModel().rows.map(row => (
                    <ScoreRow key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <ScoreCell key={cell.id}>
                                {String(cell.getValue())}
                            </ScoreCell>
                        ))}
                    </ScoreRow>
                ))}
            </tbody>
        </ScoreTable>
        </>
    );
}

export default Score;