import styles from "./CustomLineChart.module.css";
import React, { useState } from "react";
import { Slider, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function CustomLineChart({ data, year, xAxis, yAxis }) {
  return (
    <ResponsiveContainer width="100%" height="100%" overflow="hidden">
      <LineChart data={data} margin={{ bottom: 10 }}>
        {<CartesianGrid strokeDasharray="3 3" opacity={"60%"} />}
        {xAxis}
        {yAxis}
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#2a2a2a"
          strokeWidth={3}
          name="Power Consumption"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default CustomLineChart;
