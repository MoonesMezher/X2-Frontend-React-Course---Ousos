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