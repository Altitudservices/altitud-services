
function openModal(productName) {
  const url = "https://wa.me/16464062230?text=" + encodeURIComponent("Hola, estoy interesado en: " + productName);
  document.getElementById("whatsappLink").href = url;
  new bootstrap.Modal(document.getElementById("productModal")).show();
}
function switchLang(lang) {
  if (lang === 'en') {
    window.location.href = "index-en.html";
  }
}
fetch("https://ipapi.co/json/")
  .then(r => r.json())
  .then(data => {
    if (data.country === "US") {
      new bootstrap.Modal(document.getElementById("languageModal")).show();
    }
});
