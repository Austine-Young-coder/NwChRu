

  document.addEventListener('DOMContentLoaded', function () {
            const darkModeToggle = document.getElementById("darkModeToggle");
            const body = document.body;
            const contactForm = document.getElementById("contactForm");  // Get the form element

            //Check if contactForm exist, to prevent the null error
            if(contactForm){

              contactForm.addEventListener("submit", function (event) {                event.preventDefault();

                const name = document.getElementById("name").value.trim();
                const email = document.getElementById("email").value.trim();
                const message = document.getElementById("message").value.trim();

                // Simple validation
                if (!name || !email || !message) {
                    alert("Please fill in all fields.");
                    return; // Stop submission if fields are empty
                }

// Validate email format (basic)
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    alert("Please enter a valid email address.");
                    return;
                }
const encodedMessage = encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
                );

                const whatsappNumber = "2348109352330"; // Replace with your number
                const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

                // Open WhatsApp (with error handling)
                try {
                    window.open(whatsappURL, "_blank");

                    // Clear the form on success
                    contactForm.reset();
                } catch (error) {
                    console.error("Error opening WhatsApp:", error);
                    alert("Failed to open WhatsApp. Please check if you have WhatsApp installed and try again.");
                }
            });
          }

            darkModeToggle.addEventListener('click', function () {
                body.classList.toggle("dark-mode");
                const darkmodeIcon = document.querySelector(".darkmode i"); // Now query for the "i" element inside menu-icon
                
                if (body.classList.contains("dark-mode")) {
                    localStorage.setItem("darkMode", "enabled");
                    darkmodeIcon.classList.remove("fa-moon");
                    darkmodeIcon.classList.add("fa-sun");
                } else {
                    localStorage.setItem("darkMode", "disabled");
                    darkmodeIcon.classList.remove("fa-sun");
                    darkmodeIcon.classList.add("fa-moon");
                }
            });

            if (localStorage.getItem("darkMode") === "enabled") {
                body.classList.add("dark-mode");
            }


            // Function to scroll smoothly to a section
            function scrollToSection(sectionId) {
                const section = document.querySelector(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }

            // Attach smooth scroll to navigation links
            document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            scrollToSection(targetId);
        }
        // Don't preventDefault for normal links like support.html
    });
});
});
        


  function animateMenuItem(element, animationType) {
    //Remove the class when it restarts, so it will run the animation smoothly
    element.addEventListener("animationend", () => {
        element.classList.remove(animationType);
    });

    element.classList.add(animationType);

}

//Add menu toggle event listener
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  const menuIcon = document.querySelector(".menu-icon i"); // Now query for the "i" element inside menu-icon

  if (sidebar.style.right === '0px' || sidebar.style.right === '0') {
    // Close the sidebar
    sidebar.style.right = '-400px';
    overlay.style.display = 'none';

    // Change icon back to menu (hamburger)
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  } else {
    // Open the sidebar
    sidebar.style.right = '0';
    overlay.style.display = 'block';

    // Change icon to close (times)
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  }
}

document.getElementById('overlay').addEventListener('click', function() {
  toggleMenu(); // Just call the function!
});


// Also update the click handler for the menu item if necessary:
const menuItems = document.querySelectorAll('#sidebar nav ul li a');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        toggleMenu(); // Call toggleMenu on menu item click too, if desired
    });
});



const animatedItems = document.querySelectorAll('.scroll-up');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

animatedItems.forEach(item => observer.observe(item));


document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        scrollToSection(targetId);
    });
});


    function animateCounter(target, end, duration = 1000, callback) { // Add callback
        let start = 0;
        const step = Math.ceil((end - start) / (duration / 10));
        const interval = setInterval(() => {
            start += step;
            if (start >= end) {
                start = end;
                clearInterval(interval);
                target.innerText = start + "%";
                if (callback) {
                    callback(); // Call the callback when animation is complete
                }
            } else {
                target.innerText = start + "%";
            }
        }, 10);
    }

   
    
      const cube = document.getElementById('cube');
  const faces = [
    'rotateY(0deg)',
    'rotateY(-180deg)',
    'rotateY(-90deg)',
    'rotateY(90deg)',
    'rotateX(-90deg)',
    'rotateX(90deg)'
  ];

  let current = 0;
  setInterval(() => {
    current = (current + 1) % faces.length;
    cube.style.transform = faces[current];
  }, 3000);