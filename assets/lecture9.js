// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete CSS Mastery",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
{
    id: "css-units",
    title: "CSS Units & Measurements - Complete Guide",
    content: `
        <h3>Absolute Units:</h3>
        <ul>
            <li><strong>px</strong>: Pixels (1px = 1/96th of 1in)</li>
            <li><strong>pt</strong>: Points (1pt = 1/72nd of 1in)</li>
            <li><strong>pc</strong>: Picas (1pc = 12pt)</li>
            <li><strong>in</strong>: Inches (1in = 96px = 2.54cm)</li>
            <li><strong>cm</strong>: Centimeters</li>
            <li><strong>mm</strong>: Millimeters</li>
        </ul>
        
        <h3>Relative Units:</h3>
        <ul>
            <li><strong>%</strong>: Percentage of parent element</li>
            <li><strong>em</strong>: Relative to font-size of element</li>
            <li><strong>rem</strong>: Relative to font-size of root element</li>
            <li><strong>vw</strong>: 1% of viewport width</li>
            <li><strong>vh</strong>: 1% of viewport height</li>
            <li><strong>vmin</strong>: 1% of viewport's smaller dimension</li>
            <li><strong>vmax</strong>: 1% of viewport's larger dimension</li>
            <li><strong>ch</strong>: Width of the "0" character</li>
            <li><strong>ex</strong>: Height of the "x" character</li>
        </ul>
        
        <h3>When to Use Which Unit:</h3>
        <ul>
            <li><strong>px</strong>: Borders, fixed-size elements</li>
            <li><strong>rem</strong>: Font sizes, padding, margins (recommended)</li>
            <li><strong>em</strong>: Components that should scale with their context</li>
            <li><strong>%</strong>: Layout containers, widths</li>
            <li><strong>vw/vh</strong>: Full-screen layouts, hero sections</li>
            <li><strong>ch</strong>: Typography, code blocks, reading measures</li>
        </ul>
        
        <h3>Best Practices:</h3>
        <ul>
            <li>Use rem for most sizing (prevents compounding issues)</li>
            <li>Set root font-size to 62.5% for easier rem calculations (1rem = 10px)</li>
            <li>Use em for properties that should scale with font-size</li>
            <li>Combine vw/vh with clamp() for fluid typography</li>
            <li>Use ch units for optimal line lengths (45-75 characters)</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>الوحدات المطلقة:</h3>
            <ul>
                <li><strong>px</strong>: البكسل (1px = 1/96 من 1 بوصة)</li>
                <li><strong>pt</strong>: النقاط (1pt = 1/72 من 1 بوصة)</li>
                <li><strong>pc</strong>: البيكا (1pc = 12pt)</li>
                <li><strong>in</strong>: البوصة (1in = 96px = 2.54cm)</li>
                <li><strong>cm</strong>: السنتيمتر</li>
                <li><strong>mm</strong>: المليمتر</li>
            </ul>
            
            <h3>الوحدات النسبية:</h3>
            <ul>
                <li><strong>%</strong>: النسبة المئوية للعنصر الأب</li>
                <li><strong>em</strong>: نسبة إلى حجم خط العنصر</li>
                <li><strong>rem</strong>: نسبة إلى حجم خط العنصر الجذر</li>
                <li><strong>vw</strong>: 1% من عرض منطقة العرض</li>
                <li><strong>vh</strong>: 1% من ارتفاع منطقة العرض</li>
                <li><strong>vmin</strong>: 1% من البعد الأصغر لمنطقة العرض</li>
                <li><strong>vmax</strong>: 1% من البعد الأكبر لمنطقة العرض</li>
                <li><strong>ch</strong>: عرض حرف "0"</li>
                <li><strong>ex</strong>: ارتفاع حرف "x"</li>
            </ul>
            
            <h3>متى تستخدم كل وحدة:</h3>
            <ul>
                <li><strong>px</strong>: الحدود، العناصر ذات الحجم الثابت</li>
                <li><strong>rem</strong>: أحجام الخطوط، الحشو، الهوامش (موصى به)</li>
                <li><strong>em</strong>: المكونات التي يجب أن تتطابق مع سياقها</li>
                <li><strong>%</strong>: حاويات التخطيط، الأعرض</li>
                <li><strong>vw/vh</strong>: تخطيطات كاملة الشاشة، أقسام البطل</li>
                <li><strong>ch</strong>: الطباعة، كتل الكود، مقاييس القراءة</li>
            </ul>
            
            <h3>أفضل الممارسات:</h3>
            <ul>
                <li>استخدم rem لمعظم الأحجام (يمنع مشاكل التراكم)</li>
                <li>اضبط حجم الخط الجذري على 62.5% لسهولة حساب rem (1rem = 10px)</li>
                <li>استخدم em للخصائص التي يجب أن تتطابق مع حجم الخط</li>
                <li>اجمع vw/vh مع clamp() للطباعة السائلة</li>
                <li>استخدم وحدات ch لأطوال الأسطر المثلى (75-45 حرفًا)</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "CSS Units Implementation",
            content: `
                <pre class="code-block">
/* Root font-size trick for easy rem calculations */
html {
    font-size: 62.5%; /* 1rem = 10px */
}

body {
    font-size: 1.6rem; /* 16px */
}

/* Using different units */
.container {
    width: 90%; /* Percentage of parent */
    max-width: 120rem; /* 1200px */
    margin: 0 auto;
    padding: 2rem; /* 20px */
}

.heading {
    font-size: 3.2rem; /* 32px */
    margin-bottom: 1.6rem; /* 16px */
}

.paragraph {
    font-size: 1.8rem; /* 18px */
    line-height: 1.6; /* Unitless - multiplies font-size */
    max-width: 60ch; /* Optimal reading width */
}

/* Fluid typography with clamp() */
.fluid-heading {
    font-size: clamp(2.4rem, 5vw, 4.8rem);
}

/* Viewport units for full-screen sections */
.hero-section {
    height: 100vh; /* Full viewport height */
    width: 100vw; /* Full viewport width */
    padding: 5vmin; /* Uses smaller viewport dimension */
}

/* Em units for scalable components */
.card {
    font-size: 1.6rem;
    padding: 1em; /* 16px - scales with font-size */
}

.card--large {
    font-size: 2rem; /* Now padding becomes 20px */
}

/* Complex unit combinations */
.responsive-container {
    width: min(90%, 120rem); /* Uses smaller value */
    height: max(50vh, 40rem); /* Uses larger value */
    padding: clamp(2rem, 4vw, 4rem);
}

/* ch units for typography */
.article-content {
    max-width: 65ch; /* Optimal line length for reading */
    line-height: 1.7;
}

/* ex units for vertical rhythm */
.icon-button::before {
    content: "↑";
    font-size: 2ex; /* Relative to font's x-height */
    vertical-align: middle;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "CSS Units Practice",
            content: `
                <p>Practice with CSS units and measurements:</p>
                <ol>
                    <li>Create a responsive layout using rem units for all spacing</li>
                    <li>Build a full-screen hero section using vw and vh units</li>
                    <li>Implement fluid typography with clamp() function</li>
                    <li>Create a reading-optimized layout using ch units</li>
                    <li>Build a component that scales using em units</li>
                    <li>Experiment with viewport units for responsive containers</li>
                    <li>Create a grid system using percentage and rem units</li>
                    <li>Implement a spacing scale using CSS custom properties with rem</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the difference between em and rem units?",
            answer: "em is relative to the font-size of the current element (can compound), while rem is relative to the root element's font-size (consistent across all elements). Use em for properties that should scale with their local context, and rem for consistent spacing and sizing throughout your application to avoid compounding issues."
        },
        {
            question: "When should you use viewport units vs percentage units?",
            answer: "Use viewport units (vw, vh) when you want elements to scale relative to the browser window size. Use percentage units when you want elements to scale relative to their parent container. Viewport units are great for full-screen layouts, while percentage units are better for component-level responsive design within their containers."
        },
        {
            question: "Why is the 62.5% font-size trick useful?",
            answer: "Setting the root font-size to 62.5% makes 1rem equal to 10px (assuming browser default of 16px), which makes mental math much easier. 1.6rem = 16px, 2.4rem = 24px, etc. This maintains accessibility (users can still zoom) while providing a convenient calculation system."
        }
    ]
},
{
    id: "css-small-properties",
    title: "Small but Powerful CSS Properties",
    content: `
        <h3>Cursor Property:</h3>
        <p>Controls the mouse cursor appearance when hovering over an element.</p>
        <ul>
            <li><strong>pointer</strong>: Hand cursor for clickable elements</li>
            <li><strong>default</strong>: Default arrow cursor</li>
            <li><strong>text</strong>: I-beam for selectable text</li>
            <li><strong>move</strong>: Indicates draggable element</li>
            <li><strong>not-allowed</strong>: Shows action is disabled</li>
            <li><strong>wait</strong>: Loading/processing state</li>
            <li><strong>grab/grabbing</strong>: Drag and drop interactions</li>
        </ul>
        
        <h3>Scroll Behavior:</h3>
        <p>Controls smooth scrolling for the entire page or specific elements.</p>
        <ul>
            <li><strong>scroll-behavior: smooth</strong>: Enables smooth scrolling</li>
            <li><strong>scroll-behavior: auto</strong>: Default instant scrolling</li>
            <li><strong>scroll-padding</strong>: Offset for scroll targets</li>
            <li><strong>scroll-margin</strong>: Margin for scroll snapping</li>
        </ul>
        
        <h3>Other Useful Properties:</h3>
        <ul>
            <li><strong>pointer-events</strong>: Control mouse interaction with elements</li>
            <li><strong>user-select</strong>: Control text selection behavior</li>
            <li><strong>visibility</strong>: Hide elements while preserving space</li>
            <li><strong>opacity</strong>: Control element transparency</li>
            <li><strong>resize</strong>: Allow users to resize elements</li>
            <li><strong>overflow</strong>: Control content overflow behavior</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>خاصية المؤشر:</h3>
            <p>تتحكم في مظهر مؤشر الفأرة عند التمرير فوق عنصر.</p>
            <ul>
                <li><strong>pointer</strong>: مؤشر يد للعناصر القابلة للنقر</li>
                <li><strong>default</strong>: مؤشر السهم الافتراضي</li>
                <li><strong>text</strong>: I-beam للنص القابل للتحديد</li>
                <li><strong>move</strong>: يشير إلى عنصر قابل للسحب</li>
                <li><strong>not-allowed</strong>: يظهر أن الإجراء معطل</li>
                <li><strong>wait</strong>: حالة التحميل/المعالجة</li>
                <li><strong>grab/grabbing</strong>: تفاعلات السحب والإفلات</li>
            </ul>
            
            <h3>سلوك التمرير:</h3>
            <p>يتحكم في التمرير السلس للصفحة بأكملها أو عناصر محددة.</p>
            <ul>
                <li><strong>scroll-behavior: smooth</strong>: يمكّن التمرير السلس</li>
                <li><strong>scroll-behavior: auto</strong>: التمرير الفوري الافتراضي</li>
                <li><strong>scroll-padding</strong>: إزاحة لأهداف التمرير</li>
                <li><strong>scroll-margin</strong>: هامش للالتقاط التمرير</li>
            </ul>
            
            <h3>خصائص مفيدة أخرى:</h3>
            <ul>
                <li><strong>pointer-events</strong>: التحكم في تفاعل الفأرة مع العناصر</li>
                <li><strong>user-select</strong>: التحكم في سلوك تحديد النص</li>
                <li><strong>visibility</strong>: إخفاء العناصر مع الحفاظ على المساحة</li>
                <li><strong>opacity</strong>: التحكم في شفافية العنصر</li>
                <li><strong>resize</strong>: السماح للمستخدمين بتغيير حجم العناصر</li>
                <li><strong>overflow</strong>: التحكم في سلوك تجاوز المحتوى</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Small Properties Implementation",
            content: `
                <pre class="code-block">
/* Cursor Examples */
.clickable {
    cursor: pointer;
}

.draggable {
    cursor: grab;
}

.draggable:active {
    cursor: grabbing;
}

.text-selectable {
    cursor: text;
}

.disabled-element {
    cursor: not-allowed;
    opacity: 0.6;
}

.loading {
    cursor: wait;
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Specific element smooth scroll */
.scroll-container {
    scroll-behavior: smooth;
    height: 300px;
    overflow-y: auto;
}

/* Scroll padding for fixed headers */
.scroll-target {
    scroll-margin-top: 80px; /* Account for fixed header */
}

/* Pointer Events */
.click-through {
    pointer-events: none;
}

.interactive {
    pointer-events: auto;
}

/* User Select */
.non-selectable {
    user-select: none;
}

.text-selectable {
    user-select: text;
}

.select-all {
    user-select: all;
}

/* Visibility vs Display */
.hidden-visible {
    visibility: hidden; /* Space preserved */
}

.hidden-display {
    display: none; /* Space not preserved */
}

/* Opacity */
.transparent {
    opacity: 0.5;
}

.fade-in {
    opacity: 0;
    animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
    to { opacity: 1; }
}

/* Resize Property */
.resizable {
    resize: both;
    overflow: auto;
    min-height: 100px;
    min-width: 100px;
}

.resizable-horizontal {
    resize: horizontal;
    overflow: auto;
    min-width: 100px;
}

.resizable-vertical {
    resize: vertical;
    overflow: auto;
    min-height: 100px;
}

/* Overflow Examples */
.overflow-hidden {
    overflow: hidden;
}

.overflow-scroll {
    overflow: scroll;
}

.overflow-auto {
    overflow: auto;
}

.overflow-x-hidden {
    overflow-x: hidden;
}

.overflow-y-scroll {
    overflow-y: scroll;
}

/* Custom Scrollbars */
.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #3498db #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #3498db;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #2980b9;
}

/* Scroll Snap */
.scroll-snap-container {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 400px;
}

.scroll-snap-item {
    scroll-snap-align: start;
    height: 100%;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Small Properties Practice",
            content: `
                <p>Practice with small but powerful CSS properties:</p>
                <ol>
                    <li>Create interactive buttons with appropriate cursor states</li>
                    <li>Implement smooth scrolling for anchor links</li>
                    <li>Build a component that uses container queries for responsive design</li>
                    <li>Create a resizable textarea or div element</li>
                    <li>Style custom scrollbars for specific containers</li>
                    <li>Implement scroll snapping for a image gallery</li>
                    <li>Create elements with different pointer-events behaviors</li>
                    <li>Build a fade-in animation using opacity property</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the difference between display: none and visibility: hidden?",
            answer: "display: none completely removes the element from the document flow and it takes no space. visibility: hidden hides the element but it still occupies space in the layout. display: none also affects accessibility as screen readers typically skip these elements, while visibility: hidden elements are still accessible to screen readers."
        },
        {
            question: "How does scroll-behavior: smooth improve user experience?",
            answer: "scroll-behavior: smooth creates animated scrolling transitions instead of instant jumps, which provides visual context and reduces disorientation. It's particularly useful for single-page applications, anchor links, and navigation within long pages. However, it should be used judiciously as some users may prefer reduced motion for accessibility reasons."
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