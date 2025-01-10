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