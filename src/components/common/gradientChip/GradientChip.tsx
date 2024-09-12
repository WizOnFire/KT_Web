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
}


const GradientChip = ({
    main,
    title,
    margin,
    padding,
    width,
    height,
    fontFamily,
    textGradient,
    backgroundColor
}: TGradientChipType) => {
    
    return (
        <GradientContainer margin={margin} padding={padding}>
            <GradientCircle
                width={width}
                height={height}
                fontFamily={fontFamily}
                padding={padding}
                textGradient={textGradient}
                backgroundColor={backgroundColor}
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