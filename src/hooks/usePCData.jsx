import { useState, useEffect } from "react";
import Papa from "papaparse";

function usePCData() {
  const [data, setData] = useState([]);
  const url = "/cc_chart1.csv";
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const csvText = await response.text();

      const parsed = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
      }).data;

      // Transform data into the desired format
      const formattedData = parsed.reduce((acc, row) => {
        const year = row["Year"]?.trim();
        const value = parseFloat(row["Consumption"]);

        if (!year || isNaN(value)) return acc;

        acc[year] = (acc[year] || 0) + value;
        return acc;
      }, {});

      // Convert to array format
      const finalData = Object.entries(formattedData).map(([year, value]) => ({
        year: parseInt(year),
        value,
      }));
      setData(finalData);
    };

    fetchData();
  }, [url]);

  return data;
}

export default usePCData;
