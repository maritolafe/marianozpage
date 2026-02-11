// ...código de proyectos.js...
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carouselProyectos");
  if (!carousel) return;
  const items = carousel.querySelectorAll(".carousel-item");
  const style = document.createElement("style");
  style.textContent = `.carousel-item{transform:scale(.8);transition:.8s;opacity:.7}.carousel-item.active{transform:scale(1);opacity:1}.carousel-item img{transform:translateY(-20px);transition:.6s}.carousel-item.active img{transform:translateY(0)}.carousel-item .carousel-caption{transform:translateY(30px);opacity:0;transition:.6s .2s}.carousel-item.active .carousel-caption{transform:translateY(0);opacity:1}`;
  document.head.appendChild(style);
  function zoom() {
    items.forEach((i) => {
      i.classList.contains("active")
        ? ((i.style.transform = "scale(1)"), (i.style.opacity = "1"))
        : ((i.style.transform = "scale(.8)"), (i.style.opacity = ".7"));
    });
  }
  const obs = new MutationObserver((m) => {
    m.forEach((mu) => {
      if (mu.type === "attributes" && mu.attributeName === "class")
        setTimeout(zoom, 50);
    });
  });
  items.forEach((i) => {
    obs.observe(i, { attributes: true, attributeFilter: ["class"] });
  });
  zoom();
  items.forEach((i) => {
    i.addEventListener("mouseenter", function () {
      this.classList.contains("active") &&
        (this.style.transform = "scale(1.05)");
    });
    i.addEventListener("mouseleave", function () {
      this.classList.contains("active") && (this.style.transform = "scale(1)");
    });
  });
});
