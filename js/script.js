// Hero Wave Animation
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("heroWave");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector(".hero").offsetHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const barCount = 80;
  let bars = [];
  for(let i=0;i<barCount;i++){
    bars.push({ x: i*(canvas.width/barCount), height: Math.random()*50+50, speed: Math.random()*0.05+0.02, phase: Math.random()*Math.PI*2 });
  }

  function drawWave(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    bars.forEach(bar=>{
      const y = canvas.height - (Math.sin(bar.phase)*bar.height + bar.height);
      ctx.fillStyle = `rgba(204,0,255,0.6)`; // neon ungu
      ctx.fillRect(bar.x, y, canvas.width/barCount*0.6, bar.height);
      bar.phase += bar.speed;
    });
    requestAnimationFrame(drawWave);
  }
  drawWave();
});
// Dark mode otomatis
const hour = new Date().getHours();
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if(hour>=18 || hour<6 || prefersDark){
  document.body.classList.add('dark');
}else{
  document.body.classList.remove('dark');
}

// Scroll reveal
function revealOnScroll(){
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el=>{
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Hamburger menu mobile
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', ()=>{
  navLinks.classList.toggle('active');
});
