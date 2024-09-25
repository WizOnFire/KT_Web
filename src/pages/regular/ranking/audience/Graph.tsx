import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import colors from "../../../../assets/Colors";
import { useEffect, useState } from "react";

const GrahpWrapper = styled.div`
    width: 100%;
    height: auto;
    padding: 50px;
    font-size: 12px;
    box-sizing: border-box;
    border: 1px solid ${colors.ashGray};
    caret-color: transparent;
`
type TGraphDataType = {
    graphData: {
        teamName: string;
        crowd: number;
    }[];
};
const CustomizedAxisTick = (props: any) => {
    const { x, y, payload } = props;
    const teamName = payload.value;

    return (
        //{`translate(${x},${y})`} x와y는 안써도 필수
        <g transform={`translate(${x},${y})`}> 
            <text
                dy={18} //텍스트와 축 간격 조정
                textAnchor="middle"
                fill={teamName === "KT" ? colors.redPrimary : colors.mediumGray }
                fontSize="12px" 
                >
                {teamName}
            </text>
        </g>
    );
};

const Graph = ({graphData}: TGraphDataType) => {

    const [sortedData, setSortedData] = useState(graphData);

    useEffect(() => {
        const sorted = [...graphData].sort((a,b) => {
            if(a.teamName === "KT") return -1;
            if(b.teamName === "KT") return 1;
            return b.crowd - a.crowd;
        });
        setSortedData(sorted);
    },[graphData]);

    return (
    <GrahpWrapper>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                width={1100}
                height={300}
                data={sortedData}
                barSize={18}
                margin={{
                    top: 0,
                    right: 0,
                    left: 10,
                    bottom: 0
                }}
            >
            <CartesianGrid vertical={false} opacity={10} stroke={colors.lightGray} />
            <XAxis
                dataKey="teamName"
                scale="point"
                padding={{ left: 80, right: 80 }}
                tick={<CustomizedAxisTick />}
            />
            <YAxis
                stroke={colors.ashGray} 
                tickMargin={10}
                tick={{ fontSize: 12 }}
                ticks={[0, 200000, 400000, 600000, 800000, 1000000, 1200000, 1400000]}  
                tickFormatter={(value) => value.toLocaleString()}
            />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="crowd">
                {sortedData.map((entry, index) => (
                    <Cell
                        key={`cell-${index}`}
                        fill={entry.teamName === "KT" ? colors.redQuaternary : colors.ashGray}
                    />
                ))}
            </Bar>
            </BarChart>
        </ResponsiveContainer>
    </GrahpWrapper>
    );
}

export default Graph;