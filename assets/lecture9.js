// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete CSS Mastery",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
                 {
    id: "pseudo-elements-classes",
    title: "Pseudo-elements & Pseudo-classes - Advanced Selectors",
    content: `
        <h3>Pseudo-classes (State-based):</h3>
        <p>Select elements based on their state or position</p>
        <ul>
            <li><strong>:hover</strong> - When mouse is over element</li>
            <li><strong>:focus</strong> - When element has keyboard focus</li>
            <li><strong>:active</strong> - While element is being activated</li>
            <li><strong>:visited</strong> - Links that have been visited</li>
            <li><strong>:first-child</strong> - First child of its parent</li>
            <li><strong>:last-child</strong> - Last child of its parent</li>
            <li><strong>:nth-child(n)</strong> - nth child (2, 3, even, odd, 3n)</li>
            <li><strong>:nth-of-type(n)</strong> - nth of specific type</li>
            <li><strong>:not(selector)</strong> - Elements that don't match selector</li>
            <li><strong>:checked</strong> - Checked radio/checkbox</li>
            <li><strong>:disabled</strong> - Disabled form elements</li>
        </ul>
        
        <h3>Pseudo-elements (Virtual elements):</h3>
        <p>Style specific parts of an element</p>
        <ul>
            <li><strong>::before</strong> - Insert content before element</li>
            <li><strong>::after</strong> - Insert content after element</li>
            <li><strong>::first-letter</strong> - Style first letter of text</li>
            <li><strong>::first-line</strong> - Style first line of text</li>
            <li><strong>::selection</strong> - Style highlighted text</li>
            <li><strong>::placeholder</strong> - Style input placeholder text</li>
        </ul>
        
        <h3>Common Use Cases:</h3>
        <ul>
            <li>Interactive states (hover, focus)</li>
            <li>Styling lists and tables</li>
            <li>Creating decorative elements</li>
            <li>Typography enhancements</li>
            <li>Form styling</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>الفئات الزائفة (مبنية على الحالة):</h3>
            <p>تحديد العناصر بناءً على حالتها أو موقعها</p>
            <ul>
                <li><strong>:hover</strong> - عندما يكون الفأرة فوق العنصر</li>
                <li><strong>:focus</strong> - عندما يكون العنصر لديه تركيز لوحة المفاتيح</li>
                <li><strong>:active</strong> - أثناء تنشيط العنصر</li>
                <li><strong>:visited</strong> - الروابط التي تمت زيارتها</li>
                <li><strong>:first-child</strong> - الابن الأول لوالده</li>
                <li><strong>:last-child</strong> - الابن الأخير لوالده</li>
                <li><strong>:nth-child(n)</strong> - الابن النوني (2, 3, even, odd, 3n)</li>
                <li><strong>:nth-of-type(n)</strong> - النوني من نوع محدد</li>
                <li><strong>:not(selector)</strong> - العناصر التي لا تطابق المحدد</li>
                <li><strong>:checked</strong> - زر الراديو/مربع الاختيار المحدد</li>
                <li><strong>:disabled</strong> - عناصر النموذج المعطلة</li>
            </ul>
            
            <h3>العناصر الزائفة (عناصر افتراضية):</h3>
            <p>تنسيق أجزاء محددة من العنصر</p>
            <ul>
                <li><strong>::before</strong> - إدراج محتوى قبل العنصر</li>
                <li><strong>::after</strong> - إدراج محتوى بعد العنصر</li>
                <li><strong>::first-letter</strong> - تنسيق الحرف الأول للنص</li>
                <li><strong>::first-line</strong> - تنسيق السطر الأول للنص</li>
                <li><strong>::selection</strong> - تنسيق النص المحدد</li>
                <li><strong>::placeholder</strong> - تنسيق نص العنصر النائب للإدخال</li>
            </ul>
            
            <h3>حالات الاستخدام الشائعة:</h3>
            <ul>
                <li>الحالات التفاعلية (hover, focus)</li>
                <li>تنسيق القوائم والجداول</li>
                <li>إنشاء عناصر زخرفية</li>
                <li>تحسينات الطباعة</li>
                <li>تنسيق النماذج</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Pseudo-class Examples",
            content: `
                <pre class="code-block">
/* Interactive states */
.button {
    background: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.button:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.button:active {
    transform: translateY(0);
}

.button:focus {
    outline: 3px solid rgba(0,123,255,0.3);
    outline-offset: 2px;
}

/* Link states */
a {
    color: #007bff;
    text-decoration: none;
}

a:visited {
    color: #6f42c1;
}

a:hover {
    text-decoration: underline;
}

/* Child selectors */
.list-item:first-child {
    font-weight: bold;
    border-top: 2px solid #007bff;
}

.list-item:last-child {
    border-bottom: 2px solid #007bff;
}

.list-item:nth-child(odd) {
    background: #f8f9fa;
}

.list-item:nth-child(even) {
    background: white;
}

.list-item:nth-child(3n) {
    color: #e74c3c;
}

/* Form states */
input:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0,123,255,0.1);
}

input:disabled {
    background: #f8f9fa;
    color: #6c757d;
    cursor: not-allowed;
}

input:checked + label {
    font-weight: bold;
    color: #28a745;
}

/* Negation */
.card:not(.featured) {
    opacity: 0.7;
}

.button:not(:last-child) {
    margin-right: 10px;
}
                </pre>
            `
        },
        {
            title: "Pseudo-element Examples",
            content: `
                <pre class="code-block">
/* Before and After */
.decorative-heading {
    position: relative;
    text-align: center;
}

.decorative-heading::before,
.decorative-heading::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 100px;
    height: 2px;
    background: #007bff;
}

.decorative-heading::before {
    left: 0;
}

.decorative-heading::after {
    right: 0;
}

/* Icon with ::before */
.button-with-icon::before {
    content: "→";
    margin-right: 8px;
    font-weight: bold;
}

/* Tooltip with ::after */
.tooltip {
    position: relative;
}

.tooltip:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 14px;
}

/* First letter styling */
.article-intro::first-letter {
    font-size: 3em;
    float: left;
    line-height: 1;
    margin-right: 8px;
    color: #007bff;
    font-weight: bold;
}

/* First line styling */
.article-lead::first-line {
    font-weight: bold;
    font-size: 1.2em;
    color: #2c3e50;
}

/* Selection styling */
::selection {
    background: #007bff;
    color: white;
}

::-moz-selection {
    background: #007bff;
    color: white;
}

/* Placeholder styling */
input::placeholder {
    color: #6c757d;
    font-style: italic;
}

/* Custom bullets with ::before */
.custom-list {
    list-style: none;
    padding: 0;
}

.custom-list li::before {
    content: "▸";
    color: #007bff;
    font-weight: bold;
    margin-right: 8px;
}

/* Quote styling with ::before and ::after */
.blockquote::before {
    content: "“";
    font-size: 4em;
    color: #007bff;
    line-height: 0;
    vertical-align: -0.4em;
    margin-right: 10px;
}

.blockquote::after {
    content: "”";
    font-size: 4em;
    color: #007bff;
    line-height: 0;
    vertical-align: -0.4em;
    margin-left: 10px;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Pseudo-classes & Elements Practice",
            content: `
                <p>Practice with pseudo-classes and pseudo-elements:</p>
                <ol>
                    <li>Create interactive buttons with hover, focus, and active states</li>
                    <li>Style a navigation menu with different states for current page</li>
                    <li>Build a striped table using nth-child selectors</li>
                    <li>Create decorative headings with ::before and ::after</li>
                    <li>Style form elements with :focus, :valid, and :invalid states</li>
                    <li>Add custom icons to buttons using ::before</li>
                    <li>Create a custom-styled blockquote with quotation marks</li>
                    <li>Build a tooltip system using ::after</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the difference between pseudo-classes and pseudo-elements?",
            answer: "Pseudo-classes (single colon) select elements based on their state (:hover, :focus, :first-child). Pseudo-elements (double colon) style specific parts of an element (::before, ::after, ::first-letter). Pseudo-classes target existing elements in specific states, while pseudo-elements create virtual elements that don't exist in the DOM."
        },
        {
            question: "When should you use single colon vs double colon syntax?",
            answer: "Use single colon for pseudo-classes (:hover, :focus) and double colon for pseudo-elements (::before, ::after). While most browsers support single colon for pseudo-elements for backward compatibility, the double colon syntax is the modern standard defined in CSS3. Always use double colon for pseudo-elements in new code."
        }
    ]
},
{
    id: "css-transitions",
    title: "CSS Transitions - Smooth Animations",
    content: `
        <h3>Transition Properties:</h3>
        <ul>
            <li><strong>transition-property</strong>: Which properties to animate</li>
            <li><strong>transition-duration</strong>: How long animation takes</li>
            <li><strong>transition-timing-function</strong>: Animation speed curve</li>
            <li><strong>transition-delay</strong>: When to start animation</li>
            <li><strong>transition</strong>: Shorthand for all properties</li>
        </ul>
        
        <h3>Animatable Properties:</h3>
        <ul>
            <li>Colors (color, background-color, border-color)</li>
            <li>Dimensions (width, height, padding, margin)</li>
            <li>Transforms (translate, rotate, scale, skew)</li>
            <li>Opacity and visibility</li>
            <li>Position (top, right, bottom, left)</li>
            <li>Shadows (box-shadow, text-shadow)</li>
        </ul>
        
        <h3>Timing Functions:</h3>
        <ul>
            <li><strong>ease</strong>: Slow start, fast, slow end (default)</li>
            <li><strong>linear</strong>: Constant speed</li>
            <li><strong>ease-in</strong>: Slow start</li>
            <li><strong>ease-out</strong>: Slow end</li>
            <li><strong>ease-in-out</strong>: Slow start and end</li>
            <li><strong>cubic-bezier()</strong>: Custom timing function</li>
            <li><strong>steps()</strong>: Discrete steps animation</li>
        </ul>
        
        <h3>Best Practices:</h3>
        <ul>
            <li>Use transitions for simple state changes</li>
            <li>Keep durations between 200-500ms for interactions</li>
            <li>Use appropriate timing functions</li>
            <li>Test performance on mobile devices</li>
            <li>Consider prefers-reduced-motion</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>خصائص الانتقال:</h3>
            <ul>
                <li><strong>transition-property</strong>: أي الخصائص يتم تحريكها</li>
                <li><strong>transition-duration</strong>: كم من الوقت تستغرق الرسوم المتحركة</li>
                <li><strong>transition-timing-function</strong>: منحنى سرعة الرسوم المتحركة</li>
                <li><strong>transition-delay</strong>: متى تبدأ الرسوم المتحركة</li>
                <li><strong>transition</strong>: اختصار لجميع الخصائص</li>
            </ul>
            
            <h3>الخصائص القابلة للتحريك:</h3>
            <ul>
                <li>الألوان (color, background-color, border-color)</li>
                <li>الأبعاد (width, height, padding, margin)</li>
                <li>التحويلات (translate, rotate, scale, skew)</li>
                <li>الشفافية والرؤية</li>
                <li>الموضع (top, right, bottom, left)</li>
                <li>الظلال (box-shadow, text-shadow)</li>
            </ul>
            
            <h3>دوال التوقيت:</h3>
            <ul>
                <li><strong>ease</strong>: بداية بطيئة، سريعة، نهاية بطيئة (افتراضي)</li>
                <li><strong>linear</strong>: سرعة ثابتة</li>
                <li><strong>ease-in</strong>: بداية بطيئة</li>
                <li><strong>ease-out</strong>: نهاية بطيئة</li>
                <li><strong>ease-in-out</strong>: بداية ونهاية بطيئة</li>
                <li><strong>cubic-bezier()</strong>: دالة توقيت مخصصة</li>
                <li><strong>steps()</strong>: رسوم متحركة بخطوات منفصلة</li>
            </ul>
            
            <h3>أفضل الممارسات:</h3>
            <ul>
                <li>استخدم الانتقالات لتغييرات الحالة البسيطة</li>
                <li>احتفظ بالمدة بين 200-500 مللي ثانية للتفاعلات</li>
                <li>استخدم دوال التوقيت المناسبة</li>
                <li>اختبر الأداء على أجهزة الجوال</li>
                <li>ضع في الاعتبار prefers-reduced-motion</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Basic Transition Examples",
            content: `
                <pre class="code-block">
/* Simple hover transition */
.button {
    background: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.button:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Multiple properties with different durations */
.card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: 
        transform 0.3s ease,
        box-shadow 0.3s ease,
        background-color 0.5s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    background-color: #f8f9fa;
}

/* Color transitions */
.color-transition {
    background: #ff6b6b;
    color: white;
    padding: 20px;
    transition: background-color 0.4s ease, color 0.4s ease;
}

.color-transition:hover {
    background: #4ecdc4;
    color: #333;
}

/* Delayed transitions */
.delayed-element {
    opacity: 0.7;
    transition: opacity 0.3s ease 0.2s;
}

.delayed-element:hover {
    opacity: 1;
}

/* Different timing functions */
.timing-examples {
    width: 100px;
    height: 100px;
    background: #007bff;
    margin: 10px;
    transition: transform 1s;
}

.ease { transition-timing-function: ease; }
.linear { transition-timing-function: linear; }
.ease-in { transition-timing-function: ease-in; }
.ease-out { transition-timing-function: ease-out; }
.ease-in-out { transition-timing-function: ease-in-out; }

.timing-examples:hover {
    transform: translateX(200px);
}

/* Custom cubic-bezier */
.custom-timing {
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.custom-timing:hover {
    transform: scale(1.1);
}
                </pre>
            `
        },
        {
            title: "Advanced Transition Techniques",
            content: `
                <pre class="code-block">
/* Menu slide transition */
.mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 300px;
    height: 100vh;
    background: white;
    transition: right 0.3s ease;
}

.mobile-menu.open {
    right: 0;
}

/* Accordion transition */
.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.accordion-item.active .accordion-content {
    max-height: 500px;
}

/* Loading bar transition */
.loading-bar {
    width: 0%;
    height: 4px;
    background: #007bff;
    transition: width 2s ease;
}

.loading-bar.active {
    width: 100%;
}

/* Staggered transitions */
.stagger-item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.stagger-item:nth-child(1) { transition-delay: 0.1s; }
.stagger-item:nth-child(2) { transition-delay: 0.2s; }
.stagger-item:nth-child(3) { transition-delay: 0.3s; }

.stagger-container:hover .stagger-item {
    opacity: 1;
    transform: translateY(0);
}

/* Toggle switch */
.toggle-switch {
    width: 60px;
    height: 30px;
    background: #ccc;
    border-radius: 15px;
    position: relative;
    transition: background-color 0.3s ease;
}

.toggle-switch::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 26px;
    height: 26px;
    background: white;
    border-radius: 50%;
    transition: transform 0.3s ease;
}

.toggle-switch.active {
    background: #007bff;
}

.toggle-switch.active::after {
    transform: translateX(30px);
}

/* Progress bar */
.progress-bar {
    width: 100%;
    height: 8px;
    background: #f0f0f0;
    border-radius: 4px;
    overflow: hidden;
}

.progress-fill {
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, #007bff, #00d4ff);
    transition: width 0.5s ease;
}

/* Morphing button */
.morph-button {
    padding: 12px 24px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 25px;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.morph-button.loading {
    padding: 12px 12px;
    border-radius: 50%;
    width: 44px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    * {
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
    }
}

/* Transform transitions */
.transform-example {
    width: 100px;
    height: 100px;
    background: #007bff;
    transition: transform 0.5s ease;
}

.transform-example:hover {
    transform: 
        translate(20px, 10px)
        rotate(15deg)
        scale(1.2);
}

/* Complex property transitions */
.complex-transition {
    background: #ff6b6b;
    color: white;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: 
        background 0.4s ease,
        transform 0.3s ease,
        box-shadow 0.3s ease,
        border-radius 0.5s ease;
}

.complex-transition:hover {
    background: #4ecdc4;
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    border-radius: 20px;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "CSS Transitions Practice",
            content: `
                <p>Practice with CSS transitions:</p>
                <ol>
                    <li>Create interactive buttons with multiple transition properties</li>
                    <li>Build a mobile navigation menu with slide transitions</li>
                    <li>Design loading animations with progress bars</li>
                    <li>Create accordion components with smooth height transitions</li>
                    <li>Experiment with different timing functions for various effects</li>
                    <li>Build a toggle switch with smooth state changes</li>
                    <li>Create staggered animations for list items</li>
                    <li>Design morphing buttons that change shape</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the difference between CSS transitions and animations?",
            answer: "Transitions are for simple state changes between two states (like hover) and need a trigger. Animations are more complex, can have multiple keyframes, run automatically, loop, and offer more control. Use transitions for simple interactions and animations for complex sequences or when you need more control over the animation flow."
        }
    ]
},
{
    id: "css-transforms",
    title: "CSS Transforms - 2D & 3D Transformations",
    content: `
        <h3>What are CSS Transforms?</h3>
        <p>CSS transforms allow you to manipulate elements in 2D and 3D space, including rotation, scaling, skewing, and translation.</p>
        
        <h3>2D Transform Functions:</h3>
        <ul>
            <li><strong>translate(x, y)</strong>: Move element along X and Y axes</li>
            <li><strong>rotate(angle)</strong>: Rotate element by specified angle</li>
            <li><strong>scale(x, y)</strong>: Scale element horizontally and vertically</li>
            <li><strong>skew(x-angle, y-angle)</strong>: Skew element along X and Y axes</li>
            <li><strong>matrix(a, b, c, d, e, f)</strong>: Complex transformations using matrix</li>
        </ul>
        
        <h3>3D Transform Functions:</h3>
        <ul>
            <li><strong>translate3d(x, y, z)</strong>: Move element in 3D space</li>
            <li><strong>rotate3d(x, y, z, angle)</strong>: Rotate around 3D vector</li>
            <li><strong>scale3d(x, y, z)</strong>: Scale in 3D space</li>
            <li><strong>perspective(depth)</strong>: Set perspective for 3D transforms</li>
        </ul>
        
        <h3>Transform Properties:</h3>
        <ul>
            <li><strong>transform-origin</strong>: Change the origin point of transformations</li>
            <li><strong>transform-style</strong>: preserve-3d or flat for nested 3D elements</li>
            <li><strong>perspective</strong>: Set perspective for 3D transformations</li>
            <li><strong>backface-visibility</strong>: Control visibility of back face in 3D</li>
        </ul>
        
        <h3>Common Use Cases:</h3>
        <ul>
            <li>Hover effects and animations</li>
            <li>3D card flips and transitions</li>
            <li>Interactive UI elements</li>
            <li>Image galleries and carousels</li>
            <li>Loading animations and spinners</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>ما هي تحويلات CSS؟</h3>
            <p>تسمح تحويلات CSS بمعالجة العناصر في الفضاء ثنائي وثلاثي الأبعاد، بما في ذلك التدوير، التحجيم، الانحراف، والانتقال.</p>
            
            <h3>دوال التحويل ثنائية الأبعاد:</h3>
            <ul>
                <li><strong>translate(x, y)</strong>: تحريك العنصر على طول المحورين X و Y</li>
                <li><strong>rotate(angle)</strong>: تدوير العنصر بزاوية محددة</li>
                <li><strong>scale(x, y)</strong>: تحجيم العنصر أفقيًا وعموديًا</li>
                <li><strong>skew(x-angle, y-angle)</strong>: انحراف العنصر على طول المحورين X و Y</li>
                <li><strong>matrix(a, b, c, d, e, f)</strong>: تحويلات معقدة باستخدام المصفوفة</li>
            </ul>
            
            <h3>دوال التحويل ثلاثية الأبعاد:</h3>
            <ul>
                <li><strong>translate3d(x, y, z)</strong>: تحريك العنصر في الفضاء ثلاثي الأبعاد</li>
                <li><strong>rotate3d(x, y, z, angle)</strong>: التدوير حول متجه ثلاثي الأبعاد</li>
                <li><strong>scale3d(x, y, z)</strong>: التحجيم في الفضاء ثلاثي الأبعاد</li>
                <li><strong>perspective(depth)</strong>: ضبط المنظور للتحويلات ثلاثية الأبعاد</li>
            </ul>
            
            <h3>خصائص التحويل:</h3>
            <ul>
                <li><strong>transform-origin</strong>: تغيير نقطة الأصل للتحويلات</li>
                <li><strong>transform-style</strong>: preserve-3d أو flat للعناصر ثلاثية الأبعاد المتداخلة</li>
                <li><strong>perspective</strong>: ضبط المنظور للتحويلات ثلاثية الأبعاد</li>
                <li><strong>backface-visibility</strong>: التحكم في رؤوية الوجه الخلفي في ثلاثي الأبعاد</li>
            </ul>
            
            <h3>حالات الاستخدام الشائعة:</h3>
            <ul>
                <li>تأثيرات التحويم والرسوم المتحركة</li>
                <li>قلب البطاقات ثلاثية الأبعاد والانتقالات</li>
                <li>عناصر واجهة المستخدم التفاعلية</li>
                <li>معارض الصور والدوائر</li>
                <li>رسوم التحميل المتحركة والدوائر</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "2D Transform Examples",
            content: `
                <pre class="code-block">
/* Basic 2D Transforms */
.translate {
    transform: translate(50px, 100px);
}

.rotate {
    transform: rotate(45deg);
}

.scale {
    transform: scale(1.5);
}

.scale-x {
    transform: scaleX(2);
}

.scale-y {
    transform: scaleY(0.5);
}

.skew {
    transform: skew(30deg, 20deg);
}

/* Multiple transforms */
.multiple {
    transform: translate(50px, 50px) rotate(45deg) scale(1.2);
}

/* Transform origin */
.origin-center {
    transform-origin: center;
    transform: rotate(45deg);
}

.origin-top-left {
    transform-origin: top left;
    transform: rotate(45deg);
}

.origin-custom {
    transform-origin: 20% 80%;
    transform: rotate(45deg);
}

/* Hover effects */
.hover-scale {
    transition: transform 0.3s ease;
}

.hover-scale:hover {
    transform: scale(1.1);
}

.hover-rotate {
    transition: transform 0.3s ease;
}

.hover-rotate:hover {
    transform: rotate(15deg);
}

/* Button animations */
.button {
    transition: all 0.3s ease;
}

.button:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
                </pre>
            `
        },
        {
            title: "3D Transform Examples",
            content: `
                <pre class="code-block">
/* 3D Transform Basics */
.translate-3d {
    transform: translate3d(50px, 100px, 50px);
}

.rotate-3d {
    transform: rotate3d(1, 1, 1, 45deg);
}

.scale-3d {
    transform: scale3d(1.5, 1.5, 1.5);
}

/* 3D Card Flip */
.card-container {
    perspective: 1000px;
    width: 200px;
    height: 300px;
}

.card {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.card-back {
    transform: rotateY(180deg);
}

.card-container:hover .card {
    transform: rotateY(180deg);
}

/* 3D Cube */
.cube {
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(25deg) rotateY(-25deg);
}

.cube-face {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 2px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
}

.front  { transform: rotateY(0deg) translateZ(100px); }
.back   { transform: rotateY(180deg) translateZ(100px); }
.right  { transform: rotateY(90deg) translateZ(100px); }
.left   { transform: rotateY(-90deg) translateZ(100px); }
.top    { transform: rotateX(90deg) translateZ(100px); }
.bottom { transform: rotateX(-90deg) translateZ(100px); }

/* Perspective examples */
.perspective-500 {
    perspective: 500px;
}

.perspective-1000 {
    perspective: 1000px;
}

.perspective-origin {
    perspective: 500px;
    perspective-origin: 25% 75%;
}

/* 3D Hover Effects */
.flip-on-hover {
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flip-on-hover:hover {
    transform: rotateY(180deg);
}

/* Loading Spinner with transforms */
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "CSS Transforms Practice",
            content: `
                <p>Practice with CSS transforms:</p>
                <ol>
                    <li>Create interactive buttons with hover transform effects</li>
                    <li>Build a 3D card flip animation for a product card</li>
                    <li>Design a loading spinner using rotate transforms</li>
                    <li>Create an image gallery with scale and rotate hover effects</li>
                    <li>Build a 3D cube using multiple transform functions</li>
                    <li>Implement a flip animation for login/signup forms</li>
                    <li>Create a parallax scrolling effect with translateZ</li>
                    <li>Design a menu that slides in with 3D transforms</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the difference between translate() and position: relative with top/left?",
            answer: "translate() uses the GPU for smoother animations and doesn't affect document flow or other elements. position: relative affects the document flow and can cause layout shifts. translate() is more performant for animations and doesn't trigger layout recalculations."
        },
        {
            question: "When should you use transform-style: preserve-3d?",
            answer: "Use transform-style: preserve-3d when you have nested elements that need to maintain their 3D positioning relative to their parent. This is essential for creating complex 3D scenes where child elements should exist in the same 3D space as their parent, like in 3D cubes or card flips with multiple layers."
        },
        {
            question: "How does perspective work in CSS 3D transforms?",
            answer: "Perspective creates the illusion of depth by making elements closer to the viewer appear larger and elements farther away appear smaller. The perspective value represents the distance between the viewer and the z=0 plane. Lower values create more dramatic 3D effects, while higher values create subtler effects."
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