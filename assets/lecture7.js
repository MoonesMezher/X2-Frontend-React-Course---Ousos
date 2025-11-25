// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete CSS Mastery",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "backgrounds-borders",
            title: "Backgrounds, Borders & Shadows",
            content: `
                <h3>Background Properties:</h3>
                <ul>
                    <li><strong>background-color</strong>: Solid color background</li>
                    <li><strong>background-image</strong>: Image or gradient background</li>
                    <li><strong>background-position</strong>: Position of background image</li>
                    <li><strong>background-size</strong>: cover, contain, or specific dimensions</li>
                    <li><strong>background-repeat</strong>: repeat, no-repeat, repeat-x/y</li>
                    <li><strong>background-attachment</strong>: scroll, fixed, local</li>
                    <li><strong>background-clip</strong>: Border-box, padding-box, content-box</li>
                </ul>
                
                <h3>Border Properties:</h3>
                <ul>
                    <li><strong>border-width</strong>: Thickness of border</li>
                    <li><strong>border-style</strong>: solid, dashed, dotted, double, etc.</li>
                    <li><strong>border-color</strong>: Color of border</li>
                    <li><strong>border-radius</strong>: Rounded corners</li>
                    <li><strong>border-image</strong>: Image-based borders</li>
                </ul>
                
                <h3>Outline vs Border:</h3>
                <ul>
                    <li>Outline doesn't take space (drawn outside border)</li>
                    <li>Outline doesn't affect layout</li>
                    <li>Commonly used for focus states</li>
                </ul>
                
                <h3>Box Shadow for Depth:</h3>
                <p>box-shadow: offset-x offset-y blur-radius spread-radius color;</p>
                <ul>
                    <li>Creates realistic shadows and depth</li>
                    <li>Can have multiple shadows</li>
                    <li>Use inset for inner shadows</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>خصائص الخلفية:</h3>
                    <ul>
                        <li><strong>background-color</strong>: خلفية بلون ثابت</li>
                        <li><strong>background-image</strong>: خلفية صورة أو تدرج</li>
                        <li><strong>background-position</strong>: موضع صورة الخلفية</li>
                        <li><strong>background-size</strong>: cover, contain, أو أبعاد محددة</li>
                        <li><strong>background-repeat</strong>: repeat, no-repeat, repeat-x/y</li>
                        <li><strong>background-attachment</strong>: scroll, fixed, local</li>
                        <li><strong>background-clip</strong>: Border-box, padding-box, content-box</li>
                    </ul>
                    
                    <h3>خصائص الحدود:</h3>
                    <ul>
                        <li><strong>border-width</strong>: سمك الحدود</li>
                        <li><strong>border-style</strong>: solid, dashed, dotted, double, إلخ</li>
                        <li><strong>border-color</strong>: لون الحدود</li>
                        <li><strong>border-radius</strong>: زوايا مستديرة</li>
                        <li><strong>border-image</strong>: حدود قائمة على الصور</li>
                    </ul>
                    
                    <h3>الحدود الخارجية مقابل الحدود:</h3>
                    <ul>
                        <li>الحدود الخارجية لا تأخذ مساحة (ترسم خارج الحدود)</li>
                        <li>الحدود الخارجية لا تؤثر على التخطيط</li>
                        <li>تستخدم عادة لحالات التركيز</li>
                    </ul>
                    
                    <h3>ظل الصندوق للعمق:</h3>
                    <p>box-shadow: offset-x offset-y blur-radius spread-radius color;</p>
                    <ul>
                        <li>ينشئ ظلال واقعية وعمق</li>
                        <li>يمكن أن يحتوي على ظلال متعددة</li>
                        <li>استخدم inset للظلال الداخلية</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Background Examples",
                    content: `
                        <pre class="code-block">
/* Solid color background */
.hero {
    background-color: #f0f0f0;
}

/* Image background */
.banner {
    background-image: url('hero.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/* Gradient background */
.gradient {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

/* Multiple backgrounds */
.multi-bg {
    background: 
        url('pattern.png') repeat,
        linear-gradient(to bottom, #fff, #000);
}

/* Background shorthand */
.quick-bg {
    background: #333 url('bg.jpg') center/cover no-repeat fixed;
}
                        </pre>
                    `
                },
                {
                    title: "Borders & Shadows Examples",
                    content: `
                        <pre class="code-block">
/* Basic border */
.box {
    border: 2px solid #333;
    border-radius: 8px;
}

/* Different border sides */
.asymmetric {
    border-top: 1px solid red;
    border-right: 2px dashed blue;
    border-bottom: 3px dotted green;
    border-left: 4px double orange;
}

/* Outline for focus */
button:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
}

/* Box shadows */
.shadow-1 {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.shadow-2 {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.shadow-3 {
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
}

/* Inner shadow */
.inset-shadow {
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}

/* Multiple shadows */
.complex-shadow {
    box-shadow: 
        0 2px 4px rgba(0,0,0,0.1),
        0 8px 16px rgba(0,0,0,0.1);
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Backgrounds & Borders Practice",
                    content: `
                        <p>Practice with backgrounds, borders and shadows:</p>
                        <ol>
                            <li>Create a hero section with a background image that covers the entire area</li>
                            <li>Design buttons with different border styles and hover effects</li>
                            <li>Create cards with subtle shadows for depth</li>
                            <li>Experiment with gradient backgrounds and multiple backgrounds</li>
                            <li>Build a pricing table with different border-radius values</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between background-size: cover and contain?",
                    answer: "cover scales the image to cover the entire container (may crop edges). contain scales the image to fit entirely within the container (may show empty space). Use cover for full-bleed backgrounds and contain when you need to see the entire image."
                },
                {
                    question: "When should you use outline instead of border?",
                    answer: "Use outline for focus indicators, temporary highlights, or when you don't want to affect layout (since outline doesn't take space). Use border for permanent visual boundaries that are part of the element's design. Outline is also better for accessibility focus states."
                }
            ]
        },
        {
    id: "display-properties",
    title: "Display Properties - Block, Inline & Inline-Block",
    content: `
        <h3>What are Display Properties?</h3>
        <p>The display property defines how an element is rendered in the document flow and how it interacts with other elements.</p>
        
        <h3>Display Values:</h3>
        <ul>
            <li><strong>block</strong>: Takes full width, starts on new line</li>
            <li><strong>inline</strong>: Takes only necessary width, flows with content</li>
            <li><strong>inline-block</strong>: Hybrid - flows like inline but accepts box model properties</li>
            <li><strong>none</strong>: Completely removed from document flow</li>
            <li><strong>flex</strong>: Flexbox layout</li>
            <li><strong>grid</strong>: CSS Grid layout</li>
        </ul>
        
        <h3>Block Elements:</h3>
        <ul>
            <li>Start on a new line</li>
            <li>Take full available width</li>
            <li>Accept width, height, margin, padding</li>
            <li>Examples: div, p, h1-h6, section, article</li>
        </ul>
        
        <h3>Inline Elements:</h3>
        <ul>
            <li>Flow with text content</li>
            <li>Take only necessary width</li>
            <li>Ignore width, height, vertical margins</li>
            <li>Examples: span, a, strong, em, img</li>
        </ul>
        
        <h3>Inline-Block Elements:</h3>
        <ul>
            <li>Flow like inline elements</li>
            <li>Accept box model properties like block</li>
            <li>Perfect for navigation items, buttons, icons</li>
            <li>Respects vertical-align property</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>ما هي خصائص العرض؟</h3>
            <p>تحدد خاصية العرض كيفية عرض العنصر في تدفق المستند وكيف يتفاعل مع العناصر الأخرى.</p>
            
            <h3>قيم العرض:</h3>
            <ul>
                <li><strong>block</strong>: يأخذ العرض الكامل، يبدأ في سطر جديد</li>
                <li><strong>inline</strong>: يأخذ العرض الضروري فقط، يتدفق مع المحتوى</li>
                <li><strong>inline-block</strong>: هجين - يتدفق مثل inline لكنه يقبل خصائص نموذج الصندوق</li>
                <li><strong>none</strong>: يتم إزالته completamente من تدفق المستند</li>
                <li><strong>flex</strong>: تخطيط Flexbox</li>
                <li><strong>grid</strong>: تخطيط CSS Grid</li>
            </ul>
            
            <h3>عناصر الكتلة:</h3>
            <ul>
                <li>تبدأ في سطر جديد</li>
                <li>تأخذ العرض المتاح بالكامل</li>
                <li>تقبل العرض، الارتفاع، الهامش، الحشو</li>
                <li>أمثلة: div, p, h1-h6, section, article</li>
            </ul>
            
            <h3>العناصر المضمنة:</h3>
            <ul>
                <li>تتدفق مع محتوى النص</li>
                <li>تأخذ العرض الضروري فقط</li>
                <li>تتجاهل العرض، الارتفاع، الهوامش العمودية</li>
                <li>أمثلة: span, a, strong, em, img</li>
            </ul>
            
            <h3>عناصر inline-block:</h3>
            <ul>
                <li>تتدفق مثل العناصر المضمنة</li>
                <li>تقبل خصائص نموذج الصندوق مثل الكتلة</li>
                <li>مثالية لعناصر التنقل، الأزرار، الأيقونات</li>
                <li>تحترم خاصية vertical-align</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Display Property Examples",
            content: `
                <pre class="code-block">
/* Block Elements */
.block-element {
    display: block;
    width: 300px;
    height: 100px;
    margin: 20px;
    padding: 15px;
    background: #3498db;
}

/* Inline Elements */
.inline-element {
    display: inline;
    /* width and height are ignored */
    margin: 0 10px; /* Only horizontal margins work */
    padding: 5px;
    background: #e74c3c;
}

/* Inline-Block Elements */
.inline-block-element {
    display: inline-block;
    width: 150px;
    height: 50px;
    margin: 10px;
    padding: 10px;
    background: #2ecc71;
    vertical-align: middle;
}

/* Practical Examples */
.nav-item {
    display: inline-block;
    padding: 12px 20px;
    margin: 0 5px;
    background: #333;
    color: white;
    text-decoration: none;
    border-radius: 4px;
}

.button-group button {
    display: inline-block;
    padding: 10px 15px;
    margin: 0 2px;
    border: 1px solid #ccc;
    background: white;
    vertical-align: top;
}

.image-gallery img {
    display: inline-block;
    width: 200px;
    height: 150px;
    margin: 5px;
    object-fit: cover;
    vertical-align: top;
}

/* Comparison Example */
.compare-block {
    display: block;
    background: #3498db;
    margin: 10px;
    padding: 15px;
}

.compare-inline {
    display: inline;
    background: #e74c3c;
    margin: 0 10px;
    padding: 5px;
}

.compare-inline-block {
    display: inline-block;
    background: #2ecc71;
    width: 200px;
    margin: 10px;
    padding: 10px;
    vertical-align: top;
}

/* Navigation with inline-block */
.nav-menu {
    background: #2c3e50;
    padding: 0;
    text-align: center;
}

.nav-menu li {
    display: inline-block;
    margin: 0;
}

.nav-menu a {
    display: inline-block;
    padding: 15px 25px;
    color: white;
    text-decoration: none;
    transition: background 0.3s;
}

.nav-menu a:hover {
    background: #34495e;
}

/* Form elements with inline-block */
.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: inline-block;
    width: 120px;
    text-align: right;
    margin-right: 10px;
    vertical-align: top;
}

.form-group input,
.form-group select {
    display: inline-block;
    width: 200px;
    padding: 8px;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Display Properties Practice",
            content: `
                <p>Practice with display properties:</p>
                <ol>
                    <li>Create a navigation menu using inline-block for horizontal layout</li>
                    <li>Build a button group with inline-block elements</li>
                    <li>Create an image gallery using inline-block with consistent spacing</li>
                    <li>Convert block elements to inline and observe the differences</li>
                    <li>Build a form with labels and inputs using inline-block alignment</li>
                    <li>Create a pricing table with inline-block cards</li>
                    <li>Experiment with vertical-align property on inline-block elements</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the main difference between inline and inline-block?",
            answer: "Inline elements flow with text and ignore width/height properties, while inline-block elements flow like inline but accept all box model properties including width, height, margins, and padding. Inline-block allows you to set dimensions while maintaining the inline flow behavior."
        },
        {
            question: "When should you use inline-block instead of float for layouts?",
            answer: "Use inline-block for simple horizontal layouts where you need elements to flow naturally and respect text-align. It's easier to center and doesn't require clearfix. Use float when you need text to wrap around elements or for more complex layouts. However, for modern layouts, Flexbox and Grid are generally preferred over both."
        },
    ]
},
        {
            id: "position-layout",
            title: "Position, Z-index & Floats",
            content: `
                <h3>Position Values:</h3>
                <ul>
                    <li><strong>static</strong>: Default, normal document flow</li>
                    <li><strong>relative</strong>: Positioned relative to normal position</li>
                    <li><strong>absolute</strong>: Positioned relative to nearest positioned ancestor</li>
                    <li><strong>fixed</strong>: Positioned relative to viewport</li>
                    <li><strong>sticky</strong>: Hybrid of relative and fixed</li>
                </ul>
                
                <h3>Offset Properties:</h3>
                <ul>
                    <li><strong>top, right, bottom, left</strong>: Positioning offsets</li>
                    <li>Work with relative, absolute, fixed, sticky positions</li>
                    <li>Negative values allowed</li>
                </ul>
                
                <h3>Z-index Stacking:</h3>
                <ul>
                    <li>Controls stacking order of positioned elements</li>
                    <li>Higher values appear in front</li>
                    <li>Only works on positioned elements (non-static)</li>
                    <li>Creates stacking context</li>
                </ul>
                
                <h3>Float & Clear Properties:</h3>
                <ul>
                    <li><strong>float</strong>: left, right, none (wraps content around element)</li>
                    <li><strong>clear</strong>: left, right, both, none (prevents floating)</li>
                    <li>Originally for text wrapping around images</li>
                </ul>
                
                <h3>Modern Layout Alternatives:</h3>
                <ul>
                    <li>Avoid floats for complex layouts</li>
                    <li>Use Flexbox for 1D layouts</li>
                    <li>Use CSS Grid for 2D layouts</li>
                    <li>Floats still useful for simple text wrapping</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>قيم الموضع:</h3>
                    <ul>
                        <li><strong>static</strong>: افتراضي، تدفق المستند العادي</li>
                        <li><strong>relative</strong>: يتم وضعه بالنسبة للموضع الطبيعي</li>
                        <li><strong>absolute</strong>: يتم وضعه بالنسبة لأقرب سلف موضع</li>
                        <li><strong>fixed</strong>: يتم وضعه بالنسبة لمنطقة العرض</li>
                        <li><strong>sticky</strong>: هجين بين relative و fixed</li>
                    </ul>
                    
                    <h3>خصائص الإزاحة:</h3>
                    <ul>
                        <li><strong>top, right, bottom, left</strong>: إزاحات الوضع</li>
                        <li>تعمل مع المواضع النسبية، المطلقة، الثابتة، اللاصقة</li>
                        <li>القيم السالبة مسموحة</li>
                    </ul>
                    
                    <h3>ترتيب الطبقات Z-index:</h3>
                    <ul>
                        <li>يتحكم في ترتيب طبقات العناصر الموضوعة</li>
                        <li>القيم الأعلى تظهر في المقدمة</li>
                        <li>يعمل فقط على العناصر الموضوعة (غير static)</li>
                        <li>ينشئ سياق تراص</li>
                    </ul>
                    
                    <h3>خصائص Float و Clear:</h3>
                    <ul>
                        <li><strong>float</strong>: left, right, none (يلف المحتوى حول العنصر)</li>
                        <li><strong>clear</strong>: left, right, both, none (يمنع الطفو)</li>
                        <li>في الأصل لتفاف النص حول الصور</li>
                    </ul>
                    
                    <h3>بدائل التخطيط الحديثة:</h3>
                    <ul>
                        <li>تجنب الطفو للتخطيطات المعقدة</li>
                        <li>استخدم Flexbox للتخطيطات أحادية البعد</li>
                        <li>استخدم CSS Grid للتخطيطات ثنائية البعد</li>
                        <li>الطفو لا يزال مفيداً للتفاف النص البسيط</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Position Examples",
                    content: `
                        <pre class="code-block">
/* Relative positioning */
.relative-box {
    position: relative;
    top: 10px;
    left: 20px;
}

/* Absolute positioning */
.parent {
    position: relative; /* Creates positioning context */
}
.absolute-child {
    position: absolute;
    top: 0;
    right: 0;
}

/* Fixed header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

/* Sticky navigation */
.sticky-nav {
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
}

/* Z-index stacking */
.back {
    position: absolute;
    z-index: 1;
}
.middle {
    position: absolute;
    z-index: 2;
}
.front {
    position: absolute;
    z-index: 3;
}
                        </pre>
                    `
                },
                {
                    title: "Float & Clear Examples",
                    content: `
                        <pre class="code-block">
/* Image float */
img {
    float: left;
    margin: 0 15px 15px 0;
}

/* Clear floats */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

/* Modern alternative to floats */
.container {
    display: flex;
    gap: 20px;
}

/* Grid alternative */
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

/* Text wrapping with shape-outside */
.circle {
    float: left;
    shape-outside: circle(50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Positioning Practice",
                    content: `
                        <p>Practice with positioning and layout:</p>
                        <ol>
                            <li>Create a fixed navigation bar that stays at the top</li>
                            <li>Build a modal dialog using absolute positioning</li>
                            <li>Create a sticky sidebar that scrolls then sticks</li>
                            <li>Experiment with z-index to create overlapping elements</li>
                            <li>Create a simple layout using floats and clear them properly</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should you use position: sticky vs fixed?",
                    answer: "Use sticky when you want an element to scroll normally until it reaches a certain point, then stick. Use fixed when you want an element to always stay in the same position relative to the viewport. Sticky requires a threshold (top, bottom, etc.) while fixed doesn't."
                },
                {
                    question: "Why avoid floats for modern layouts?",
                    answer: "Floats weren't designed for complex layouts, require clearfix hacks, can cause collapsing containers, have poor responsiveness, and are harder to maintain. Flexbox and Grid provide more predictable, flexible, and maintainable layout systems with better browser support for modern requirements."
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