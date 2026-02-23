function setActiveNav(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.classList.add("active");
  });
}

function renderVoteChart(){
  const ctx = document.getElementById("voteChart");
  if (!ctx || typeof Chart === "undefined") return;

  const yes = Number(ctx.dataset.yes || 33);
  const no = Number(ctx.dataset.no || 15);
  const excused = Number(ctx.dataset.excused || 1);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Yes", "No", "Excused/Not voting"],
      datasets: [{
        label: "Votes",
        data: [yes, no, excused]
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true, ticks: { precision: 0 } } },
      plugins: { legend: { display: false } }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  renderVoteChart();
});