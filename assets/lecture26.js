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

        <br><hr><br>
        <div dir="rtl">
            <h3>ما هو React؟</h3>
            <p>React هي مكتبة JavaScript لبناء واجهات المستخدم، خاصة تطبيقات الويب. تم إنشاؤها بواسطة Facebook (الآن Meta) في 2013، وقد أحدثت ثورة في كيفية بناء المطورين لتجارب الويب الحديثة التفاعلية.</p>
            
            <h3>React: مكتبة مقابل إطار العمل</h3>
            <ul>
                <li><strong>React هي مكتبة</strong>: تركز تحديدًا على بناء واجهات المستخدم</li>
                <li><strong>أطر العمل مقابل المكتبات</strong>: تقدم أطر العمل حلولاً كاملة، تحل المكتبات مشاكل محددة</li>
                <li><strong>المرونة</strong>: كمكتبة، تمنحك React الحرية لاختيار أدوات أخرى</li>
                <li><strong>النظام البيئي</strong>: يمتلك React نظامًا بيئيًا غنيًا يكمل طبيعته كمكتبة</li>
            </ul>
            
            <h3>ما هو Virtual DOM؟</h3>
            <p>Virtual DOM هو السلاح السري لـ React للأداء. إنه تمثيل JavaScript خفيف الوزن لـ DOM الفعلي الذي يسمح لـ React بتحديث واجهة المستخدم بكفاءة.</p>
            
            <h3>كيف يعمل Virtual DOM:</h3>
            <ol>
                <li><strong>التمثيل الافتراضي</strong>: ينشئ React تمثيلاً افتراضيًا لواجهة المستخدم</li>
                <li><strong>تغييرات الحالة</strong>: عندما تتغير البيانات، ينشئ React Virtual DOM جديد</li>
                <li><strong>خوارزمية المقارنة</strong>: يقارن React بين Virtual DOMs الجديد والقديم</li>
                <li><strong>التحديثات الفعالة</strong>: يتم تحديث الأجزاء المتغيرة فقط في DOM الحقيقي</li>
                <li><strong>تحسين الأداء</strong>: يقلل من عمليات DOM المكلفة</li>
            </ol>
        </div>
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

                <br><hr><br>
                <div dir="rtl">
                    <h3>إعداد React الحديث في 2025</h3>
                    <p>يبدأ تطوير React الحديث باختيار الأدوات والإعداد المناسب لأداء مثالي وتجربة مطور ممتازة.</p>
                    
                    <h3>خيارات إعداد المشروع:</h3>
                    <ul>
                        <li><strong>Vite</strong>: أداة بناء سريعة جدًا مع استبدال الوحدات الساخن الفوري</li>
                        <li><strong>Create React App</strong>: القالب الرسمي (تقليدي)</li>
                        <li><strong>Next.js</strong>: إطار عمل كامل المكدس مع التقديم من جانب الخادم</li>
                        <li><strong>Remix</strong>: يركز على أساسيات الويب والأداء</li>
                    </ul>
                    
                    <h3>لماذا يوصى بـ Vite في 2025:</h3>
                    <ul>
                        <li><strong>بدء خادم فوري</strong>: يستخدم وحدات ES الأصلية</li>
                        <li><strong>HMR سريع جدًا</strong>: استبدال الوحدات الساخن سريع بشكل لا يصدق</li>
                        <li><strong>بناء مُحسَّن</strong>: يستخدم Rollup للإنتاج</li>
                        <li><strong>ميزات غنية</strong>: TypeScript, JSX, معالجات CSS مدمجة</li>
                        <li><strong>غير مرتبط بإطار</strong>: يعمل مع React, Vue, Svelte</li>
                    </ul>
                </div>
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

                <br><hr><br>
                <div dir="rtl">
                    <h3>مفاهيم React الأساسية</h3>
                    <p>فهم لبنات البناء الأساسية لـ React: المكونات، JSX، والخصائص ضروري لبناء واجهات المستخدم الحديثة.</p>
                    
                    <h3>المكونات الوظيفية:</h3>
                    <ul>
                        <li><strong>النهج الحديث</strong>: استخدم الدوال بدلاً من الفئات</li>
                        <li><strong>بناء جملة أبسط</strong>: أسهل في القراءة والكتابة</li>
                        <li><strong>متوافق مع Hooks</strong>: يعمل مع جميع Hooks الخاصة بـ React</li>
                        <li><strong>أداء أفضل</strong>: كود أقل للتكرار</li>
                    </ul>
                    
                    <h3>ميزات بناء جملة JSX:</h3>
                    <ul>
                        <li><strong>JavaScript XML</strong>: بناء جملة يشبه HTML في JavaScript</li>
                        <li><strong>التعبيرات</strong>: تضمين JavaScript باستخدام {}</li>
                        <li><strong>السمات</strong>: className بدلاً من class, htmlFor بدلاً من for</li>
                        <li><strong>القصاصات</strong>: &lt;&gt;&lt;/&gt; لتجميع العناصر بدون عقد DOM إضافية</li>
                        <li><strong>التصيير الشرطي</strong>: &&, عوامل ثلاثية, وعبارات if</li>
                    </ul>
                </div>
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
        },
        {
            id: "react-state-events",
            title: "State Management & Event Handling",
            content: `
                <h3>Managing State and User Interactions</h3>
                <p>State and events are the core of interactive React applications, enabling dynamic user experiences.</p>
                
                <h3>useState Hook:</h3>
                <ul>
                    <li><strong>Local State</strong>: Component-specific data that changes over time</li>
                    <li><strong>Initial State</strong>: Pass initial value to useState()</li>
                    <li><strong>State Updates</strong>: Always use setter function, never mutate directly</li>
                    <li><strong>Functional Updates</strong>: Use when new state depends on previous state</li>
                    <li><strong>Object State</strong>: Update objects immutably with spread operator</li>
                </ul>
                
                <h3>Event Handling:</h3>
                <ul>
                    <li><strong>Synthetic Events</strong>: React's cross-browser wrapper around native events</li>
                    <li><strong>Common Events</strong>: onClick, onChange, onSubmit, onKeyDown</li>
                    <li><strong>Event Object</strong>: Access event data like target.value, preventDefault()</li>
                    <li><strong>Arrow Functions</strong>: Use for proper 'this' binding</li>
                </ul>
                
                <h3>Controlled Components:</h3>
                <ul>
                    <li><strong>Form Elements</strong>: Inputs controlled by React state</li>
                    <li><strong>Single Source of Truth</strong>: Form data stored in component state</li>
                    <li><strong>Validation</strong>: Real-time validation with state updates</li>
                    <li><strong>Dynamic Forms</strong>: Handle multiple inputs efficiently</li>
                </ul>
                
                <h3>State Update Patterns:</h3>
                <ul>
                    <li><strong>Batch Updates</strong>: Multiple state updates in event handlers</li>
                    <li><strong>Functional Updates</strong>: For state that depends on previous state</li>
                    <li><strong>Object Spread</strong>: Updating nested objects immutably</li>
                    <li><strong>Array Operations</strong>: Adding, removing, updating arrays</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>إدارة الحالة وتفاعلات المستخدم</h3>
                    <p>الحالة والأحداث هي جوهر تطبيقات React التفاعلية، مما يمكن تجارب المستخدم الديناميكية.</p>
                    
                    <h3>useState Hook:</h3>
                    <ul>
                        <li><strong>الحالة المحلية</strong>: بيانات خاصة بالمكون تتغير مع الوقت</li>
                        <li><strong>الحالة الأولية</strong>: تمرير القيمة الأولية إلى useState()</li>
                        <li><strong>تحديثات الحالة</strong>: استخدم دالة الضبط دائمًا، لا تغير مباشرة</li>
                        <li><strong>التحديثات الوظيفية</strong>: استخدم عندما تعتمد الحالة الجديدة على الحالة السابقة</li>
                        <li><strong>حالة الكائن</strong>: حدّث الكائنات بشكل غير قابل للتغيير مع عامل الانتشار</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "State & Event Handling Examples",
                    content: `
                        <pre class="code-block">
// Example 1: Basic useState
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Example 2: Object State
function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  const updateName = (name) => {
    setUser(prevUser => ({
      ...prevUser,  // Spread previous state
      name          // Update only the name
    }));
  };

  const updateEmail = (email) => {
    setUser(prevUser => ({
      ...prevUser,
      email
    }));
  };

  return (
    <div>
      <input 
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
        placeholder="Name"
      />
      <input 
        value={user.email}
        onChange={(e) => updateEmail(e.target.value)}
        placeholder="Email"
      />
    </div>
  );
}

// Example 3: Form Handling
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Submit form data
      console.log('Submitting:', formData);
      // await submitForm(formData);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      
      <div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
        />
        {errors.message && <span className="error">{errors.message}</span>}
      </div>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

// Example 4: Array State
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ 
                textDecoration: todo.completed ? 'line-through' : 'none' 
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Example 5: Complex Event Handling
function InteractiveComponent() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ height: '100vh', cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <div
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          cursor: 'move'
        }}
        onMouseDown={handleMouseDown}
      >
        Drag me
      </div>
    </div>
  );
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "State & Events Practice",
                    content: `
                        <p>Practice state management and event handling:</p>
                        <ol>
                            <li>Build a counter with increment, decrement, and reset functionality</li>
                            <li>Create a todo list with add, delete, and toggle complete features</li>
                            <li>Build a registration form with validation and error messages</li>
                            <li>Create a drag-and-drop interface for reordering items</li>
                            <li>Build a shopping cart with add/remove items and quantity updates</li>
                            <li>Create a color picker that updates background color in real-time</li>
                            <li>Build a multi-step form wizard with progress tracking</li>
                            <li>Create a real-time search filter for a list of items</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between controlled and uncontrolled components?",
                    answer: "Controlled components have their value controlled by React state, while uncontrolled components store their state in the DOM. Use controlled components when you need real-time validation, conditional rendering based on input, or programmatic value changes. Use uncontrolled components for simple forms where you only need the value on submission."
                },
                {
                    question: "Why shouldn't I mutate state directly in React?",
                    answer: "Direct mutation doesn't trigger re-renders, so your UI won't update. React uses reference equality to determine when to re-render. If you mutate an object or array directly, the reference stays the same and React doesn't know it changed. Always use setter functions from useState to ensure proper re-renders and maintain predictable state updates."
                }
            ]
        },
        {
            id: "react-hooks-effects",
            title: "React Hooks: useEffect & Side Effects",
            content: `
                <h3>Managing Side Effects with useEffect</h3>
                <p>useEffect hook handles side effects in functional components, replacing lifecycle methods from class components.</p>
                
                <h3>Side Effects Types:</h3>
                <ul>
                    <li><strong>Data Fetching</strong>: API calls and data loading</li>
                    <li><strong>Subscriptions</strong>: Event listeners, WebSocket connections</li>
                    <li><strong>DOM Manipulation</strong>: Direct DOM updates when necessary</li>
                    <li><strong>Timers</strong>: setTimeout, setInterval, animations</li>
                    <li><strong>External Systems</strong>: Integration with third-party libraries</li>
                </ul>
                
                <h3>useEffect Dependencies:</h3>
                <ul>
                    <li><strong>No Dependencies</strong>: Runs after every render</li>
                    <li><strong>Empty Array</strong>: Runs once after initial render (mount)</li>
                    <li><strong>With Dependencies</strong>: Runs when specific values change</li>
                    <li><strong>Function in Dependencies</strong>: Use useCallback for stable references</li>
                </ul>
                
                <h3>Cleanup Function:</h3>
                <ul>
                    <li><strong>Prevent Memory Leaks</strong>: Clean up subscriptions and timers</li>
                    <li><strong>Avoid State Updates</strong>: Cancel pending operations on unmount</li>
                    <li><strong>Return Function</strong>: useEffect can return a cleanup function</li>
                    <li><strong>Automatic Execution</strong>: Runs before re-running effect or unmount</li>
                </ul>
                
                <h3>Common Patterns:</h3>
                <ul>
                    <li><strong>Data Fetching</strong>: Combine with useState for loading states</li>
                    <li><strong>Event Listeners</strong>: Add and remove in useEffect</li>
                    <li><strong>API Subscriptions</strong>: Subscribe and unsubscribe pattern</li>
                    <li><strong>Document Title Updates</strong>: Update title based on state</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>إدارة الآثار الجانبية مع useEffect</h3>
                    <p>يتعامل useEffect hook مع الآثار الجانبية في المكونات الوظيفية، ليحل محل طرق دورة الحياة من مكونات الفئة.</p>
                    
                    <h3>أنواع الآثار الجانبية:</h3>
                    <ul>
                        <li><strong>جلب البيانات</strong>: استدعاءات API وتحميل البيانات</li>
                        <li><strong>الاشتراكات</strong>: مستمعي الأحداث، اتصالات WebSocket</li>
                        <li><strong>التلاعب بـ DOM</strong>: تحديثات DOM المباشرة عند الضرورة</li>
                        <li><strong>الموقتات</strong>: setTimeout, setInterval, الرسوم المتحركة</li>
                        <li><strong>الأنظمة الخارجية</strong>: التكامل مع مكتبات الطرف الثالث</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "useEffect & Side Effects Examples",
                    content: `
                        <pre class="code-block">
// Example 1: Basic useEffect patterns
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Effect with dependencies - runs when userId changes
  useEffect(() => {
    let cancelled = false;

    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        
        if (!cancelled) {
          setUser(userData);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchUser();

    // Cleanup function - cancels request if component unmounts
    return () => {
      cancelled = true;
    };
  }, [userId]); // Dependency array

  if (loading) return <div>Loading user...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// Example 2: Event listeners with cleanup
function WindowSizeTracker() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup - remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array - runs only on mount and unmount

  return (
    <div>
      Window size: {windowSize.width} x {windowSize.height}
    </div>
  );
}

// Example 3: Timer with cleanup
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup - clear interval
    return () => clearInterval(interval);
  }, []); // Runs once on mount

  return <div>Timer: {seconds} seconds</div>;
}

// Example 4: Document title updates
function PageTitleUpdater({ title }) {
  useEffect(() => {
    document.title = title;
    
    // Optional cleanup - reset title when component unmounts
    return () => {
      document.title = 'Default Title';
    };
  }, [title]); // Runs when title changes

  return <div>Current page title: "{title}"</div>;
}

// Example 5: Local storage synchronization
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

// Example 6: Complex effect with multiple dependencies
function DataFetcher({ url, query, enabled = true }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!enabled || !url) return;

    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      try {
        const queryParams = query ? \`?\${new URLSearchParams(query)}\` : '';
        const response = await fetch(\`\${url}\${queryParams}\`);
        const result = await response.json();
        
        if (!cancelled) {
          setData(result);
        }
      } catch (error) {
        if (!cancelled) {
          console.error('Fetch error:', error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [url, query, enabled]); // Re-run when any dependency changes

  if (loading) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
}

// Example 7: Combining multiple effects
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  // Effect for connection
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    setIsConnected(true);

    return () => {
      connection.disconnect();
      setIsConnected(false);
    };
  }, [roomId]);

  // Effect for messages
  useEffect(() => {
    if (!isConnected) return;

    const handleMessage = (message) => {
      setMessages(prev => [...prev, message]);
    };

    subscribeToMessages(roomId, handleMessage);

    return () => {
      unsubscribeFromMessages(roomId, handleMessage);
    };
  }, [roomId, isConnected]);

  return (
    <div>
      <h3>Room: {roomId} {isConnected ? '🟢' : '🔴'}</h3>
      {messages.map((msg, index) => (
        <div key={index}>{msg}</div>
      ))}
    </div>
  );
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "useEffect Practice",
                    content: `
                        <p>Practice managing side effects with useEffect:</p>
                        <ol>
                            <li>Create a component that fetches and displays user data from an API</li>
                            <li>Build a window resize tracker that shows current dimensions</li>
                            <li>Create a countdown timer that cleans up properly</li>
                            <li>Build a search component that debounces API calls</li>
                            <li>Create a theme switcher that persists in localStorage</li>
                            <li>Build a real-time clock that updates every second</li>
                            <li>Create a component that tracks mouse position</li>
                            <li>Build a form autosave feature that saves on changes</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should I use useLayoutEffect instead of useEffect?",
                    answer: "useLayoutEffect runs synchronously after DOM mutations but before the browser paints. Use it when you need to measure DOM elements or perform mutations that should be visible to the user at the same time as the DOM update. For most side effects (data fetching, subscriptions), useEffect is preferred because it doesn't block painting."
                },
                {
                    question: "How do I prevent infinite loops in useEffect?",
                    answer: "Infinite loops occur when an effect updates a state variable that's in its dependency array. To prevent this: 1) Ensure dependency arrays include all values that effect uses, 2) Use functional updates when state depends on previous state, 3) Consider if you really need state in dependencies, 4) Use useCallback for functions in dependencies, 5) Add proper cleanup to cancel ongoing operations."
                }
            ]
        },
        {
            id: "react-advanced-hooks",
            title: "Advanced Hooks & Performance Optimization",
            content: `
                <h3>Advanced React Hooks Patterns</h3>
                <p>Master advanced hooks for complex state logic, performance optimization, and reusable custom logic.</p>
                
                <h3>useReducer Hook:</h3>
                <ul>
                    <li><strong>Complex State Logic</strong>: Manage state with reducers</li>
                    <li><strong>Predictable Updates</strong>: State transitions follow specific patterns</li>
                    <li><strong>Actions & Dispatchers</strong>: Send actions to update state</li>
                    <li><strong>Multiple State Values</strong>: Handle related state together</li>
                </ul>
                
                <h3>Performance Hooks:</h3>
                <ul>
                    <li><strong>useMemo</strong>: Memoize expensive computations</li>
                    <li><strong>useCallback</strong>: Memoize functions to prevent re-renders</li>
                    <li><strong>React.memo</strong>: Memoize components to prevent unnecessary re-renders</li>
                    <li><strong>useRef</strong>: Access DOM elements and store mutable values</li>
                </ul>
                
                <h3>Custom Hooks:</h3>
                <ul>
                    <li><strong>Logic Reuse</strong>: Extract and share component logic</li>
                    <li><strong>Composition</strong>: Combine multiple hooks</li>
                    <li><strong>Testing</strong>: Test hook logic separately from components</li>
                    <li><strong>Abstraction</strong>: Hide complex implementation details</li>
                </ul>
                
                <h3>Rules of Hooks:</h3>
                <ul>
                    <li><strong>Top Level Only</strong>: Don't call hooks inside loops, conditions, or nested functions</li>
                    <li><strong>React Functions Only</strong>: Only call hooks from React components or custom hooks</li>
                    <li><strong>Same Order</strong>: Hooks must be called in the same order every render</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>أنماط Hooks المتقدمة في React</h3>
                    <p>أتقن الـ Hooks المتقدمة لمنطق الحالة المعقد، تحسين الأداء، والمنطق القابل لإعادة الاستخدام.</p>
                    
                    <h3>قواعد Hooks:</h3>
                    <ul>
                        <li><strong>فقط في المستوى الأعلى</strong>: لا تستدعِ Hooks داخل الحلقات، الشروط، أو الدوال المتداخلة</li>
                        <li><strong>دوال React فقط</strong>: استدعِ Hooks فقط من مكونات React أو Hooks مخصصة</li>
                        <li><strong>نفس الترتيب</strong>: يجب استدعاء Hooks بنفس الترتيب في كل تصيير</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Advanced Hooks Examples",
                    content: `
                        <pre class="code-block">
// Example 1: useReducer for complex state
import { useReducer } from 'react';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

const initialState = {
  todos: [],
  filter: 'all'
};

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (text) => {
    dispatch({ type: 'ADD_TODO', payload: text });
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <div>
      {/* Component implementation */}
    </div>
  );
}

// Example 2: useMemo for expensive calculations
import { useMemo } from 'react';

function ExpensiveComponent({ items, filter }) {
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]); // Only recalculate when items or filter change

  const expensiveValue = useMemo(() => {
    return filteredItems.reduce((acc, item) => {
      // Some expensive computation
      return acc + complexCalculation(item);
    }, 0);
  }, [filteredItems]);

  return (
    <div>
      {filteredItems.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

// Example 3: useCallback for stable function references
import { useCallback } from 'react';

function ProductList({ products, onProductSelect }) {
  // This function is recreated on every render without useCallback
  const handleProductClick = useCallback((productId) => {
    onProductSelect(productId);
  }, [onProductSelect]); // Only recreate when onProductSelect changes

  return (
    <div>
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          onClick={handleProductClick} // Stable reference
        />
      ))}
    </div>
  );
}

// Example 4: React.memo for component memoization
import { memo } from 'react';

const ExpensiveItem = memo(({ item, onUpdate }) => {
  console.log('Rendering item:', item.id);
  return (
    <div>
      <span>{item.name}</span>
      <button onClick={() => onUpdate(item.id)}>Update</button>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function
  return prevProps.item.id === nextProps.item.id &&
         prevProps.item.name === nextProps.item.name;
});

// Example 5: Custom hook for API calls
import { useState, useEffect } from 'react';

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useApi(\`/api/users/\${userId}\`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{user.name}</div>;
}

// Example 6: Custom hook for localStorage
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
}

// Example 7: Complex custom hook
import { useState, useEffect, useCallback } from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url, options);
      if (!response.ok) throw new Error('Network response was not ok');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch };
}

// Example 8: useRef for DOM access and mutable values
import { useRef, useEffect } from 'react';

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus input on mount
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Click button to focus" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

// Example 9: useImperativeHandle for component APIs
import { forwardRef, useImperativeHandle, useRef } from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    scrollIntoView: () => {
      inputRef.current.scrollIntoView();
    },
    value: inputRef.current?.value
  }));

  return <input ref={inputRef} {...props} />;
});

// Usage
function Parent() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <FancyInput ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Advanced Hooks Practice",
                    content: `
                        <p>Practice advanced hooks and optimization techniques:</p>
                        <ol>
                            <li>Convert a complex useState to useReducer for better state management</li>
                            <li>Create a custom hook for handling form state and validation</li>
                            <li>Optimize a component with useMemo for expensive calculations</li>
                            <li>Use useCallback to prevent unnecessary re-renders in child components</li>
                            <li>Create a custom hook for handling API calls with loading and error states</li>
                            <li>Build a component that uses useRef to interact with DOM elements</li>
                            <li>Create a custom hook for managing browser localStorage</li>
                            <li>Optimize a list component with React.memo and proper keys</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should I use useReducer instead of useState?",
                    answer: "Use useReducer when: state logic is complex, next state depends on previous state, you have multiple sub-values in state, state transitions follow predictable patterns, or you need to optimize performance for deep component trees. useReducer is also better for testing as reducers are pure functions and easier to test in isolation."
                },
                {
                    question: "What's the difference between useMemo and useCallback?",
                    answer: "useMemo memoizes the result of a function (the computed value), while useCallback memoizes the function itself. Use useMemo for expensive calculations that you want to cache. Use useCallback for functions that you pass to child components to prevent unnecessary re-renders. Both help with performance optimization but serve different purposes."
                }
            ]
        },
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

                <br><hr><br>
                <div dir="rtl">
                    <h3>التوجيه من جانب العميل مع React Router</h3>
                    <p>يمكن React Router التنقل في تطبيقات الصفحة الواحدة دون إعادة تحميل الصفحة، مما يوفر تجارب مستخدم سلسة.</p>
                    
                    <h3>المكونات الأساسية:</h3>
                    <ul>
                        <li><strong>BrowserRouter</strong>: مكون الموجه لتطبيقات الويب</li>
                        <li><strong>Routes & Route</strong>: حدد مسارات المكونات</li>
                        <li><strong>Link & NavLink</strong>: روابط التنقل مع الحالات النشطة</li>
                        <li><strong>Outlet</strong>: يصيير المسارات الفرعية</li>
                        <li><strong>Navigate</strong>: التنقل البرمجي</li>
                    </ul>
                </div>
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
}

// Example 5: Protected Routes
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
  const isAuthenticated = useAuth(); // Your auth hook

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

// Example 6: Lazy Loading with React.lazy
import { lazy, Suspense } from 'react';

const LazyHome = lazy(() => import('./Home'));
const LazyAbout = lazy(() => import('./About'));
const LazyUsers = lazy(() => import('./Users'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LazyHome />} />
          <Route path="/about" element={<LazyAbout />} />
          <Route path="/users" element={<LazyUsers />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

// Example 7: Active Links with NavLink
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <NavLink 
        to="/"
        className={({ isActive }) => isActive ? 'active' : ''}
      >
        Home
      </NavLink>
      <NavLink 
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'blue'
        })}
      >
        About
      </NavLink>
    </nav>
  );
}

// Example 8: Route Configuration with useRoutes
import { useRoutes } from 'react-router-dom';

const routeConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'users', element: <Users /> },
      { path: '*', element: <NotFound /> }
    ]
  }
];

function App() {
  const element = useRoutes(routeConfig);
  return element;
}

// Example 9: Data Loading with Loaders (React Router v6.4+)
import { json } from 'react-router-dom';

// Loader function
export async function userLoader({ params }) {
  const response = await fetch(\`/api/users/\${params.userId}\`);
  if (!response.ok) {
    throw json({ message: 'User not found' }, { status: 404 });
  }
  return response.json();
}

// Route with loader
<Route 
  path="users/:userId" 
  element={<UserDetail />} 
  loader={userLoader}
/>

// Component using loader data
import { useLoaderData } from 'react-router-dom';

function UserDetail() {
  const user = useLoaderData(); // Data from loader

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
                        </pre>
                    `
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
        {
            id: "react-state-management",
            title: "State Management: Context API & Zustand",
            content: `
                <h3>Global State Management Solutions</h3>
                <p>Manage application-wide state efficiently with Context API for simple cases and Zustand for complex state needs.</p>
                
                <h3>Context API:</h3>
                <ul>
                    <li><strong>Built-in Solution</strong>: No additional dependencies</li>
                    <li><strong>Prop Drilling Alternative</strong>: Avoid passing props through multiple levels</li>
                    <li><strong>Simple State</strong>: Good for theme, auth, user preferences</li>
                    <li><strong>Provider Pattern</strong>: Wrap components with context providers</li>
                </ul>
                
                <h3>Zustand Library:</h3>
                <ul>
                    <li><strong>Minimal Boilerplate</strong>: Less code than Redux or Context</li>
                    <li><strong>Excellent Performance</strong>: Optimized re-renders</li>
                    <li><strong>TypeScript Support</strong>: Great TypeScript experience</li>
                    <li><strong>Middleware</strong>: Persistence, devtools, and more</li>
                    <li><strong>Scalable</strong>: Works for small to large applications</li>
                </ul>
                
                <h3>When to Use Each:</h3>
                <ul>
                    <li><strong>Context API</strong>: Simple global state, theme, user preferences</li>
                    <li><strong>Zustand</strong>: Complex state, frequent updates, large apps</li>
                    <li><strong>useState</strong>: Local component state</li>
                    <li><strong>useReducer</strong>: Complex local state logic</li>
                </ul>
                
                <h3>Best Practices:</h3>
                <ul>
                    <li><strong>Avoid Overusing Context</strong>: Can cause unnecessary re-renders</li>
                    <li><strong>Split Contexts</strong>: Use multiple contexts for different concerns</li>
                    <li><strong>Optimize Selectors</strong>: Use precise state selections</li>
                    <li><strong>Use Middleware</strong>: For persistence, logging, and debugging</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>حلول إدارة الحالة العامة</h3>
                    <p>أدر الحالة على مستوى التطبيق بكفاءة مع Context API للحالات البسيطة و Zustand لاحتياجات الحالة المعقدة.</p>
                    
                    <h3>متى تستخدم كل منها:</h3>
                    <ul>
                        <li><strong>Context API</strong>: حالة عامة بسيطة، السمة، تفضيلات المستخدم</li>
                        <li><strong>Zustand</strong>: حالة معقدة، تحديثات متكررة، تطبيقات كبيرة</li>
                        <li><strong>useState</strong>: حالة المكون المحلية</li>
                        <li><strong>useReducer</strong>: منطق الحالة المحلية المعقد</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "State Management Examples",
                    content: `
                        <pre class="code-block">
// Example 1: Context API for Theme
import { createContext, useContext, useReducer } from 'react';

const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

const initialState = {
  theme: 'light',
  colors: {
    light: { background: '#fff', text: '#000' },
    dark: { background: '#1a202c', text: '#fff' }
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });
  const setTheme = (theme) => dispatch({ type: 'SET_THEME', payload: theme });

  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// Usage in component
function ThemedButton() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className={\`theme-button \${theme}\`}
    >
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}

// Example 2: Auth Context
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth token
    const token = localStorage.getItem('authToken');
    if (token) {
      // Verify token and set user
      verifyToken(token).then(setUser).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    const user = await loginUser(credentials);
    setUser(user);
    localStorage.setItem('authToken', user.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authToken');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

// Example 3: Zustand Store
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(persist(
  (set, get) => ({
    // State
    bears: 0,
    fishes: 0,
    user: null,
    
    // Actions
    increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    addFish: (amount = 1) => set(state => ({ fishes: state.fishes + amount })),
    
    // Async action
    fetchUser: async (id) => {
      const response = await fetch(\`/api/users/\${id}\`);
      const user = await response.json();
      set({ user });
    },
    
    // Computed values (using get())
    getTotalAnimals: () => get().bears + get().fishes,
    
    // Complex action with multiple state updates
    reset: () => set({ bears: 0, fishes: 0, user: null }),
  }),
  {
    name: 'app-storage', // localStorage key
    partialize: (state) => ({ 
      bears: state.bears, 
      fishes: state.fishes 
    }), // Only persist these fields
  }
));

// Example 4: Using Zustand in Components
function BearCounter() {
  const bears = useStore(state => state.bears);
  const increase = useStore(state => state.increasePopulation);
  
  return (
    <div>
      <h1>{bears} bears around here...</h1>
      <button onClick={increase}>Add bear</button>
    </div>
  );
}

function FishCounter() {
  const fishes = useStore(state => state.fishes);
  const addFish = useStore(state => state.addFish);
  
  return (
    <div>
      <h1>{fishes} fishes in the pond</h1>
      <button onClick={() => addFish(1)}>Add fish</button>
      <button onClick={() => addFish(5)}>Add 5 fishes</button>
    </div>
  );
}

function TotalAnimals() {
  const total = useStore(state => state.getTotalAnimals());
  
  return <div>Total animals: {total}</div>;
}

// Example 5: Zustand with TypeScript
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AppState {
  count: number;
  user: User | null;
  increment: () => void;
  decrement: () => void;
  setUser: (user: User) => void;
}

const useAppStore = create<AppState>()(
  devtools(
    (set) => ({
      count: 0,
      user: null,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      setUser: (user) => set({ user }),
    }),
    { name: 'AppStore' }
  )
);

// Example 6: Combining Context and Zustand
// Use Context for UI state (theme, modals)
// Use Zustand for data state (users, products, cart)

// Theme Context (UI state)
const ThemeContext = createContext();

// Cart Store (Data state - Zustand)
const useCartStore = create((set, get) => ({
  items: [],
  addItem: (product) => set(state => ({
    items: [...state.items, { ...product, quantity: 1 }]
  })),
  removeItem: (productId) => set(state => ({
    items: state.items.filter(item => item.id !== productId)
  })),
  getTotal: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0),
}));

// Example 7: Optimized Zustand with Selectors
// Bad - causes re-renders when any state changes
const user = useStore(state => state.user);

// Good - only re-renders when user changes
const user = useStore(state => state.user);

// Better - with shallow comparison for objects
import { shallow } from 'zustand/shallow';

const { user, login } = useStore(
  state => ({ user: state.user, login: state.login }),
  shallow
);

// Example 8: Middleware for Persistence and DevTools
const useStore = create(
  devtools(
    persist(
      (set, get) => ({
        // ... store logic
      }),
      {
        name: 'store',
        version: 1,
        migrate: (persistedState, version) => {
          // Handle state migrations between versions
          if (version === 0) {
            // Migrate from version 0 to 1
            return { ...persistedState, newField: 'default' };
          }
          return persistedState;
        },
      }
    ),
    { name: 'AppStore' }
  )
);
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "State Management Practice",
                    content: `
                        <p>Practice global state management with these exercises:</p>
                        <ol>
                            <li>Create a theme context for light/dark mode switching</li>
                            <li>Build an authentication context with login/logout functionality</li>
                            <li>Create a shopping cart store with Zustand</li>
                            <li>Build a notification system with Context API</li>
                            <li>Create a user preferences store with persistence</li>
                            <li>Build a multi-step form with shared state between steps</li>
                            <li>Create a real-time chat application with message state management</li>
                            <li>Build a dashboard with multiple widgets sharing data</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should I use Context API vs Zustand?",
                    answer: "Use Context API for simple global state that doesn't change often (theme, auth user, language). Use Zustand for complex state with frequent updates, derived state, or when you need better performance. Context can cause unnecessary re-renders when state changes, while Zustand has optimized updates. For large applications, Zustand is generally better due to its performance and scalability."
                },
                {
                    question: "How do I optimize Context API to prevent unnecessary re-renders?",
                    answer: "1) Split contexts by concern (ThemeContext, AuthContext, etc.). 2) Use useMemo for context value when it contains objects/functions. 3) Create multiple providers for different state parts. 4) Use React.memo for consumer components. 5) Consider using a state management library like Zustand for complex state that changes frequently."
                }
            ]
        },
        {
            id: "react-external-libraries",
            title: "External Libraries & Ecosystem",
            content: `
                <h3>Enhancing React with External Libraries</h3>
                <p>Leverage the rich React ecosystem to add powerful features like animations, internationalization, forms, and data visualization.</p>
                
                <h3>Animation Libraries:</h3>
                <ul>
                    <li><strong>Framer Motion</strong>: Production-ready animations</li>
                    <li><strong>React Spring</strong>: Physics-based animations</li>
                    <li><strong>React Transition Group</strong>: CSS transitions</li>
                    <li><strong>AutoAnimate</strong>: Zero-config animations</li>
                </ul>
                
                <h3>Form Management:</h3>
                <ul>
                    <li><strong>React Hook Form</strong>: Performance-focused forms</li>
                    <li><strong>Formik</strong>: Comprehensive form solution</li>
                    <li><strong>React Final Form</strong>: Subscription-based forms</li>
                    <li><strong>Zod</strong>: Schema validation with TypeScript</li>
                </ul>
                
                <h3>UI Component Libraries:</h3>
                <ul>
                    <li><strong>Material-UI (MUI)</strong>: Google's Material Design</li>
                    <li><strong>Chakra UI</strong>: Accessible and composable</li>
                    <li><strong>Ant Design</strong>: Enterprise-grade components</li>
                    <li><strong>Headless UI</strong>: Unstyled, accessible components</li>
                </ul>
                
                <h3>Data Visualization:</h3>
                <ul>
                    <li><strong>Recharts</strong>: Composable charting library</li>
                    <li><strong>Victory</strong>: React components for charts</li>
                    <li><strong>React ChartJS 2</strong>: Chart.js wrapper for React</li>
                    <li><strong>Nivo</strong>: Rich set of dataviz components</li>
                </ul>
                
                <h3>Internationalization (i18n):</h3>
                <ul>
                    <li><strong>react-i18next</strong>: i18next framework for React</li>
                    <li><strong>LinguiJS</strong>: Simple and powerful i18n</li>
                    <li><strong>FormatJS</strong>: Message formatting and pluralization</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>تعزيز React بالمكتبات الخارجية</h3>
                    <p>استفد من نظام React البيئي الغني لإضافة ميزات قوية مثل الرسوم المتحركة، التدويل، النماذج، وتصور البيانات.</p>
                    
                    <h3>مكتبات الرسوم المتحركة:</h3>
                    <ul>
                        <li><strong>Framer Motion</strong>: رسوم متحركة جاهزة للإنتاج</li>
                        <li><strong>React Spring</strong>: رسوم متحركة قائمة على الفيزياء</li>
                        <li><strong>React Transition Group</strong>: تحولات CSS</li>
                        <li><strong>AutoAnimate</strong>: رسوم متحركة بدون تكوين</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "External Libraries Integration Examples",
                    content: `
                        <pre class="code-block">
// Example 1: Framer Motion Animations
import { motion, AnimatePresence } from 'framer-motion';

function AnimatedComponent({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Animated Content
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Example 2: React Hook Form
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  age: z.number().min(18, 'Must be at least 18 years old'),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await submitForm(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('name')}
          placeholder="Name"
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <input
          type="email"
          {...register('email')}
          placeholder="Email"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <input
          type="number"
          {...register('age', { valueAsNumber: true })}
          placeholder="Age"
        />
        {errors.age && <span>{errors.age.message}</span>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

// Example 3: React i18next Internationalization
import { useTranslation, Trans } from 'react-i18next';

function WelcomePage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome_title')}</h1>
      <p>{t('welcome_message')}</p>
      
      <Trans i18nKey="welcome_description">
        Welcome to our application. This is a <strong>sample</strong> text.
      </Trans>

      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('ar')}>العربية</button>
        <button onClick={() => changeLanguage('es')}>Español</button>
      </div>
    </div>
  );
}

// Example 4: Swiper.js for Sliders
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ImageSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide>
        <img src="/image1.jpg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/image2.jpg" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/image3.jpg" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
}

// Example 5: Recharts for Data Visualization
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
];

function SalesChart() {
  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sales" stroke="#8884d8" />
      <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
    </LineChart>
  );
}

// Example 6: React Query for Server State
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function UsersList() {
  const queryClient = useQueryClient();

  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json()),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const deleteUser = useMutation({
    mutationFn: (userId) => 
      fetch(\`/api/users/\${userId}\`, { method: 'DELETE' }),
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          {user.name}
          <button onClick={() => deleteUser.mutate(user.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

// Example 7: React Beautiful DnD for Drag and Drop
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function TodoList({ todos, onReorder }) {
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    
    onReorder(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {todos.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {todo.text}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

// Example 8: Date handling with date-fns
import { format, addDays, isBefore, parseISO } from 'date-fns';

function DateComponent() {
  const today = new Date();
  const tomorrow = addDays(today, 1);
  
  return (
    <div>
      <p>Today: {format(today, 'MMMM do, yyyy')}</p>
      <p>Tomorrow: {format(tomorrow, 'MMM do')}</p>
      <p>Is tomorrow after today? {isBefore(today, tomorrow) ? 'Yes' : 'No'}</p>
    </div>
  );
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "External Libraries Practice",
                    content: `
                        <p>Practice integrating external libraries with React:</p>
                        <ol>
                            <li>Create an animated landing page with Framer Motion</li>
                            <li>Build a complex multi-step form with React Hook Form and Zod validation</li>
                            <li>Implement internationalization with react-i18next for multiple languages</li>
                            <li>Create an image carousel with Swiper.js</li>
                            <li>Build a dashboard with charts using Recharts</li>
                            <li>Implement drag-and-drop functionality with React Beautiful DnD</li>
                            <li>Create a real-time data display with React Query</li>
                            <li>Build a component library with Chakra UI or Material-UI</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What are the benefits of using React Hook Form over built-in form handling?",
                    answer: "React Hook Form provides better performance with minimal re-renders, built-in validation with various schema validators, easier error handling, and less boilerplate code. It's optimized for large forms and provides better user experience with faster interactions. The library also has excellent TypeScript support and a rich ecosystem of integrations."
                },
                {
                    question: "When should I use React Query vs useEffect for data fetching?",
                    answer: "Use React Query when you need caching, background updates, error retries, pagination, or optimistic updates. Use useEffect for simple one-time data fetching or when you don't need advanced features. React Query provides better performance, devtools, and eliminates common data fetching bugs like race conditions and memory leaks."
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