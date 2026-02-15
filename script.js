// Extra smooth feel for older browsers
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// RESULTS CHART
window.addEventListener("load", () => {
  const ctx = document.getElementById("resultsChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Existing System", "Holistic AI"],
      datasets: [
        {
          label: "Performance Score",
          data: [68, 92], // 🔥 you can change
          borderRadius: 8,
        },
      ],
    },
    options: {
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: {
          ticks: { color: "#8a8f98" },
          grid: { display: false },
        },
        y: {
          ticks: { color: "#8a8f98" },
          grid: { color: "rgba(255,255,255,0.05)" },
        },
      },
    },
  });
});
// ===============================
// MODEL PERFORMANCE CHART
// ===============================
window.addEventListener("load", () => {
  const ctx = document.getElementById("modelChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Accuracy",
        "User Engagement",
        "Insight Quality",
        "Response Speed",
      ],
      datasets: [
        {
          label: "Existing Systems",
          data: [65, 60, 58, 70],
          backgroundColor: "rgba(120,130,150,0.5)",
          borderRadius: 6,
        },
        {
          label: "Holistic AI",
          data: [90, 88, 92, 94],
          backgroundColor: "#4C8DFF",
          borderRadius: 6,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "#aab4c8",
          },
        },
      },
      scales: {
        x: {
          ticks: { color: "#8a8f98" },
          grid: { display: false },
        },
        y: {
          ticks: { color: "#8a8f98" },
          grid: { color: "rgba(255,255,255,0.05)" },
        },
      },
    },
  });
});
