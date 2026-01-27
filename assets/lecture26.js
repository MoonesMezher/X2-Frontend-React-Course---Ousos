// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete React Mastery 2025 - From Zero to Hero",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
    id: "react-introduction",
    title: "React Introduction - What is React and Why Choose It?",
    content: `
        <h3>What is React?</h3>
        <p>React is a JavaScript library for building user interfaces, particularly web applications. Created by Facebook (now Meta) in 2013, it has revolutionized how developers build modern, interactive web experiences.</p>
        
        <h3>React: Library vs Framework</h3>
        <ul>
            <li><strong>React is a Library</strong>: It focuses specifically on building user interfaces</li>
            <li><strong>Frameworks vs Libraries</strong>: Frameworks provide complete solutions, libraries solve specific problems</li>
            <li><strong>Flexibility</strong>: As a library, React gives you freedom to choose other tools</li>
            <li><strong>Ecosystem</strong>: React has a rich ecosystem that complements its library nature</li>
        </ul>
        
        <h3>Why Choose React in 2025?</h3>
        <ul>
            <li><strong>Massive Adoption</strong>: Used by 8+ million developers worldwide</li>
            <li><strong>Industry Standard</strong>: Trusted by Facebook, Netflix, Airbnb, Uber, and thousands of companies</li>
            <li><strong>Job Market</strong>: Highest demand in the frontend job market</li>
            <li><strong>Stability & Maturity</strong>: 10+ years of continuous development and improvement</li>
            <li><strong>Rich Ecosystem</strong>: Vast collection of libraries, tools, and resources</li>
        </ul>
        
        <h3>Key Features That Make React Special:</h3>
        <ul>
            <li><strong>Component-Based Architecture</strong>: Build encapsulated components that manage their own state</li>
            <li><strong>Virtual DOM</strong>: Optimized rendering performance</li>
            <li><strong>Declarative Syntax</strong>: Describe what you want, not how to do it</li>
            <li><strong>Learn Once, Write Anywhere</strong>: React Native for mobile, React for web</li>
            <li><strong>Strong Community</strong>: Active community with continuous innovation</li>
        </ul>
        
        <h3>What is the Virtual DOM?</h3>
        <p>The Virtual DOM is React's secret weapon for performance. It's a lightweight JavaScript representation of the actual DOM that allows React to efficiently update the user interface.</p>
        
        <h3>How Virtual DOM Works:</h3>
        <ol>
            <li><strong>Virtual Representation</strong>: React creates a virtual representation of the UI</li>
            <li><strong>State Changes</strong>: When data changes, React creates a new virtual DOM</li>
            <li><strong>Diffing Algorithm</strong>: React compares new and old virtual DOMs</li>
            <li><strong>Efficient Updates</strong>: Only the changed parts are updated in the real DOM</li>
            <li><strong>Performance Optimization</strong>: Minimizes expensive DOM operations</li>
        </ol>
        
        <h3>React vs Other Frameworks:</h3>
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>Framework/Library</th>
                    <th>Type</th>
                    <th>Learning Curve</th>
                    <th>Best For</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>React</strong></td>
                    <td>Library</td>
                    <td>Moderate</td>
                    <td>Large applications, flexibility needed</td>
                </tr>
                <tr>
                    <td>Vue.js</td>
                    <td>Framework</td>
                    <td>Gentle</td>
                    <td>Progressive enhancement, small teams</td>
                </tr>
                <tr>
                    <td>Angular</td>
                    <td>Framework</td>
                    <td>Steep</td>
                    <td>Enterprise applications, structured teams</td>
                </tr>
                <tr>
                    <td>Svelte</td>
                    <td>Compiler</td>
                    <td>Easy</td>
                    <td>Performance-critical applications</td>
                </tr>
            </tbody>
        </table>
    `,
    examples: [
        {
            title: "Real-World React Examples & Virtual DOM Demonstration",
            content: `
                <pre class="code-block">
// Example 1: Simple React Component vs Vanilla JavaScript

// Vanilla JavaScript approach (imperative)
const container = document.getElementById('app');
const button = document.createElement('button');
button.textContent = 'Click me: 0';
let count = 0;

button.addEventListener('click', function() {
    count++;
    button.textContent = 'Click me: ' + count;
});

container.appendChild(button);

// React approach (declarative)
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <button onClick={() => setCount(count + 1)}>
            Click me: {count}
        </button>
    );
}

// Example 2: Virtual DOM in Action
// When state changes, here's what happens:

// 1. Current Virtual DOM
const currentVDOM = {
    type: 'div',
    props: {
        className: 'container',
        children: [
            {
                type: 'h1',
                props: {
                    children: 'Hello, World!'
                }
            },
            {
                type: 'p',
                props: {
                    children: 'Count: 0'
                }
            }
        ]
    }
};

// 2. New Virtual DOM after state change
const newVDOM = {
    type: 'div',
    props: {
        className: 'container',
        children: [
            {
                type: 'h1',
                props: {
                    children: 'Hello, World!'
                }
            },
            {
                type: 'p',
                props: {
                    children: 'Count: 1'  // Only this changed
                }
            }
        ]
    }
};

// 3. React's diffing algorithm detects only the text changed
// 4. React updates only the text node in real DOM, not the entire structure

// Example 3: Component Reusability
// Reusable Button Component
function Button({ children, variant = 'primary', onClick }) {
    return (
        <button 
            className={\`btn btn-\${variant}\`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

// Using the reusable component
function App() {
    return (
        <div>
            <Button variant="primary" onClick={() => alert('Hello!')}>
                Primary Button
            </Button>
            <Button variant="secondary">
                Secondary Button
            </Button>
        </div>
    );
}

// Example 4: Large Companies Using React

// Facebook - The creator
// Uses React for their entire web interface

// Instagram - Fully built with React
// Complex features like stories, feeds, direct messages

// Netflix - Uses React for their TV UI
// Handles complex animations and user interactions

// Airbnb - Entire booking platform
// Manages complex state and user flows

// Uber - Web dashboard and customer apps
// Real-time updates and complex interfaces

// WhatsApp Web - Real-time messaging
// Handles millions of concurrent users

// Example 5: React Ecosystem Demonstration

// With React, you can choose your preferred tools:
// - State Management: Redux, Zustand, Context API
// - Routing: React Router, Next.js routing
// - Styling: CSS Modules, Styled Components, Tailwind CSS
// - Testing: Jest, React Testing Library
// - Build Tools: Vite, Webpack, Create React App

// This flexibility is possible because React is a library, not a framework

// Example 6: Performance Benefits Demonstration

// Without Virtual DOM (expensive operations)
function updateWithoutVDOM() {
    // Direct DOM manipulation - can be slow
    const element = document.getElementById('myElement');
    element.style.color = 'red';
    element.textContent = 'Updated text';
    element.className = 'updated-class';
    // Each line causes a reflow/repaint
}

// With Virtual DOM (optimized)
function updateWithVDOM() {
    // React batches updates
    // 1. Update virtual DOM
    // 2. Compare with previous virtual DOM
    // 3. Calculate minimal DOM operations
    // 4. Apply batch update to real DOM
    // Result: Better performance
}

// Example 7: React's Declarative Nature

// Imperative approach (how to do it)
function imperativeUpdate() {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear container
    
    users.forEach(user => {
        const div = document.createElement('div');
        div.textContent = user.name;
        div.className = user.isActive ? 'active' : 'inactive';
        container.appendChild(div);
    });
}

// Declarative approach with React (what you want)
function UserList({ users }) {
    return (
        <div id="container">
            {users.map(user => (
                <div key={user.id} className={user.isActive ? 'active' : 'inactive'}>
                    {user.name}
                </div>
            ))}
        </div>
    );
}

// The declarative approach is easier to read, maintain, and debug
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "React Fundamentals Practice",
            content: `
                <p>Practice understanding React's core concepts:</p>
                <ol>
                    <li>Research and compare React with two other popular frameworks (Vue.js and Angular)</li>
                    <li>Create a simple counter using both vanilla JavaScript and React to compare approaches</li>
                    <li>Draw a diagram showing how the Virtual DOM works with diffing and reconciliation</li>
                    <li>List 10 major companies using React and what parts of their applications use it</li>
                    <li>Explain the difference between imperative and declarative programming to a beginner</li>
                    <li>Create a presentation explaining why React is a library, not a framework</li>
                    <li>Build a simple component that demonstrates reusability with different props</li>
                    <li>Research and list the key advantages React had when it was first introduced in 2013</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "Is React a library or a framework, and what's the difference?",
            answer: "React is a library, not a framework. The key difference is that a library provides specific functionality that you call, while a framework provides a complete structure that calls your code. With React (library), you decide how to structure your application, what routing to use, and how to manage state. With frameworks like Angular, the framework makes these decisions for you. React's library nature gives developers more flexibility but requires more decisions about architecture."
        },
        {
            question: "What problem does the Virtual DOM solve?",
            answer: "The Virtual DOM solves performance issues with direct DOM manipulation. Directly updating the DOM is slow, especially with frequent changes. The Virtual DOM creates a lightweight JavaScript representation of the actual DOM. When changes occur, React compares the new Virtual DOM with the previous one (diffing) and calculates the most efficient way to update the real DOM. This minimizes expensive DOM operations and improves performance, especially in complex applications with frequent updates."
        },
        {
            question: "Why has React remained so popular for over a decade?",
            answer: "React has maintained popularity due to: 1) Component reusability that speeds up development, 2) Virtual DOM for excellent performance, 3) Strong backing from Facebook/Meta with continuous improvement, 4) Huge ecosystem and community support, 5) Flexibility to integrate with other libraries, 6) React Native for mobile development, 7) Excellent developer experience with tools like React DevTools, 8) Strong job market demand, and 9) Continuous evolution with new features like Hooks and Concurrent Features."
        },
        {
            question: "What does 'learn once, write anywhere' mean in React?",
            answer: "This React philosophy means that after learning React concepts and patterns, you can apply them to different platforms. React for web, React Native for mobile apps (iOS and Android), React 360 for VR applications, and even React for desktop with Electron. The mental model and component architecture remain consistent across platforms, reducing the learning curve when moving between different types of applications. This contrasts with 'write once, run anywhere' approaches that try to use the same code everywhere."
        },
        {
            question: "How does React's declarative approach benefit developers?",
            answer: "Declarative programming in React means you describe WHAT the UI should look like for any given state, rather than HOW to achieve that state (imperative). Benefits include: 1) More predictable code that's easier to debug, 2) Easier to understand and maintain, 3) Less prone to bugs from manual DOM manipulation, 4) Better for team collaboration with consistent patterns, 5) Easier testing since components are pure functions of their props and state. You focus on the desired outcome rather than the step-by-step process to get there."
        }
    ]
},
        {
            id: "react-modern-setup",
            title: "Modern React Setup & Development Environment",
            content: `
                <h3>Setting Up React in 2025</h3>
                <p>Modern React development starts with choosing the right tools and setup for optimal performance and developer experience.</p>
                
                <h3>Project Setup Options:</h3>
                <ul>
                    <li><strong>Vite</strong>: Lightning-fast build tool with instant HMR</li>
                    <li><strong>Create React App</strong>: Official boilerplate (traditional)</li>
                    <li><strong>Next.js</strong>: Full-stack framework with SSR/SSG</li>
                    <li><strong>Remix</strong>: Focused on web fundamentals and performance</li>
                </ul>
                
                <h3>Why Vite is Recommended in 2025:</h3>
                <ul>
                    <li><strong>Instant Server Start</strong>: Uses native ES modules</li>
                    <li><strong>Lightning HMR</strong>: Hot Module Replacement that's incredibly fast</li>
                    <li><strong>Optimized Build</strong>: Uses Rollup for production</li>
                    <li><strong>Rich Features</strong>: TypeScript, JSX, CSS preprocessors out of the box</li>
                    <li><strong>Framework Agnostic</strong>: Works with React, Vue, Svelte</li>
                </ul>
                
                <h3>Essential Development Tools:</h3>
                <ul>
                    <li><strong>VS Code</strong>: With React extension pack</li>
                    <li><strong>React Developer Tools</strong>: Browser extension for debugging</li>
                    <li><strong>ESLint & Prettier</strong>: Code formatting and linting</li>
                    <li><strong>Git</strong>: Version control</li>
                </ul>
            `,
            examples: [
                {
                    title: "Vite React Setup Examples",
                    content: `
                        <pre class="code-block">
// Creating a new React project with Vite
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev

// Project structure after setup:
my-react-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── components/
├── index.html
├── package.json
├── vite.config.js
└── README.md

// vite.config.js - Basic configuration
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true // Automatically open browser
  }
})

// Setting up Tailwind CSS with Vite
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// Add to src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// Setting up ESLint and Prettier
npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
npm install -D prettier eslint-config-prettier eslint-plugin-prettier

// .eslintrc.js
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
}

// package.json scripts
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  }
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Environment Setup Practice",
                    content: `
                        <p>Practice setting up modern React development environments:</p>
                        <ol>
                            <li>Create a new React project using Vite with TypeScript</li>
                            <li>Set up Tailwind CSS and configure it for your project</li>
                            <li>Install and configure ESLint and Prettier for code formatting</li>
                            <li>Set up React Developer Tools in your browser</li>
                            <li>Create a basic component structure with proper folder organization</li>
                            <li>Configure path aliases in Vite for cleaner imports</li>
                            <li>Set up environment variables for different deployment stages</li>
                            <li>Create a custom Vite configuration for your specific needs</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What are the main differences between Vite and Create React App?",
                    answer: "Vite uses native ES modules for instant server start and faster HMR, while CRA uses Webpack which bundles everything upfront. Vite has better performance, faster builds, and more flexible configuration. CRA is more established but slower. Vite is recommended for new projects due to superior developer experience and faster tooling."
                },
                {
                    question: "Why should I use TypeScript with React?",
                    answer: "TypeScript provides static type checking, better IDE support, improved code quality, easier refactoring, and early error detection. It helps catch bugs during development, makes code more self-documenting, and improves collaboration in teams. For large applications, TypeScript is essential for maintainability."
                }
            ]
        },
        {
            id: "react-fundamentals-jsx",
            title: "React Fundamentals: Components, JSX & Props",
            content: `
                <h3>React Core Concepts</h3>
                <p>Understanding React's fundamental building blocks: components, JSX, and props is essential for building modern UIs.</p>
                
                <h3>Functional Components:</h3>
                <ul>
                    <li><strong>Modern Approach</strong>: Use functions instead of classes</li>
                    <li><strong>Simpler Syntax</strong>: Easier to read and write</li>
                    <li><strong>Hooks Compatible</strong>: Works with all React hooks</li>
                    <li><strong>Better Performance</strong>: Less boilerplate code</li>
                </ul>
                
                <h3>JSX Syntax Features:</h3>
                <ul>
                    <li><strong>JavaScript XML</strong>: HTML-like syntax in JavaScript</li>
                    <li><strong>Expressions</strong>: Embed JavaScript with {}</li>
                    <li><strong>Attributes</strong>: className instead of class, htmlFor instead of for</li>
                    <li><strong>Fragments</strong>: &lt;&gt;&lt;/&gt; to group elements without extra DOM nodes</li>
                    <li><strong>Conditional Rendering</strong>: &&, ternary operators, and if statements</li>
                </ul>
                
                <h3>Props System:</h3>
                <ul>
                    <li><strong>Data Passing</strong>: Pass data from parent to child components</li>
                    <li><strong>Immutable</strong>: Props are read-only in child components</li>
                    <li><strong>Destructuring</strong>: Extract props directly in function parameters</li>
                    <li><strong>Default Values</strong>: Provide fallback values for optional props</li>
                    <li><strong>Prop Types</strong>: Type checking for better reliability</li>
                </ul>
                
                <h3>Component Composition:</h3>
                <ul>
                    <li><strong>Children Prop</strong>: Pass components as children</li>
                    <li><strong>Higher-Order Components</strong>: Component wrappers for reuse</li>
                    <li><strong>Component Patterns</strong>: Container vs Presentational components</li>
                </ul>
            `,
            examples: [
                {
                    title: "Components, JSX & Props Examples",
                    content: `
                        <pre class="code-block">
// Example 1: Basic Functional Component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Example 2: Component with Props
function UserCard({ name, age, email, isOnline = false }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      {isOnline && <span className="online-badge">Online</span>}
    </div>
  );
}

// Usage
<UserCard name="John Doe" age={25} email="john@example.com" isOnline />

// Example 3: JSX Expressions and Conditional Rendering
function Product({ product, showPrice = true }) {
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      
      {/* Conditional rendering with && */}
      {product.isNew && <span className="new-badge">New!</span>}
      
      {/* Conditional rendering with ternary */}
      {showPrice ? (
        <p className="price">\${product.price}</p>
      ) : (
        <p>Price hidden</p>
      )}
      
      {/* Multiple expressions */}
      <p>
        Category: {product.category}
        {product.tags && (
          <span> - Tags: {product.tags.join(', ')}</span>
        )}
      </p>
    </div>
  );
}

// Example 4: Lists and Keys
function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product 
          key={product.id} // Important for React's reconciliation
          product={product}
        />
      ))}
    </div>
  );
}

// Example 5: Fragments
function UserProfile() {
  return (
    <>
      <header>
        <h1>User Profile</h1>
      </header>
      <main>
        <UserCard name="Alice" age={30} />
      </main>
    </>
  );
}

// Example 6: Children Prop and Composition
function Card({ title, children, variant = "default" }) {
  return (
    <div className={\`card card-\${variant}\`}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

// Usage with children
<Card title="User Information" variant="primary">
  <p>This is the card content</p>
  <button>Click me</button>
</Card>

// Example 7: Prop Types with TypeScript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ 
  children, 
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick 
}: ButtonProps) {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size}\`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Example 8: Default Props and Destructuring
function Avatar({ 
  src, 
  alt = "User avatar", 
  size = 40,
  fallback = "https://via.placeholder.com/40"
}) {
  return (
    <img 
      src={src || fallback} 
      alt={alt}
      width={size}
      height={size}
      className="avatar"
    />
  );
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Components & JSX Practice",
                    content: `
                        <p>Practice React fundamentals with these exercises:</p>
                        <ol>
                            <li>Create a UserProfile component that displays user information with props</li>
                            <li>Build a ProductCard component that conditionally shows sale badges</li>
                            <li>Create a List component that renders arrays of items with proper keys</li>
                            <li>Build a Modal component that uses children prop for content</li>
                            <li>Create a Button component with different variants and sizes</li>
                            <li>Practice using fragments to group elements without extra divs</li>
                            <li>Build a complex component that uses multiple conditional rendering techniques</li>
                            <li>Create a component library with TypeScript prop definitions</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between elements and components in React?",
                    answer: "Elements are plain objects describing what you want to see on the screen. They are immutable and cheap to create. Components are functions or classes that return elements. They can have state, props, and lifecycle methods. Elements are the building blocks, while components are the templates that generate elements."
                },
                {
                    question: "Why do we need keys in lists and what makes a good key?",
                    answer: "Keys help React identify which items have changed, are added, or are removed. They should be unique and stable. Good keys are unique IDs from your data, not array indices. Using indices can cause performance issues and bugs when the list order changes. Keys should be consistent across re-renders."
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