
function switchLang(lang) {
  document.querySelectorAll("[data-lang]").forEach(el => {
    el.classList.add("d-none");
    if (el.getAttribute("data-lang") === lang) {
      el.classList.remove("d-none");
    }
  });
}

fetch("https://ipapi.co/json/")
  .then(res => res.json())
  .then(data => {
    if (data.country === "US") {
      const modal = new bootstrap.Modal(document.getElementById("languageModal"));
      modal.show();
    }
  });
