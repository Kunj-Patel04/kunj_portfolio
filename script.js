/************************************************************************
 * 1. PORTFOLIO CONFIGURATION OBJECT
 * Edit the values below to update the entire website instantly!
 ************************************************************************/
const portfolioData = {
    // General Info
    name: "Kunj Fadadu", // Your Name
    role: "Java Developer",
    greeting: "Hi there, I'm",
    shortBio: "Building scalable backend solutions and robust APIs.",
    
    // Hero Image: Leave empty ("") to use the default animated gradient shape, 
    // or provide a direct image URL (e.g., "https://example.com/myphoto.jpg")
    photoURL: "",  // C:/Users/kunjf/Desktop/Portfolio/kunj_photo.jpeg

    // About Section
    about: {
        description: "I am a passionate Java Developer with 6 months of hands-on experience building robust and scalable applications. My primary focus is on backend development, crafting efficient RESTful APIs, and solving complex problems with clean, maintainable code. I thrive in collaborative environments and am constantly eager to learn modern frameworks and best practices to deliver high-quality software.",
        skills: [
            "Java", "Spring Boot", "RESTful APIs", "SQL", 
            "Hibernate", "Git", "PostgreSQL"
        ]
    },

    // Projects Section
    projects: [
        {
            title: "Broker Buz",
            description: "Developed a multi-tenant, branch-based real estate platform for managing properties, leads, brokers, builders, and property units. Built scalable REST APIs with tenant and branch-level data isolation, business workflows, and integrated Google Calendar API for calendar and event management.",
            tags: ["Java", "Spring Boot", "Intellij Idea", "PostgreSQL"]
        },
        {
            title: "Greina IOT",
            description: "Developed a multi-tenant IoT management platform for monitoring and managing connected devices and things across tenant sites. Built dynamic dashboards and reporting features to visualize device data, monitor usage, and analyze real-time IoT metrics.",
            tags: ["Java", "Spring MVC", "MySQL", "Docker"]
        },
        {
            title: "Expense Hub",
            description: "Developed an expense management platform for tracking personal and shared expenses. Implemented user-based expense management, expense splitting between friends, petty cash tracking, and profile-based expense organization.",
            tags: ["Java", "Spring Boot", "Intellij Idea", "PostgreSQL", "Pg Admin"]
        }
    ],

    // Contact Section
    contact: {
        email: "fadadukunj04@gmail.com",
        phone: "+91 93272 93750",
        message: "I am currently open to new opportunities to apply my Java skills. Whether you have a question, a project proposal, or just want to connect, feel free to reach out!"
    }
};

/************************************************************************
 * 2. DOM POPULATION LOGIC
 * (You don't need to edit this unless modifying the structure)
 ************************************************************************/

document.addEventListener('DOMContentLoaded', () => {
    // Populate Nav & Footer
    document.getElementById('nav-logo').textContent = portfolioData.name;
    document.getElementById('footer-name').textContent = portfolioData.name;
    document.getElementById('year').textContent = new Date().getFullYear();

    // Populate Hero
    document.getElementById('hero-greeting').textContent = portfolioData.greeting;
    document.getElementById('hero-name').textContent = portfolioData.name;
    document.getElementById('hero-role').textContent = portfolioData.role;
    document.getElementById('hero-bio').textContent = portfolioData.shortBio;
    
    const imageBox = document.getElementById('hero-image-box');
    if (portfolioData.photoURL && portfolioData.photoURL.trim() !== "") {
        imageBox.innerHTML = `<img src="${portfolioData.photoURL}" alt="${portfolioData.name}">`;
        imageBox.style.background = 'transparent';
        imageBox.style.animation = 'none'; // Stop morphing if real image is provided
        imageBox.style.borderRadius = '50%'; // Make it a circle
    }

    // Populate About
    document.getElementById('about-description').textContent = portfolioData.about.description;
    
    const skillsGrid = document.getElementById('skills-grid');
    portfolioData.about.skills.forEach(skill => {
        const span = document.createElement('span');
        span.className = 'skill-tag';
        span.textContent = skill;
        skillsGrid.appendChild(span);
    });

    // Populate Projects
    const projectsGrid = document.getElementById('projects-grid');
    portfolioData.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
        
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${tagsHTML}
            </div>
        `;
        projectsGrid.appendChild(card);
    });

    // Populate Contact
    document.getElementById('contact-message').textContent = portfolioData.contact.message;
    document.getElementById('contact-email').textContent = portfolioData.contact.email;
    document.getElementById('contact-phone').textContent = portfolioData.contact.phone;
    document.getElementById('mailto-btn').href = `mailto:${portfolioData.contact.email}`;
    
    initThemeToggle();
});

/************************************************************************
 * 3. THEME TOGGLE LOGIC (Dark/Light Mode)
 ************************************************************************/

function initThemeToggle() {
    const themeBtn = document.getElementById('theme-btn');
    const htmlElement = document.documentElement;
    
    // SVG Icons
    const sunIcon = `<svg viewBox="0 0 24 24"><path d="M12,4.643c-4.058,0-7.357,3.299-7.357,7.357s3.299,7.357,7.357,7.357s7.357-3.299,7.357-7.357S16.058,4.643,12,4.643z M12,17.357c-2.954,0-5.357-2.403-5.357-5.357s2.403-5.357,5.357-5.357s5.357,2.403,5.357,5.357S14.954,17.357,12,17.357z"/><rect x="11" width="2" height="3"/><rect x="11" y="21" width="2" height="3"/><rect y="11" width="3" height="2"/><rect x="21" y="11" width="3" height="2"/><polygon points="5.636,4.222 4.222,5.636 6.343,7.757 7.757,6.343"/><polygon points="17.657,16.243 16.243,17.657 18.364,19.778 19.778,18.364"/><polygon points="4.222,18.364 5.636,19.778 7.757,17.657 6.343,16.243"/><polygon points="16.243,6.343 17.657,7.757 19.778,5.636 18.364,4.222"/></svg>`;
    
    const moonIcon = `<svg viewBox="0 0 24 24"><path d="M12.096,2.023C12.568,2.062,13,2.122,13.435,2.2c-4.469,0.803-7.865,4.71-7.865,9.457c0,5.302,4.298,9.6,9.6,9.6 c1.796,0,3.473-0.493,4.921-1.341C18.258,21.57,15.318,23,12,23C5.925,23,1,18.075,1,12C1,6.598,4.896,2.063,10.096,1.015 C10.74,0.887,11.411,0.923,12.096,2.023z"/></svg>`;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        themeBtn.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
    }
}
