export const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.5)`;
};

export const chartOptions = {
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        padding: 10,
      },
      margin: {
        top: 20,
      },
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Workout Sections",
      },
      categoryPercentage: 0.7,
      barPercentage: 0.9,
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Percentage",
      },
      grid: {
        display: true,
      },
    },
  },
};
