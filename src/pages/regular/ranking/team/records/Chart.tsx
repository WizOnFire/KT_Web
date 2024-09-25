import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import colors from '../../../../../assets/Colors';
import { redBaseball } from '../../../../../assets/assets';
import useFetchData from '../../../../../hooks/useFetchData';
import { TTotalTeamRankResponse } from '../../../../../types/ranking';

const ChartWrapper = styled.div`
  width: 100%;
  padding: 50px;
  font-size: 12px;
  box-sizing: border-box;
  border: 1px solid ${colors.ashGray};
  caret-color: transparent;
`
const CustomizedAxisTick = (props: any) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        transform="rotate(-45)"
        fill={colors.mediumGray}
      >
        {payload.value}
      </text>
    </g>
  );
};

const CustomizedDot = (props: any) => {
  const { cx, cy, payload, lastestDate } = props;
  
  if (payload.date === lastestDate) {
    return (
      <image
      x={cx - 20}
      y={cy - 20} 
      width={40}
      height={40}
      href={redBaseball} 
      />
      );
    }
    
    return (
      <circle
      cx={cx}
      cy={cy} 
      r={4} // 반지름
      fill={colors.redTertiary}
    />
  );
};

const Chart = () => {
  const { data } = useFetchData<TTotalTeamRankResponse>("/game/rank/periodteamrank"); 
  const transFormedData = data?.data?.list || [];
  const lastestDate = transFormedData[transFormedData.length - 1]?.date || "";
  const transFormedDate = transFormedData.map((item) => {
    const splitDate = item?.date ? `${item.date.slice(4,6)}.${item.date.slice(6,8)}` : "MM.DD"; 
    return {
      ...item,
      transformedDate: splitDate
    };
  });

  return (
      <ChartWrapper>
        <ResponsiveContainer width="110%" height={300}>
          <LineChart
            width={1100}
            height={300}
            data={transFormedDate}
            margin={{
              top: 0,
              right: 120,
              left: -15,
              bottom: 10
            }}
          >
          {/* dataKey = 문자열만가능 */}
          <CartesianGrid vertical={false} opacity={10} stroke={colors.lightGray} />
          <XAxis 
            interval={0}
            dataKey="transformedDate"
            stroke={colors.ashGray} 
            tick={<CustomizedAxisTick />}
          />
          <YAxis 
            ticks={[1, 2, 3, 4, 5, 6, 7, 8]} 
            tickFormatter={(value) => `${value}위`} 
            stroke={colors.ashGray} 
            tickMargin={10}
            domain={[1,8]}
          />
          <Tooltip />
          <Line
            dataKey="rank"
            stroke={colors.redTertiary}
            dot={<CustomizedDot lastestDate={lastestDate}/>}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
};

export default Chart;