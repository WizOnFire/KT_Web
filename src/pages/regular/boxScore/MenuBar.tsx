import { useState } from "react";
import MainRecords from "./recordButton/mainRecords/MainRecords";
import HitRecords from "./recordButton/hitRecords/HitRecords";
import PitchRecords from "./recordButton/pitchRecords/PitchRecords";
import { MenuContainer, LeftMenu, RightMenu, WeatherLink } from "./MenuBarStyles";
import { GradientCircle } from "../../../components/common/gradientChip/GradientChipStyles";
import colors from "../../../assets/Colors";
import MenuBarSkeleton from "./MenuBarSkeleton";
import useLoading from "../../../hooks/useLoading";

const MenuBar = ({ apiUrl }: { apiUrl: string }) => {
    const menu = [
        { title: "주요기록", component: <MainRecords apiUrl={apiUrl} /> },
        { title: "타자기록", component: <HitRecords apiUrl={apiUrl} /> },
        { title: "투수기록", component: <PitchRecords apiUrl={apiUrl} /> },
    ];

    const [selectedMenu, setSelectedMenu] = useState("주요기록");
    const isLoading = useLoading(300);

    const handleClick = (title: string) => {
        setSelectedMenu(title);
    };

    if (isLoading) return <><MenuBarSkeleton/></>;

    return (
        <>
            <MenuContainer>
                <LeftMenu>
                    {menu.map((item) => (
                        <GradientCircle
                            key={item.title}
                            width="80px"
                            height="28px"
                            margin="0 5px 0 0"
                            fontFamily="KBO_Gothic_bold"
                            border="none"
                            color={selectedMenu === item.title ? colors.white : colors.black}
                            backgroundColor={selectedMenu === item.title ? colors.redQuaternary : colors.white}
                            onClick={() => handleClick(item.title)}
                        >
                            {item.title}
                        </GradientCircle>
                    ))}
                </LeftMenu>
                <RightMenu>
                    <WeatherLink href="https://weather.naver.com/today/02111597" target="_blank">
                        <GradientCircle
                            key="경기장 날씨"
                            width="100px"
                            height="27px"
                            margin="0 5px 0 0"
                            fontFamily="KBO_Gothic_bold"
                            border="1px solid #333"
                            color={colors.black}  
                            backgroundColor={colors.white} 
                            hoverColor={colors.white}
                            hoverBackgroundColor={colors.redQuaternary}
                            onClick={() => handleClick("경기장 날씨")}
                        >
                            경기장 날씨
                        </GradientCircle>
                    </WeatherLink>
                </RightMenu>
            </MenuContainer>
            <div>
                {menu.find((item) => item.title === selectedMenu)?.component}
            </div>
        </>
    );
};

export default MenuBar;
