import styled from "styled-components";
import colors from "../../../assets/Colors";

export const PitMenuSelected = styled.div<{ isSelected: boolean }>`
    display: flex;
    align-items: center;
    height: 80px;
    top: 0;
    color: ${colors.black};
    font-size: 16px;
    font-family: KBO_Gothic_bold;
    transform: translateY(${({ isSelected }) => (isSelected ? "0" : "-15%")});
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
    caret-color: transparent;
    margin-bottom: 20px;

    &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 70%;
        left: 90px;
        top: 20px;
        z-index: -5;
        border-top: 3px solid ${colors.redQuaternary};
        transform-origin: left;
        animation: moveLine 0.5s ease-in-out forwards;

        @keyframes moveLine {
            from {
                width: 0;
            }
            to {
                width: 250px;
            }
        }
    }
`;

export const SubMenuText = styled.span<{ isSelectSubMenu?: boolean }>`
    position: relative;
    left: 55px;
    top: 2px;
    display: flex;
    gap: 30px;
    cursor: pointer;
    color: ${({ isSelectSubMenu }) => isSelectSubMenu ? `${colors.redQuaternary}` : `${colors.black}`};
`;
