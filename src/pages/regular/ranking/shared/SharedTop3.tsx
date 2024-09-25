import { useState, useEffect } from "react";
import styled from "styled-components";
import useFetchData from "../../../../hooks/useFetchData";
import colors from "../../../../assets/Colors";
import { bronze, gold, silver } from "../../../../assets/assets";

const AvgPitContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 40px;
`;

const AvgPitImgBlend = styled.div<{ $imageurl: string }>`
    display: flex;
    width: 160px;
    height: 250px;
    border-radius: 60px;
    background-image: url(${(props) => props.$imageurl});
    background-size: cover;
    background-position: center;
    mix-blend-mode: screen;
    scale: 55%;
`;

const AvgPitText = styled.div`
    margin-left: 55px;
    margin-bottom: 20px;
    text-align: center;
    h1 {
        margin: 0;
        padding: 0;
        color: ${colors.redQuaternary};
    }
    h4 {
        margin: 0;
        padding: 0;
    }
`;

const AvgPitImg = styled.div`
    display: flex;
    li {
        width: 100px;
        list-style: none;
        flex-direction: column;
        &:first-child {
            position: relative;
            z-index: 42;
            order: 2;
            scale: 130%;
            right: 8px;
        }
        &:nth-child(2) {
            position: relative;
            z-index: 43;
            order: 1;
        }
        &:nth-child(3) {
            position: relative;
            z-index: 44;
            order: 3;
        }
    }
`;

const AvgPitName = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 25px;
    margin-bottom:100px;
    margin-left: 50px;
    li {
        list-style: none;
        &:first-child {
            order: 2;
            font-weight: 600;
            font-size: 16px;
        }
        &:nth-child(2) {
            order: 1;
        }
        &:nth-child(3) {
            order: 3;
        }
    }
`;
const MedalImg = styled.img<{$isFirst: boolean}>`
    width: ${({$isFirst}) => ($isFirst ? '30px' : '20px')};
    margin-right: 10px;
    margin-bottom: -5px;
`

const getMedalImg = (index: number) : string => {
    switch (index) {
        case 0:
            return gold;
        case 1:
            return silver;
        case 2:
            return bronze;
        default:
            return "";
    }
};

type TTopConditionRankType = {
    condition: string;
    children: React.ReactNode;
};

type TPlayerData = {
    playerPrvwImg: string;
    playerName: string;
}

type FetchDataResponse = {
    data?: {
        list?: TPlayerData[];
    };
}

const SharedTop3 = ({ condition, children }: TTopConditionRankType) => {
    const [apiUrl, setApiUrl] = useState<string>("");

    useEffect(() => {
        switch (condition) {
            case "pitcherEra":
                setApiUrl("/game/rank/pitcher/era/top3");
                break;
            case "pitcherWins":
                setApiUrl("/game/rank/pitcher/win/top3");
                break;
            case "batterHra":
                setApiUrl("/game/rank/batter/hra/top3");
                break;
            case "batterHr":
                setApiUrl("/game/rank/batter/hr/top3");
                break;
            default:
                setApiUrl("");
        }
    }, [condition]);

    const { data } = useFetchData<FetchDataResponse>(apiUrl);
    const transformedData = data?.data?.list || [];

    return (
        <AvgPitContainer>
            <AvgPitText>{children}</AvgPitText>
            <AvgPitImg>
                {transformedData.map((player, index) => (
                    <li key={index}>
                        <AvgPitImgBlend $imageurl={player.playerPrvwImg} />
                    </li>
                ))}
            </AvgPitImg>
            <AvgPitName>
                {transformedData.map((player, index) => (
                    <li key={index}>
                        <MedalImg src={getMedalImg(index)} alt="Medal" $isFirst={index === 0}/>
                        <span>{player.playerName}</span>
                    </li>
                ))}
            </AvgPitName>
        </AvgPitContainer>
    );
};

export default SharedTop3;
