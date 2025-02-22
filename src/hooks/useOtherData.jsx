import { useState, useEffect } from "react";
import Papa from "papaparse";

function useOtherData() {
  const [data, setData] = useState({
    chart2: null,
    chart3: null,
    chart4: null,
    chart5: null,
    chart6: null,
    chart7: null,
    chart8: null,
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

    const chart3 = (csvString) => {
      fetch(csvString)
        .then((response) => response.text()) // Convert response to text
        .then((csvText) => {
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

              // List of specified countries
              const selectedCountries = [
                "Bahrain",
                "Egypt",
                "Iran",
                "Iraq",
                "Jordan",
                "Kuwait",
                "Lebanon",
                "Oman",
                "Palestine",
                "Qatar",
                "Syria",
                "Turkey",
                "United Arab Emirates",
              ];

              data.forEach((row) => {
                const year = row.Year;
                const country = row.Entity;
                const value = parseFloat(row["Renewables (% electricity)"]);

                if (!year || !country || isNaN(value)) return; // Skip invalid rows
                if (!selectedCountries.includes(country)) return; // Skip unselected countries

                if (!yearWiseData[year]) {
                  yearWiseData[year] = [];
                }

                yearWiseData[year].push({ country, value }); // Store as an array of objects
              });

              setCharts("chart3", yearWiseData); // Update chart
            },
            error: (error) => console.error("Parsing Error:", error),
          });
        })
        .catch((error) => console.error("Fetch Error:", error));
    };

    const chart4 = (csvString, chartType, selectedCountries) => {
      fetch(csvString)
        .then((response) => response.text())
        .then((csvText) => {
          Papa.parse(csvText, {
            header: true,
            dynamicTyping: true,
            complete: (result) => {
              if (result.errors.length > 0) {
                console.error("CSV Parsing Error:", result.errors);
                return;
              }

              const data = result.data;
              const countryData = {};

              // Filter countries we are interested in

              data.forEach((row) => {
                const country = row.Entity;
                if (!selectedCountries.includes(country)) return;

                const hydro = parseFloat(row["Hydro (% electricity)"]);
                const solar = parseFloat(row["Solar (% electricity)"]);
                const wind = parseFloat(row["Wind (% electricity)"]);
                const other = parseFloat(
                  row["Other renewables including bioenergy (TWh)"]
                );

                if (!countryData[country]) {
                  countryData[country] = {
                    Hydro: 0,
                    Solar: 0,
                    Wind: 0,
                    Other: 0,
                  };
                }

                // Accumulate the values for each source
                countryData[country].Hydro += hydro;
                countryData[country].Solar += solar;
                countryData[country].Wind += wind;
                countryData[country].Other += other;
              });

              // Divide each attribute by 23
              Object.keys(countryData).forEach((country) => {
                countryData[country].Hydro /= 23;
                countryData[country].Solar /= 23;
                countryData[country].Wind /= 23;
                countryData[country].Other /= 23;
              });

              // Calculate the total for all countries combined to get the average
              const countries = Object.values(countryData);
              const averageData = {
                Hydro: calculateAverage(countries, "Hydro"),
                Solar: calculateAverage(countries, "Solar"),
                Wind: calculateAverage(countries, "Wind"),
                Other: calculateAverage(countries, "Other"),
              };

              // Add the average data
              countryData["Average"] = averageData;

              setCharts(chartType, countryData);
            },
            error: (error) => console.error("Parsing Error:", error),
          });
        })
        .catch((error) => console.error("Fetch Error:", error));
    };

    // Helper function to calculate the average across countries
    const calculateAverage = (countries, key) => {
      const total = countries.reduce((sum, country) => sum + country[key], 0);
      return total / countries.length;
    };

    const chart7 = (csvString) => {
      fetch(csvString)
        .then((response) => response.text())
        .then((csvText) => {
          Papa.parse(csvText, {
            header: true,
            dynamicTyping: true,
            complete: (result) => {
              if (result.errors.length > 0) {
                console.error("CSV Parsing Error:", result.errors);
                return;
              }

              const data = result.data;
              const countryData = {};

              // Loop through the rows and accumulate the "Electricity from solar (TWh)_x" value by country
              data.forEach((row) => {
                const country = row.Entity;
                const solarValue = parseFloat(
                  row["Electricity from solar (TWh)_x"]
                );

                if (!country || isNaN(solarValue)) return; // Skip if invalid country or value

                // Accumulate the solar values for each country
                if (!countryData[country]) {
                  countryData[country] = 0;
                }
                countryData[country] += solarValue;
              });

              // Format the data for the bar chart
              const formattedData = Object.keys(countryData).map((country) => ({
                country,
                value: countryData[country],
              }));

              console.log("Formatted Data:", formattedData); // ✅ Check if data is properly formatted
              // Pass the data to your CustomBarChart component
              setCharts("chart7", formattedData); // Assuming setCharts is the method to update the state
            },
            error: (error) => console.error("Parsing Error:", error),
          });
        })
        .catch((error) => console.error("Fetch Error:", error));
    };

    const chart8 = (csvString) => {
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

              setCharts("chart8", yearWiseData);
            },
            error: (error) => console.error("Parsing Error:", error),
          });
        })
        .catch((error) => console.error("Fetch Error:", error));
    };

    chart8("/other_info.csv");

    chart7("/other_info.csv");

    chart4("/other_info.csv", "chart6", ["Egypt", "Iran", "Iraq", "Syria"]);

    chart4("/other_info.csv", "chart5", [
      "Bahrain",
      "Jordan",
      "Kuwait",
      "Oman",
      "Palestine",
      "Qatar",
      "Turkey",
      "United Arab Emirates",
      "Yemen",
    ]);

    chart4("/other_info.csv", "chart4", [
      "Austria",
      "Belgium",
      "Bulgaria",
      "Croatia",
      "Cyprus",
      "Czechia",
      "Denmark",
      "Estonia",
      "Finland",
      "France",
      "Germany",
      "Greece",
      "Hungary",
      "Ireland",
      "Italy",
      "Latvia",
      "Lithuania",
      "Luxembourg",
      "Malta",
      "Netherlands",
      "Poland",
      "Portugal",
      "Romania",
      "Slovakia",
      "Slovenia",
      "Spain",
      "Sweden",
    ]);

    // Call function with your CSV file path
    chart3("/other_info.csv");

    chart2("/other_info.csv");
  }, []);

  return data;
}

export default useOtherData;
