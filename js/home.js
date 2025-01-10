document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = slider.querySelectorAll("img"); // All slides
    let index = 0;

    function autoSlide() {
        index++;
        if (index >= slides.length) {
            index = 0; // Reset to the first slide
        }

        slider.scrollTo({
            left: slider.offsetWidth * index, // Move to the next slide
            behavior: "smooth",
        });
    }

    // Function to adjust slider height for desktop
    function adjustSliderHeight() {
        if (window.innerWidth >= 992) { // Desktop breakpoint
            slider.style.height = "500px"; // Original desktop height
        } else {
            slider.style.height = "200px"; // Responsive height for smaller screens
        }
    }

    // Start auto-sliding every 5 seconds
    setInterval(autoSlide, 5000);

    // Adjust slider height on page load and window resize
    adjustSliderHeight();
    window.addEventListener("resize", adjustSliderHeight);
});


         // Select the menu button and the navigation links
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Add a click event listener to the menu button
    menuToggle.addEventListener('click', () => {
        // Toggle the 'active' class on the navigation links
        navLinks.classList.toggle('active');
    });

    // Optional: Close the menu when a link is clicked
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    
    
