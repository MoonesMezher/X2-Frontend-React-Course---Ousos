// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete JavaScript Mastery - Frontend Foundations",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "destructuring-falsy-truthy",
            title: "Destructuring, Falsy & Truthy Values",
            content: `
                <h3>Destructuring Assignment</h3>
                <p>Destructuring allows you to extract values from arrays or properties from objects into distinct variables.</p>
                
                <h3>Array Destructuring:</h3>
                <ul>
                    <li>Extract values by position</li>
                    <li>Skip elements with empty commas</li>
                    <li>Use default values</li>
                    <li>Rest pattern to collect remaining elements</li>
                    <li>Swap variables easily</li>
                </ul>
                
                <h3>Object Destructuring:</h3>
                <ul>
                    <li>Extract properties by name</li>
                    <li>Use different variable names</li>
                    <li>Nested destructuring</li>
                    <li>Default values for missing properties</li>
                    <li>Rest properties</li>
                </ul>
                
                <h3>Falsy and Truthy Values</h3>
                <p>In JavaScript, values are inherently 'truthy' or 'falsy' when evaluated in a boolean context.</p>
                
                <h3>Falsy Values (become false):</h3>
                <ul>
                    <li><strong>false</strong>: The boolean false</li>
                    <li><strong>0</strong>: The number zero</li>
                    <li><strong>""</strong>: Empty string</li>
                    <li><strong>null</strong>: No value</li>
                    <li><strong>undefined</strong>: Variable not defined</li>
                    <li><strong>NaN</strong>: Not a Number</li>
                </ul>
                
                <h3>Truthy Values (become true):</h3>
                <ul>
                    <li>Everything that's not falsy!</li>
                    <li><strong>true</strong>: The boolean true</li>
                    <li><strong>1</strong>, any non-zero number</li>
                    <li><strong>"hello"</strong>, any non-empty string</li>
                    <li><strong>[]</strong>: Empty array</li>
                    <li><strong>{}</strong>: Empty object</li>
                    <li><strong>function(){}</strong>: Functions</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>التعيين بالتفكيك</h3>
                    <p>يسمح التفكيك باستخراج القيم من المصفوفات أو الخصائص من الكائنات إلى متغيرات منفصلة.</p>
                    
                    <h3>تفكيك المصفوفات:</h3>
                    <ul>
                        <li>استخراج القيم حسب الموضع</li>
                        <li>تخطي العناصر بفواصل فارغة</li>
                        <li>استخدام القيم الافتراضية</li>
                        <li>نمط الباقي لجمع العناصر المتبقية</li>
                        <li>تبديل المتغيرات بسهولة</li>
                    </ul>
                    
                    <h3>تفكيك الكائنات:</h3>
                    <ul>
                        <li>استخراج الخصائص حسب الاسم</li>
                        <li>استخدام أسماء متغيرات مختلفة</li>
                        <li>التفكيك المتداخل</li>
                        <li>القيم الافتراضية للخصائص المفقودة</li>
                        <li>خصائص الباقي</li>
                    </ul>
                    
                    <h3>القيم الزائفة والحقيقية</h3>
                    <p>في JavaScript، القيم تكون بشكل inherent 'حقيقية' أو 'زائفة' عند تقييمها في سياق منطقي.</p>
                    
                    <h3>القيم الزائفة (تصبح false):</h3>
                    <ul>
                        <li><strong>false</strong>: القيمة المنطقية false</li>
                        <li><strong>0</strong>: الرقم صفر</li>
                        <li><strong>""</strong>: نص فارغ</li>
                        <li><strong>null</strong>: لا قيمة</li>
                        <li><strong>undefined</strong>: متغير غير معرّف</li>
                        <li><strong>NaN</strong>: ليس رقمًا</li>
                    </ul>
                    
                    <h3>القيم الحقيقية (تصبح true):</h3>
                    <ul>
                        <li>كل شيء ليس زائفًا!</li>
                        <li><strong>true</strong>: القيمة المنطقية true</li>
                        <li><strong>1</strong>, أي رقم غير صفر</li>
                        <li><strong>"hello"</strong>, أي نص غير فارغ</li>
                        <li><strong>[]</strong>: مصفوفة فارغة</li>
                        <li><strong>{}</strong>: كائن فارغ</li>
                        <li><strong>function(){}</strong>: الدوال</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Destructuring and Truthy/Falsy Examples",
                    content: `
                        <pre class="code-block">
// Array destructuring
let colors = ["red", "green", "blue", "yellow"];
let [firstColor, secondColor] = colors;
console.log(firstColor);  // "red"
console.log(secondColor); // "green"

// Skipping elements
let [,, thirdColor] = colors;
console.log(thirdColor);  // "blue"

// Default values
let numbers = [1];
let [a, b = 10] = numbers;
console.log(a); // 1
console.log(b); // 10

// Rest pattern
let [primary, ...otherColors] = colors;
console.log(primary);     // "red"
console.log(otherColors); // ["green", "blue", "yellow"]

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1

// Object destructuring
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

let { name, age } = person;
console.log(name); // "John"
console.log(age);  // 30

// Different variable names
let { name: personName, age: personAge } = person;
console.log(personName); // "John"
console.log(personAge);  // 30

// Default values
let { country = "USA" } = person;
console.log(country); // "USA"

// Nested destructuring
let employee = {
    id: 1,
    info: {
        firstName: "Jane",
        lastName: "Doe"
    }
};

let { info: { firstName, lastName } } = employee;
console.log(firstName, lastName); // "Jane Doe"

// Falsy values examples
if (false) { console.log("This won't run"); }
if (0) { console.log("This won't run"); }
if ("") { console.log("This won't run"); }
if (null) { console.log("This won't run"); }
if (undefined) { console.log("This won't run"); }
if (NaN) { console.log("This won't run"); }

// Truthy values examples
if (true) { console.log("This will run"); }
if (1) { console.log("This will run"); }
if ("hello") { console.log("This will run"); }
if ([]) { console.log("This will run"); }
if ({}) { console.log("This will run"); }
if (function() {}) { console.log("This will run"); }

// Practical truthy/falsy usage
let userInput = "";
let username = userInput || "Guest";
console.log(username); // "Guest"

let count = 0;
let displayCount = count || "No items";
console.log(displayCount); // "No items"
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Destructuring and Truthy/Falsy Practice",
                    content: `
                        <p>Practice destructuring and working with truthy/falsy values:</p>
                        <ol>
                            <li>Destructure arrays to extract specific elements</li>
                            <li>Destructure objects to extract properties with different variable names</li>
                            <li>Practice nested destructuring with complex objects</li>
                            <li>Use default values in destructuring</li>
                            <li>Test various values for truthiness in conditions</li>
                            <li>Use logical operators with truthy/falsy values for default values</li>
                            <li>Create a function that uses destructuring in parameters</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why are empty arrays and objects truthy?",
                    answer: "Empty arrays ([]) and empty objects ({}) are truthy because they are objects, and all objects are truthy in JavaScript. This is by design - the only falsy values are specifically: false, 0, \"\", null, undefined, and NaN. Everything else, including all objects and arrays (even empty ones), is truthy."
                },
                {
                    question: "What's the difference between destructuring and normal property access?",
                    answer: "Destructuring provides a concise way to extract multiple values from arrays or objects into variables. It's more readable when you need multiple values, allows for default values, enables variable renaming, and supports nested extraction. Regular property access is better for single values or when you don't know which properties you'll need in advance."
                }
            ]
        },
        {
            id: "nullish-other-operators",
            title: "Nullish and Other Modern Operators",
            content: `
                <h3>Nullish Coalescing Operator (??)</h3>
                <p>The ?? operator returns the right-hand operand when the left-hand operand is null or undefined, otherwise returns the left-hand operand.</p>
                
                <h3>Optional Chaining Operator (?.)</h3>
                <p>The ?. operator allows you to safely access nested object properties without causing errors if a reference is null or undefined.</p>
                
                <h3>Logical Assignment Operators</h3>
                <p>Combine logical operations with assignment in a concise way.</p>
                
                <h3>Nullish Coalescing (??):</h3>
                <ul>
                    <li>Returns right value only if left is null or undefined</li>
                    <li>Different from || which returns right for any falsy value</li>
                    <li>Useful for providing defaults without overriding empty strings or 0</li>
                </ul>
                
                <h3>Optional Chaining (?.):</h3>
                <ul>
                    <li>Safely access nested properties</li>
                    <li>Works with object properties, array elements, and function calls</li>
                    <li>Returns undefined if any part of the chain is null/undefined</li>
                    <li>Prevents TypeError when accessing properties of null/undefined</li>
                </ul>
                
                <h3>Logical Assignment Operators:</h3>
                <ul>
                    <li><strong>||=</strong>: Assign if left is falsy</li>
                    <li><strong>&&=</strong>: Assign if left is truthy</li>
                    <li><strong>??=</strong>: Assign if left is nullish</li>
                </ul>
                
                <h3>Other Useful Operators:</h3>
                <ul>
                    <li><strong>Ternary operator</strong>: condition ? expr1 : expr2</li>
                    <li><strong>Spread operator (...)</strong>: Expand arrays/objects</li>
                    <li><strong>typeof</strong>: Check variable type</li>
                    <li><strong>instanceof</strong>: Check object type</li>
                    <li><strong>in</strong>: Check if property exists in object</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>عامل التوحيد الفارغ (??)</h3>
                    <p>يعيد العامل ?? المعامل الأيمن عندما يكون المعامل الأيسر null أو undefined، وإلا يعيد المعامل الأيسر.</p>
                    
                    <h3>عامل السلسلة الاختيارية (?.)</h3>
                    <p>يسمح العامل ?. بالوصول الآمن إلى خصائص الكائنات المتداخلة دون التسبب في أخطاء إذا كان المرجع null أو undefined.</p>
                    
                    <h3>عوامل التعيين المنطقية</h3>
                    <p>اجمع العمليات المنطقية مع التعيين بطريقة موجزة.</p>
                    
                    <h3>التوحيد الفارغ (??):</h3>
                    <ul>
                        <li>يعيد القيمة اليمنى فقط إذا كانت اليسرى null أو undefined</li>
                        <li>يختلف عن || الذي يعيد اليمنى لأي قيمة زائفة</li>
                        <li>مفيد لتوفير القيم الافتراضية دون تجاوز النصوص الفارغة أو 0</li>
                    </ul>
                    
                    <h3>السلسلة الاختيارية (?.):</h3>
                    <ul>
                        <li>الوصول الآمن إلى الخصائص المتداخلة</li>
                        <li>يعمل مع خصائص الكائنات وعناصر المصفوفات واستدعاءات الدوال</li>
                        <li>يعيد undefined إذا كان أي جزء من السلسلة null/undefined</li>
                        <li>يمنع TypeError عند الوصول إلى خصائص null/undefined</li>
                    </ul>
                    
                    <h3>عوامل التعيين المنطقية:</h3>
                    <ul>
                        <li><strong>||=</strong>: عيّن إذا كانت القيمة اليسرى زائفة</li>
                        <li><strong>&&=</strong>: عيّن إذا كانت القيمة اليسرى حقيقية</li>
                        <li><strong>??=</strong>: عيّن إذا كانت القيمة اليسرى فارغة</li>
                    </ul>
                    
                    <h3>عوامل أخرى مفيدة:</h3>
                    <ul>
                        <li><strong>العامل الثلاثي</strong>: condition ? expr1 : expr2</li>
                        <li><strong>عامل الانتشار (...)</strong>: توسيع المصفوفات/الكائنات</li>
                        <li><strong>typeof</strong>: التحقق من نوع المتغير</li>
                        <li><strong>instanceof</strong>: التحقق من نوع الكائن</li>
                        <li><strong>in</strong>: التحقق إذا كانت الخاصية موجودة في الكائن</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Nullish and Modern Operators Examples",
                    content: `
                        <pre class="code-block">
// Nullish coalescing operator (??)
let userName = null;
let displayName = userName ?? "Anonymous";
console.log(displayName); // "Anonymous"

let count = 0;
let result1 = count || 10;  // 10 (0 is falsy)
let result2 = count ?? 10;  // 0 (0 is not nullish)
console.log(result1, result2);

let emptyString = "";
let text1 = emptyString || "default"; // "default" ("" is falsy)
let text2 = emptyString ?? "default"; // "" ("" is not nullish)
console.log(text1, text2);

// Optional chaining operator (?.)
let user = {
    profile: {
        name: "John",
        address: {
            city: "New York"
        }
    }
};

console.log(user.profile?.name);           // "John"
console.log(user.profile?.age);            // undefined
console.log(user.settings?.theme);         // undefined (settings doesn't exist)
console.log(user.profile?.address?.city);  // "New York"

// With arrays
let arr = null;
console.log(arr?.[0]);     // undefined
console.log(arr?.[0]?.x);  // undefined

// With function calls
let obj = {
    method: function() { return "hello"; }
};
console.log(obj.method?.());     // "hello"
console.log(obj.otherMethod?.()); // undefined

// Logical assignment operators
let a = 0;
let b = 5;

// OR assignment (||=)
a ||= 10;  // a = a || 10 → a becomes 10 (0 is falsy)
b ||= 10;  // b = b || 10 → b stays 5 (5 is truthy)
console.log(a, b); // 10, 5

// AND assignment (&&=)
let x = 0;
let y = 5;
x &&= 10;  // x = x && 10 → x stays 0 (0 is falsy)
y &&= 10;  // y = y && 10 → y becomes 10 (5 is truthy)
console.log(x, y); // 0, 10

// Nullish assignment (??=)
let value1 = null;
let value2 = 0;
value1 ??= 100;  // value1 = value1 ?? 100 → becomes 100
value2 ??= 100;  // value2 = value2 ?? 100 → stays 0
console.log(value1, value2); // 100, 0

// Other useful operators
// Ternary operator
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Spread operator
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // {a: 1, b: 2, c: 3}

// typeof and instanceof
console.log(typeof "hello");    // "string"
console.log(typeof 42);         // "number"
console.log([] instanceof Array); // true

// in operator
let car = { make: "Toyota", model: "Camry" };
console.log("make" in car);    // true
console.log("year" in car);    // false
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Modern Operators Practice",
                    content: `
                        <p>Practice using modern JavaScript operators:</p>
                        <ol>
                            <li>Use ?? to provide defaults without overriding 0 or empty strings</li>
                            <li>Use ?. to safely access nested object properties</li>
                            <li>Practice with logical assignment operators (||=, &&=, ??=)</li>
                            <li>Compare the behavior of ?? vs || with different values</li>
                            <li>Use optional chaining with function calls and array access</li>
                            <li>Create a function that uses multiple modern operators</li>
                            <li>Practice with spread operator for arrays and objects</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should I use ?? instead of ||?",
                    answer: "Use ?? when you want to provide a default value but want to preserve falsy values like 0, false, or empty strings (\"\"). Use || when you want to provide a default for any falsy value. For example, if you have a count that could be 0, using count || 10 would replace 0 with 10, while count ?? 10 would keep 0."
                },
                {
                    question: "What's the difference between ?. and && for safe property access?",
                    answer: "Both can be used for safe property access, but ?. is more concise and readable. For example: user?.profile?.name vs user && user.profile && user.profile.name. The ?. operator also works with function calls and array access, and it's specifically designed for this purpose. However, && gives you more control and can be used for more complex conditions."
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