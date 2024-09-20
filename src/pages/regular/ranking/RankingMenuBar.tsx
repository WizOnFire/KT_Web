import { useState } from "react";
import { GradientCircle } from "../../../components/common/gradientChip/GradientChipStyles";
import BatterRanking from "./batter/BatterRanking";
import TeamRanking from "./team/TeamRanking";
import colors from "../../../assets/Colors";
import PitcherRanking from "./pitcher/PitcherRanking";
import SelectMenu from "../../../components/ranking/menubar/SelectMenu";
import AllBatterRank from "./batter/AllBatterRank";
import AllPitcherRank from "./pitcher/AllPitcherRank";
import { SubMenuText } from "../../../components/ranking/menubar/SelectMenuStyles";
import styled from "styled-components";
import AudienceRecord from "./audience/AudienceRecord";

const RankingMenuContainer = styled.div`
    display: flex;
`
const RankingMenuBar = () => {
    const [selectedMenu, setSelectedMenu] = useState("팀순위");
    const [clickSelectedMenu, setClickSelectedMenu] = useState("ktwiz 투수");
    // const {year} = useRankStore();
    // const navigate = useNavigate();

    const menu = [
        { title: "팀순위", component: <TeamRanking /> },
        { title: "투수순위"},
        { title: "타자순위"},
        { 
            title: "관중현황", 
            component: <AudienceRecord />, 
            // onClick: () => navigate(`/game/regular/ranking/team/${year}`) 
        },
    ];

    const pitSubMenu = [
        { title: "ktwiz 투수", component: <PitcherRanking /> },
        { title: "전체 투수 순위", component: <AllPitcherRank /> },
    ];

    const battSubMenu = [
        { title: "ktwiz 타자", component: <BatterRanking /> },
        { title: "전체 타자 순위", component: <AllBatterRank /> },
    ];

    const handleClickMenu = (title: string) => {
        setSelectedMenu(title);
        window.scrollTo(0, 0);
        if (title === "투수순위") {
            setClickSelectedMenu("ktwiz 투수");
        } else if (title === "타자순위") {
            setClickSelectedMenu("ktwiz 타자");
        }
    };

    const handelClickSubMenu = (subTitle: string) => {
        setClickSelectedMenu(subTitle);
    };

    return (
        <>
            <RankingMenuContainer>
                {menu.map((item) => (
                    <GradientCircle
                        key={item.title}
                        width="80px"
                        height="28px"
                        margin="0 8px 0 0"
                        border="`1.5px solid ${colors.white}`"
                        fontFamily="KBO_Gothic_bold"
                        color={selectedMenu === item.title ? colors.white : colors.black}
                        backgroundColor={selectedMenu === item.title ? colors.redQuaternary : colors.white}
                        onClick={() => handleClickMenu(item.title)}
                    >
                        {item.title}
                    </GradientCircle>
                ))}
            </RankingMenuContainer>

            {/* 투수순위 */}
            {selectedMenu === "투수순위" && (
                <SelectMenu isSelected={selectedMenu === "투수순위"} left="-80px">
                    {pitSubMenu.map((item) => (
                        <SubMenuText
                            key={item.title}
                            isSelectSubMenu={clickSelectedMenu === item.title}
                            onClick={() => handelClickSubMenu(item.title)}
                        >
                            {item.title}
                        </SubMenuText>
                    ))}
                </SelectMenu>
            )}

            {/* 타자순위 */}
            {selectedMenu === "타자순위" && (
                <SelectMenu isSelected={selectedMenu === "타자순위"} left="15px">
                    {battSubMenu.map((item) => (
                        <SubMenuText
                            key={item.title}
                            isSelectSubMenu={clickSelectedMenu === item.title}
                            onClick={() => handelClickSubMenu(item.title)}
                        >
                            {item.title}
                        </SubMenuText>
                    ))}
                </SelectMenu>
            )}
            <div>
                {selectedMenu === "투수순위" && pitSubMenu.find((item) => item.title === clickSelectedMenu)?.component}
                {selectedMenu === "타자순위" && battSubMenu.find((item) => item.title === clickSelectedMenu)?.component}
            </div>
            <div>
                {menu.find((item) => item.title === selectedMenu)?.component}
            </div>
        </>
    );
};

export default RankingMenuBar;
