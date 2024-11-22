// JavaScript for Filtering, Sorting, and Animations
document.addEventListener("DOMContentLoaded", function () {
    const categoryFilter = document.getElementById("categoryFilter");
    const sortProjects = document.getElementById("sortProjects");
    const projectGrid = document.getElementById("projectGrid");

    // Event listeners for filter and sort
    categoryFilter.addEventListener("change", filterProjects);
    sortProjects.addEventListener("change", sortProjectsList);

    // Function to filter projects based on category
    function filterProjects() {
        const selectedCategory = categoryFilter.value;
        const projects = projectGrid.getElementsByClassName("project-card");

        for (let project of projects) {
            if (selectedCategory === "all" || project.classList.contains(selectedCategory)) {
                project.style.display = "block";
                project.classList.add("fadeIn");
            } else {
                project.style.display = "none";
            }
        }
    }

    // Function to sort projects by name
    function sortProjectsList() {
        const order = sortProjects.value;
        const projects = Array.from(projectGrid.getElementsByClassName("project-card"));
        
        projects.sort((a, b) => {
            const nameA = a.querySelector("h3").textContent.toLowerCase();
            const nameB = b.querySelector("h3").textContent.toLowerCase();

            if (order === "asc") {
                return nameA < nameB ? -1 : 1;
            } else {
                return nameA > nameB ? -1 : 1;
            }
        });

        // Reorder projects in the grid
        projects.forEach(project => {
            projectGrid.appendChild(project);
        });
    }

    // Initial call to display all projects
    filterProjects();
});
