document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("c1"),
    modal = document.getElementById("modal");
  if (!btn || !modal) return;
  const closeBtn = modal.querySelector(".close");
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
  closeBtn?.addEventListener("click", () => {
    modal.style.display = "none";
  });
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.style.display = "none";
  });
});
