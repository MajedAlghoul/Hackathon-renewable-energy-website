import styles from "./CustomBarChart.module.css";
import React, { useState } from "react";
import { Slider, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function CustomBarChart({ data }) {
  return (
    <>
      {/*      <Typography variant="h6" gutterBottom>
    Renewable Energy Consumption (TWh) in {year}
  </Typography>*/}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical"
          barSize={36}
          margin={{ left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="country" type="category" />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="#2a2a2a"
            radius={[0, 14, 14, 0]}
            name="Consumption (TWh)"
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default CustomBarChart;
