import { AreaChart, Area, ResponsiveContainer, CartesianGrid } from "recharts";

interface ScheduleProps {
  data: any;
}

export const Schedule = ({ data }: ScheduleProps) => {
  return (
    <>
      <ResponsiveContainer width={314} height={120}>
        <AreaChart height={250} data={data}>
          <defs>
            <linearGradient id="colorCoverage" x1="1" y1="1" x2="0" y2="0">
              <stop offset="50%" stopColor="#244A78" stopOpacity={0.5} />
              <stop offset="50%" stopColor="#21A4C0" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <CartesianGrid />
          <Area
            type="monotone"
            dataKey="coverage"
            stroke="#5D875A"
            fillOpacity={1}
            fill="url(#colorCoverage)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
