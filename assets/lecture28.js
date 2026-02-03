// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete React Mastery 2025 - From Zero to Hero",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
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