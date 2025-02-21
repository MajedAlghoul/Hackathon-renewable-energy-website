import styles from "./CustomPieChart.module.css";
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

import { PieChart, Pie, Cell } from "recharts";

function CustomPieChart({ chartData, year, xAxis, yAxis }) {
  const [selectedCountry, setSelectedCountry] = useState("Average");

  // Handle country selection change
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const data = chartData[selectedCountry];

  // Format the data for the pie chart
  const pieChartData = [
    { name: "Hydro", value: data.Hydro },
    { name: "Solar", value: data.Solar },
    { name: "Wind", value: data.Wind },
    { name: "Other Renewables", value: data.Other },
  ];

  // Define colors for each segment
  const COLORS = ["#ff8042", "#0088FE", "#00C49F", "#FFBB28"];

  return (
    <ResponsiveContainer width="100%" height="100%" overflow="hidden">
      <select
        className={styles["country-select-input"]}
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        {Object.keys(chartData).map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      <PieChart width={400} height={400}>
        <Pie
          data={pieChartData}
          dataKey="value"
          nameKey="name"
          cx="50%" // Center x-axis
          cy="50%" // Center y-axis
          outerRadius={150} // Outer radius of the pie chart
          label
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          wrapperStyle={{ paddingLeft: 40 }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default CustomPieChart;
