// Enhanced backgroundStars.js with cosmic effects
export function initBackgroundStars() {
  const htmlEl = document.documentElement;

  // Remove previous stars
  const oldStars = document.querySelectorAll(".floating-star, .shooting-star, .cosmic-particle, .nebula-cloud");
  oldStars.forEach(star => star.remove());

  // Enhanced parallax function
  function parallax(e) {
    const stars = document.querySelectorAll(".floating-star");
    const particles = document.querySelectorAll(".cosmic-particle");
    
    stars.forEach((star, i) => {
      const speed = (i + 1) * 0.02;
      star.style.transform = `translate(${e.clientX * speed}px, ${e.clientY * speed}px)`;
    });

    particles.forEach((particle, i) => {
      const speed = (i + 1) * 0.01;
      particle.style.transform = `translate(${e.clientX * speed}px, ${e.clientY * speed}px)`;
    });
  }

  // Enhanced floating star creation
  function createStar(theme) {
    const star = document.createElement("div");
    star.className = "floating-star";
    star.style.top = `${Math.random() * window.innerHeight}px`;
    star.style.left = `${Math.random() * window.innerWidth}px`;
    const size = theme === "dark" ? 2 + Math.random() * 4 : 1 + Math.random() * 2;
    star.style.width = star.style.height = `${size}px`;
    star.style.position = "fixed";
    star.style.borderRadius = "50%";
    star.style.pointerEvents = "none";
    star.style.opacity = theme === "dark" ? 0.8 : 0.5;
    
    // Cosmic colors for dark theme
    const colors = theme === "dark" 
      ? ["#fbbf24", "#ec4899", "#10b981", "#ffffff", "#8b5cf6"]
      : ["#ffcc33", "#ff6b6b", "#4ecdc4"];
    
    star.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    star.style.boxShadow = theme === "dark" 
      ? `0 0 ${size * 2}px ${star.style.backgroundColor}` 
      : "none";
    
    star.style.animation = `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 20000);
  }

  // Enhanced shooting star creation
  function createShootingStar(theme) {
    const star = document.createElement("div");
    star.className = "shooting-star";
    star.style.top = `${Math.random() * window.innerHeight * 0.5}px`;
    star.style.left = `-100px`;
    star.style.width = "3px";
    star.style.height = "100px";
    
    const colors = theme === "dark" 
      ? ["linear-gradient(45deg, #fbbf24, #ec4899, transparent)", "linear-gradient(45deg, #10b981, #8b5cf6, transparent)"]
      : ["linear-gradient(45deg, #ffcc33, transparent)"];
    
    star.style.background = colors[Math.floor(Math.random() * colors.length)];
    star.style.position = "fixed";
    star.style.pointerEvents = "none";
    star.style.transform = `rotate(45deg)`;
    star.style.opacity = 0.9;
    star.style.transition = "all 2s linear";
    star.style.borderRadius = "50%";
    document.body.appendChild(star);

    setTimeout(() => {
      star.style.left = `${window.innerWidth + 100}px`;
      star.style.top = `${Math.random() * window.innerHeight}px`;
    }, 50);

    setTimeout(() => star.remove(), 2500);
  }

  // Cosmic particle creation
  function createCosmicParticle(theme) {
    const particle = document.createElement("div");
    particle.className = "cosmic-particle";
    particle.style.top = `${Math.random() * window.innerHeight}px`;
    particle.style.left = `${Math.random() * window.innerWidth}px`;
    const size = Math.random() * 2 + 1;
    particle.style.width = particle.style.height = `${size}px`;
    particle.style.position = "fixed";
    particle.style.borderRadius = "50%";
    particle.style.pointerEvents = "none";
    particle.style.opacity = Math.random() * 0.6 + 0.2;
    
    const colors = theme === "dark" 
      ? ["#ec4899", "#10b981", "#8b5cf6", "#fbbf24"]
      : ["#ff6b6b", "#4ecdc4", "#45b7d1"];
    
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.animation = `float ${4 + Math.random() * 4}s ease-in-out infinite`;
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 15000);
  }

  // Nebula cloud creation
  function createNebulaCloud(theme) {
    if (theme !== "dark") return;
    
    const cloud = document.createElement("div");
    cloud.className = "nebula-cloud";
    cloud.style.top = `${Math.random() * window.innerHeight}px`;
    cloud.style.left = `${Math.random() * window.innerWidth}px`;
    const size = 100 + Math.random() * 200;
    cloud.style.width = `${size}px`;
    cloud.style.height = `${size}px`;
    cloud.style.position = "fixed";
    cloud.style.borderRadius = "50%";
    cloud.style.pointerEvents = "none";
    cloud.style.opacity = Math.random() * 0.3 + 0.1;
    
    const gradients = [
      "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
      "radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)",
      "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
      "radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, transparent 70%)"
    ];
    
    cloud.style.background = gradients[Math.floor(Math.random() * gradients.length)];
    cloud.style.animation = `nebula-drift ${15 + Math.random() * 10}s linear infinite`;
    document.body.appendChild(cloud);
    setTimeout(() => cloud.remove(), 25000);
  }

  const theme = htmlEl.classList.contains("dark") ? "dark" : "light";

  // Enhanced intervals
  const starInterval = setInterval(() => createStar(theme), theme === "dark" ? 200 : 400);
  const shootingInterval = setInterval(() => createShootingStar(theme), theme === "dark" ? 3000 : 8000);
  const particleInterval = setInterval(() => createCosmicParticle(theme), theme === "dark" ? 500 : 1000);
  const nebulaInterval = setInterval(() => createNebulaCloud(theme), theme === "dark" ? 8000 : 0);

  // Enhanced parallax on mouse move
  window.addEventListener("mousemove", parallax);

  return () => {
    clearInterval(starInterval);
    clearInterval(shootingInterval);
    clearInterval(particleInterval);
    clearInterval(nebulaInterval);
    window.removeEventListener("mousemove", parallax);
  };
}
