// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete JavaScript Mastery - Frontend Foundations",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "events-forms",
            title: "Events and Forms - User Interaction",
            content: `
                <h3>Understanding Events:</h3>
                <p>Events are actions that happen in the browser, such as clicks, keyboard input, or page loading. JavaScript can respond to these events to create interactive web pages.</p>
                
                <h3>Common Event Types:</h3>
                <ul>
                    <li><strong>Mouse Events</strong>: click, dblclick, mousedown, mouseup, mousemove</li>
                    <li><strong>Keyboard Events</strong>: keydown, keyup, keypress</li>
                    <li><strong>Form Events</strong>: submit, change, input, focus, blur</li>
                    <li><strong>Window Events</strong>: load, resize, scroll, beforeunload</li>
                    <li><strong>Touch Events</strong>: touchstart, touchmove, touchend</li>
                </ul>
                
                <h3>Event Handling Methods:</h3>
                <ul>
                    <li><strong>addEventListener</strong>: Modern way to attach events</li>
                    <li><strong>removeEventListener</strong>: Remove event handlers</li>
                    <li><strong>Inline event handlers</strong>: onclick=\"code\" (not recommended)</li>
                    <li><strong>Event object properties</strong>: target, type, preventDefault(), stopPropagation()</li>
                </ul>
                
                <h3>Working with Forms:</h3>
                <ul>
                    <li><strong>Form elements</strong>: input, textarea, select, button</li>
                    <li><strong>Form validation</strong>: Client-side validation</li>
                    <li><strong>Form submission</strong>: Handling form data</li>
                    <li><strong>Form reset</strong>: Clearing form data</li>
                    <li><strong>Form data access</strong>: Using FormData API</li>
                </ul>
                
                <h3>Event Propagation:</h3>
                <ul>
                    <li><strong>Event Bubbling</strong>: Events bubble up from target to root</li>
                    <li><strong>Event Capturing</strong>: Events capture down from root to target</li>
                    <li><strong>Event Delegation</strong>: Handling events on parent elements</li>
                    <li><strong>stopPropagation()</strong>: Stop event from propagating</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>فهم الأحداث:</h3>
                    <p>الأحداث هي إجراءات تحدث في المتصفح، مثل النقرات، إدخال لوحة المفاتيح، أو تحميل الصفحة. يمكن لـ JavaScript الرد على هذه الأحداث لإنشاء صفحات ويب تفاعلية.</p>
                    
                    <h3>أنواع الأحداث الشائعة:</h3>
                    <ul>
                        <li><strong>أحداث الفأرة</strong>: click, dblclick, mousedown, mouseup, mousemove</li>
                        <li><strong>أحداث لوحة المفاتيح</strong>: keydown, keyup, keypress</li>
                        <li><strong>أحداث النماذج</strong>: submit, change, input, focus, blur</li>
                        <li><strong>أحداث النافذة</strong>: load, resize, scroll, beforeunload</li>
                        <li><strong>أحداث اللمس</strong>: touchstart, touchmove, touchend</li>
                    </ul>
                    
                    <h3>طرق معالجة الأحداث:</h3>
                    <ul>
                        <li><strong>addEventListener</strong>: الطريقة الحديثة لإرفاق الأحداث</li>
                        <li><strong>removeEventListener</strong>: أزل معالجي الأحداث</li>
                        <li><strong>معالجي الأحداث المضمنين</strong>: onclick=\"code\" (غير موصى به)</li>
                        <li><strong>خصائص كائن الحدث</strong>: target, type, preventDefault(), stopPropagation()</li>
                    </ul>
                    
                    <h3>العمل مع النماذج:</h3>
                    <ul>
                        <li><strong>عناصر النموذج</strong>: input, textarea, select, button</li>
                        <li><strong>التحقق من النموذج</strong>: التحقق من جانب العميل</li>
                        <li><strong>إرسال النموذج</strong>: معالجة بيانات النموذج</li>
                        <li><strong>إعادة تعيين النموذج</strong>: مسح بيانات النموذج</li>
                        <li><strong>الوصول إلى بيانات النموذج</strong>: استخدام FormData API</li>
                    </ul>
                    
                    <h3>انتشار الحدث:</h3>
                    <ul>
                        <li><strong>Event Bubbling</strong>: تنتقل الأحداث من الهدف إلى الجذر</li>
                        <li><strong>Event Capturing</strong>: تلتقط الأحداث من الجذر إلى الهدف</li>
                        <li><strong>تفويض الحدث</strong>: معالجة الأحداث على العناصر الأصل</li>
                        <li><strong>stopPropagation()</strong>: أوقف الحدث من الانتشار</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Events and Forms Examples",
                    content: `
                        <pre class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Events and Forms&lt;/title&gt;
    &lt;style&gt;
        .error { color: red; font-size: 0.9em; }
        .success { color: green; }
        .hidden { display: none; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="app"&gt;
        &lt;h1&gt;Event Handling Examples&lt;/h1&gt;
        
        &lt;!-- Mouse Events --&gt;
        &lt;div id="mouse-area" style="border: 1px solid #ccc; padding: 20px; margin: 10px;"&gt;
            &lt;p&gt;Mouse coordinates: &lt;span id="coordinates"&gt;0, 0&lt;/span&gt;&lt;/p&gt;
        &lt;/div&gt;
        
        &lt;!-- Keyboard Events --&gt;
        &lt;div style="margin: 10px;"&gt;
            &lt;input type="text" id="key-input" placeholder="Type something..."&gt;
            &lt;p&gt;Last key pressed: &lt;span id="key-display"&gt;&lt;/span&gt;&lt;/p&gt;
        &lt;/div&gt;
        
        &lt;!-- Form Example --&gt;
        &lt;form id="user-form"&gt;
            &lt;div&gt;
                &lt;label for="name"&gt;Name:&lt;/label&gt;
                &lt;input type="text" id="name" name="name" required&gt;
                &lt;span id="name-error" class="error hidden"&gt;&lt;/span&gt;
            &lt;/div&gt;
            
            &lt;div&gt;
                &lt;label for="email"&gt;Email:&lt;/label&gt;
                &lt;input type="email" id="email" name="email" required&gt;
                &lt;span id="email-error" class="error hidden"&gt;&lt;/span&gt;
            &lt;/div&gt;
            
            &lt;div&gt;
                &lt;label for="age"&gt;Age:&lt;/label&gt;
                &lt;input type="number" id="age" name="age" min="0" max="120"&gt;
            &lt;/div&gt;
            
            &lt;button type="submit"&gt;Submit&lt;/button&gt;
        &lt;/form&gt;
        
        &lt;div id="form-output"&gt;&lt;/div&gt;
    &lt;/div&gt;

    &lt;script&gt;
        // Mouse events
        const mouseArea = document.getElementById('mouse-area');
        const coordinates = document.getElementById('coordinates');
        
        mouseArea.addEventListener('mousemove', function(event) {
            coordinates.textContent = \`\${event.clientX}, \${event.clientY}\`;
        });
        
        mouseArea.addEventListener('click', function(event) {
            this.style.backgroundColor = this.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
        });
        
        mouseArea.addEventListener('dblclick', function() {
            this.style.backgroundColor = 'lightgreen';
        });
        
        // Keyboard events
        const keyInput = document.getElementById('key-input');
        const keyDisplay = document.getElementById('key-display');
        
        keyInput.addEventListener('keydown', function(event) {
            keyDisplay.textContent = \`Key: \${event.key}, Code: \${event.code}\`;
        });
        
        keyInput.addEventListener('keyup', function() {
            // Additional keyup logic if needed
        });
        
        // Form handling
        const userForm = document.getElementById('user-form');
        const formOutput = document.getElementById('form-output');
        
        // Real-time validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        
        nameInput.addEventListener('input', function() {
            if (this.value.length < 2) {
                nameError.textContent = 'Name must be at least 2 characters';
                nameError.classList.remove('hidden');
            } else {
                nameError.classList.add('hidden');
            }
        });
        
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!emailRegex.test(this.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.classList.remove('hidden');
            } else {
                emailError.classList.add('hidden');
            }
        });
        
        // Form submission
        userForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            let isValid = true;
            
            if (!data.name || data.name.length < 2) {
                nameError.textContent = 'Name is required and must be at least 2 characters';
                nameError.classList.remove('hidden');
                isValid = false;
            }
            
            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!data.email || !emailRegex.test(data.email)) {
                emailError.textContent = 'Valid email is required';
                emailError.classList.remove('hidden');
                isValid = false;
            }
            
            if (isValid) {
                // Display success message
                formOutput.innerHTML = \`
                    &lt;div class="success"&gt;
                        &lt;h3&gt;Form Submitted Successfully!&lt;/h3&gt;
                        &lt;p&gt;Name: \${data.name}&lt;/p&gt;
                        &lt;p&gt;Email: \${data.email}&lt;/p&gt;
                        &lt;p&gt;Age: \${data.age || 'Not specified'}&lt;/p&gt;
                    &lt;/div&gt;
                \`;
                
                // Reset form
                this.reset();
                
                // Clear errors
                nameError.classList.add('hidden');
                emailError.classList.add('hidden');
            }
        });
        
        // Event delegation example
        document.addEventListener('click', function(event) {
            if (event.target.matches('button')) {
                console.log('Button clicked:', event.target.textContent);
            }
        });
        
        // Window events
        window.addEventListener('resize', function() {
            console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
        });
        
        window.addEventListener('scroll', function() {
            console.log('Scrolled to:', window.scrollY);
        });
        
        // Prevent context menu
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            alert('Right-click is disabled on this page');
        });
        
        // Custom events (advanced)
        const customEvent = new CustomEvent('userRegistered', {
            detail: { message: 'A new user has been registered' }
        });
        
        // Dispatch custom event
        document.addEventListener('userRegistered', function(event) {
            console.log('Custom event received:', event.detail.message);
        });
        
        // Trigger custom event after form submission
        userForm.addEventListener('submit', function() {
            setTimeout(() => {
                document.dispatchEvent(customEvent);
            }, 1000);
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Events and Forms Practice",
                    content: `
                        <p>Practice event handling and form manipulation:</p>
                        <ol>
                            <li>Create a drag-and-drop interface for reordering items</li>
                            <li>Build a real-time character counter for text inputs</li>
                            <li>Create a custom dropdown menu with keyboard navigation</li>
                            <li>Build a form with complex validation rules</li>
                            <li>Create a drawing application using mouse events</li>
                            <li>Build a keyboard shortcut system for your application</li>
                            <li>Create a file upload interface with preview functionality</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between event.preventDefault() and event.stopPropagation()?",
                    answer: "event.preventDefault() prevents the default browser behavior for that event (like form submission or link navigation). event.stopPropagation() stops the event from bubbling up the DOM tree, preventing parent elements from receiving the event. Use preventDefault() when you want to handle the event completely yourself, and stopPropagation() when you want to contain the event to a specific element."
                },
                {
                    question: "Why is event delegation important for dynamic content?",
                    answer: "Event delegation allows you to handle events for elements that don't exist yet when the page loads. By attaching the event listener to a parent element that does exist, you can handle events from dynamically added child elements. This is more efficient than attaching individual event listeners to each new element and prevents memory leaks from forgotten event listeners."
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