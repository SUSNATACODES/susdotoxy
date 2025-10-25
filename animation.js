// Reveal fade-section elements on scroll
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".fade-section");
  const trigger = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add("visible");
  });
});
