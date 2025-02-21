import { useState, useEffect } from "react";
import Papa from "papaparse";

function useOtherData() {
  const [data, setData] = useState({
    chart2: null,
    chart3: null,
    chart4: null,
    chart5: null,
    chart6: null,
  });
  const setCharts = (chart, data) => {
    setData((prevData) => {
      let temp = { ...prevData };
      temp[chart] = data;
      return temp;
    });
  };

  useEffect(() => {
    const chart2 = (csvString) => {
      fetch(csvString) // Adjust the path if needed
        .then((response) => response.text()) // Convert the response to text
        .then((csvText) => {
          //console.log("Raw CSV Data:", csvText); // ✅ Check if data is properly loaded

          Papa.parse(csvText, {
            header: true,
            dynamicTyping: true, // Convert numeric values automatically
            complete: (result) => {
              if (result.errors.length > 0) {
                console.error("CSV Parsing Error:", result.errors);
                return;
              }

              const data = result.data;
              const yearWiseData = {};

              data.forEach((row) => {
                const year = row.Year;
                const country = row.Entity;
                const value = parseFloat(row["Renewables (% electricity)"]);

                if (!year || !country || isNaN(value)) return; // Skip invalid rows

                if (!yearWiseData[year]) {
                  yearWiseData[year] = [];
                }

                yearWiseData[year].push({ country, value });
              });

              // Sort each year's data and pick the top 10
              Object.keys(yearWiseData).forEach((year) => {
                yearWiseData[year] = yearWiseData[year]
                  .sort((a, b) => b.value - a.value) // Sort descending
                  .slice(0, 10); // Take top 10
              });

              setCharts("chart2", yearWiseData);
            },
            error: (error) => console.error("Parsing Error:", error),
          });
        })
        .catch((error) => console.error("Fetch Error:", error));
    };

    chart2("/other_info.csv");
  }, []);

  return data;
}

export default useOtherData;
