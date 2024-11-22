// Wait for the DOM to load completely before running the script
document.addEventListener('DOMContentLoaded', function () {

    // --- Contact Form Submission --- //
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the form from submitting normally

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Simple validation
            if (name && email && message) {
                document.getElementById("successMessage").style.display = "block";
            } else {
                alert("Please fill out all fields.");
            }
        });
    }

    // --- Registration Form Submission --- //
    const registrationForm = document.getElementById("registrationForm");
    if (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const category = document.getElementById("category").value;
            const gender = document.querySelector('input[name="gender"]:checked');

            if (name && email && category && gender) {
                alert(`Registration Successful! Welcome, ${name}`);
            } else {
                alert("Please fill out all fields.");
            }
        });
    }

    // --- Workshop Registration --- //
    const registerWorkshopButtons = document.querySelectorAll('.workshop .btn');
    registerWorkshopButtons.forEach(button => {
        button.addEventListener('click', function () {
            const workshopName = this.previousElementSibling.textContent;
            alert(`You have successfully registered for the ${workshopName} workshop!`);
        });
    });

    // --- Product Add to Cart --- //
    const addToCartButtons = document.querySelectorAll('.product .btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.previousElementSibling.previousElementSibling.textContent;
            alert(`${productName} has been added to your cart.`);
        });
    });

    // --- Filtering and Sorting for Projects --- //
    const filterSelect = document.getElementById("projectFilter");
    const sortSelect = document.getElementById("projectSort");
    const projectCards = document.querySelectorAll(".project-card");

    // Filter Projects
    if (filterSelect) {
        filterSelect.addEventListener("change", function () {
            const selectedCategory = this.value;
            filterProjects(selectedCategory);
        });
    }

    // Sort Projects
    if (sortSelect) {
        sortSelect.addEventListener("change", function () {
            const selectedSort = this.value;
            sortProjects(selectedSort);
        });
    }

    // Function to filter projects based on category
    function filterProjects(category) {
        projectCards.forEach(card => {
            if (category === "all" || card.classList.contains(category)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Function to sort projects alphabetically
    function sortProjects(order) {
        const sortedProjects = Array.from(projectCards).sort((a, b) => {
            const titleA = a.querySelector("h3").textContent;
            const titleB = b.querySelector("h3").textContent;

            return order === "asc" ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
        });

        const container = document.querySelector(".projects-container");
        sortedProjects.forEach(project => container.appendChild(project));
    }

    // --- Smooth Fade-In Animation for Projects --- //
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        element.classList.add('animate-fade-in');
    });
});

// Add CSS for smooth fade-in animation
document.addEventListener('DOMContentLoaded', function () {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fadeIn 1s ease-out;
        }
    `;
    document.head.appendChild(style);
});
