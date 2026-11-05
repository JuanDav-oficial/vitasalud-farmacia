// VitaSalud: interacciones del sitio.
// IMPORTANTE: reemplaza este número por el WhatsApp real, con indicativo de país.
// Ejemplo Colombia: 573001234567 (sin +, espacios ni guiones).
const WHATSAPP_NUMBER = "573000000000";

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  menuToggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  nav?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
      if (menuToggle) menuToggle.textContent = "☰";
    });
  });

  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".product-card");
  filters.forEach(button => {
    button.addEventListener("click", () => {
      filters.forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      const category = button.dataset.filter;
      cards.forEach(card => {
        card.hidden = category !== "todos" && card.dataset.category !== category;
      });
    });
  });

  document.getElementById("contactForm")?.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const text = `Hola, soy ${name}. Mi correo es ${email}.\\n\\n${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
