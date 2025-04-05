
function openModal(productName) {
  let url;
  const isEnglish = window.location.pathname.includes("index-en.html");
  const message = isEnglish
    ? "Hi, I'm interested in: " + productName
    : "Hola, estoy interesado en: " + productName;
  url = "https://wa.me/16464062230?text=" + encodeURIComponent(message);

  document.getElementById("productMessage").innerText = isEnglish
    ? "Interested in this item? Message us to get yours!"
    : "¿Te interesa este artículo? Escríbenos y recibe el tuyo.";

  document.getElementById("whatsappLink").innerText = isEnglish
    ? "Message us on WhatsApp"
    : "Escríbenos por WhatsApp";

  document.getElementById("whatsappLink").href = url;
  new bootstrap.Modal(document.getElementById("productModal")).show();
}

function switchLang(lang) {
  if (lang === 'en') {
    window.location.href = "index-en.html";
  }
}

// Detección de ubicación para sugerencia de idioma
fetch("https://ipapi.co/json/")
  .then(r => r.json())
  .then(data => {
    if (data.country === "US" && !window.location.pathname.includes("index-en.html")) {
      new bootstrap.Modal(document.getElementById("languageModal")).show();
    }
});
