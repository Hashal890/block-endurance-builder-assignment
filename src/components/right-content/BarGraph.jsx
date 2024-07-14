import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { getRandomColor, chartOptions } from "./HelperFunctions";

const BarGraph = ({ data }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const newLabels = [];
    const newDatasets = [];
    let totalSections = 0;

    data.forEach((item) => {
      const { title, numberOfSections, sectionNames, percentage } = item;
      if (numberOfSections > 1) {
        sectionNames.forEach((sectionName) => {
          newLabels.push(`${title} - ${sectionName}`);
          const color = getRandomColor();
          const dataArr = new Array(totalSections + 1).fill(null);
          dataArr[totalSections] = percentage[sectionNames.indexOf(sectionName)];
          newDatasets.push({
            label: `${title} - ${sectionName}`,
            data: dataArr,
            backgroundColor: color,
            borderColor: color.replace("0.5", "1"),
            borderWidth: 1,
          });
          totalSections++;
        });
      } else {
        newLabels.push(title);
        const color = getRandomColor();
        const dataArr = new Array(totalSections + 1).fill(null);
        dataArr[totalSections] = percentage;
        newDatasets.push({
          label: title,
          data: dataArr,
          backgroundColor: color,
          borderColor: color.replace("0.5", "1"),
          borderWidth: 1,
        });
        totalSections++;
      }
    });

    setChartData({
      labels: newLabels,
      datasets: newDatasets,
    });
  }, [data]);

  return <Bar data={chartData} options={chartOptions} />;
};

export default BarGraph;
