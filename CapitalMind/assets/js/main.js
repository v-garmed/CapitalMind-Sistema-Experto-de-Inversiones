// Solo control de variaciones visuales (sin lógica de IA ni chat)
(function () {
  const buttons = document.querySelectorAll(".theme-button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme");
      document.body.setAttribute("data-theme", theme);
    });
  });
})();
