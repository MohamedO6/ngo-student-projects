document.addEventListener('DOMContentLoaded', function () {

    // --- Project Filtering and Sorting --- //
    const filterSelect = document.getElementById('categoryFilter');
    const sortSelect = document.getElementById('sortBy');
    const projects = document.querySelectorAll('.project-card');

    filterSelect.addEventListener('change', function () {
        const selectedCategory = this.value;
        filterProjects(selectedCategory);
    });

    sortSelect.addEventListener('change', function () {
        const selectedSort = this.value;
        sortProjects(selectedSort);
    });

    function filterProjects(category) {
        projects.forEach(project => {
            if (category === 'all' || project.classList.contains(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

    function sortProjects(order) {
        const sortedProjects = Array.from(projects).sort((a, b) => {
            const titleA = a.querySelector('h3').textContent;
            const titleB = b.querySelector('h3').textContent;

            return order === 'asc' ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
        });

        const container = document.querySelector('.projects-container');
        sortedProjects.forEach(project => container.appendChild(project));
    }

});
document.addEventListener('DOMContentLoaded', function () {
    // --- Contact Form Submission --- //
    const contactForm = document.getElementById("contactForm");
    const contactSuccessMessage = document.getElementById("successMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from submitting normally

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            // Basic validation
            if (name && email && message) {
                contactSuccessMessage.style.display = "block"; // Show success message
                contactForm.reset(); // Reset form fields
            } else {
                alert("Please fill out all fields.");
            }
        });
    }

    // --- Registration Form Submission --- //
    const registrationForm = document.getElementById("registrationForm");
    const registrationSuccessMessage = document.getElementById("registrationSuccess");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from submitting normally

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const category = document.getElementById("category").value;
            const gender = document.querySelector('input[name="gender"]:checked');
            
            if (name && email && category && gender) {
                registrationSuccessMessage.style.display = "block"; // Show success message
                registrationForm.reset(); // Reset form fields
            } else {
                alert("Please fill out all fields.");
            }
        });
    }
});
