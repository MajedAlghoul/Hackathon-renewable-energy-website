import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const CustomBarChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <ResponsiveContainer width="100%" height={"100%"}>
      <BarChart
        data={data}
        //layout="vertical" // Flip to horizontal bars
        margin={{ top: 20, right: 30, left: 0, bottom: 20 }} // Adjust spacing for labels
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis type="number" domain={[0, "dataMax"]} />
        <XAxis dataKey="country" type="category" width={160} />
        <Tooltip />
        <Bar
          dataKey="value"
          fill="#2a2a2a"
          barSize={30} // Makes bars wider
          radius={[15, 15, 0, 0]} // Rounded corners
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
