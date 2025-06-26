// Typewriter loop
const phrases = [
  "we dream, we code",
  "code is our poetry, website/app is the Canva",
  "Let's build the future of software together"
];
let currentPhrase = 0;
let letter = 0;
let typing = true;
const typingText = document.getElementById("typing-text");

function typeLoop() {
  if (typing) {
    if (letter <= phrases[currentPhrase].length) {
      typingText.textContent = phrases[currentPhrase].substring(0, letter++);
    } else {
      typing = false;
      setTimeout(typeLoop, 3000);
    }
  } else {
    letter = 0;
    typing = true;
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(typeLoop, 100);
  }
}
typeLoop();

// Slideshow
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
setInterval(() => {
  slides.forEach((s, i) => s.classList.toggle("active", i === currentSlide));
  currentSlide = (currentSlide + 1) % slides.length;
}, 5000);
 function copyNumber() {
    navigator.clipboard.writeText("8109352330");
    alert("Copied!");
  }

  function takeScreenshot() {
    html2canvas(document.body).then(canvas => {
      const link = document.createElement('a');
      link.download = "screenshot.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  }

  // Slide image when in view
  const slideImg = document.getElementById("slideImg");
  window.addEventListener("scroll", () => {
  const rect = slideImg.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      slideImg.classList.add("visible");
    }
  });
  
  
  
  const texts = [
    "welcome to AUS support page _",
    "we dream, we code _",
    "code is our poetry, website/app is the Canva _",
    "Let's build the future of software together _"
  ];

  let i = 0;
  let j = 0;
  let currentText = '';
  let isDeleting = false;

  function type() {
    const typewriter = document.getElementById('typewriter');
    if (!typewriter) return;

    currentText = texts[i];
    if (isDeleting) {
      j--;
    } else {
      j++;
    }

    typewriter.textContent = currentText.substring(0, j);
 let speed = isDeleting ? 40 : 70;

    if (!isDeleting && j === currentText.length) {
      speed = 4000; // pause before deleting
      isDeleting = true;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
      speed = 800;
    }

    setTimeout(type, speed);
  }

  document.addEventListener("DOMContentLoaded", type);
  

  window.addEventListener("load", function () {
    document.getElementById("preoader").style.display = "none";
  });
