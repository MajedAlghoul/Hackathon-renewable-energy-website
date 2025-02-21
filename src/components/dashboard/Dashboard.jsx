import { useFloatingMenuOpen } from "../../hooks/useFloatingMenuOpen";
import CustomBarChart from "../customBarChart/CustomBarChart";
import CustomLineChart from "../customLineChart/CustomLineChart";
import YearSlider from "../slider/YearSlider";
import styles from "./Dashboard.module.css";
import React, { useEffect, useRef, useState } from "react";
import usePCData from "../../hooks/usePCData";
import useOtherData from "../../hooks/useOtherData";
import { XAxis, YAxis } from "recharts";
import CustomPieChart from "../customPieChart/CustomPieChart";

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
      "Renewable Energy Consumption (TWh) for top 10 Euorope countries per year"
    );
  };

  const chartButton3 = () => {
    setChartType("chart3");
    setSliderAvailable(true);
    setChartTitle(
      "Renewable Energy Consumption (TWh) for top 10 middle east countries per year"
    );
  };

  const chartButton4 = () => {
    setChartType("chart4");
    setSliderAvailable(false);
    setChartTitle("Renewable Energy sources distribution in Euorope");
  };

  const chartButton5 = () => {
    setChartType("chart5");
    setSliderAvailable(false);
    setChartTitle(
      "Renewable Energy Utilization in solar relying countries in MENA"
    );
  };

  const chartButton6 = () => {
    setChartType("chart6");
    setSliderAvailable(false);
    setChartTitle(
      "Renewable Energy Utilization in hydro relying countries in MENA"
    );
  };

  const chartButton7 = () => {
    setChartType("chart7");
    setSliderAvailable(false);
    setChartTitle("Solar Energy Utilization in EU and MENA (TWh) per year");
  };

  const chartButton8 = () => {
    setChartType("chart8");
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
          EU Renewable Energy Consumption
        </button>
      </div>
      <div className={styles["dashboard-button-container"]}>
        <button
          onClick={chartButton3}
          className={`${styles["dashboard-buttons"]} ${
            chartType === "chart3" ? styles["dashboard-buttons-selected"] : ""
          } `}
        >
          MENA Renewable Energy Consumption
        </button>
      </div>
      <div className={styles["dashboard-button-container"]}>
        <button
          onClick={chartButton4}
          className={`${styles["dashboard-buttons"]} ${
            chartType === "chart4" ? styles["dashboard-buttons-selected"] : ""
          } `}
        >
          EU Renewable Energy types Utilization
        </button>
      </div>
      <div className={styles["dashboard-button-container"]}>
        <button
          onClick={chartButton5}
          className={`${styles["dashboard-buttons"]} ${
            chartType === "chart5" ? styles["dashboard-buttons-selected"] : ""
          } `}
        >
          MENA solar relying countries renewable energy types utilization
        </button>
      </div>
      <div className={styles["dashboard-button-container"]}>
        <button
          onClick={chartButton6}
          className={`${styles["dashboard-buttons"]} ${
            chartType === "chart6" ? styles["dashboard-buttons-selected"] : ""
          } `}
        >
          MENA hydro relying countries renewable energy types utilization
        </button>
      </div>
      <div className={styles["dashboard-button-container"]}>
        <button
          onClick={chartButton7}
          className={`${styles["dashboard-buttons"]} ${
            chartType === "chart7" ? styles["dashboard-buttons-selected"] : ""
          } `}
        >
          Solar Energy Utilization in EU and MENA
        </button>
      </div>
      <div
        style={{
          height: "2px",
          width: "280px",
          backgroundColor: "#00000040",
          borderRadius: "999px",
          marginBottom: "40px",
          marginTop: "40px",
        }}
      ></div>
      <div className={styles["dashboard-button-container"]}>
        <button
          onClick={chartButton8}
          className={`${styles["dashboard-buttons"]} ${
            chartType === "chart8" ? styles["dashboard-buttons-selected"] : ""
          } `}
        >
          Renewable Energy Prediction in MENA
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
      //console.log(otherData.chart2);
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
          xAxis={
            <XAxis
              dataKey="country"
              tickSize={15}
              tick={{ angle: 30 }}
              interval={0}
            />
          }
          yAxis={<YAxis />}
        />
      );
    } else if (chartType === "chart3") {
      //setChartContent(<CustomBarChart data={data[year]} />);
      //console.log(otherData.chart3);
      const tempYear = Object.keys(otherData.chart3);
      if (year.year === null) {
        setYear({
          year: Number(tempYear[0]),
          min: Number(tempYear[0]),
          max: Number(tempYear[tempYear.length - 1]),
        });
      }

      setChartContent(
        <CustomLineChart
          data={otherData.chart3[year.year]}
          xAxis={
            <XAxis
              dataKey="country"
              tickSize={15}
              tick={{ angle: 30 }}
              interval={0}
            />
          }
          yAxis={<YAxis />}
        />
      );
    } else if (chartType === "chart4") {
      //setChartContent(<CustomBarChart data={data[year]} />);
      //console.log(otherData.chart3);
      /*
      const tempYear = Object.keys(otherData.chart3);
      if (year.year === null) {
        setYear({
          year: Number(tempYear[0]),
          min: Number(tempYear[0]),
          max: Number(tempYear[tempYear.length - 1]),
        });
      }*/

      setChartContent(
        <CustomPieChart chartData={otherData.chart4}></CustomPieChart>
      );
    } else if (chartType === "chart5") {
      //setChartContent(<CustomBarChart data={data[year]} />);
      //console.log(otherData.chart3);
      /*
      const tempYear = Object.keys(otherData.chart3);
      if (year.year === null) {
        setYear({
          year: Number(tempYear[0]),
          min: Number(tempYear[0]),
          max: Number(tempYear[tempYear.length - 1]),
        });
      }*/

      setChartContent(
        <CustomPieChart chartData={otherData.chart5}></CustomPieChart>
      );
    } else if (chartType === "chart6") {
      //setChartContent(<CustomBarChart data={data[year]} />);
      //console.log(otherData.chart3);
      /*
      const tempYear = Object.keys(otherData.chart3);
      if (year.year === null) {
        setYear({
          year: Number(tempYear[0]),
          min: Number(tempYear[0]),
          max: Number(tempYear[tempYear.length - 1]),
        });
      }*/

      setChartContent(
        <CustomPieChart chartData={otherData.chart6}></CustomPieChart>
      );
    } else if (chartType === "chart7") {
      //setChartContent(<CustomBarChart data={data[year]} />);
      //console.log(otherData.chart3);
      /*
      const tempYear = Object.keys(otherData.chart3);
      if (year.year === null) {
        setYear({
          year: Number(tempYear[0]),
          min: Number(tempYear[0]),
          max: Number(tempYear[tempYear.length - 1]),
        });
      }*/

      setChartContent(<CustomBarChart data={otherData.chart7} />);
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
        <div>
          <div className={styles["dashboard-chart-outer-outer-container"]}>
            <div className={styles["dashboard-chart-outer-container"]}>
              <div className={styles["dashboard-chart-title"]}>
                {chartTitle}
              </div>
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
      </div>
    </>
  );
}

export default Dashboard;
