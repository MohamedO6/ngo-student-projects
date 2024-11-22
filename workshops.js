// Array of 8 workshops data
const workshops = [
    {
        title: "Introduction to Web Development",
        date: "February 25, 2024",
        description: "This workshop will introduce you to web development concepts, HTML, CSS, and JavaScript.",
        imgSrc: "https://via.placeholder.com/350x250",
        link: "workshop-details.html"
    },
    {
        title: "Advanced JavaScript",
        date: "March 10, 2024",
        description: "Explore advanced JavaScript topics including ES6, APIs, and asynchronous programming.",
        imgSrc: "https://via.placeholder.com/350x250",
        link: "workshop-details.html"
    },
    {
        title: "Graphic Design for Beginners",
        date: "April 5, 2024",
        description: "Learn the basics of graphic design and tools like Photoshop and Illustrator in this workshop.",
        imgSrc: "https://via.placeholder.com/350x250",
        link: "workshop-details.html"
    },
    {
        title: "Digital Marketing Strategies",
        date: "April 20, 2024",
        description: "This workshop will teach you the fundamentals of digital marketing and social media strategies.",
        imgSrc: "https://via.placeholder.com/350x250",
        link: "workshop-details.html"
    },
    {
        title: "Machine Learning Essentials",
        date: "May 5, 2024",
        description: "Join us to understand machine learning and its applications in data science.",
        imgSrc: "https://via.placeholder.com/350x250",
        link: "workshop-details.html"
    },
    {
        title: "Mobile App Development",
        date: "May 15, 2024",
        description: "This workshop covers the basics of mobile app development using React Native.",
        imgSrc: "https://via.placeholder.com/350x250",
        link: "workshop-details.html"
    },
    {
        title: "UI/UX Design Fundamentals",
        date: "June 1, 2024",
        description: "Learn the key principles of user interface and user experience design.",
        imgSrc: "https://via.placeholder.com/350x250",
        link: "workshop-details.html"
    },
    {
        title: "Blockchain and Cryptocurrencies",
        date: "June 20, 2024",
        description: "This workshop will dive into blockchain technology and the basics of cryptocurrencies.",
        imgSrc: "https://via.placeholder.com/350x250",
        link: "workshop-details.html"
    }
];

// Function to generate and display cards dynamically
function displayWorkshops() {
    const container = document.getElementById('workshop-cards-container');
    
    workshops.forEach(workshop => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <img src="${workshop.imgSrc}" alt="${workshop.title}">
            <h3>${workshop.title}</h3>
            <p><strong>Date:</strong> ${workshop.date}</p>
            <p>${workshop.description}</p>
            <a href="${workshop.link}" class="btn">More Info</a>
        `;
        
        container.appendChild(card);
    });
}

// Call the function when the page loads
window.onload = displayWorkshops;