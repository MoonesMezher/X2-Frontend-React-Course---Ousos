// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete JavaScript Mastery - Frontend Foundations",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
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
        },
        {
            id: "strings-numbers-booleans",
            title: "Working with Strings, Numbers, and Booleans",
            content: `
                <h3>String Manipulation</h3>
                <p>Strings are sequences of characters used to represent text. JavaScript provides many methods to work with strings.</p>
                
                <h3>Common String Methods:</h3>
                <ul>
                    <li><strong>length</strong>: Get string length</li>
                    <li><strong>toUpperCase() / toLowerCase()</strong>: Change case</li>
                    <li><strong>trim()</strong>: Remove whitespace from ends</li>
                    <li><strong>includes()</strong>: Check if string contains substring</li>
                    <li><strong>startsWith() / endsWith()</strong>: Check beginning/end</li>
                    <li><strong>slice() / substring()</strong>: Extract parts of string</li>
                    <li><strong>split()</strong>: Split string into array</li>
                    <li><strong>replace()</strong>: Replace parts of string</li>
                </ul>
                
                <h3>Number Operations and Methods:</h3>
                <ul>
                    <li><strong>Math operations</strong>: +, -, *, /, %, **</li>
                    <li><strong>Math object</strong>: Math.round(), Math.floor(), Math.ceil()</li>
                    <li><strong>parseInt() / parseFloat()</strong>: Convert strings to numbers</li>
                    <li><strong>Number()</strong>: Convert to number</li>
                    <li><strong>toFixed()</strong>: Format decimal places</li>
                    <li><strong>isNaN()</strong>: Check if value is Not-a-Number</li>
                </ul>
                
                <h3>Boolean Logic and Operations:</h3>
                <ul>
                    <li><strong>Truthy and Falsy values</strong>: All values have inherent boolean meaning</li>
                    <li><strong>Logical operators</strong>: &&, ||, !</li>
                    <li><strong>Comparison operators</strong>: ==, ===, !=, !==, >, <, >=, <=</li>
                    <li><strong>Boolean conversion</strong>: Using Boolean() or !! operator</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>التعامل مع النصوص</h3>
                    <p>النصوص هي تسلسلات من الأحرف تستخدم لتمثيل النص. توفر JavaScript العديد من الطرق للعمل مع النصوص.</p>
                    
                    <h3>الطرق الشائعة للنصوص:</h3>
                    <ul>
                        <li><strong>length</strong>: الحصول على طول النص</li>
                        <li><strong>toUpperCase() / toLowerCase()</strong>: تغيير حالة الأحرف</li>
                        <li><strong>trim()</strong>: إزالة المسافات من الأطراف</li>
                        <li><strong>includes()</strong>: التحقق إذا كان النص يحتوي على جزء معين</li>
                        <li><strong>startsWith() / endsWith()</strong>: التحقق من البداية/النهاية</li>
                        <li><strong>slice() / substring()</strong>: استخراج أجزاء من النص</li>
                        <li><strong>split()</strong>: تقسيم النص إلى مصفوفة</li>
                        <li><strong>replace()</strong>: استبدال أجزاء من النص</li>
                    </ul>
                    
                    <h3>عمليات وطرق الأرقام:</h3>
                    <ul>
                        <li><strong>العمليات الحسابية</strong>: +, -, *, /, %, **</li>
                        <li><strong>كائن Math</strong>: Math.round(), Math.floor(), Math.ceil()</li>
                        <li><strong>parseInt() / parseFloat()</strong>: تحويل النصوص إلى أرقام</li>
                        <li><strong>Number()</strong>: التحويل إلى رقم</li>
                        <li><strong>toFixed()</strong>: تنسيق المنازل العشرية</li>
                        <li><strong>isNaN()</strong>: التحقق إذا كانت القيمة ليست رقمًا</li>
                    </ul>
                    
                    <h3>المنطق القيمي والعمليات:</h3>
                    <ul>
                        <li><strong>القيم الحقيقية والزائفة</strong>: جميع القيم لها معنى منطقي inherent</li>
                        <li><strong>العوامل المنطقية</strong>: &&, ||, !</li>
                        <li><strong>عوامل المقارنة</strong>: ==, ===, !=, !==, >, <, >=, <=</li>
                        <li><strong>التحويل المنطقي</strong>: استخدام Boolean() أو عامل !!</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "String, Number, and Boolean Examples",
                    content: `
                        <pre class="code-block">
// String examples
let text = "  Hello JavaScript World!  ";
console.log(text.length);           // 25
console.log(text.trim());           // "Hello JavaScript World!"
console.log(text.toUpperCase());    // "  HELLO JAVASCRIPT WORLD!  "
console.log(text.includes("Java")); // true
console.log(text.startsWith("  He")); // true
console.log(text.slice(2, 7));      // "Hello"
console.log(text.split(" "));       // ["", "", "Hello", "JavaScript", "World!", "", ""]
console.log(text.replace("World", "Universe")); // "  Hello JavaScript Universe!  "

// Number examples
let num = 3.14159;
console.log(Math.round(num));       // 3
console.log(Math.floor(num));       // 3
console.log(Math.ceil(num));        // 4
console.log(num.toFixed(2));        // "3.14"

let price = "19.99";
console.log(parseFloat(price));     // 19.99
console.log(parseInt(price));       // 19
console.log(Number(price));         // 19.99

console.log(isNaN("hello"));        // true
console.log(isNaN("123"));          // false

// Boolean examples
console.log(Boolean("hello"));      // true
console.log(Boolean(""));           // false
console.log(Boolean(0));            // false
console.log(Boolean(1));            // true
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false

// Using !! for boolean conversion
console.log(!!"hello");             // true
console.log(!!0);                   // false

// String template literals
let name = "Alice";
let age = 25;
let message = \`\${name} is \${age} years old and will be \${age + 1} next year.\`;
console.log(message); // "Alice is 25 years old and will be 26 next year."
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "String, Number, Boolean Practice",
                    content: `
                        <p>Practice working with strings, numbers, and booleans:</p>
                        <ol>
                            <li>Create a string and practice using different string methods</li>
                            <li>Convert between strings and numbers using different methods</li>
                            <li>Practice mathematical operations and using Math object methods</li>
                            <li>Test different values for truthiness and falsiness</li>
                            <li>Create a function that validates email format using string methods</li>
                            <li>Build a simple calculator that handles decimal numbers</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between slice() and substring() for strings?",
                    answer: "Both extract parts of strings, but slice() can accept negative indexes (counting from the end), while substring() treats negative indexes as 0. Also, if start > end, substring() will swap them, while slice() returns an empty string. Generally, slice() is more commonly used."
                },
                {
                    question: "When should I use parseInt() vs Number()?",
                    answer: "Use parseInt() when you want to convert a string to an integer and ignore decimal parts. It also allows you to specify a radix (number base). Use Number() when you want strict conversion that includes decimals and will return NaN if the entire string cannot be converted to a number."
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