const navWrap = document.querySelector(".nav-wrap");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const glow = document.querySelector(".cursor-glow");

window.addEventListener("scroll", () => {
  navWrap.classList.toggle("scrolled", window.scrollY > 20);
}, {passive:true});

menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.classList.toggle("menu-open", open);
  menuBtn.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => {
    const open = navLinks.classList.remove("open");
    menuBtn.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", open);
  });
});

if (window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("pointermove", e => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  }, {passive:true});
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const copyBtn = document.querySelector(".copy-btn");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyBtn.dataset.email);
    const old = copyBtn.textContent;
    copyBtn.textContent = "Copied ✓";
    setTimeout(() => copyBtn.textContent = old, 1500);
  } catch {
    copyBtn.textContent = "Copy failed";
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
