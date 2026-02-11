// ...código de header.js...
document.addEventListener("DOMContentLoaded", function () {
  const h = document.querySelector("header");
  if (!h) return;
  h.classList.add("header-fijo");
  h.classList.remove("header-oculto", "header-visible");
  const s = `.header-fijo{position:fixed;top:0;left:0;width:100%;z-index:1000;transform:none;opacity:1;transition:none;pointer-events:auto}header{position:fixed;top:0;left:0;width:100%;z-index:1000;background:#808080;border-bottom:1px dashed #00ffff;box-shadow:0 2px 10px rgba(0,255,255,.3)}#primera{margin-top:120px}.header-oculto,.header-visible{display:block;transform:none;opacity:1;pointer-events:auto}`;
  const st = document.createElement("style");
  st.textContent = s;
  document.head.appendChild(st);
});
