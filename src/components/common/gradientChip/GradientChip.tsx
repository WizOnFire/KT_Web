import { GradientContainer, GradientCircle, GradientTitle } from "./GradientChipStyles"

type TGradientChipType = {
    main: string;
    title: string;
    margin?: string;
    padding?: string; 
    width?:string;
    height?:string;
    fontFamily?:string;
    textGradient?: string;
    backgroundColor?: string;
    color?: string;
};
const GradientChip = ({
    main,
    title,
    margin,
    padding,
    width,
    height,
    fontFamily,
    textGradient,
    backgroundColor,
    color
}: TGradientChipType) => {
    
    return (
        <GradientContainer margin={margin} padding={padding}>
            <GradientCircle
                width={width}
                height={height}
                fontFamily={fontFamily}
                padding={padding}
                margin={margin}
                textGradient={textGradient}
                backgroundColor={backgroundColor}
                color={color}
                >
                <span>{main}</span>
            </GradientCircle>
            <GradientTitle>
                {title}
            </GradientTitle>
        </GradientContainer>
    );
}

export default GradientChip;