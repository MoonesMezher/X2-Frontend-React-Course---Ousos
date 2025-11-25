// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete JavaScript Mastery - Frontend Foundations",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "js-basics",
            title: "JavaScript Basics - Getting Started",
            content: `
                <h3>What is JavaScript?</h3>
                <p>JavaScript is a programming language that makes web pages interactive and dynamic. It runs in web browsers and can manipulate webpage content in real-time.</p>
                
                <h3>Setting Up Your Environment:</h3>
                <ul>
                    <li><strong>Web Browser</strong>: Chrome, Firefox, or Edge for testing</li>
                    <li><strong>Code Editor</strong>: VS Code with Live Server extension</li>
                    <li><strong>Browser Developer Tools</strong>: Press F12 to open</li>
                </ul>
                
                <h3>Your First JavaScript Code:</h3>
                <ul>
                    <li>Create an HTML file with script tag</li>
                    <li>Use console.log() to see output</li>
                    <li>Understand how JavaScript executes</li>
                </ul>
                
                <h3>Basic Syntax Rules:</h3>
                <ul>
                    <li>Statements end with semicolons (optional but recommended)</li>
                    <li>Case sensitive - myVar ≠ myvar</li>
                    <li>Comments for documentation</li>
                    <li>Code blocks with { curly braces }</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>ما هي JavaScript؟</h3>
                    <p>JavaScript هي لغة برمجة تجعل صفحات الويب تفاعلية وديناميكية. تعمل في متصفحات الويب ويمكنها معالجة محتوى صفحة الويب في الوقت الفعلي.</p>
                    
                    <h3>إعداد بيئتك:</h3>
                    <ul>
                        <li><strong>متصفح الويب</strong>: Chrome, Firefox, أو Edge للاختبار</li>
                        <li><strong>محرر الأكواد</strong>: VS Code مع إضافة Live Server</li>
                        <li><strong>أداة مطوري المتصفح</strong>: اضغط F12 لفتحها</li>
                    </ul>
                    
                    <h3>أول كود JavaScript خاص بك:</h3>
                    <ul>
                        <li>أنشئ ملف HTML مع وسم script</li>
                        <li>استخدم console.log() لرؤية المخرجات</li>
                        <li>افهم كيف تنفذ JavaScript</li>
                    </ul>
                    
                    <h3>قواعد بناء الجملة الأساسية:</h3>
                    <ul>
                        <li>تنتهي العبارات بفواصل منقوطة (اختياري ولكن موصى به)</li>
                        <li>حساس لحالة الأحرف - myVar ≠ myvar</li>
                        <li>التعليقات للتوثيق</li>
                        <li>كتل الكود باستخدام { الأقواس المعقوفة }</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Basic JavaScript Setup",
                    content: `
                        <pre class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;My First JavaScript&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello JavaScript!&lt;/h1&gt;
    
    &lt;script&gt;
        // This is a single-line comment
        /* This is a multi-line comment */
        
        // Your first JavaScript code
        console.log("Hello, World!");
        alert("Welcome to JavaScript!");
        
        // Display in HTML page
        document.write("&lt;p&gt;This is created with JavaScript&lt;/p&gt;");
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Basic Setup Practice",
                    content: `
                        <p>Practice setting up and running JavaScript:</p>
                        <ol>
                            <li>Create an HTML file with basic structure</li>
                            <li>Add a script tag and write console.log messages</li>
                            <li>Open the file in browser and check Developer Tools console</li>
                            <li>Try using alert() to show popup messages</li>
                            <li>Use document.write to add content to the page</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Where does JavaScript code run?",
                    answer: "JavaScript code runs in the user's web browser. When a web page loads, the browser's JavaScript engine executes the JavaScript code. You can also run JavaScript on servers using Node.js, but for frontend development, it runs in the browser."
                },
                {
                    question: "What's the difference between console.log and alert?",
                    answer: "console.log() displays messages in the browser's developer console (press F12), which is used for debugging. alert() shows a popup dialog box to the user, which interrupts their browsing. Use console.log for development and debugging, and alert for important user notifications."
                }
            ]
        },
        {
            id: "variables-data-types",
            title: "Variables and Data Types",
            content: `
                <h3>What are Variables?</h3>
                <p>Variables are containers that store data values. Think of them as labeled boxes where you can put information to use later.</p>
                
                <h3>Declaring Variables:</h3>
                <ul>
                    <li><strong>var</strong>: Function-scoped, can be redeclared</li>
                    <li><strong>let</strong>: Block-scoped, cannot be redeclared</li>
                    <li><strong>const</strong>: Block-scoped, cannot be reassigned</li>
                </ul>
                
                <h3>JavaScript Data Types:</h3>
                <ul>
                    <li><strong>String</strong>: Text data - "hello", 'world'</li>
                    <li><strong>Number</strong>: Numeric data - 10, 3.14, -5</li>
                    <li><strong>Boolean</strong>: True or false values</li>
                    <li><strong>Undefined</strong>: Variable declared but no value</li>
                    <li><strong>Null</strong>: Intentional empty value</li>
                    <li><strong>Object</strong>: Complex data structures</li>
                    <li><strong>Array</strong>: List of values</li>
                </ul>
                
                <h3>Naming Conventions:</h3>
                <ul>
                    <li>Use camelCase for variables: firstName, totalPrice</li>
                    <li>Use descriptive names</li>
                    <li>Cannot start with numbers</li>
                    <li>Avoid reserved keywords</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>ما هي المتغيرات؟</h3>
                    <p>المتغيرات هي حاويات تخزن قيم البيانات. فكر فيها كصناديق موسومة حيث يمكنك وضع المعلومات لاستخدامها لاحقًا.</p>
                    
                    <h3>تصريح المتغيرات:</h3>
                    <ul>
                        <li><strong>var</strong>: نطاق الدالة، يمكن إعادة التصريح بها</li>
                        <li><strong>let</strong>: نطاق الكتلة، لا يمكن إعادة التصريح بها</li>
                        <li><strong>const</strong>: نطاق الكتلة، لا يمكن إعادة التعيين</li>
                    </ul>
                    
                    <h3>أنواع البيانات في JavaScript:</h3>
                    <ul>
                        <li><strong>النص (String)</strong>: بيانات نصية - "hello", 'world'</li>
                        <li><strong>الرقم (Number)</strong>: بيانات رقمية - 10, 3.14, -5</li>
                        <li><strong>القيمة المنطقية (Boolean)</strong>: قيم صحيحة أو خاطئة</li>
                        <li><strong>غير معرّف (Undefined)</strong>: متغير مُصرّح به ولكن بدون قيمة</li>
                        <li><strong>فارغ (Null)</strong>: قيمة فارغة متعمدة</li>
                        <li><strong>كائن (Object)</strong>: هياكل بيانات معقدة</li>
                        <li><strong>مصفوفة (Array)</strong>: قائمة من القيم</li>
                    </ul>
                    
                    <h3>اتفاقيات التسمية:</h3>
                    <ul>
                        <li>استخدم camelCase للمتغيرات: firstName, totalPrice</li>
                        <li>استخدم أسماء وصفيّة</li>
                        <li>لا يمكن البدء بأرقام</li>
                        <li>تجنب الكلمات المحجوزة</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Variables and Data Types Examples",
                    content: `
                        <pre class="code-block">
// Variable declarations
var oldVariable = "I'm function scoped";
let modernVariable = "I'm block scoped";
const constantVariable = "I cannot be changed";

// Data type examples
let userName = "John Doe";          // String
let userAge = 25;                   // Number
let isStudent = true;               // Boolean
let notAssigned;                    // Undefined
let emptyValue = null;              // Null

// Working with variables
let score = 0;
score = 10;                         // Reassigning let variable
// constantVariable = "new value";  // Error: cannot reassign const

// Type checking
console.log(typeof userName);       // "string"
console.log(typeof userAge);        // "number"
console.log(typeof isStudent);      // "boolean"
console.log(typeof notAssigned);    // "undefined"
console.log(typeof emptyValue);     // "object" (this is a JavaScript quirk)

// String operations
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;  // String concatenation
let greeting = \`Hello, \${firstName}!\`;     // Template literal (ES6)

// Number operations
let x = 10;
let y = 3;
console.log(x + y);  // 13
console.log(x - y);  // 7
console.log(x * y);  // 30
console.log(x / y);  // 3.333...
console.log(x % y);  // 1 (remainder)

// Boolean operations
let isAdult = userAge >= 18;  // true
let canVote = isAdult && true; // true
let isTeen = userAge >= 13 && userAge <= 19; // false
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Variables Practice",
                    content: `
                        <p>Practice working with variables and data types:</p>
                        <ol>
                            <li>Declare variables using var, let, and const</li>
                            <li>Create variables of different data types</li>
                            <li>Perform arithmetic operations with numbers</li>
                            <li>Concatenate strings using + operator and template literals</li>
                            <li>Practice reassigning let variables and trying to reassign const</li>
                            <li>Use typeof operator to check data types</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should I use const vs let?",
                    answer: "Use const by default for variables that won't be reassigned. This makes your code more predictable and prevents accidental reassignment. Use let only when you know the variable needs to be reassigned later. Avoid using var in modern JavaScript as it has function scope and can lead to unexpected behavior."
                },
                {
                    question: "What's the difference between null and undefined?",
                    answer: "undefined means a variable has been declared but hasn't been assigned a value. null is an assignment value that represents intentional absence of any object value. undefined is automatically set by JavaScript, while null is explicitly set by the programmer to indicate 'no value'."
                }
            ]
        },
        {
            id: "operators-control-flow",
            title: "Operators and Control Flow",
            content: `
                <h3>Types of Operators:</h3>
                <p>Operators perform operations on variables and values. They are the building blocks of logic in programming.</p>
                
                <h3>Arithmetic Operators:</h3>
                <ul>
                    <li><strong>+</strong>: Addition</li>
                    <li><strong>-</strong>: Subtraction</li>
                    <li><strong>*</strong>: Multiplication</li>
                    <li><strong>/</strong>: Division</li>
                    <li><strong>%</strong>: Modulus (remainder)</li>
                    <li><strong>**</strong>: Exponentiation</li>
                    <li><strong>++</strong>: Increment</li>
                    <li><strong>--</strong>: Decrement</li>
                </ul>
                
                <h3>Comparison Operators:</h3>
                <ul>
                    <li><strong>==</strong>: Equal to (value only)</li>
                    <li><strong>===</strong>: Equal to (value and type)</li>
                    <li><strong>!=</strong>: Not equal (value only)</li>
                    <li><strong>!==</strong>: Not equal (value and type)</li>
                    <li><strong>></strong>: Greater than</li>
                    <li><strong><</strong>: Less than</li>
                    <li><strong>>=</strong>: Greater than or equal</li>
                    <li><strong><=</strong>: Less than or equal</li>
                </ul>
                
                <h3>Logical Operators:</h3>
                <ul>
                    <li><strong>&&</strong>: AND - both conditions must be true</li>
                    <li><strong>||</strong>: OR - at least one condition must be true</li>
                    <li><strong>!</strong>: NOT - reverses the boolean value</li>
                </ul>
                
                <h3>Control Flow Statements:</h3>
                <ul>
                    <li><strong>if/else</strong>: Conditional execution</li>
                    <li><strong>switch</strong>: Multiple condition checks</li>
                    <li><strong>for loop</strong>: Repeat code specific number of times</li>
                    <li><strong>while loop</strong>: Repeat while condition is true</li>
                    <li><strong>do while</strong>: Execute at least once, then check condition</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>أنواع العوامل:</h3>
                    <p>تنفذ العمليات على المتغيرات والقيم. وهي اللبنات الأساسية للمنطق في البرمجة.</p>
                    
                    <h3>العوامل الحسابية:</h3>
                    <ul>
                        <li><strong>+</strong>: الجمع</li>
                        <li><strong>-</strong>: الطرح</li>
                        <li><strong>*</strong>: الضرب</li>
                        <li><strong>/</strong>: القسمة</li>
                        <li><strong>%</strong>: المعامل (الباقي)</li>
                        <li><strong>**</strong>: الأس</li>
                        <li><strong>++</strong>: الزيادة</li>
                        <li><strong>--</strong>: النقصان</li>
                    </ul>
                    
                    <h3>عوامل المقارنة:</h3>
                    <ul>
                        <li><strong>==</strong>: يساوي (القيمة فقط)</li>
                        <li><strong>===</strong>: يساوي (القيمة والنوع)</li>
                        <li><strong>!=</strong>: لا يساوي (القيمة فقط)</li>
                        <li><strong>!==</strong>: لا يساوي (القيمة والنوع)</li>
                        <li><strong>></strong>: أكبر من</li>
                        <li><strong><</strong>: أقل من</li>
                        <li><strong>>=</strong>: أكبر من أو يساوي</li>
                        <li><strong><=</strong>: أقل من أو يساوي</li>
                    </ul>
                    
                    <h3>العوامل المنطقية:</h3>
                    <ul>
                        <li><strong>&&</strong>: AND - يجب أن تكون كلا الشرطين صحيحين</li>
                        <li><strong>||</strong>: OR - يجب أن يكون شرط واحد على الأقل صحيحًا</li>
                        <li><strong>!</strong>: NOT - يعكس القيمة المنطقية</li>
                    </ul>
                    
                    <h3>عبارات التحكم في التدفق:</h3>
                    <ul>
                        <li><strong>if/else</strong>: التنفيذ الشرطي</li>
                        <li><strong>switch</strong>: فحوصات متعددة للشروط</li>
                        <li><strong>for loop</strong>: كرر الكود عدد محدد من المرات</li>
                        <li><strong>while loop</strong>: كرر بينما الشرط صحيح</li>
                        <li><strong>do while</strong>: نفذ مرة واحدة على الأقل، ثم تحقق من الشرط</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Control Flow Examples",
                    content: `
                        <pre class="code-block">
// If/else statements
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
} else if (age >= 13) {
    console.log("You are a teenager");
} else {
    console.log("You are a child");
}

// Switch statement
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    default:
        dayName = "Weekend";
}

console.log("Today is " + dayName);

// For loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

// While loop
let count = 0;
while (count < 3) {
    console.log("Count: " + count);
    count++;
}

// Do while loop
let number = 1;
do {
    console.log("Number: " + number);
    number++;
} while (number <= 3);

// Logical operators in conditions
let temperature = 25;
let isSunny = true;

if (temperature > 20 && isSunny) {
    console.log("Great weather for a walk!");
}

if (temperature < 10 || temperature > 30) {
    console.log("Extreme weather conditions");
}

// Ternary operator (short if/else)
let isMember = true;
let discount = isMember ? 0.1 : 0;
console.log("Discount: " + (discount * 100) + "%");

// Comparison examples
console.log(5 == "5");   // true (value same)
console.log(5 === "5");  // false (type different)
console.log(5 != "5");   // false 
console.log(5 !== "5");  // true
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Control Flow Practice",
                    content: `
                        <p>Practice using operators and control flow:</p>
                        <ol>
                            <li>Create a program that checks if a number is even or odd</li>
                            <li>Build a simple calculator that can add, subtract, multiply, and divide</li>
                            <li>Create a grading system that converts scores to letter grades</li>
                            <li>Write a loop that prints numbers 1-10</li>
                            <li>Create a program that determines if a year is a leap year</li>
                            <li>Build a simple login system with username and password check</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between == and ===?",
                    answer: "== (loose equality) checks if values are equal after type conversion. === (strict equality) checks if values are equal without type conversion. Always use === to avoid unexpected type coercion. For example: 5 == '5' is true, but 5 === '5' is false."
                },
                {
                    question: "When should I use a for loop vs while loop?",
                    answer: "Use for loops when you know how many times you want to iterate (like looping through an array). Use while loops when you want to continue looping as long as a condition is true, but you don't know exactly how many iterations you'll need. Do-while loops guarantee at least one execution before checking the condition."
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