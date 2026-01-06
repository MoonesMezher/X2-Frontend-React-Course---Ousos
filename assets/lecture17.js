// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete JavaScript Mastery - Frontend Foundations",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "functions-scope",
            title: "Functions and Scope",
            content: `
                <h3>What are Functions?</h3>
                <p>Functions are reusable blocks of code that perform specific tasks. They help organize code, avoid repetition, and make programs easier to understand.</p>
                
                <h3>Function Declaration Types:</h3>
                <ul>
                    <li><strong>Function Declaration</strong>: function name() { }</li>
                    <li><strong>Function Expression</strong>: const name = function() { }</li>
                    <li><strong>Arrow Function</strong>: const name = () => { }</li>
                    <li><strong>Immediately Invoked Function Expression (IIFE)</strong>: (function() { })()</li>
                </ul>
                
                <h3>Function Parameters and Return Values:</h3>
                <ul>
                    <li><strong>Parameters</strong>: Variables listed in function definition</li>
                    <li><strong>Arguments</strong>: Actual values passed to function</li>
                    <li><strong>Return statement</strong>: Sends value back from function</li>
                    <li><strong>Default parameters</strong>: Values used if no argument provided</li>
                </ul>
                
                <h3>Understanding Scope:</h3>
                <ul>
                    <li><strong>Global Scope</strong>: Accessible everywhere in code</li>
                    <li><strong>Function Scope</strong>: Accessible only within function</li>
                    <li><strong>Block Scope</strong>: Accessible only within { } blocks (let/const)</li>
                    <li><strong>Lexical Scope</strong>: Inner functions access outer function variables</li>
                </ul>
                
                <h3>Advanced Function Concepts:</h3>
                <ul>
                    <li><strong>Callback Functions</strong>: Functions passed as arguments</li>
                    <li><strong>Higher-Order Functions</strong>: Functions that take other functions as parameters</li>
                    <li><strong>Closures</strong>: Functions that remember their lexical scope</li>
                    <li><strong>Recursion</strong>: Functions that call themselves</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>ما هي الدوال؟</h3>
                    <p>الدوال هي كتل كود قابلة لإعادة الاستخدام تؤدي مهام محددة. تساعد في تنظيم الكود، وتجنب التكرار، وتجعل البرامج أسهل للفهم.</p>
                    
                    <h3>أنواع تصريح الدوال:</h3>
                    <ul>
                        <li><strong>تصريح الدالة</strong>: function name() { }</li>
                        <li><strong>تعبير الدالة</strong>: const name = function() { }</li>
                        <li><strong>الدالة السهمية</strong>: const name = () => { }</li>
                        <li><strong>تعبير الدالة المستدعى فوراً (IIFE)</strong>: (function() { })()</li>
                    </ul>
                    
                    <h3>معاملات الدالة وقيم الإرجاع:</h3>
                    <ul>
                        <li><strong>المعاملات</strong>: المتغيرات المدرجة في تعريف الدالة</li>
                        <li><strong>الوسيطات</strong>: القيم الفعلية الممررة للدالة</li>
                        <li><strong>عبارة return</strong>: ترسل قيمة back من الدالة</li>
                        <li><strong>المعاملات الافتراضية</strong>: القيم المستخدمة إذا لم يتم توفير وسيطة</li>
                    </ul>
                    
                    <h3>فهم النطاق:</h3>
                    <ul>
                        <li><strong>النطاق العام</strong>: يمكن الوصول إليه في كل مكان في الكود</li>
                        <li><strong>نطاق الدالة</strong>: يمكن الوصول إليه فقط داخل الدالة</li>
                        <li><strong>نطاق الكتلة</strong>: يمكن الوصول إليه فقط داخل كتل { } (let/const)</li>
                        <li><strong>النطاق المعجمي</strong>: الدوال الداخلية تصل إلى متغيرات الدالة الخارجية</li>
                    </ul>
                    
                    <h3>مفاهيم الدوال المتقدمة:</h3>
                    <ul>
                        <li><strong>دوال الرد</strong>: الدوال الممررة كوسيطات</li>
                        <li><strong>الدوال ذات الرتبة الأعلى</strong>: الدوال التي تأخذ دوال أخرى كمعاملات</li>
                        <li><strong>الإغلاقات</strong>: الدوال التي تتذكر نطاقها المعجمي</li>
                        <li><strong>التكرار</strong>: الدوال التي تستدعي نفسها</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Functions and Scope Examples",
                    content: `
                        <pre class="code-block">
// Function declaration (hoisted - can be called before declaration)
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression (not hoisted)
const calculateArea = function(width, height) {
    return width * height;
};

// Arrow function (not hoisted, no 'this' binding)
const multiply = (a, b) => a * b;

// Arrow function with multiple statements
const createUser = (name, age) => {
    const user = {
        name: name,
        age: age,
        isAdult: age >= 18
    };
    return user;
};

// Default parameters
function introduce(name = "Guest", age = 0) {
    return \`I'm \${name} and I'm \${age} years old\`;
}

// Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Scope examples
let globalVar = "I'm global";

function scopeDemo() {
    let functionVar = "I'm in function scope";
    
    if (true) {
        let blockVar = "I'm in block scope";
        console.log(globalVar);        // Accessible
        console.log(functionVar);      // Accessible
        console.log(blockVar);         // Accessible
    }
    
    console.log(globalVar);            // Accessible
    console.log(functionVar);          // Accessible
    // console.log(blockVar);         // Error: not accessible
}

// Closure example
function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Callback function example
function processUserInput(callback) {
    const name = "John";
    callback(name);
}

processUserInput(function(name) {
    console.log("Hello, " + name);
});

// Higher-order function example
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Recursive function
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Functions Practice",
                    content: `
                        <p>Practice creating and using functions:</p>
                        <ol>
                            <li>Create functions using all declaration types (declaration, expression, arrow)</li>
                            <li>Write functions that take parameters and return values</li>
                            <li>Create functions with default parameters</li>
                            <li>Practice scope by creating variables in different scopes</li>
                            <li>Create a closure that maintains state</li>
                            <li>Write a recursive function to solve a problem</li>
                            <li>Create higher-order functions and use callbacks</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What is hoisting in JavaScript?",
                    answer: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution. Function declarations are fully hoisted (can be called before declaration), while var variables are hoisted but initialized as undefined. let and const variables are hoisted but not initialized (temporal dead zone). Function expressions and arrow functions are not hoisted."
                },
                {
                    question: "What are closures and why are they useful?",
                    answer: "Closures are functions that remember the environment in which they were created, even after that environment has exited. They're useful for: 1) Creating private variables, 2) Maintaining state between function calls, 3) Implementing function factories, 4) Event handlers and callbacks that need access to outer scope variables."
                }
            ]
        },
        {
            id: "arrays-objects",
            title: "Arrays and Objects - Data Structures",
            content: `
                <h3>Arrays - Ordered Collections:</h3>
                <p>Arrays are used to store multiple values in a single variable. They maintain order and can contain mixed data types.</p>
                
                <h3>Creating and Accessing Arrays:</h3>
                <ul>
                    <li><strong>Literal syntax</strong>: const arr = [1, 2, 3]</li>
                    <li><strong>Constructor</strong>: const arr = new Array(1, 2, 3)</li>
                    <li><strong>Access elements</strong>: arr[0] (zero-based indexing)</li>
                    <li><strong>Array length</strong>: arr.length</li>
                </ul>
                
                <h3>Common Array Methods:</h3>
                <ul>
                    <li><strong>push/pop</strong>: Add/remove from end</li>
                    <li><strong>shift/unshift</strong>: Add/remove from beginning</li>
                    <li><strong>slice</strong>: Copy portion of array</li>
                    <li><strong>splice</strong>: Add/remove elements at position</li>
                    <li><strong>concat</strong>: Combine arrays</li>
                    <li><strong>indexOf/lastIndexOf</strong>: Find element position</li>
                </ul>
                
                <h3>Iteration Methods:</h3>
                <ul>
                    <li><strong>forEach</strong>: Execute function for each element</li>
                    <li><strong>map</strong>: Transform each element</li>
                    <li><strong>filter</strong>: Create new array with filtered elements</li>
                    <li><strong>reduce</strong>: Reduce array to single value</li>
                    <li><strong>find/findIndex</strong>: Find element that matches condition</li>
                    <li><strong>some/every</strong>: Check if some/all elements meet condition</li>
                </ul>
                
                <h3>Objects - Key-Value Collections:</h3>
                <p>Objects store collections of key-value pairs. They're perfect for representing real-world entities.</p>
                
                <h3>Working with Objects:</h3>
                <ul>
                    <li><strong>Object literal</strong>: const obj = { key: value }</li>
                    <li><strong>Access properties</strong>: obj.key or obj["key"]</li>
                    <li><strong>Add properties</strong>: obj.newKey = value</li>
                    <li><strong>Delete properties</strong>: delete obj.key</li>
                    <li><strong>Check existence</strong>: "key" in obj or obj.hasOwnProperty("key")</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>المصفوفات - المجموعات المرتبة:</h3>
                    <p>تستخدم المصفوفات لتخزين قيم متعددة في متغير واحد. تحافظ على الترتيب ويمكن أن تحتوي على أنواع بيانات مختلطة.</p>
                    
                    <h3>إنشاء المصفوفات والوصول إليها:</h3>
                    <ul>
                        <li><strong>بناء الجملة الحرفي</strong>: const arr = [1, 2, 3]</li>
                        <li><strong>المنشئ</strong>: const arr = new Array(1, 2, 3)</li>
                        <li><strong>الوصول إلى العناصر</strong>: arr[0] (فهرسة قائمة على الصفر)</li>
                        <li><strong>طول المصفوفة</strong>: arr.length</li>
                    </ul>
                    
                    <h3>طرق المصفوفة الشائعة:</h3>
                    <ul>
                        <li><strong>push/pop</strong>: أضف/أزل من النهاية</li>
                        <li><strong>shift/unshift</strong>: أضف/أزل من البداية</li>
                        <li><strong>slice</strong>: انسخ جزءًا من المصفوفة</li>
                        <li><strong>splice</strong>: أضف/أزل العناصر في موضع</li>
                        <li><strong>concat</strong>: اجمع المصفوفات</li>
                        <li><strong>indexOf/lastIndexOf</strong>: ابحث عن موضع العنصر</li>
                    </ul>
                    
                    <h3>طرق التكرار:</h3>
                    <ul>
                        <li><strong>forEach</strong>: نفذ دالة لكل عنصر</li>
                        <li><strong>map</strong>: حول كل عنصر</li>
                        <li><strong>filter</strong>: أنشئ مصفوفة جديدة بعناصر filtered</li>
                        <li><strong>reduce</strong>: قلل المصفوفة إلى قيمة واحدة</li>
                        <li><strong>find/findIndex</strong>: ابحث عن عنصر يطابق الشرط</li>
                        <li><strong>some/every</strong>: تحقق إذا كان بعض/كل العناصر تفي بالشرط</li>
                    </ul>
                    
                    <h3>الكائنات - مجموعات المفتاح-القيمة:</h3>
                    <p>تخزن الكائنات مجموعات من أزواج المفتاح-القيمة. إنها مثالية لتمثيل الكيانات في العالم الحقيقي.</p>
                    
                    <h3>العمل مع الكائنات:</h3>
                    <ul>
                        <li><strong>الكائن الحرفي</strong>: const obj = { key: value }</li>
                        <li><strong>الوصول إلى الخصائص</strong>: obj.key أو obj["key"]</li>
                        <li><strong>أضف الخصائص</strong>: obj.newKey = value</li>
                        <li><strong>احذف الخصائص</strong>: delete obj.key</li>
                        <li><strong>تحقق من الوجود</strong>: "key" in obj أو obj.hasOwnProperty("key")</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Arrays and Objects Examples",
                    content: `
                        <pre class="code-block">
// Array creation and basic operations
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, null];

// Array methods
fruits.push("grape");           // Add to end: ["apple", "banana", "orange", "grape"]
fruits.pop();                   // Remove from end: ["apple", "banana", "orange"]
fruits.unshift("strawberry");   // Add to start: ["strawberry", "apple", "banana", "orange"]
fruits.shift();                 // Remove from start: ["apple", "banana", "orange"]

// Array iteration methods
const doubled = numbers.map(num => num * 2);        // [2, 4, 6, 8, 10]
const evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]
const sum = numbers.reduce((total, num) => total + num, 0); // 15
const hasEven = numbers.some(num => num % 2 === 0); // true
const allEven = numbers.every(num => num % 2 === 0); // false

// Finding elements
console.log(fruits.indexOf("banana"));    // 1
console.log(fruits.includes("apple"));    // true
console.log(numbers.find(num => num > 3)); // 4

// Object creation and operations
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "swimming"],
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    // Method (function in object)
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    // Shorthand method syntax (ES6)
    greet() {
        return "Hello, I'm " + this.firstName;
    }
};

// Accessing object properties
console.log(person.firstName);           // "John"
console.log(person["lastName"]);         // "Doe"
console.log(person.address.city);        // "Anytown"
console.log(person.getFullName());       // "John Doe"

// Modifying objects
person.age = 31;                        // Update property
person.email = "john@example.com";      // Add new property
delete person.isStudent;                // Delete property

// Object methods
const keys = Object.keys(person);       // ["firstName", "lastName", "age", ...]
const values = Object.values(person);   // ["John", "Doe", 31, ...]
const entries = Object.entries(person); // [["firstName", "John"], ["lastName", "Doe"], ...]

// Checking properties
console.log("firstName" in person);     // true
console.log(person.hasOwnProperty("age")); // true

// Object iteration
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ": " + person[key]);
    }
}

// Array of objects (common pattern)
const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
];

// Find user by id
const user = users.find(u => u.id === 2); // { id: 2, name: "Bob", age: 30 }

// Get array of names
const userNames = users.map(u => u.name); // ["Alice", "Bob", "Charlie"]

// Filter users by age
const youngUsers = users.filter(u => u.age < 30); // [{ id: 1, name: "Alice", age: 25 }]

// Destructuring arrays and objects (ES6)
const [firstFruit, secondFruit] = fruits; // firstFruit = "apple", secondFruit = "banana"
const { firstName, age } = person;        // firstName = "John", age = 31

// Spread operator with arrays and objects
const newFruits = [...fruits, "mango"];   // ["apple", "banana", "orange", "mango"]
const updatedPerson = { ...person, age: 32 }; // Copy with updated age
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Arrays and Objects Practice",
                    content: `
                        <p>Practice working with arrays and objects:</p>
                        <ol>
                            <li>Create arrays with different data types and practice basic operations</li>
                            <li>Use array methods (map, filter, reduce, forEach) to transform data</li>
                            <li>Create objects representing real-world entities</li>
                            <li>Practice accessing, adding, and modifying object properties</li>
                            <li>Create an array of objects and practice filtering and mapping</li>
                            <li>Use object methods (keys, values, entries) to work with objects</li>
                            <li>Practice destructuring arrays and objects</li>
                            <li>Use spread operator to copy and combine arrays/objects</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between array methods that mutate vs return new arrays?",
                    answer: "Mutating methods change the original array (push, pop, shift, unshift, splice, sort, reverse). Non-mutating methods return a new array without changing the original (map, filter, slice, concat, reduce). It's generally better to use non-mutating methods to avoid unexpected side effects and make code more predictable."
                },
                {
                    question: "When should I use arrays vs objects?",
                    answer: "Use arrays when you need an ordered collection of items, usually of the same type, and you need to maintain order. Use objects when you need to store key-value pairs representing properties of an entity, and the order doesn't matter. Arrays are for lists, objects are for things with properties."
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