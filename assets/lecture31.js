// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete React Mastery 2025 - From Zero to Hero",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
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

// Example 5: Context with State
import { createContext, useEffect, useState } from "react";

const TodoContext = createContext();
const TodoProvider = ({ children }) => {
    const [todo, setTodo] = useState(
        localStorage.getItem("todo")
        ? JSON.parse(localStorage.getItem("todo"))
        : []
    );

    const addTodo = (item) => {
        setTodo(prev => [...prev, item]);
    }

    const removeTodo = (item) => {
        setTodo(prev => prev.filter(e => e !== item));
    }

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todo));
    }, [todo]); 

    return (
        <TodoContext value={{ todo, addTodo, removeTodo }}>
            {children}
        </TodoContext>
    )
}

export { TodoProvider, TodoContext }

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

                <h3>Other:</h3>
                <ul>
                    <li><strong>Swiper</strong>: Powerful Sliders</li>
                    <li><strong>Sonner</strong>: Powerfull popups</li>
                </ul>
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