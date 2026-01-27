// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete React Mastery 2025 - From Zero to Hero",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "apis-web-communication",
            title: "Understanding APIs and Web Communication",
            content: `
            <h3>APIs and JSON Data Format</h3>
                <ul>
                    <li><strong>API</strong> (Application Programming Interface) is a set of rules and protocols that allows different software systems to communicate</li>
                    <li>Like a waiter taking your order and delivering food between the kitchen (server) and you (client)</li>
                    <li>Used for: Fetch data, perform actions, or integrate third-party services like (weather data, payment processing, football games)</li>
                </ul>
                
                <h4>API Types:</h4>
                <ul>
                    <li><strong>Web APIs:</strong>
                        <ul>
                            <li>RESTful - Use HTTP methods like (GET, POST)</li>
                            <li>GraphQL</li>
                            <li>SOAP</li>
                        </ul>
                    </li>
                    <li><strong>Browser APIs:</strong> Built into browsers for JavaScript interaction</li>
                    <li><strong>Third-Party APIs:</strong> External services requiring authentication</li>
                </ul>
                
                <h4>Data Formats:</h4>
                <ul>
                    <li><strong>JSON</strong> (most common)</li>
                    <li><strong>XML</strong> (older systems)</li>
                </ul>
                
                <h4>What is JSON?</h4>
                <ul>
                    <li>(JavaScript Object Notation) - a lightweight, text-based data format used for storing and exchanging data between systems</li>
                    <li>Looks like JavaScript objects but is language-independent (used in Python, Java, PHP, ...)</li>
                    <li>Example: package.json</li>
                    <li>Like objects in JS But with Notes:
                        <ul>
                            <li><strong>Keys</strong>: Always in double quotes</li>
                            <li><strong>Values</strong>: Limited to JSON data types</li>
                            <li><strong>Trailing Commas</strong>: Not allowed</li>
                            <li><strong>Comments</strong>: Not supported</li>
                        </ul>
                    </li>
                </ul>
                
                <h3>Complete Life Example</h3>
                
                <h4>Ordering from an Online Store:</h4>
                
                <h4>1. User Opens the Store (Frontend)</h4>
                <ul>
                    <li>Displays product list (GET request)</li>
                    <li>Clicks "Add to Cart" (POST request)</li>
                    <li>Modifies quantity (PUT request)</li>
                    <li>Deletes product (DELETE request)</li>
                </ul>
                
                <h4>2. The Store (Backend)</h4>
                <ul>
                    <li>Receives requests and validates them</li>
                    <li>Checks product availability in inventory</li>
                    <li>Calculates final price</li>
                    <li>Sends order confirmation</li>
                </ul>
                
                <h4>3. Communication Between Them:</h4>
                <p>Frontend: "I want product number 123" (GET)<br>
                Backend: "Here is product 123" (200)</p>
                
                <p>Frontend: "I want to buy product 123" (POST)<br>
                Backend: "Operation completed successfully" (201)</p>
                
                <p>Frontend: "I want to cancel the order" (DELETE)<br>
                Backend: "Order canceled" (200)</p>
                
                <h3>API: Application Programming Interface</h3>
                
                <h3>What is an API?</h3>
                <ul>
                    <li><strong>Like a waiter in a restaurant</strong>: You (the application) give your order to the waiter (the API) who delivers it to the kitchen (the server) and brings back the result</li>
                    <li><strong>A mediator</strong> for communication between different applications</li>
                    <li><strong>A set of rules</strong> that govern how software programs communicate with each other</li>
                </ul>
                
                <h3>Backend Role (Server)</h3>
                <p>The backend works like the kitchen in a restaurant:</p>
                <ul>
                    <li><strong>Receives requests</strong> - Like receiving customer orders</li>
                    <li><strong>Applies rules</strong> - Validates data and prevents errors</li>
                    <li><strong>Handles database</strong> - Stores and retrieves information</li>
                    <li><strong>Verifies identity</strong> - Checks user permissions for actions</li>
                    <li><strong>Sends results</strong> - Provides the requested data</li>
                </ul>
                
                <h3>Frontend Role (User Interface)</h3>
                <p>The frontend works like the menu and ordering system:</p>
                <ul>
                    <li><strong>Displays data</strong> - Like showing the menu</li>
                    <li><strong>Sends user requests</strong> - Like ordering a specific meal</li>
                    <li><strong>Updates interface</strong> - Shows changes immediately</li>
                    <li><strong>Handles user interaction</strong> - Receives clicks and inputs</li>
                </ul>
                
                <h3>Request Components</h3>
                
                <h4>Request Structure:</h4>
                <p><strong>Request Method + URL + Headers + Body (optional)</strong></p>
                
                <h4>1. HTTP Methods (Actions)</h4>
                <ul>
                    <li><strong>GET</strong> - Retrieve data (like: asking for a menu)</li>
                    <li><strong>POST</strong> - Add new data (like: ordering a new meal)</li>
                    <li><strong>PUT</strong> - Update existing data (like: modifying an order)</li>
                    <li><strong>DELETE</strong> - Delete data (like: canceling an order)</li>
                </ul>
                
                <h4>2. URL (Address)</h4>
                <ul>
                    <li>Like a home address or table number in a restaurant</li>
                    <li>Specifies the location you want to access</li>
                    <li><strong>Examples:</strong>
                        <ul>
                            <li><code>/api/products</code> - All products</li>
                            <li><code>/api/products/1</code> - Product number 1</li>
                            <li><code>/api/products?category=electronics</code> - Only electronics products</li>
                        </ul>
                    </li>
                </ul>
                
                <h4>3. Headers</h4>
                <ul>
                    <li>Metadata about the request</li>
                    <li>Like additional instructions: "Meal for diabetic person", "Delivery required"</li>
                    <li><strong>Examples:</strong>
                        <ul>
                            <li><code>Content-Type</code>: Data type (Arabic, English, JSON)</li>
                            <li><code>Authorization</code>: ID card or permission</li>
                            <li><code>User-Agent</code>: Type of device used</li>
                        </ul>
                    </li>
                </ul>
                
                <h4>4. Body</h4>
                <ul>
                    <li>The actual data being sent</li>
                    <li>Like order details: "Large pizza, drink, salad"</li>
                    <li>Used with POST and PUT requests</li>
                </ul>
                
                <h3>Response Components</h3>
                
                <h4>Response Structure:</h4>
                <p><strong>Status Code + Headers + Data</strong></p>
                
                <h4>Response Examples:</h4>
                <ul>
                    <li>Success: <strong>200</strong> - With product list</li>
                    <li>Created: <strong>201</strong> - With new product data</li>
                    <li>Error: <strong>404</strong> - Product not found</li>
                    <li>Permission Error: <strong>401</strong> - Login required</li>
                </ul>
                
                <h3>HTTP Methods Explained with Life Examples</h3>
                
                <h4>GET - Read Data</h4>
                <p>Like: Asking for a restaurant menu<br>
                Request: "I want the menu"<br>
                Response: Complete menu list</p>
                
                <h4>POST - Create New Data</h4>
                <p>Like: Ordering a new meal<br>
                Request: "I want a large pizza"<br>
                Response: "Your order number 5 has been received"</p>
                
                <h4>PUT - Update Data</h4>
                <p>Like: Modifying an order<br>
                Request: "I want to change the pizza to medium"<br>
                Response: "Order 5 has been modified"</p>
                
                <h4>DELETE - Delete Data</h4>
                <p>Like: Canceling an order<br>
                Request: "I want to cancel order 5"<br>
                Response: "Order 5 has been canceled"</p>
                
                <h3>Status Codes</h3>
                
                <h4>100-199: Informational</h4>
                <ul>
                    <li>Like: "Preparing", "Please wait"</li>
                </ul>
                
                <h4>200-299: Success ✅</h4>
                <ul>
                    <li><strong>200 OK</strong> - Operation completed successfully</li>
                    <li><strong>201 Created</strong> - New item created successfully</li>
                    <li><strong>204 No Content</strong> - Success but no content to return</li>
                </ul>
                
                <h4>300-399: Redirects 🔄</h4>
                <ul>
                    <li><strong>301 Moved</strong> - Content moved to another location</li>
                    <li><strong>304 Not Modified</strong> - Content hasn't changed (like using cached version)</li>
                </ul>
                
                <h4>400-499: Client Errors ❌</h4>
                <ul>
                    <li><strong>400 Bad Request</strong> - Request not understood (like: incomplete order)</li>
                    <li><strong>401 Unauthorized</strong> - Login required</li>
                    <li><strong>403 Forbidden</strong> - Access denied (like: employee trying to access manager data)</li>
                    <li><strong>404 Not Found</strong> - Content doesn't exist</li>
                    <li><strong>409 Conflict</strong> - Conflict (like: trying to register an existing email)</li>
                </ul>
                
                <h4>500-599: Server Errors 🚨</h4>
                <ul>
                    <li><strong>500 Internal Error</strong> - Server error (like: database malfunction)</li>
                    <li><strong>503 Service Unavailable</strong> - Service not available (like: maintenance)</li>
                </ul>
                
                <h3>Summary</h3>
                <p>APIs are the communication bridge between user interface and server, working like an ordering system in a restaurant where:</p>
                <ul>
                    <li>Frontend is the customer who places orders</li>
                    <li>API is the waiter who delivers orders</li>
                    <li>Backend is the kitchen that prepares orders</li>
                </ul>
                <p>Every request has a method (GET, POST, PUT, DELETE) and every response has a status (200, 404, 500) that tells us the operation result.</p>
            `,
            examples: [
                {
                    title: "API Communication Examples",
                    content: `
                        <pre class="code-block">
// Example 1: Basic GET Request
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    // Check if request was successful
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    return response.json(); // Parse JSON response
  })
  .then(data => {
    console.log("User data:", data);
    // Process the user data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    // Handle the error appropriately
  });

// Example 2: POST Request with Headers and Body
async function createPost(postData) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your-token-here'
      },
      body: JSON.stringify(postData)
    });

    if (!response.ok) {
      throw new Error(\`Failed to create post: \${response.status}\`);
    }

    const createdPost = await response.json();
    console.log('Created post:', createdPost);
    return createdPost;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
}

// Usage
const newPost = {
  title: 'Understanding APIs',
  body: 'APIs are like waiters in a restaurant...',
  userId: 1
};

createPost(newPost);

// Example 3: Complete CRUD Operations
class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  // GET - Read data
  async getUsers() {
    const response = await fetch(\`\${this.baseUrl}/users\`);
    return response.json();
  }

  // GET with query parameters
  async getUsersByPage(page = 1, limit = 10) {
    const url = new URL(\`\${this.baseUrl}/users\`);
    url.searchParams.append('_page', page);
    url.searchParams.append('_limit', limit);

    const response = await fetch(url);
    return response.json();
  }

  // POST - Create data
  async createUser(userData) {
    const response = await fetch(\`\${this.baseUrl}/users\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return response.json();
  }

  // PUT - Update data
  async updateUser(userId, userData) {
    const response = await fetch(\`\${this.baseUrl}/users/\${userId}\`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    return response.json();
  }

  // DELETE - Delete data
  async deleteUser(userId) {
    const response = await fetch(\`\${this.baseUrl}/users/\${userId}\`, {
      method: 'DELETE'
    });
    return response.status === 200; // Return true if successful
  }

  // PATCH - Partial update
  async patchUser(userId, partialData) {
    const response = await fetch(\`\${this.baseUrl}/users/\${userId}\`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(partialData)
    });
    return response.json();
  }
}

// Example 4: Handling Different Status Codes
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);

    switch (response.status) {
      case 200:
        return await response.json();
      
      case 400:
        throw new Error('Bad request - Please check your input');
      
      case 401:
        throw new Error('Unauthorized - Please log in');
      
      case 403:
        throw new Error('Forbidden - You don\'t have permission');
      
      case 404:
        throw new Error('Resource not found');
      
      case 500:
        throw new Error('Server error - Please try again later');
      
      case 503:
        throw new Error('Service unavailable - Server is down for maintenance');
      
      default:
        throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
  } catch (error) {
    console.error('Fetch error:', error);
    // You could show a user-friendly message here
    throw error;
  }
}

// Example 5: Working with JSON
// JSON.parse() & JSON.stringify()

const person = {
  name: "Alice",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "hiking"]
};

// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(person);
console.log(jsonString);
// Output: {"name":"Alice","age":30,"isStudent":false,"hobbies":["reading","hiking"]}

// Convert JSON string back to JavaScript object
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name); // Alice

// Pretty printing JSON
const prettyJson = JSON.stringify(person, null, 2);
console.log(prettyJson);

// Example 6: Real-world API integration
class WeatherService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.openweathermap.org/data/2.5';
  }

  async getWeather(city) {
    try {
      const response = await fetch(
        \`\${this.baseUrl}/weather?q=\${city}&appid=\${this.apiKey}&units=metric\`
      );

      if (!response.ok) {
        throw new Error(\`Weather API error: \${response.status}\`);
      }

      const data = await response.json();
      return {
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        city: data.name
      };
    } catch (error) {
      console.error('Error fetching weather:', error);
      throw error;
    }
  }
}

// Example 7: Sending Form Data
async function submitContactForm(formData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(formData)
  });
  
  return response.json();
}

// Example 8: Uploading Files
async function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'your_upload_preset');

  const response = await fetch('https://api.cloudinary.com/v1_1/your-cloud/image/upload', {
    method: 'POST',
    body: formData
  });
  
  return response.json();
}

// Example 9: API with Authentication
class SecureApiService {
  constructor() {
    this.token = localStorage.getItem('authToken');
  }

  async fetchSecureData() {
    const response = await fetch('/api/secure-data', {
      headers: {
        'Authorization': \`Bearer \${this.token}\`,
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 401) {
      // Token expired, redirect to login
      window.location.href = '/login';
      return;
    }

    return response.json();
  }
}

// Example 10: Handling Multiple Requests
async function fetchMultipleData() {
  try {
    // Fetch multiple endpoints in parallel
    const [users, posts, comments] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json()),
      fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json()),
      fetch('https://jsonplaceholder.typicode.com/comments').then(r => r.json())
    ]);

    return { users, posts, comments };
  } catch (error) {
    console.error('Error fetching multiple data:', error);
    throw error;
  }
}

// Example 11: Request Headers vs Body Comparison
async function sendRequest() {
  // Headers (Metadata)
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123',
    'X-Request-ID': 'unique-request-id',
    'Accept-Language': 'en-US',
    'User-Agent': 'MyApp/1.0'
  };

  // Body (Actual Data)
  const body = {
    productId: 123,
    quantity: 2,
    customer: {
      name: "John Doe",
      email: "john@example.com"
    },
    shippingAddress: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
    }
  };

  const response = await fetch('/api/orders', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body)
  });

  return response.json();
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "API Communication Practice",
                    content: `
                        <p>Practice working with APIs through these exercises:</p>
                        <ol>
                            <li>Create a function to fetch user data from JSONPlaceholder API and display it</li>
                            <li>Build a weather app that fetches data from OpenWeatherMap API</li>
                            <li>Create a form that submits data to a mock API using POST method</li>
                            <li>Implement error handling for different HTTP status codes (404, 500, etc.)</li>
                            <li>Build a todo app that performs all CRUD operations (Create, Read, Update, Delete)</li>
                            <li>Create a function that converts between JavaScript objects and JSON strings</li>
                            <li>Implement API caching to reduce unnecessary network requests</li>
                            <li>Build a shopping cart that communicates with a backend API</li>
                            <li>Create a file upload component that sends files to Cloudinary API</li>
                            <li>Implement authentication with JWT tokens in API requests</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between PUT and PATCH HTTP methods?",
                    answer: "PUT is used to completely replace an existing resource. You need to send the entire updated resource. PATCH is used for partial updates - you only send the fields that need to be changed. For example, updating a user's email with PUT would require sending all user data, while PATCH would only require sending the new email."
                },
                {
                    question: "Why do we need to use JSON.stringify() when sending data in fetch requests?",
                    answer: "fetch() expects the body to be a string, not a JavaScript object. JSON.stringify() converts JavaScript objects into JSON strings that can be transmitted over HTTP. Without it, the server would receive '[object Object]' instead of the actual data. Similarly, response.json() parses the JSON string back into a JavaScript object."
                },
                {
                    question: "What are CORS errors and how can they be resolved?",
                    answer: "CORS (Cross-Origin Resource Sharing) errors occur when a web application tries to access resources from a different domain than the one it was served from, and the server doesn't include the proper CORS headers. Solutions include: 1) The server adding 'Access-Control-Allow-Origin' header, 2) Using a proxy server, 3) For development, disabling browser CORS checks (not recommended for production), or 4) Setting up proper CORS configuration on the backend server."
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