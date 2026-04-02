document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animate skill bars
const bars = document.querySelectorAll(".progress-bar");

function animateSkills() {
  bars.forEach(function (bar) {
    const width = bar.getAttribute("style").replace("width:", "").trim();

    bar.style.width = "0";

    setTimeout(() => {
      bar.style.width = width;
    }, 200);
  });
}

window.addEventListener("load", animateSkills);

// Theme toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector("#theme-toggle");

  // agar button nahi mila to error avoid
  if (!toggleBtn) return;

  // saved theme load
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.innerText = "☀️";
  }

  // click event
  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.innerText = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.innerText = "🌙";
    }
  });
});

//click on img to enlarge
function toggleImageSize() {
  const img = document.querySelectorAll(".Certificates");
  img.forEach(function(image) {
    if (image.style.width === "400px") {
      image.style.width = "1200px";
    } else {
      image.style.width = "400px";
    }
  });
}