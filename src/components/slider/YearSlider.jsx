import styles from "./YearSlider.module.css";
import { Slider, Typography } from "@mui/material";

function YearSlider({ year, setYear, minV, maxV }) {
  return (
    <>
      <Slider
        value={year}
        min={minV}
        max={maxV}
        step={1}
        onChange={(e, newValue) =>
          setYear((prev) => {
            let temp = { ...prev };
            temp.year = newValue;
            return temp;
          })
        }
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `${value}`}
        style={{ width: "80%", marginTop: "20px", color: "var(--dark-green)" }}
      />
      <Typography
        variant="body2"
        style={{
          marginTop: "10px",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: "Inter",
        }}
      >
        {year}
      </Typography>
    </>
  );
}

export default YearSlider;
