// State management
let currentTheme = 'light';
let activeSection = null;

// DOM Elements
const container = document.getElementById('portfolio-container');
const modeSwitch = document.getElementById('mode-switch');
const contentArea = document.getElementById('content-area');
const closeButton = document.getElementById('close-button');
const navButtons = document.querySelectorAll('.nav-button');

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    currentTheme = savedTheme;
    container.className = `portfolio-container ${currentTheme}-mode`;
}

// Toggle theme
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    container.className = `portfolio-container ${currentTheme}-mode`;
    if (activeSection) {
        container.classList.add('section-active');
    }
    localStorage.setItem('theme', currentTheme);
}

// Section content templates
function getSectionContent(section) {
    switch(section) {
        case 'profile':
            return `
                <div class="section-content profile-content">
                    <h1>About Me</h1>
                    <div class="profile-card">
                        <div class="profile-image-placeholder">
                            <div class="magnifier-icon">🔍</div>
                        </div>
                        <div class="profile-text">
                            <h2>Your Name</h2>
                            <p class="subtitle">Creative Developer & Designer</p>
                            <p>Welcome to my desk! I'm passionate about creating beautiful, functional experiences. With a keen eye for detail and a love for stationary aesthetics, I craft digital spaces that feel both modern and nostalgic.</p>
                            <div class="skills">
                                <span class="skill-tag">UI/UX Design</span>
                                <span class="skill-tag">Web Development</span>
                                <span class="skill-tag">Creative Coding</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        
        case 'projects':
            return `
                <div class="section-content projects-content">
                    <h1>Projects</h1>
                    <div class="projects-grid">
                        <div class="project-card">
                            <div class="project-icon">📓</div>
                            <h3>Project One</h3>
                            <p>A beautiful web application with smooth animations and modern design.</p>
                            <button class="project-link">View Project →</button>
                        </div>
                        <div class="project-card">
                            <div class="project-icon">✏️</div>
                            <h3>Project Two</h3>
                            <p>An interactive experience that combines art and technology.</p>
                            <button class="project-link">View Project →</button>
                        </div>
                        <div class="project-card">
                            <div class="project-icon">📐</div>
                            <h3>Project Three</h3>
                            <p>A creative coding experiment exploring generative design.</p>
                            <button class="project-link">View Project →</button>
                        </div>
                    </div>
                </div>
            `;
        
        case 'location':
            return `
                <div class="section-content location-content">
                    <h1>Location</h1>
                    <div class="location-card">
                        <div class="globe-icon">🌍</div>
                        <h2>Based in Your City</h2>
                        <p class="location-details">Available for remote work worldwide</p>
                        <div class="location-info">
                            <div class="info-row">
                                <span class="label">Timezone:</span>
                                <span class="value">GMT+0</span>
                            </div>
                            <div class="info-row">
                                <span class="label">Languages:</span>
                                <span class="value">English, Others</span>
                            </div>
                            <div class="info-row">
                                <span class="label">Available for:</span>
                                <span class="value">Freelance & Full-time</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        
        case 'contact':
            return `
                <div class="section-content contact-content">
                    <div class="letter-envelope">
                        <div class="letter-paper">
                            <div class="letter-header">
                                <div class="pen-icon">🖊️</div>
                                <h1>Let's Connect</h1>
                            </div>
                            <form class="contact-form" id="contact-form">
                                <div class="form-group">
                                    <label>Your Name</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="john@example.com" />
                                </div>
                                <div class="form-group">
                                    <label>Message</label>
                                    <textarea rows="5" placeholder="Tell me about your project..."></textarea>
                                </div>
                                <button type="submit" class="submit-btn">Send Message ✉️</button>
                            </form>
                            <div class="contact-links">
                                <a href="#">LinkedIn</a>
                                <a href="#">GitHub</a>
                                <a href="#">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        
        default:
            return '';
    }
}

// Handle section click
function handleSectionClick(section) {
    activeSection = section;
    container.classList.add('section-active');
    contentArea.innerHTML = getSectionContent(section);
    
    // Add form submit handler if contact section
    if (section === 'contact') {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Form submitted! (This is a demo)');
            });
        }
    }
}

// Close section
function closeSection() {
    activeSection = null;
    container.classList.remove('section-active');
    contentArea.innerHTML = '';
}

// Event listeners
modeSwitch.addEventListener('click', toggleTheme);
closeButton.addEventListener('click', closeSection);

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const section = button.getAttribute('data-section');
        handleSectionClick(section);
    });
});

// Initialize
initTheme();