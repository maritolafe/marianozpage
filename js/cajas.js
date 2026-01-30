document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("c1"); // botón "hacer un comentario"
  const modal = document.getElementById("modal"); // tu modal
  if (!btn || !modal) return;

  const closeBtn = modal.querySelector(".close");

  // Abrir
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // Cerrar con X
  closeBtn?.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar clickeando fuera
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // Cerrar con ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.style.display = "none";
  });
});
