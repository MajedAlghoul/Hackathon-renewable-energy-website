import { useFloatingMenuOpen } from "../../hooks/useFloatingMenuOpen";
import CustomBarChart from "../customBarChart/CustomBarChart";
import CustomLineChart from "../customLineChart/CustomLineChart";
import YearSlider from "../slider/YearSlider";
import styles from "./Dashboard.module.css";
import React, { useEffect, useRef, useState } from "react";
import usePCData from "../../hooks/usePCData";
import useOtherData from "../../hooks/useOtherData";
import { XAxis, YAxis } from "recharts";

function Dashboard() {
  const [year, setYear] = useState({ year: null, min: null, max: null });

  const [sliderAvailable, setSliderAvailable] = useState(false);
  const { isFloatingMenuOpen, setIsFloatingMenuOpen } = useFloatingMenuOpen();
  const [chartType, setChartType] = useState("chart1");
  const [chartContent, setChartContent] = useState(null);
  const [chartTitle, setChartTitle] = useState(
    "General Power Consumption (TWh) vs Year"
  );
  const chart1Data = usePCData();
  const otherData = useOtherData();
  const chartButton1 = () => {
    setChartType("chart1");
    setSliderAvailable(false);
    setChartTitle("General Power Consumption (TWh) vs Year");
  };

  const chartButton2 = () => {
    setChartType("chart2");
    setSliderAvailable(true);
    setChartTitle(
      "Renewable Energy Consumption (TWh) for top 10 countries per year"
    );
  };

  const chartsButtons = (
    <>
      <div className={styles["dashboard-button-container"]}>
        <button
          onClick={chartButton1}
          className={`${styles["dashboard-buttons"]} ${
            chartType === "chart1" ? styles["dashboard-buttons-selected"] : ""
          } `}
        >
          Power Consumption
        </button>
      </div>
      <div className={styles["dashboard-button-container"]}>
        <button
          onClick={chartButton2}
          className={`${styles["dashboard-buttons"]} ${
            chartType === "chart2" ? styles["dashboard-buttons-selected"] : ""
          } `}
        >
          Renewable Energy Consumption (TWh)
        </button>
      </div>
    </>
  );
  useEffect(() => {
    if (chartType === "chart1") {
      setChartContent(
        <CustomLineChart
          data={chart1Data}
          xAxis={<XAxis dataKey="year" tickSize={15} tick={{ angle: 30 }} />}
          yAxis={
            <YAxis
              ticks={[7000, 8000, 9000, 10000, 11000, 12000, 13000]}
              tickFormatter={(value) => `${value / 1000}k`}
              interval={0}
              tickSize={15}
              domain={[6000, 14000]}
            />
          }
        />
      );
    } else if (chartType === "chart2") {
      //setChartContent(<CustomBarChart data={data[year]} />);

      const tempYear = Object.keys(otherData.chart2);
      if (year.year === null) {
        setYear({
          year: Number(tempYear[0]),
          min: Number(tempYear[0]),
          max: Number(tempYear[tempYear.length - 1]),
        });
      }

      setChartContent(
        <CustomLineChart
          data={otherData.chart2[year.year]}
          xAxis={<XAxis dataKey="country" tickSize={15} tick={{ angle: 30 }} />}
          yAxis={<YAxis />}
        />
      );
    }
  }, [year.year, year.min, year.max, chartType, chart1Data, otherData]);

  return (
    <>
      {isFloatingMenuOpen && (
        <div className={styles["dashboard-buttons-houser-floating"]}>
          {chartsButtons}
        </div>
      )}
      <div
        onClick={() => setIsFloatingMenuOpen(false)}
        className={styles["dashboard-grid"]}
      >
        <div className={styles["dashboard-buttons-houser"]}>
          {chartsButtons}
        </div>
        <div className={styles["dashboard-chart-outer-outer-container"]}>
          <div className={styles["dashboard-chart-outer-container"]}>
            <div className={styles["dashboard-chart-title"]}>{chartTitle}</div>
            <div className={styles["dashboard-chart-inner-container"]}>
              {chartContent}
            </div>
          </div>
        </div>
        {sliderAvailable && year.year && (
          <div className={styles["dashboard-slider-container-outer"]}>
            <div className={styles["dashboard-slider-container"]}>
              <YearSlider
                year={year.year}
                setYear={setYear}
                minV={year.min}
                maxV={year.max}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dashboard;
