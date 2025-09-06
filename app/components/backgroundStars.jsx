// backgroundStars.js
export function initBackgroundStars() {
  const htmlEl = document.documentElement;

  // Remove previous stars
  const oldStars = document.querySelectorAll(".floating-star, .shooting-star");
  oldStars.forEach(star => star.remove());

  // Parallax function
  function parallax(e) {
    const stars = document.querySelectorAll(".floating-star");
    stars.forEach((star, i) => {
      const speed = (i + 1) * 0.02;
      star.style.transform = `translate(${e.clientX * speed}px, ${e.clientY * speed}px)`;
    });
  }

  // Floating star creation
  function createStar(theme) {
    const star = document.createElement("div");
    star.className = "floating-star";
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;
    const size = theme === "dark" ? 2 + Math.random() * 3 : 1 + Math.random() * 2;
    star.style.width = star.style.height = `${size}px`;
    star.style.position = "fixed";
    star.style.borderRadius = "50%";
    star.style.pointerEvents = "none";
    star.style.opacity = theme === "dark" ? 0.8 : 0.5;
    star.style.backgroundColor = theme === "dark" ? "#fff" : "#ffcc33";
    star.style.animation = `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 15000);
  }

  // Shooting star creation
  function createShootingStar(theme) {
    const star = document.createElement("div");
    star.className = "shooting-star";
    star.style.top = `${Math.random() * window.innerHeight * 0.5}px`;
    star.style.left = `-100px`;
    star.style.width = "2px";
    star.style.height = "80px";
    star.style.background = theme === "dark" ? "linear-gradient(45deg, #fff, transparent)" : "linear-gradient(45deg, #ffcc33, transparent)";
    star.style.position = "fixed";
    star.style.pointerEvents = "none";
    star.style.transform = `rotate(45deg)`;
    star.style.opacity = 0.8;
    star.style.transition = "all 1.5s linear";
    document.body.appendChild(star);

    setTimeout(() => {
      star.style.left = `${window.innerWidth + 100}px`;
      star.style.top = `${Math.random() * window.innerHeight}px`;
    }, 50);

    setTimeout(() => star.remove(), 2000);
  }

  const theme = htmlEl.classList.contains("dark") ? "dark" : "light";

  // Floating stars interval
  const starInterval = setInterval(() => createStar(theme), theme === "dark" ? 250 : 400);

  // Shooting stars interval
  const shootingInterval = setInterval(() => createShootingStar(theme), 5000);

  // Parallax on mouse move
  window.addEventListener("mousemove", parallax);

  return () => {
    clearInterval(starInterval);
    clearInterval(shootingInterval);
    window.removeEventListener("mousemove", parallax);
  };
}
