const lectures = [
    {
        id: "html-1",
        number: 1,
        title: "Intro + HTML Fundamentals: Structure and Basic Tags",
        description: "Introduction, Setup, HTML Introduction, HTML Syntax, Links and Anchor Elements, HTML Formatting and Spacing",
        image: "./assets/images/logos/html.webp",
        status: "completed",
        content: "HTML"
    },
    {
        id: "html-2",
        number: 2,
        title: "Head Element, Text Elements, Multimedia, Tables",
        description: "Head Element, Text Elements, Text Formating, Multimedia, Images, Lists, Tables",
        image: "./assets/images/logos/html.webp",
        status: "completed",
        content: "HTML"
    },
    {
        id: "html-3",
        number: 3,
        title: "Semantic Elements",
        description: "Images and Multimedia, Lists, HTML Tables, Container Elements and Layout, Advanced Multimedia, Preformatted Text Element, IFrame Element, Intro to HTML Forms",
        image: "./assets/images/logos/html.webp",
        status: "completed",
        content: "HTML"
    },
    {
        id: "html-4",
        number: 4,
        title: "HTML Forms, CSS Introduction, Selectors",
        description: "HTML Forms, HTML Entities and Special Characters, HTML5 Semantic Elements Deep Dive, HTML Accessibility",
        image: "./assets/images/logos/html.webp",
        status: "completed",
        content: "HTML"
    },
    {
        id: "css-1",
        number: 5,
        title: "Typography, Colors, Icons, Box Model",
        description: "CSS Introduction & Syntax, CSS Selectors & Specificity, Typography, Colors & CSS Variables, Google Fonts Integration, Working with Icons, CSS Box Model - Complete Layout Foundation",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-2",
        number: 6,
        title: "Borders, Backgrounds, Display",
        description: "Borders, Backgrounds, Box Shadow, Radius, Outline, Display",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-3",
        number: 7,
        title: "Positioning & Flexbox",
        description: "Position values (static, relative, absolute, fixed, sticky), top/right/bottom/left offsets, z-index stacking, float/clear properties, and when to avoid floats in modern layouts, Flexbox overview, display: flex, main/cross axis, flex-direction (row/column), justify-content (flex-start, center, space-between), align-items (stretch, center, baseline), and flex-wrap",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-4",
        number: 8,
        title: "CSS Grid, CSS Units, Small CSS Properties",
        description: "Display: grid, grid-template-columns/rows (fixed, fr, auto), grid-gap (row/column), justify-items/align-items, and grid-auto-flow, CSS Units & Measurements - Complete Guide, Small but Powerful CSS Properties",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-5",
        number: 9,
        title: "Pseudo-elements, CSS Transitions, CSS Transforms",
        description: "Pseudo-elements & Pseudo-classes - Advanced Selectors, CSS Transitions - Smooth Animations, CSS Transforms - 2D & 3D Transformations",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-6",
        number: 10,
        title: "CSS Transforms, Responsive Design",
        description: "CSS Transforms - 2D & 3D Transformations, Width, Height & Responsive Properties, Responsive Design",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "css-7",
        number: 11,
        title: "Animations & Guides & Advanced Level",
        description: "Animations, Centering Elements - Complete Guide, Image Styling & Manipulation, CSS Methodologies & Architecture, CSS Performance Optimization, Cross-Browser Compatibility & Vendor Prefixes, Accessibility (A11y) Deep Dive",
        image: "./assets/images/logos/CSS.webp",
        status: "completed",
        content: "CSS"
    },
    {
        id: "tailwind",
        number: 12,
        title: "Tailwind CSS",
        description: "Tailwind classes for flex (flex, justify, items), grid (grid-cols, gap), responsive prefixes (sm:, md:, lg:), and building mobile-first components with hover/focus states",
        image: "./assets/images/logos/tailwind-css.webp",
        status: "completed",
        content: "Tailwind"
    },
    {
        id: "project-1",
        number: 13,
        title: "Rubic Agency Project - Part 1",
        description: "Project Setup, Header, Footer, Hero Section, Feedbacks Section, Results Section",
        image: "./assets/images/logos/Project.webp",
        status: "completed",
        hidden: true,
        content: "HTML, CSS, Tailwind"
    },
    {
        id: "project-2",
        number: 14,
        title: "Rubic Agency Project - Part 2",
        description: "About Us Section, Services Section, FAQs Section, Contact Us Section",
        image: "./assets/images/logos/Project.webp",
        status: "completed",
        hidden: true,
        content: "HTML, CSS, Tailwind"
    },
    {
        id: "project-3",
        number: 15,
        title: "Rubic Agency Project - Part 3",
        description: "Final Steps",
        image: "./assets/images/logos/Project.webp",
        status: "completed",
        hidden: true,
        content: "HTML, CSS, Tailwind"
    },
    {
        id: "JS-1",
        number: 16,
        title: "JavaScript Syntax: Variables, Data Types, and Operators, Control Flow, Scope, Intro to Functions",
        description: "Intro, Logs, Declaring variables (var, let, const), primitive types (string, number, boolean, null, undefined, symbol, bigint), objects/arrays literals, type coercion, and operators (arithmetic, assignment, comparison, logical, ternary), if else, while, do while, for, switch, , scope (global, function, block)",
        image: "./assets/images/logos/JS.webp",
        status: "completed",
        content: "JS"
    },
    {
        id: "JS-2",
        number: 17,
        title: "Functions, Arrays",
        description: "Function declarations vs. expressions vs. arrow functions, parameters/rest/spread, default values, hoisting behavior, HOF, Common Array Methods",
        image: "./assets/images/logos/JS.webp",
        status: "completed",
        content: "JS"
    },
    {
        id: "JS-3",
        number: 18,
        title: "Arrays, Objects & Working with Strings, Numbers, and Booleans, Destructuring, Falsy & Truthy Values",
        description: "Arrays and Objects - Data Structures, Common Array Methods, Iteration Methods, Objects - Key-Value Collections, Working with Objects, Working with Strings, Numbers, and Booleans, Destructuring, Falsy & Truthy Values",
        image: "./assets/images/logos/JS.webp",
        status: "completed",
        content: "JS"
    },
    {
        id: "JS-4",
        number: 19,
        title: "Nullish and Other Modern Operators, DOM Manipulation - Interacting with Web Pages",
        description: "Nullish and Other Modern Operators",
        image: "./assets/images/logos/JS.webp",
        status: "in-progress",
        content: "JS"
    },
    {
        id: "JS-5",
        number: 20,
        title: "DOM Manipulation - Interacting with Web Pages",
        description: "What is the DOM, DOM Tree Structure, Selecting DOM Elements, Manipulating Elements, Creating and Modifying Elements, Events and Forms - User Interaction",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "JS"
    },
    {
        id: "JS-6",
        number: 21,
        title: "Events and Forms - User Interaction",
        description: "Understanding Events, Common Event Types, Event Handling Methods, Working with Forms, Event Propagation",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "JS"
    },
    {
        id: "JS-7",
        number: 22,
        title: "BOM",
        description: "Browser Object Model (BOM), Window Object, Other BOM Objects",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "JS."
    },
    {
        id: "JS-8",
        number: 23,
        title: " Asynchronous JavaScript",
        description: "Asynchronous JavaScript, Async Techniques, Working with Time, Fetch, JSON, and Async Data Handling",
        image: "./assets/images/logos/JS.webp",
        status: "not-started",
        content: "JS"
    },
    {
        id: "GIT",
        number: 24,
        title: "Git & Github",
        description: "Git Basics - Version Control Fundamentals, GitHub & Git Hosting Platforms, Terminal & Command Line Essentials, Git Setup & Configuration, Git Workflow & Areas - Understanding Git's Architecture, Essential Git Commands & Daily Workflow",
        image: "./assets/images/logos/github.webp",
        status: "not-started",
        content: "GIT"
    },
    {
        id: "GIT",
        number: 25,
        title: "Branching in Git & Serverless Deployment",
        description: "Git Branching & Merging Strategies, README Files & Markdown Documentation, Gitignore Files - Ignoring Files in Git, Serverless Deployment - Deploy Frontend Projects to Production",
        image: "./assets/images/logos/github.webp",
        status: "not-started",
        content: "GIT"
    },
    {
        id: "REACT",
        number: 26,
        title: "React Fundamentals: Setup, Components, and JSX",
        description: "React Introduction - What is React and Why Choose It?, Modern React Setup & Development Environment, React Fundamentals: Components, JSX & Props, State Management & Event Handling",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "Full content for GitHub and collaboration..."
    },
    {
        id: "react-setup-components",
        number: 27,
        title: "React Hooks",
        description: "Creating a React app with Create React App or Vite, functional components, JSX syntax (expressions, attributes, fragments), rendering lists, and props for data passing",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "Full content for React setup and components..."
    },
    {
        id: "react-state-effects",
        number: 28,
        title: "React State Management and Hooks: useState & useEffect",
        description: "Local state with useState (initializers, updaters), rules of hooks; useEffect for side effects (fetching data, subscriptions), dependencies, cleanup, and lifecycle simulation",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "Full content for React state and effects..."
    },
    {
        id: "react-events-forms",
        number: 29,
        title: "React Events, Forms, and Conditional Rendering",
        description: "Event handling in React (onClick, onChange), controlled components for forms, validation, conditional rendering (&&, ternary), and keys in lists",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "Full content for React events and forms..."
    },
    {
        id: "react-advanced-hooks",
        number: 30,
        title: "React Advanced Hooks: useReducer, useMemo, useCallback, and Custom Hooks",
        description: "Complex state logic with useReducer (actions, dispatchers); performance optimization using useMemo for computed values and useCallback for stable functions; creating reusable custom hooks for logic extraction",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "Full content for React advanced hooks..."
    },
    {
        id: "react-router-context",
        number: 31,
        title: "React Router, Context API, and Advanced Patterns",
        description: "Installing/configuring React Router (Routes, Route, Link, useParams/useNavigate); Context API for global state (createContext, Provider, useContext); integrating with Tailwind for styling",
        image: "./assets/images/logos/React.webp",
        status: "not-started",
        content: "Full content for React Router and Context..."
    },
    {
        id: "zustand-state",
        number: 32,
        title: "State Management with Zustand",
        description: "Installing Zustand, creating stores (create), selectors (useStore), actions/updates, persistence, and combining with React hooks for scalable global state without prop drilling",
        image: "./assets/images/logos/zus.png",
        status: "not-started",
        content: "Full content for Zustand..."
    },
    {
        id: "axios-deployment-ai",
        number: 33,
        title: "Real-World Tools: Axios, Deployment to Render, and AI Integration",
        description: "Using Axios for API requests (interceptors, auth); building/deploying React apps to Render (environment vars, CI/CD with GitHub); leveraging AI tools (e.g., GitHub Copilot, ChatGPT) for code generation, debugging, and problem-solving in frontend development",
        image: "./assets/images/logos/hosting.webp",
        status: "not-started",
        content: "Full content for Axios, deployment, and AI..."
    }
];

// DOM Elements
const lecturesTableBody = document.getElementById('lectures-table-body');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const statusFilter = document.getElementById('status-filter');
const sortBy = document.getElementById('sort-by');
const totalLecturesEl = document.getElementById('total-lectures');
const completedLecturesEl = document.getElementById('completed-lectures');
const inProgressLecturesEl = document.getElementById('in-progress-lectures');
const totalDurationEl = document.getElementById('total-duration');

// Initialize the portal
function initPortal() {
    renderLecturesTable(lectures);
    updateStatistics();
    setupEventListeners();
}

// Render the lectures table
function renderLecturesTable(lecturesToRender) {
    lecturesTableBody.innerHTML = '';
    
    lecturesToRender.forEach(lecture => {
        const row = document.createElement('tr');
        
        // Determine status badge class
        let statusClass = '';
        let statusText = '';
        
        switch(lecture.status) {
            case 'completed':
                statusClass = 'status-completed';
                statusText = 'Completed';
                break;
            case 'in-progress':
                statusClass = 'status-in-progress';
                statusText = 'In Progress';
                break;
            default:
                statusClass = 'status-not-started';
                statusText = 'Not Started';
        }
        
        row.innerHTML = `
            <td class="lecture-number">${lecture.number}</td>
            <td class="lecture-img">
                <img src="${lecture.image}" alt="image-${lecture.number}">
            </td>
            <td>
                <div class="lecture-title">${lecture.title}</div>
            </td>
            <td class="lecture-description">${lecture.description}</td>
            <td class="lecture-status">
                <span class="status-badge ${statusClass}">${statusText}</span>
            </td>
            <td>
                ${lecture.hidden? "":`<button class='action-btn' data-lecture-id=${lecture.number}>View</button>`}
            </td>
        `;
        
        lecturesTableBody.appendChild(row);
    });
    
    // Add event listeners to view buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lectureId = this.getAttribute('data-lecture-id');
            viewLecture(lectureId);
        });
    });
}

// Update statistics
function updateStatistics() {
    const total = lectures.length;
    const completed = lectures.filter(l => l.status === 'completed').length;
    const inProgress = lectures.filter(l => l.status === 'in-progress').length;
    
    // Calculate total duration    
    const totalHours = Math.round(lectures.length * 2);
    
    totalLecturesEl.textContent = total;
    completedLecturesEl.textContent = completed;
    inProgressLecturesEl.textContent = inProgress;
    totalDurationEl.textContent = `${totalHours}h`;
}

// Filter and search lectures
function filterLectures() {
    const searchTerm = searchInput.value.toLowerCase();
    const statusValue = statusFilter.value;
    const sortValue = sortBy.value;
    
    let filteredLectures = lectures.filter(lecture => {
        const matchesSearch = lecture.title.toLowerCase().includes(searchTerm) || 
                                lecture.description.toLowerCase().includes(searchTerm);
        
        const matchesStatus = statusValue === 'all' || lecture.status === statusValue;
        
        return matchesSearch && matchesStatus;
    });
    
    // Sort lectures
    filteredLectures.sort((a, b) => {
        if (sortValue === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortValue === 'duration') {
            const aDuration = parseFloat(a.duration);
            const bDuration = parseFloat(b.duration);
            return bDuration - aDuration;
        } else {
            return a.number - b.number;
        }
    });
    
    renderLecturesTable(filteredLectures);
}

// View lecture details
function viewLecture(lectureId) {        
    if(!lectureId) {
        alert(`Invalid Lecture Id`);
        return;
    }

    const lecture = lectures.find(e => e.number === +lectureId);    

    if(!lecture) {
        alert("Invalid Lecture Id");
        return;
    }

    if(lecture.status === "not-started") {
        alert("You can not visit not-completed lecture");
        return;
    }
    // For demonstration, we'll highlight the selected lecture
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.textContent = 'View';
        btn.style.backgroundColor = '';
    });
    
    const selectedBtn = document.querySelector(`.action-btn[data-lecture-id="${lectureId}"]`);

    if (selectedBtn) {
        window.location.assign(`lecture${lectureId}.html`)
    }
}

// Set up event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', filterLectures);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            filterLectures();
        }
    });
    statusFilter.addEventListener('change', filterLectures);
    sortBy.addEventListener('change', filterLectures);
}

// Initialize the portal when the DOM is loaded
document.addEventListener('DOMContentLoaded', initPortal);
