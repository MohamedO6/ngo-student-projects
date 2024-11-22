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
});

.projects-section h2 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 40px;
}

/* Container for Project Cards */
.projects-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
}

/* Individual Project Card */
.project-card {
    width: calc(25% - 20px); /* 4 cards per row */
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    text-align: center;
}

.project-card img {
    width: 100%;
    height: auto;
    border-bottom: 2px solid #ddd;
}

/* Project Card Title */
.project-card h3 {
    font-size: 1.5rem;
    color: #333;
    margin: 20px 0 10px;
}

/* Project Card Description */
.project-card p {
    color: #777;
    font-size: 1rem;
    margin-bottom: 20px;
}

/* View Details Link */
.project-card .project-link {
    text-decoration: none;
    padding: 10px 20px;
    background-color: #ff6347;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.project-card .project-link:hover {
    background-color: #ff4500;
}

/* Responsive Design for Smaller Screens */
@media (max-width: 1200px) {
    .project-card {
        width: calc(33.33% - 20px); /* 3 cards per row */
    }
}

@media (max-width: 768px) {
    .project-card {
        width: calc(50% - 20px); /* 2 cards per row */
    }
}

@media (max-width: 480px) {
    .project-card {
        width: 100%; /* 1 card per row */
    }
}
