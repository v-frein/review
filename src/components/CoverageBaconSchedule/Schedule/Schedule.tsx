import { PureComponent } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

import { Type } from "./Type";

import styles from "./Schedule.module.css";

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props as any;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-55)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

interface ScheduleProps {
  startDate: Date;
  endDate: Date;
  data: any;
}

export const Schedule = ({ startDate, endDate, data }: ScheduleProps) => {
  return (
    <>
      <div className={styles.typesContainer}>
        <Type name="Охват за день" color="93, 135, 90" />
        <Type name="Накопленный охват" color="222, 115, 141" />
        <Type name="Новых пользователей" color="121, 106, 120" />
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          height={250}
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 50 }}
        >
          <defs>
            <linearGradient id="colorHDFS/ruid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#5D875A" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#5D875A" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorHDFS/gruid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#DE738D" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#DE738D" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorBacon/ruid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#796A78" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#796A78" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="HDFS/ruid"
            stroke="#5D875A"
            fillOpacity={1}
            fill="url(#colorHDFS/ruid)"
          />
          <Area
            type="monotone"
            dataKey="HDFS/gruid"
            stroke="#DE738D"
            fillOpacity={1}
            fill="url(#colorHDFS/gruid)"
          />
          <Area
            type="monotone"
            dataKey="Bacon/ruid"
            stroke="#796A78"
            fillOpacity={1}
            fill="url(#colorBacon/ruid)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
