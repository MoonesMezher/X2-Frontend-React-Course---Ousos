// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete React Mastery 2025 - From Zero to Hero",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "whats-next-journey",
            title: "What's Next? Your Journey Beyond React",
            content: `
                <h3>Congratulations! 🎉 You've Mastered Frontend Fundamentals</h3>
                <p>You now have a solid foundation with HTML, CSS, Tailwind, JavaScript, React, and Zustand. This is an incredible achievement! But your journey is just beginning. Here's what comes next:</p>
                
                <h3>🚀 Next Steps in Frontend Development</h3>
                
                <h4>1. Framework Power-Up: Next.js</h4>
                <ul>
                    <li><strong>Server-Side Rendering (SSR)</strong>: Better SEO and performance</li>
                    <li><strong>File-based Routing</strong>: Super simple navigation</li>
                    <li><strong>API Routes</strong>: Build backend endpoints in React</li>
                    <li><strong>Static Site Generation</strong>: Blazing fast websites</li>
                    <li><strong>Market Demand</strong>: Highly sought-after skill</li>
                </ul>
                
                <h4>2. Expand Your Platform Reach</h4>
                <ul>
                    <li><strong>Mobile Apps</strong>: React Native - build iOS/Android apps with React knowledge</li>
                    <li><strong>Desktop Apps</strong>: Electron.js - create cross-platform desktop applications</li>
                    <li><strong>Progressive Web Apps</strong>: Make websites feel like native apps</li>
                </ul>
                
                <h4>3. Specialized Frontend Areas</h4>
                <ul>
                    <li><strong>SEO Optimization</strong>: Learn how to make React apps search-engine friendly</li>
                    <li><strong>Web Performance</strong>: Master Core Web Vitals and optimization</li>
                    <li><strong>Web Accessibility</strong>: Make apps usable for everyone</li>
                    <li><strong>3D & WebGL</strong>: Three.js for interactive 3D experiences</li>
                    <li><strong>Web Animations</strong>: Advanced motion design and micro-interactions</li>
                </ul>
                
                <h3>🔗 Becoming Full-Stack (Optional Path)</h3>
                <p>If you want to handle both frontend and backend:</p>
                <ul>
                    <li><strong>Node.js + Express</strong>: JavaScript everywhere - easiest transition</li>
                    <li><strong>Python + Django/Flask</strong>: Great for data-heavy applications</li>
                    <li><strong>PHP + Laravel</strong>: Massive ecosystem, many job opportunities</li>
                    <li><strong>Databases</strong>: Learn SQL (PostgreSQL, MySQL) and/or NoSQL (MongoDB)</li>
                    <li><strong>APIs & Authentication</strong>: Master REST, GraphQL, OAuth, JWT</li>
                </ul>
                
                <h3>💼 Getting Into the Market - Practical Advice</h3>
                
                <h4>1. Build Your Portfolio (Most Important!)</h4>
                <ul>
                    <li><strong>Real Projects > Tutorials</strong>: Build 3-5 complete applications</li>
                    <li><strong>Solve Real Problems</strong>: Create apps for local businesses, family, or personal needs</li>
                    <li><strong>Showcase Diversity</strong>: Include different types of projects (dashboard, e-commerce, social app)</li>
                    <li><strong>Deploy Everything</strong>: Use Vercel, Netlify, or GitHub Pages - live projects impress</li>
                </ul>
                
                <h4>2. The Experience Loop</h4>
                <ul>
                    <li><strong>Start Small</strong>: Fix bugs for friends, help with WordPress sites</li>
                    <li><strong>Freelance Platforms</strong>: Upwork, Fiverr - build reputation with small gigs</li>
                    <li><strong>Local Businesses</strong>: Offer to build websites for restaurants, shops, professionals</li>
                    <li><strong>Open Source</strong>: Contribute to GitHub projects - great for learning and visibility</li>
                </ul>
                
                <h4>3. Networking & Visibility</h4>
                <ul>
                    <li><strong>LinkedIn Optimization</strong>: Complete profile, showcase projects, connect with developers</li>
                    <li><strong>Tech Communities</strong>: Join local meetups, Discord servers, attend workshops</li>
                    <li><strong>Create Content</strong>: Write blog posts, make tutorial videos, share on social media</li>
                    <li><strong>Teach Others</strong>: Explaining concepts solidifies your knowledge and builds credibility</li>
                </ul>
                
                <h4>4. Job Search Strategy</h4>
                <ul>
                    <li><strong>Junior Positions First</strong>: Look for "Junior Frontend Developer" or "React Developer" roles</li>
                    <li><strong>Startups vs Corporates</strong>: Startups offer more responsibility, corporates provide structure</li>
                    <li><strong>Remote Opportunities</strong>: Don't limit yourself geographically</li>
                    <li><strong>Internships</strong>: Even unpaid internships can lead to full-time offers</li>
                </ul>
                
                <h3>📚 Continuous Learning Path</h3>
                <ul>
                    <li><strong>TypeScript</strong>: The natural next step for better code quality</li>
                    <li><strong>Testing</strong>: Jest, React Testing Library, Cypress</li>
                    <li><strong>DevOps Basics</strong>: Docker, CI/CD, deployment workflows</li>
                    <li><strong>Soft Skills</strong>: Communication, teamwork, problem-solving</li>
                    <li><strong>Specialization</strong>: Eventually focus on what you love (UI/UX, animations, performance, etc.)</li>
                </ul>
                
                <h3>🌟 Remember These Truths</h3>
                <ul>
                    <li><strong>Everyone Starts Somewhere</strong>: Senior developers were once beginners too</li>
                    <li><strong>Consistency > Intensity</strong>: 1 hour daily beats 10 hours once a week</li>
                    <li><strong>Projects > Certificates</strong>: Employers care about what you can build</li>
                    <li><strong>Community Matters</strong>: You'll go farther with support and collaboration</li>
                    <li><strong>It's Okay to Specialize</strong>: You don't need to know everything</li>
                </ul>
                
                <div style="background: #f0f9ff; padding: 20px; border-radius: 10px; margin: 30px 0;">
                    <h4>🎯 Your 6-Month Action Plan</h4>
                    <ol>
                        <li><strong>Month 1-2</strong>: Build 3 complete React projects for your portfolio</li>
                        <li><strong>Month 3</strong>: Learn Next.js and rebuild one project with it</li>
                        <li><strong>Month 4</strong>: Add TypeScript to your projects</li>
                        <li><strong>Month 5</strong>: Start freelancing or contribute to open source</li>
                        <li><strong>Month 6</strong>: Apply for jobs while continuing to learn</li>
                    </ol>
                </div>
                
                <h3>🙌 Final Words from Your Coach</h3>
                <p>You have everything you need to succeed. The only thing standing between you and a career in tech is consistent action. Don't wait for the perfect moment - start building today. Share your journey, ask for help, and remember that every expert was once a beginner.</p>
                
                <p style="font-size: 1.2em; font-weight: bold; color: #2563eb; text-align: center; margin-top: 40px;">
                    Your journey continues... Build something amazing! 🚀
                </p>
            `,
            examples: [
                {
                    title: "Next.js Project Ideas to Build",
                    content: `
                        <p>Here are practical project ideas to build your portfolio:</p>
                        <ol>
                            <li><strong>Portfolio Website</strong>: Your own site with blog functionality using Next.js</li>
                            <li><strong>E-commerce Store</strong>: Complete with cart, checkout, and product pages</li>
                            <li><strong>Social Media Dashboard</strong>: With real-time updates and user authentication</li>
                            <li><strong>Job Board</strong>: Filterable listings with admin panel</li>
                            <li><strong>Learning Platform</strong>: Course management with progress tracking</li>
                            <li><strong>Real Estate Listing</strong>: Property search with maps and filters</li>
                            <li><strong>Recipe App</strong>: With search, categories, and user submissions</li>
                            <li><strong>Fitness Tracker</strong>: Workout logging with charts and progress</li>
                        </ol>
                    `
                }
            ],
            practices: [
                {
                    title: "Your Action Items",
                    content: `
                        <p>Complete these steps to launch your career:</p>
                        <ol>
                            <li>Update your LinkedIn profile with React skills</li>
                            <li>Create a GitHub account if you don't have one</li>
                            <li>Build and deploy your first portfolio project this week</li>
                            <li>Join 2-3 local tech communities or Discord servers</li>
                            <li>Help one person with their coding problem</li>
                            <li>Set up daily coding habit (even 30 minutes)</li>
                            <li>Document your learning journey (blog or social media)</li>
                            <li>Apply for 3 jobs/internships this month</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Should I learn backend or focus on becoming expert in frontend?",
                    answer: "Start by becoming competent in frontend first. Once you're comfortable building complete React applications, then explore backend if you're interested. Many successful developers specialize only in frontend. However, understanding backend basics (APIs, databases, authentication) will make you a better frontend developer and open more opportunities."
                },
                {
                    question: "How do I get my first job without experience?",
                    answer: "1) Build an impressive portfolio with 3-5 real projects. 2) Contribute to open source to gain experience. 3) Network actively - most junior positions come from referrals. 4) Start with freelancing or internships. 5) Prepare for interviews by practicing common questions. 6) Show enthusiasm and willingness to learn - these often matter more than technical skills for junior roles."
                },
                {
                    question: "What if I feel overwhelmed by all the technologies?",
                    answer: "Focus on one thing at a time. You don't need to learn everything. Master React first, then add one new technology at a time. The tech industry has many paths - find what interests you most. Remember: Depth in one area is more valuable than shallow knowledge of many things. Build projects you're passionate about, and the learning will follow naturally."
                }
            ]
        }
    ]
};

// DOM Elements
const topicsList = document.getElementById('topics-list');
const navButtons = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');

// Content display elements
const contentTitles = {
    content: document.getElementById('current-topic-title'),
    examples: document.getElementById('current-example-title'),
    practice: document.getElementById('current-practice-title'),
    questions: document.getElementById('current-question-title')
};

const contentContainers = {
    content: document.getElementById('topic-content'),
    examples: document.getElementById('topic-examples'),
    practice: document.getElementById('topic-practice'),
    questions: document.getElementById('topic-questions')
};

// State
let currentTopicId = null;
let currentSection = 'content';

// Initialize the application
function init() {
    renderTopicsList();
    setupEventListeners();
    
    // Set the first topic as active by default
    if (courseData.topics.length > 0) {
        setActiveTopic(courseData.topics[0].id);
    }
}

// Render the list of topics in the sidebar
function renderTopicsList() {
    topicsList.innerHTML = '';
    
    courseData.topics.forEach(topic => {
        const listItem = document.createElement('li');
        listItem.className = 'topic-item';
        listItem.textContent = topic.title;
        listItem.dataset.topicId = topic.id;
        
        listItem.addEventListener('click', () => {
            setActiveTopic(topic.id);
        });
        
        topicsList.appendChild(listItem);
    });
}

// Set up event listeners for navigation
function setupEventListeners() {
    // Navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.dataset.section;
            setActiveSection(section);
        });
    });
}

// Set the active topic and update content
function setActiveTopic(topicId) {
    currentTopicId = topicId;
    
    // Update active topic in sidebar
    document.querySelectorAll('.topic-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.topicId === topicId) {
            item.classList.add('active');
        }
    });
    
    // Update content based on current section
    updateContent();
}

// Set the active section and update content
function setActiveSection(section) {
    currentSection = section;
    
    // Update active navigation button
    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.section === section) {
            button.classList.add('active');
        }
    });
    
    // Show/hide content sections
    contentSections.forEach(sectionEl => {
        sectionEl.classList.remove('active');
    });
    document.getElementById(`${section}-section`).classList.add('active');
    
    // Update content if a topic is selected
    if (currentTopicId) {
        updateContent();
    }
}

// Update the displayed content based on current topic and section
function updateContent() {
    const topic = courseData.topics.find(t => t.id === currentTopicId);
    if (!topic) return;
    
    // Update section titles
    contentTitles.content.textContent = topic.title;
    contentTitles.examples.textContent = `${topic.title} - Examples`;
    contentTitles.practice.textContent = `${topic.title} - Practice`;
    contentTitles.questions.textContent = `${topic.title} - Questions`;
    
    // Update content based on current section
    switch (currentSection) {
        case 'content':
            renderContent(topic);
            break;
        case 'examples':
            renderExamples(topic);
            break;
        case 'practice':
            renderPractice(topic);
            break;
        case 'questions':
            renderQuestions(topic);
            break;
    }
}

// Render the main content for a topic
function renderContent(topic) {
    contentContainers.content.innerHTML = `
        <div class="content-box">
            ${topic.content}
        </div>
    `;
}

// Render examples for a topic
function renderExamples(topic) {
    if (!topic.examples || topic.examples.length === 0) {
        contentContainers.examples.innerHTML = `
            <div class="example-box">
                <p>No examples available for this topic yet.</p>
            </div>
        `;
        return;
    }
    
    let examplesHTML = '';
    topic.examples.forEach(example => {
        examplesHTML += `
            <div class="example-box">
                <h3>${example.title}</h3>
                ${example.content}
            </div>
        `;
    });
    
    contentContainers.examples.innerHTML = examplesHTML;
}

// Render practice exercises for a topic
function renderPractice(topic) {
    if (!topic.practices || topic.practices.length === 0) {
        contentContainers.practice.innerHTML = `
            <div class="practice-box">
                <p>No practice exercises available for this topic yet.</p>
            </div>
        `;
        return;
    }
    
    let practiceHTML = '';
    topic.practices.forEach(practice => {
        practiceHTML += `
            <div class="practice-box">
                <h3>${practice.title}</h3>
                ${practice.content}
            </div>
        `;
    });
    
    contentContainers.practice.innerHTML = practiceHTML;
}

// Render questions for a topic
function renderQuestions(topic) {
    if (!topic.questions || topic.questions.length === 0) {
        contentContainers.questions.innerHTML = `
            <div class="question-box">
                <p>No questions available for this topic yet.</p>
            </div>
        `;
        return;
    }
    
    let questionsHTML = '';
    topic.questions.forEach((q, index) => {
        questionsHTML += `
            <div class="question-box">
                <h3>Question ${index + 1}</h3>
                <p><strong>Q:</strong> ${q.question}</p>
                <p><strong>A:</strong> ${q.answer}</p>
            </div>
        `;
    });
    
    contentContainers.questions.innerHTML = questionsHTML;
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);