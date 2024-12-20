document.querySelectorAll(".switch-form a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href").substring(1);
      document.querySelectorAll(".form-container").forEach(form => {
        form.classList.add("hidden");
      });
      document.getElementById(target).classList.remove("hidden");
    });
  });

  function redirectToIndex() {
    window.location.href = 'index.html';
}