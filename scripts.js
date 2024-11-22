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
