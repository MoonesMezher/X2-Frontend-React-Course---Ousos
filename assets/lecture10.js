// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete CSS Mastery",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
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
{
    id: "dimensions-responsive",
    title: "Width, Height & Responsive Properties",
    content: `
        <h3>Basic Dimension Properties:</h3>
        <ul>
            <li><strong>width</strong>: Sets element width</li>
            <li><strong>height</strong>: Sets element height</li>
            <li><strong>min-width</strong>: Minimum allowed width</li>
            <li><strong>max-width</strong>: Maximum allowed width</li>
            <li><strong>min-height</strong>: Minimum allowed height</li>
            <li><strong>max-height</strong>: Maximum allowed height</li>
        </ul>
        
        <h3>Responsive Without Media Queries:</h3>
        <ul>
            <li><strong>min()</strong>: Uses smallest value from list</li>
            <li><strong>max()</strong>: Uses largest value from list</li>
            <li><strong>clamp()</strong>: Clamps value between min and max</li>
            <li><strong>fit-content</strong>: Fits content while respecting min/max</li>
            <li><strong>minmax()</strong>: Defines size range (CSS Grid)</li>
            <li><strong>auto-fill/auto-fit</strong>: Automatic grid tracks</li>
        </ul>
        
        <h3>Modern CSS Functions:</h3>
        <ul>
            <li><strong>clamp(min, preferred, max)</strong>: Responsive value in one line</li>
            <li><strong>min(value1, value2, ...)</strong>: Returns smallest value</li>
            <li><strong>max(value1, value2, ...)</strong>: Returns largest value</li>
            <li><strong>calc()</strong>: Mathematical calculations</li>
        </ul>
        
        <h3>Intrinsic Sizing Keywords:</h3>
        <ul>
            <li><strong>fit-content</strong>: Fits content while respecting constraints</li>
            <li><strong>min-content</strong>: Minimum size based on content</li>
            <li><strong>max-content</strong>: Maximum size based on content</li>
            <li><strong>auto</strong>: Browser determines size</li>
        </ul>
        
        <h3>Best Practices for Responsive Design:</h3>
        <ul>
            <li>Use max-width: 100% for images and containers</li>
            <li>Set min-height instead of height for flexible containers</li>
            <li>Use clamp() for fluid typography and spacing</li>
            <li>Combine min() and max() for complex responsive logic</li>
            <li>Use fit-content for elements that should shrink-wrap</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>خصائص الأبعاد الأساسية:</h3>
            <ul>
                <li><strong>width</strong>: يحدد عرض العنصر</li>
                <li><strong>height</strong>: يحدد ارتفاع العنصر</li>
                <li><strong>min-width</strong>: الحد الأدنى المسموح به للعرض</li>
                <li><strong>max-width</strong>: الحد الأقصى المسموح به للعرض</li>
                <li><strong>min-height</strong>: الحد الأدنى المسموح به للارتفاع</li>
                <li><strong>max-height</strong>: الحد الأقصى المسموح به للارتفاع</li>
            </ul>
            
            <h3>التجاوب بدون استعلامات الوسائط:</h3>
            <ul>
                <li><strong>min()</strong>: يستخدم أصغر قيمة من القائمة</li>
                <li><strong>max()</strong>: يستخدم أكبر قيمة من القائمة</li>
                <li><strong>clamp()</strong>: يثبت القيمة بين الحد الأدنى والأقصى</li>
                <li><strong>fit-content</strong>: يناسب المحتوى مع احترام الحدود الدنيا/القصوى</li>
                <li><strong>minmax()</strong>: يحدد نطاق الحجم (شبكة CSS)</li>
                <li><strong>auto-fill/auto-fit</strong>: مسارات الشبكة التلقائية</li>
            </ul>
            
            <h3>دوال CSS الحديثة:</h3>
            <ul>
                <li><strong>clamp(min, preferred, max)</strong>: قيمة متجاوبة في سطر واحد</li>
                <li><strong>min(value1, value2, ...)</strong>: يعيد أصغر قيمة</li>
                <li><strong>max(value1, value2, ...)</strong>: يعيد أكبر قيمة</li>
                <li><strong>calc()</strong>: العمليات الحسابية</li>
            </ul>
            
            <h3>كلمات رئيسية لحجم الجوهر:</h3>
            <ul>
                <li><strong>fit-content</strong>: يناسب المحتوى مع احترام القيود</li>
                <li><strong>min-content</strong>: الحد الأدنى للحجم بناءً على المحتوى</li>
                <li><strong>max-content</strong>: الحد الأقصى للحجم بناءً على المحتوى</li>
                <li><strong>auto</strong>: المتصفح يحدد الحجم</li>
            </ul>
            
            <h3>أفضل الممارسات للتصميم المتجاوب:</h3>
            <ul>
                <li>استخدم max-width: 100% للصور والحاويات</li>
                <li>اضبط min-height بدلاً من height للحاويات المرنة</li>
                <li>استخدم clamp() للطباعة والتباعد السائل</li>
                <li>اجمع min() و max() للمنطق المتجاوب المعقد</li>
                <li>استخدم fit-content للعناصر التي يجب أن تنكمش حول المحتوى</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Responsive Dimension Examples",
            content: `
                <pre class="code-block">
/* Basic responsive container */
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Fluid typography with clamp() */
.fluid-heading {
    font-size: clamp(2rem, 5vw, 4rem);
}

.fluid-text {
    font-size: clamp(1.6rem, 2.5vw, 2rem);
}

/* Using min() and max() for responsive logic */
.responsive-card {
    width: min(100%, 400px); /* Never exceeds 400px */
    height: max(200px, 30vh); /* At least 200px, but 30vh if larger */
}

/* Complex responsive layout without media queries */
.sidebar {
    width: clamp(250px, 25vw, 300px);
}

.main-content {
    width: min(800px, 100% - 2rem);
}

/* Intrinsic sizing */
.intrinsic-width {
    width: fit-content;
    min-width: min-content;
    max-width: max-content;
}

/* Responsive images */
.responsive-image {
    max-width: 100%;
    height: auto;
}

.cover-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

/* CSS Grid with auto-fill for responsive layouts */
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
}

/* Flexbox with responsive items */
.flex-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.flex-item {
    flex: 1 1 300px; /* Grow, shrink, basis */
}

/* Aspect ratio containers */
.aspect-ratio-16-9 {
    aspect-ratio: 16 / 9;
    width: 100%;
}

.aspect-ratio-1-1 {
    aspect-ratio: 1 / 1;
    width: min(400px, 100%);
}

/* Complex clamp examples */
.complex-sizing {
    width: clamp(300px, 50vw, 600px);
    height: clamp(200px, 40vh, 400px);
    padding: clamp(1rem, 3vw, 2rem);
}

/* Container queries style with min/max */
.component {
    width: 100%;
    max-width: 500px;
}

.component__inner {
    padding: max(1rem, 5%);
    font-size: min(1.6rem, 4vw);
}

/* Responsive spacing system */
:root {
    --space-xs: clamp(0.5rem, 1vw, 1rem);
    --space-sm: clamp(1rem, 2vw, 1.5rem);
    --space-md: clamp(1.5rem, 3vw, 2rem);
    --space-lg: clamp(2rem, 4vw, 3rem);
}

.card {
    padding: var(--space-md);
    margin: var(--space-sm);
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Responsive Dimensions Practice",
            content: `
                <p>Practice with responsive dimensions and properties:</p>
                <ol>
                    <li>Create a responsive container system using clamp() and min()/max()</li>
                    <li>Build a card component that scales intelligently without media queries</li>
                    <li>Implement fluid typography across different screen sizes</li>
                    <li>Create a responsive grid layout using auto-fill and minmax()</li>
                    <li>Build a sidebar that adjusts its width based on viewport size</li>
                    <li>Create responsive images that maintain aspect ratios</li>
                    <li>Implement a spacing system using CSS custom properties and clamp()</li>
                    <li>Build a component that uses intrinsic sizing keywords</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the difference between auto-fill and auto-fit in CSS Grid?",
            answer: "auto-fill creates as many tracks as possible even if they're empty, while auto-fit collapses empty tracks and expands filled ones to take available space. Use auto-fill when you want consistent track sizes regardless of item count, and auto-fit when you want items to expand and fill available space."
        },
        {
            question: "When should you use clamp() vs min()/max()?",
            answer: "Use clamp() when you want a value that has a minimum, ideal, and maximum (like fluid typography). Use min() when you want to ensure a value doesn't exceed a certain limit. Use max() when you want to ensure a value doesn't go below a certain limit. They can be combined for complex responsive logic without media queries."
        },
        {
            question: "How do intrinsic sizing keywords work?",
            answer: "min-content uses the minimum size needed to contain the content (smallest possible). max-content uses the maximum size needed to contain content without wrapping. fit-content acts like min-content but won't shrink below min-width/max-width constraints. auto lets the browser decide based on context and available space."
        }
    ]
},
        {
            id: "responsive-animations",
            title: "Responsive Design & Animations",
            content: `
                <h3>Media Queries:</h3>
                <ul>
                    <li><strong>@media</strong>: Rule for conditional CSS</li>
                    <li><strong>Logical operators</strong>: and, not, only</li>
                    <li><strong>Media types</strong>: screen, print, speech</li>
                    <li><strong>Media features</strong>: width, height, orientation, hover</li>
                </ul>
                
                <h3>Common Breakpoints:</h3>
                <ul>
                    <li>Mobile: 320px - 480px</li>
                    <li>Tablet: 481px - 768px</li>
                    <li>Small screens: 769px - 1024px</li>
                    <li>Large screens: 1025px+</li>
                </ul>
                
                <h3>Viewport Meta Tag:</h3>
                <pre class="code-block">
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                </pre>
                
                <h3>Fluid Sizing with clamp():</h3>
                <p>clamp(min, preferred, max) - responsive values in one line</p>
                
                <h3>CSS Animations:</h3>
                <ul>
                    <li><strong>@keyframes</strong>: Define animation sequence</li>
                    <li><strong>animation-name</strong>: Reference to @keyframes</li>
                    <li><strong>animation-duration</strong>: How long animation runs</li>
                    <li><strong>animation-iteration-count</strong>: infinite, number</li>
                    <li><strong>animation-direction</strong>: normal, reverse, alternate</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>استعلامات الوسائط:</h3>
                    <ul>
                        <li><strong>@media</strong>: قاعدة لـ CSS الشرطي</li>
                        <li><strong>المشغلات المنطقية</strong>: and, not, only</li>
                        <li><strong>أنواع الوسائط</strong>: screen, print, speech</li>
                        <li><strong>ميزات الوسائط</strong>: width, height, orientation, hover</li>
                    </ul>
                    
                    <h3>نقاط التوقف الشائعة:</h3>
                    <ul>
                        <li>الجوال: 320px - 480px</li>
                        <li>اللوحي: 481px - 768px</li>
                        <li>الشاشات الصغيرة: 769px - 1024px</li>
                        <li>الشاشات الكبيرة: 1025px+</li>
                    </ul>
                    
                    <h3>وسم Viewport Meta:</h3>
                    <pre class="code-block" dir="ltr">
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                    </pre>
                    
                    <h3>تحديد الحجم السائل مع clamp():</h3>
                    <p>clamp(min, preferred, max) - قيم متجاوبة في سطر واحد</p>
                    
                    <h3>رسوم CSS المتحركة:</h3>
                    <ul>
                        <li><strong>@keyframes</strong>: تعريف تسلسل الرسوم المتحركة</li>
                        <li><strong>animation-name</strong>: المرجع إلى @keyframes</li>
                        <li><strong>animation-duration</strong>: كم من الوقت تعمل الرسوم المتحركة</li>
                        <li><strong>animation-iteration-count</strong>: infinite, number</li>
                        <li><strong>animation-direction</strong>: normal, reverse, alternate</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Media Query Examples",
                    content: `
                        <pre class="code-block">
/* Mobile first approach */
.container {
    padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        padding: 20px;
        max-width: 720px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        padding: 40px;
    }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    body {
        background: #333;
        color: white;
    }
}

/* Print styles */
@media print {
    .no-print {
        display: none;
    }
}

/* Complex media query */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
                        </pre>
                    `
                },
                {
                    title: "Animations & Transforms Examples",
                    content: `
                        <pre class="code-block">
/* Transitions */
.button {
    transition: all 0.3s ease;
}
.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Keyframes animation */
@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-element {
    animation: slideIn 0.5s ease-out;
}

/* Bounce animation */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

.bounce {
    animation: bounce 2s infinite;
}

/* Transform examples */
.transform-1 {
    transform: scale(1.1);
}

.transform-2 {
    transform: rotate(45deg);
}

.transform-3 {
    transform: translate(50px, 100px);
}

.transform-4 {
    transform: skew(10deg, 5deg);
}

/* Multiple transforms */
.complex-transform {
    transform: scale(1.1) rotate(5deg) translateX(10px);
}

/* Fluid typography with clamp */
.fluid-text {
    font-size: clamp(1rem, 2.5vw, 2rem);
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Responsive & Animations Practice",
                    content: `
                        <p>Practice with responsive design and animations:</p>
                        <ol>
                            <li>Create a mobile-first responsive layout with 3 breakpoints</li>
                            <li>Add smooth transitions to interactive elements</li>
                            <li>Create a loading spinner using CSS animations</li>
                            <li>Build a responsive navigation that transforms on mobile</li>
                            <li>Use clamp() for fluid typography and spacing</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between transition and animation?",
                    answer: "Transitions are for simple state changes (hover, focus) and need a trigger. Animations are more complex, can have multiple keyframes, run automatically, and offer more control. Use transitions for simple interactions, animations for complex sequences."
                },
                {
                    question: "Why use mobile-first approach in media queries?",
                    answer: "Mobile-first means styling for mobile first, then enhancing for larger screens. It's more efficient (less code to override), performs better, and aligns with progressive enhancement. Start with min-width queries going upward, rather than max-width going downward."
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