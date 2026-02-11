// ...código de tema.js...
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.createElement("button");
  btn.id = "temaBtn";
  btn.innerHTML = "🌙";
  btn.title = "Cambiar tema";
  btn.className = "tema-btn";
  document.querySelector("footer").appendChild(btn);
  document.body.classList.remove("night-mode");
  btn.innerHTML = "🌙";
  localStorage.setItem("tema", "dia");
  function toggle() {
    const b = document.body,
      d = b.classList.contains("night-mode");
    d
      ? (b.classList.remove("night-mode"),
        (btn.innerHTML = "🌙"),
        localStorage.setItem("tema", "dia"))
      : (b.classList.add("night-mode"),
        (btn.innerHTML = "☀️"),
        localStorage.setItem("tema", "noche"));
  }
  btn.addEventListener("click", toggle);
  btn.addEventListener("click", function () {
    const a = new Audio();
    a.src =
      "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT";
    a.volume = 0.1;
    a.play().catch(() => {});
  });
});
