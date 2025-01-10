// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Get all necessary elements
    const giveTestimonyBtn = document.getElementById('giveTestimonyBtn');
    const slidingSection = document.getElementById('slidingSection');
    const closeFormBtn = document.getElementById('closeForm');

    // Log elements to check if they're found
    console.log('Give Testimony Button:', giveTestimonyBtn);
    console.log('Sliding Section:', slidingSection);
    console.log('Close Button:', closeFormBtn);

    if (!giveTestimonyBtn || !slidingSection || !closeFormBtn) {
        console.error('One or more elements not found');
        return;
    }

    // Function to open form
    const openTestimonyForm = () => {
        console.log('Opening form');
        slidingSection.style.display = 'block'; // First make it visible
        setTimeout(() => { // Add a slight delay before adding the active class
            slidingSection.classList.add('active');
            document.body.classList.add('form-active');
        }, 10);
    };

    // Function to close form
    const closeTestimonyForm = () => {
        console.log('Closing form');
        slidingSection.classList.remove('active');
        document.body.classList.remove('form-active');
        // Wait for transition to complete before hiding
        setTimeout(() => {
            slidingSection.style.display = 'none';
        }, 500); // Match this with your CSS transition time
    };

    // Add click event listener to open button
    giveTestimonyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Button clicked');
        openTestimonyForm();
    });

    // Add click event listener to close button
    closeFormBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeTestimonyForm();
    });

    // Close form when clicking outside
    slidingSection.addEventListener('click', (e) => {
        if (e.target === slidingSection) {
            closeTestimonyForm();
        }
    });

    // Close form with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && slidingSection.classList.contains('active')) {
            closeTestimonyForm();
        }
    });

    // Handle form submission
    const testimonyForm = document.querySelector('.testimony-form');
    if (testimonyForm) {
        testimonyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
            closeTestimonyForm();
        });
    }
});