// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete React Mastery 2025 - From Zero to Hero",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "react-routing-navigation",
            title: "React Router & Navigation",
            content: `
                <h3>Client-Side Routing with React Router</h3>
                <p>React Router enables navigation in single-page applications without page reloads, providing seamless user experiences.</p>
                
                <h3>React Router v6 Features:</h3>
                <ul>
                    <li><strong>Declarative Routing</strong>: Define routes as components</li>
                    <li><strong>Nested Routes</strong>: Hierarchical route structure</li>
                    <li><strong>Relative Links</strong>: Links relative to current route</li>
                    <li><strong>Data APIs</strong>: Loaders and actions for data management</li>
                    <li><strong>Error Boundaries</strong>: Built-in error handling</li>
                </ul>
                
                <h3>Core Components:</h3>
                <ul>
                    <li><strong>BrowserRouter</strong>: Router component for web apps</li>
                    <li><strong>Routes & Route</strong>: Define route paths and components</li>
                    <li><strong>Link & NavLink</strong>: Navigation links with active states</li>
                    <li><strong>Outlet</strong>: Renders child routes</li>
                    <li><strong>Navigate</strong>: Programmatic navigation</li>
                </ul>
                
                <h3>Hooks for Navigation:</h3>
                <ul>
                    <li><strong>useNavigate</strong>: Programmatic navigation</li>
                    <li><strong>useParams</strong>: Access route parameters</li>
                    <li><strong>useLocation</strong>: Get current location object</li>
                    <li><strong>useSearchParams</strong>: Work with URL query parameters</li>
                    <li><strong>useRoutes</strong>: Declarative route configuration</li>
                </ul>
                
                <h3>Advanced Routing Patterns:</h3>
                <ul>
                    <li><strong>Protected Routes</strong>: Authentication-based routing</li>
                    <li><strong>Lazy Loading</strong>: Code splitting with React.lazy</li>
                    <li><strong>Route Guards</strong>: Conditional route access</li>
                    <li><strong>Modal Routes</strong>: Routes that open modals</li>
                    <li><strong>Animated Transitions</strong>: Smooth page transitions</li>
                </ul>
            `,
            examples: [
                {
                    title: "React Router Examples",
                    content: `
                        <pre class="code-block">
// Example 1: Basic Router Setup
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// Example 2: Nested Routes
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="/dashboard">Overview</Link>
        <Link to="/dashboard/settings">Settings</Link>
        <Link to="/dashboard/profile">Profile</Link>
      </nav>
      
      <Outlet /> {/* This renders the nested route */}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardOverview />} />
        <Route path="settings" element={<DashboardSettings />} />
        <Route path="profile" element={<DashboardProfile />} />
      </Route>
    </Routes>
  );
}

// Example 3: Route Parameters and Navigation
import { useParams, useNavigate, useLocation } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams(); // Get route parameters
  const navigate = useNavigate(); // Programmatic navigation
  const location = useLocation(); // Current location

  const handleEdit = () => {
    navigate(\`/users/\${id}/edit\`, { 
      state: { from: location },
      replace: true 
    });
  };

  const handleBack = () => {
    navigate(-1); // Go back
  };

  return (
    <div>
      <h2>User ID: {id}</h2>
      <button onClick={handleEdit}>Edit User</button>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
}

// Example 4: Search Parameters
import { useSearchParams } from 'react-router-dom';

function UserList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const page = parseInt(searchParams.get('page')) || 1;

  const handleSearch = (term) => {
    setSearchParams({ search: term, page: 1 });
  };

  const handlePageChange = (newPage) => {
    setSearchParams({ search, page: newPage });
  };

  return (
    <div>
      <input
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search users..."
      />
      <button onClick={() => handlePageChange(page - 1)}>Previous</button>
      <span>Page {page}</span>
      <button onClick={() => handlePageChange(page + 1)}>Next</button>
    </div>
  );
}`
                }
            ],
            practices: [
                {
                    title: "React Router Practice",
                    content: `
                        <p>Practice React Router with these exercises:</p>
                        <ol>
                            <li>Create a multi-page application with navigation between pages</li>
                            <li>Build a user dashboard with nested routes for different sections</li>
                            <li>Implement protected routes that require authentication</li>
                            <li>Create a product catalog with dynamic routes for product details</li>
                            <li>Build a search interface with URL query parameters</li>
                            <li>Implement lazy loading for route components</li>
                            <li>Create a breadcrumb navigation component</li>
                            <li>Build a modal that can be opened via route and closed with navigation</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between Link and Navigate components?",
                    answer: "Link is used for declarative navigation within your application (like <a> tags). Navigate is used for imperative navigation and will redirect when rendered. Use Link for navigation menus and buttons that users click. Use Navigate for conditional redirects, like after form submission or for authentication guards."
                },
                {
                    question: "How do I handle 404 pages in React Router?",
                    answer: "Use a catch-all route with path='*' as the last route in your Routes component. This route will match any path that hasn't been matched by previous routes. You can also use nested catch-all routes within specific route branches for more granular 404 handling in different sections of your app."
                }
            ]
        },
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