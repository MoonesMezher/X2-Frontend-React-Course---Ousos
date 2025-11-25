// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete CSS Mastery",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "css-intro",
            title: "CSS Introduction & Syntax",
            content: `
                <h3>What is CSS?</h3>
                <p>Cascading Style Sheets (CSS) is used to style and layout web pages.</p>
                
                <h3>CSS Syntax Structure:</h3>
                <ul>
                    <li><strong>Selector</strong>: Targets HTML elements</li>
                    <li><strong>Declaration Block</strong>: Contains style rules in {}</li>
                    <li><strong>Property</strong>: What to style (color, font-size, etc.)</li>
                    <li><strong>Value</strong>: How to style it (red, 16px, etc.)</li>
                </ul>
                
                <h3>Basic Ruleset Structure:</h3>
                <pre class="code-block">
selector {
    property: value;
    property: value;
}
                </pre>
                
                <h3>Embedding Methods:</h3>
                <ul>
                    <li><strong>Inline CSS</strong>: style attribute in HTML tags</li>
                    <li><strong>Internal CSS</strong>: &lt;style&gt; tag in HTML head</li>
                    <li><strong>External CSS</strong>: Separate .css file linked via &lt;link&gt;</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>ما هو CSS؟</h3>
                    <p>يستخدم CSS لتنسيق وتخطيط صفحات الويب.</p>
                    
                    <h3>بنية تركيب CSS:</h3>
                    <ul>
                        <li><strong>المحدد (Selector)</strong>: يستهدف عناصر HTML</li>
                        <li><strong>كتلة التصريح (Declaration Block)</strong>: تحتوي على قواعد التنسيق في {}</li>
                        <li><strong>الخاصية (Property)</strong>: ما يتم تنسيقه (لون، حجم خط، إلخ)</li>
                        <li><strong>القيمة (Value)</strong>: كيفية تنسيقه (أحمر، 16px، إلخ)</li>
                    </ul>
                    
                    <h3>بنية مجموعة القواعد الأساسية:</h3>
                    <pre class="code-block" dir="ltr">
selector {
    property: value;
    property: value;
}
                    </pre>
                    
                    <h3>طرق التضمين:</h3>
                    <ul>
                        <li><strong>CSS مضمن</strong>: سمة style في وسوم HTML</li>
                        <li><strong>CSS داخلي</strong>: وسم &lt;style&gt; في رأس HTML</li>
                        <li><strong>CSS خارجي</strong>: ملف .css منفصل مرتبط عبر &lt;link&gt;</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "CSS Syntax Examples",
                    content: `
                        <pre class="code-block">
/* Element selector */
p {
    color: blue;
    font-size: 16px;
}

/* Class selector */
.button {
    background-color: #4CAF50;
    padding: 10px 20px;
}

/* ID selector */
#header {
    height: 80px;
    background: #333;
}
                        </pre>
                    `
                },
                {
                    title: "Embedding Methods Examples",
                    content: `
                        <pre class="code-block">
&lt;!-- Inline CSS --&gt;
&lt;h1 style="color: red; text-align: center;"&gt;Hello World&lt;/h1&gt;

&lt;!-- Internal CSS --&gt;
&lt;style&gt;
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
&lt;/style&gt;

&lt;!-- External CSS --&gt;
&lt;link rel="stylesheet" href="styles.css"&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "CSS Basics Practice",
                    content: `
                        <p>Practice CSS fundamentals:</p>
                        <ol>
                            <li>Create a simple HTML page and style it using all three embedding methods</li>
                            <li>Write CSS rulesets for headings, paragraphs, and links</li>
                            <li>Experiment with different selectors (element, class, ID)</li>
                            <li>Create an external CSS file and link it to your HTML</li>
                            <li>Compare the specificity of inline vs internal vs external styles</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What are the advantages of external CSS over inline/internal CSS?",
                    answer: "External CSS promotes separation of concerns, enables caching for better performance, allows reuse across multiple pages, makes maintenance easier, and improves code organization. Inline CSS has highest specificity and can be hard to override, while internal CSS is page-specific."
                },
                {
                    question: "What is the basic structure of a CSS ruleset?",
                    answer: "A CSS ruleset consists of: Selector (targets HTML elements), Declaration Block (surrounded by {}), Properties (what to style), and Values (how to style it). Example: p { color: blue; font-size: 16px; }"
                }
            ]
        },
        {
            id: "selectors-specificity",
            title: "CSS Selectors & Specificity",
            content: `
                <h3>Selector Types:</h3>
                <ul>
                    <li><strong>Element</strong>: p, div, h1 (targets all elements of that type)</li>
                    <li><strong>Class</strong>: .button, .container (targets elements with class)</li>
                    <li><strong>ID</strong>: #header, #main (targets specific element with ID)</li>
                    <li><strong>Attribute</strong>: [type="text"], [href] (targets elements with attributes)</li>
                    <li><strong>Descendant</strong>: nav a (targets a elements inside nav)</li>
                    <li><strong>Child</strong>: ul > li (targets direct children only)</li>
                    <li><strong>Pseudo-classes</strong>: :hover, :focus, :first-child (special states)</li>
                </ul>
                
                <h3>Specificity Hierarchy (Highest to Lowest):</h3>
                <ol>
                    <li>Inline styles (style attribute)</li>
                    <li>ID selectors (#main)</li>
                    <li>Class selectors, attribute selectors, pseudo-classes</li>
                    <li>Element selectors, pseudo-elements</li>
                </ol>
                
                <h3>Specificity Calculation:</h3>
                <p>Count: (a, b, c, d) where:<br>
                a = inline styles<br>
                b = ID selectors<br>
                c = class/attribute/pseudo-class selectors<br>
                d = element/pseudo-element selectors</p>
                
                <h3>Cascade & Inheritance:</h3>
                <ul>
                    <li><strong>Cascade</strong>: Order matters - later rules override earlier ones</li>
                    <li><strong>Inheritance</strong>: Some properties pass to children (color, font)</li>
                    <li><strong>!important</strong>: Overrides everything (use sparingly)</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>أنواع المحددات:</h3>
                    <ul>
                        <li><strong>عنصر</strong>: p, div, h1 (يستهدف كل العناصر من هذا النوع)</li>
                        <li><strong>فئة</strong>: .button, .container (يستهدف العناصر ذات الفئة)</li>
                        <li><strong>معرف</strong>: #header, #main (يستهدف عنصر محدد بالمعرف)</li>
                        <li><strong>سمة</strong>: [type="text"], [href] (يستهدف العناصر ذات السمات)</li>
                        <li><strong>سليل</strong>: nav a (يستهدف عناصر a داخل nav)</li>
                        <li><strong>ابن</strong>: ul > li (يستهدف الأبناء المباشرين فقط)</li>
                        <li><strong>الفئات الزائفة</strong>: :hover, :focus, :first-child (حالات خاصة)</li>
                    </ul>
                    
                    <h3>تسلسل الأسبقية (من الأعلى إلى الأدنى):</h3>
                    <ol>
                        <li>الأنماط المضمنة (سمة style)</li>
                        <li>محددات المعرف (#main)</li>
                        <li>محددات الفئة، محددات السمة، الفئات الزائفة</li>
                        <li>محددات العنصر، العناصر الزائفة</li>
                    </ol>
                    
                    <h3>حساب الأسبقية:</h3>
                    <p>العد: (a, b, c, d) حيث:<br>
                    a = الأنماط المضمنة<br>
                    b = محددات المعرف<br>
                    c = محددات الفئة/السمة/الفئة الزائفة<br>
                    d = محددات العنصر/العنصر الزائف</p>
                    
                    <h3>التتابع والتوريث:</h3>
                    <ul>
                        <li><strong>التتابع</strong>: الترتيب مهم - القواعد اللاحقة تتجاوز السابقة</li>
                        <li><strong>التوريث</strong>: بعض الخصائص تنتقل إلى الأبناء (لون، خط)</li>
                        <li><strong>!important</strong>: يتجاوز كل شيء (استخدم باعتدال)</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Selector Examples",
                    content: `
                        <pre class="code-block">
/* Element selector */
p { color: blue; }

/* Class selector */
.button { background: green; }

/* ID selector */
#main { width: 100%; }

/* Attribute selector */
input[type="text"] { border: 1px solid #ccc; }

/* Descendant selector */
nav a { text-decoration: none; }

/* Child selector */
ul > li { list-style: none; }

/* Pseudo-classes */
a:hover { color: red; }
li:first-child { font-weight: bold; }

/* Multiple selectors */
h1, h2, h3 { font-family: Arial; }
                        </pre>
                    `
                },
                {
                    title: "Specificity Examples",
                    content: `
                        <pre class="code-block">
/* Specificity: (0,0,0,1) */
p { color: black; }

/* Specificity: (0,0,1,0) */
.text { color: blue; }

/* Specificity: (0,1,0,0) */
#main { color: green; }

/* Specificity: (0,0,1,1) */
div.text { color: purple; }

/* Specificity: (0,1,1,1) */
div#main.text { color: orange; }

/* Inline style: (1,0,0,0) */
&lt;p style="color: red;"&gt;This wins!&lt;/p&gt;

/* !important overrides everything */
p { color: yellow !important; }
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Selectors & Specificity Practice",
                    content: `
                        <p>Practice with selectors and specificity:</p>
                        <ol>
                            <li>Create a navigation menu using different selector types</li>
                            <li>Style a form with attribute selectors for different input types</li>
                            <li>Create conflicting styles and observe which ones win</li>
                            <li>Use pseudo-classes to create interactive button states</li>
                            <li>Calculate specificity for complex selector combinations</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why should you avoid using !important?",
                    answer: "!important breaks the natural cascade, makes debugging difficult, creates specificity wars, and reduces maintainability. Instead, use better selector strategies, increase specificity naturally, or refactor CSS structure. Only use !important as a last resort for overriding third-party CSS."
                },
                {
                    question: "What's the difference between descendant and child selectors?",
                    answer: "Descendant selector (space) targets all matching descendants at any level. Child selector (>) targets only direct children. Example: 'nav a' selects all links inside nav (at any depth), while 'nav > a' selects only direct child links of nav."
                }
            ]
        },
        {
            id: "typography-variables",
            title: "Typography, Colors & CSS Variables",
            content: `
                <h3>Font Properties:</h3>
                <ul>
                    <li><strong>font-family</strong>: Typeface (Arial, "Times New Roman", serif)</li>
                    <li><strong>font-size</strong>: Text size (px, em, rem, %)</li>
                    <li><strong>font-weight</strong>: Boldness (normal, bold, 100-900)</li>
                    <li><strong>font-style</strong>: Italic, oblique, normal</li>
                    <li><strong>line-height</strong>: Space between lines</li>
                    <li><strong>font-variant</strong>: small-caps, normal</li>
                </ul>
                
                <h3>Text Properties:</h3>
                <ul>
                    <li><strong>text-align</strong>: left, right, center, justify</li>
                    <li><strong>text-decoration</strong>: underline, overline, line-through</li>
                    <li><strong>text-transform</strong>: uppercase, lowercase, capitalize</li>
                    <li><strong>text-shadow</strong>: x-offset y-offset blur color</li>
                    <li><strong>letter-spacing</strong>: Space between characters</li>
                    <li><strong>word-spacing</strong>: Space between words</li>
                </ul>
                
                <h3>Color Models:</h3>
                <ul>
                    <li><strong>Named colors</strong>: red, blue, transparent</li>
                    <li><strong>Hexadecimal</strong>: #RRGGBB, #RGB</li>
                    <li><strong>RGB</strong>: rgb(255, 0, 0)</li>
                    <li><strong>RGBA</strong>: rgba(255, 0, 0, 0.5) - with alpha/opacity</li>
                    <li><strong>HSL</strong>: hsl(0, 100%, 50%) - Hue, Saturation, Lightness</li>
                    <li><strong>HSLA</strong>: hsla(0, 100%, 50%, 0.5) - with alpha</li>
                </ul>
                
                <h3>CSS Custom Properties (Variables):</h3>
                <ul>
                    <li>Define: --variable-name: value;</li>
                    <li>Use: var(--variable-name)</li>
                    <li>Scoped to selector (like :root for global)</li>
                    <li>Great for theming and maintainability</li>
                </ul>
                
                <h3>CSS Units:</h3>
                <ul>
                    <li><strong>Absolute</strong>: px, pt, cm, in</li>
                    <li><strong>Relative</strong>: em, rem, %, vw, vh</li>
                    <li><strong>rem</strong>: Relative to root element</li>
                    <li><strong>em</strong>: Relative to parent element</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>خصائص الخط:</h3>
                    <ul>
                        <li><strong>font-family</strong>: نوع الخط (Arial, "Times New Roman", serif)</li>
                        <li><strong>font-size</strong>: حجم النص (px, em, rem, %)</li>
                        <li><strong>font-weight</strong>: السماكة (normal, bold, 100-900)</li>
                        <li><strong>font-style</strong>: مائل، مائل منحرف، عادي</li>
                        <li><strong>line-height</strong>: المسافة بين الأسطر</li>
                        <li><strong>font-variant</strong>: small-caps, normal</li>
                    </ul>
                    
                    <h3>خصائص النص:</h3>
                    <ul>
                        <li><strong>text-align</strong>: left, right, center, justify</li>
                        <li><strong>text-decoration</strong>: underline, overline, line-through</li>
                        <li><strong>text-transform</strong>: uppercase, lowercase, capitalize</li>
                        <li><strong>text-shadow</strong>: x-offset y-offset blur color</li>
                        <li><strong>letter-spacing</strong>: المسافة بين الأحرف</li>
                        <li><strong>word-spacing</strong>: المسافة بين الكلمات</li>
                    </ul>
                    
                    <h3>نماذج الألوان:</h3>
                    <ul>
                        <li><strong>ألوان مسماة</strong>: red, blue, transparent</li>
                        <li><strong>سداسي عشري</strong>: #RRGGBB, #RGB</li>
                        <li><strong>RGB</strong>: rgb(255, 0, 0)</li>
                        <li><strong>RGBA</strong>: rgba(255, 0, 0, 0.5) - مع ألفا/الشفافية</li>
                        <li><strong>HSL</strong>: hsl(0, 100%, 50%) - الصبغة، التشبع، الإضاءة</li>
                        <li><strong>HSLA</strong>: hsla(0, 100%, 50%, 0.5) - مع ألفا</li>
                    </ul>
                    
                    <h3>خصائص CSS المخصصة (المتغيرات):</h3>
                    <ul>
                        <li>تعريف: --variable-name: value;</li>
                        <li>استخدام: var(--variable-name)</li>
                        <li>محدودة النطاق للمحدد (مثل :root للعالمي)</li>
                        <li>رائعة للتنسيق الموحد وسهولة الصيانة</li>
                    </ul>
                    
                    <h3>وحدات CSS:</h3>
                    <ul>
                        <li><strong>مطلقة</strong>: px, pt, cm, in</li>
                        <li><strong>نسبية</strong>: em, rem, %, vw, vh</li>
                        <li><strong>rem</strong>: نسبة إلى العنصر الجذر</li>
                        <li><strong>em</strong>: نسبة إلى العنصر الأب</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Typography Examples",
                    content: `
                        <pre class="code-block">
/* Font properties */
.heading {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 2rem;
    font-weight: 700;
    font-style: normal;
    line-height: 1.4;
}

.body-text {
    font-family: Georgia, serif;
    font-size: 1.1rem;
    line-height: 1.6;
    text-align: justify;
}

/* Text properties */
.uppercase {
    text-transform: uppercase;
    letter-spacing: 2px;
}

.decorated {
    text-decoration: underline;
    text-decoration-color: blue;
    text-decoration-thickness: 2px;
}

.shadow-text {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Font loading with @font-face */
@font-face {
    font-family: 'CustomFont';
    src: url('custom-font.woff2') format('woff2');
}

.custom {
    font-family: 'CustomFont', sans-serif;
}
                        </pre>
                    `
                },
                {
                    title: "Colors & Variables Examples",
                    content: `
                        <pre class="code-block">
/* Color examples */
.named-color {
    color: red;
    background-color: transparent;
}

.hex-color {
    color: #ff0000;
    background-color: #000;
}

.rgb-color {
    color: rgb(255, 0, 0);
    background-color: rgba(0, 0, 0, 0.5);
}

.hsl-color {
    color: hsl(0, 100%, 50%);
    background-color: hsla(0, 100%, 50%, 0.3);
}

/* CSS Variables */
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --font-size-sm: 0.875rem;
    --font-size-lg: 1.25rem;
    --spacing: 1rem;
    --border-radius: 4px;
}

.component {
    color: var(--primary-color);
    font-size: var(--font-size-lg);
    margin: var(--spacing);
    border-radius: var(--border-radius);
}

/* Theming with variables */
.dark-theme {
    --bg-color: #333;
    --text-color: #fff;
}

.light-theme {
    --bg-color: #fff;
    --text-color: #333;
}

.themed-element {
    background-color: var(--bg-color);
    color: var(--text-color);
}

/* Fallback values */
.safe-variable {
    color: var(--custom-color, blue);
    font-size: var(--custom-size, 16px);
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Typography & Variables Practice",
                    content: `
                        <p>Practice with typography, colors and CSS variables:</p>
                        <ol>
                            <li>Create a typographic scale using rem units</li>
                            <li>Build a color system using CSS variables</li>
                            <li>Create a dark/light theme switcher</li>
                            <li>Style a complete article with proper typography</li>
                            <li>Experiment with different color models and opacity</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between em and rem units?",
                    answer: "em is relative to the font-size of its direct or nearest parent. rem is relative to the root (html) element's font-size. rem provides more predictable sizing, while em is useful for scalable components where child elements should scale with their parent."
                },
                {
                    question: "Why use CSS custom properties (variables)?",
                    answer: "CSS variables improve maintainability (change values in one place), enable dynamic theming, allow JavaScript manipulation, provide scoping control, and support fallback values. They're essential for design systems, theme switching, and responsive design patterns."
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