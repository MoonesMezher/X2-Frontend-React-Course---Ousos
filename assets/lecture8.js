// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete CSS Mastery",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "flexbox",
            title: "CSS Flexbox Layout",
            content: `
                <h3>Flexbox Overview:</h3>
                <p>One-dimensional layout model for arranging items in rows or columns.</p>
                
                <h3>Flex Container Properties:</h3>
                <ul>
                    <li><strong>display: flex</strong>: Creates flex container</li>
                    <li><strong>flex-direction</strong>: row, row-reverse, column, column-reverse</li>
                    <li><strong>justify-content</strong>: flex-start, center, flex-end, space-between, space-around, space-evenly</li>
                    <li><strong>align-items</strong>: stretch, flex-start, center, flex-end, baseline</li>
                    <li><strong>flex-wrap</strong>: nowrap, wrap, wrap-reverse</li>
                    <li><strong>gap</strong>: Space between flex items</li>
                </ul>
                
                <h3>Main Axis vs Cross Axis:</h3>
                <ul>
                    <li><strong>Main Axis</strong>: Defined by flex-direction</li>
                    <li><strong>Cross Axis</strong>: Perpendicular to main axis</li>
                    <li>justify-content works on main axis</li>
                    <li>align-items works on cross axis</li>
                </ul>
                
                <h3>Flex Item Properties:</h3>
                <ul>
                    <li><strong>flex-grow</strong>: Ability to grow relative to others</li>
                    <li><strong>flex-shrink</strong>: Ability to shrink relative to others</li>
                    <li><strong>flex-basis</strong>: Initial size before growing/shrinking</li>
                    <li><strong>align-self</strong>: Override align-items for individual item</li>
                    <li><strong>order</strong>: Visual reordering of items</li>
                </ul>
                
                <h3>Common Use Cases:</h3>
                <ul>
                    <li>Navigation bars</li>
                    <li>Card layouts</li>
                    <li>Centering elements</li>
                    <li>Responsive grids</li>
                    <li>Form layouts</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>نظرة عامة على Flexbox:</h3>
                    <p>نموذج تخطيط أحادي البعد لترتيب العناصر في صفوف أو أعمدة.</p>
                    
                    <h3>خصائص حاوية Flex:</h3>
                    <ul>
                        <li><strong>display: flex</strong>: ينشئ حاوية مرنة</li>
                        <li><strong>flex-direction</strong>: row, row-reverse, column, column-reverse</li>
                        <li><strong>justify-content</strong>: flex-start, center, flex-end, space-between, space-around, space-evenly</li>
                        <li><strong>align-items</strong>: stretch, flex-start, center, flex-end, baseline</li>
                        <li><strong>flex-wrap</strong>: nowrap, wrap, wrap-reverse</li>
                        <li><strong>gap</strong>: المسافة بين العناصر المرنة</li>
                    </ul>
                    
                    <h3>المحور الرئيسي مقابل المحور العرضي:</h3>
                    <ul>
                        <li><strong>المحور الرئيسي</strong>: يتم تعريفه بواسطة flex-direction</li>
                        <li><strong>المحور العرضي</strong>: عمودي على المحور الرئيسي</li>
                        <li>justify-content يعمل على المحور الرئيسي</li>
                        <li>align-items يعمل على المحور العرضي</li>
                    </ul>
                    
                    <h3>خصائص العنصر المرن:</h3>
                    <ul>
                        <li><strong>flex-grow</strong>: القدرة على النمو بالنسبة للآخرين</li>
                        <li><strong>flex-shrink</strong>: القدرة على الانكماش بالنسبة للآخرين</li>
                        <li><strong>flex-basis</strong>: الحجم الأولي قبل النمو/الانكماش</li>
                        <li><strong>align-self</strong>: تجاوز align-items لعنصر فردي</li>
                        <li><strong>order</strong>: إعادة الترتيب البصري للعناصر</li>
                    </ul>
                    
                    <h3>حالات الاستخدام الشائعة:</h3>
                    <ul>
                        <li>أشرطة التنقل</li>
                        <li>تخطيطات البطاقات</li>
                        <li>عناصر المركز</li>
                        <li>شبكات متجاوبة</li>
                        <li>تخطيطات النماذج</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Flex Container Examples",
                    content: `
                        <pre class="code-block">
/* Basic flex container */
.container {
    display: flex;
    gap: 10px;
}

/* Row layout */
.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

/* Column layout */
.column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
}

/* Centering with flexbox */
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Wrapping items */
.wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

/* Responsive navigation */
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
                        </pre>
                    `
                },
                {
                    title: "Flex Item Examples",
                    content: `
                        <pre class="code-block">
/* Flex item sizing */
.item-1 {
    flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
}

.item-2 {
    flex: 2 1 200px; /* grow, shrink, basis */
}

/* Individual item alignment */
.special-item {
    align-self: flex-start;
}

/* Reordering items */
.first {
    order: 1;
}
.second {
    order: 2;
}
.third {
    order: 3;
}

/* Flexible navigation items */
.nav-item {
    flex: 1;
    text-align: center;
}

/* Card grid with flexbox */
.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.card {
    flex: 1 1 300px; /* Grow, shrink, basis */
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Flexbox Practice",
                    content: `
                        <p>Practice with Flexbox layouts:</p>
                        <ol>
                            <li>Create a responsive navigation bar that wraps on mobile</li>
                            <li>Build a card grid that adapts to different screen sizes</li>
                            <li>Center elements both horizontally and vertically</li>
                            <li>Create a holy grail layout using flexbox</li>
                            <li>Experiment with different flex-grow and flex-shrink values</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between justify-content and align-items?",
                    answer: "justify-content aligns items along the main axis (defined by flex-direction). align-items aligns items along the cross axis. In a row layout, justify-content controls horizontal alignment, while align-items controls vertical alignment."
                },
                {
                    question: "When should you use flex: 1 vs width: 100%?",
                    answer: "flex: 1 makes the item grow to fill available space, while width: 100% sets a fixed width. flex: 1 is more flexible in responsive layouts and works better with sibling elements. Use width: 100% when you need exact control, and flex: 1 when you want dynamic sizing."
                }
            ]
        },
        {
            id: "css-grid",
            title: "CSS Grid Layout",
            content: `
                <h3>Grid Overview:</h3>
                <p>Two-dimensional layout system for rows and columns.</p>
                
                <h3>Grid Container Properties:</h3>
                <ul>
                    <li><strong>display: grid</strong>: Creates grid container</li>
                    <li><strong>grid-template-columns</strong>: Defines column tracks</li>
                    <li><strong>grid-template-rows</strong>: Defines row tracks</li>
                    <li><strong>gap</strong>: gap, row-gap, column-gap (space between tracks)</li>
                    <li><strong>justify-items</strong>: Align items along row axis</li>
                    <li><strong>align-items</strong>: Align items along column axis</li>
                    <li><strong>grid-auto-flow</strong>: row, column, dense</li>
                </ul>
                
                <h3>Track Sizing Units:</h3>
                <ul>
                    <li><strong>fr</strong>: Fractional unit (flexible space)</li>
                    <li><strong>auto</strong>: Content-based sizing</li>
                    <li><strong>minmax()</strong>: Size range (minmax(200px, 1fr))</li>
                    <li><strong>repeat()</strong>: Repeat pattern (repeat(3, 1fr))</li>
                </ul>
                
                <h3>Grid Item Properties:</h3>
                <ul>
                    <li><strong>grid-column</strong>: start / end (grid-column: 1 / 3)</li>
                    <li><strong>grid-row</strong>: start / end (grid-row: 1 / 2)</li>
                    <li><strong>grid-area</strong>: Named area or row/column shorthand</li>
                    <li><strong>justify-self</strong>: Align individual item on row axis</li>
                    <li><strong>align-self</strong>: Align individual item on column axis</li>
                </ul>
                
                <h3>Grid Template Areas:</h3>
                <p>Visual layout system using named areas:</p>
                <pre class="code-block">
grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
                </pre>

                <br><hr><br>
                <div dir="rtl">
                    <h3>نظرة عامة على الشبكة:</h3>
                    <p>نظام تخطيط ثنائي البعد للصفوف والأعمدة.</p>
                    
                    <h3>خصائص حاوية الشبكة:</h3>
                    <ul>
                        <li><strong>display: grid</strong>: ينشئ حاوية شبكة</li>
                        <li><strong>grid-template-columns</strong>: يحدد مسارات الأعمدة</li>
                        <li><strong>grid-template-rows</strong>: يحدد مسارات الصفوف</li>
                        <li><strong>gap</strong>: gap, row-gap, column-gap (المسافة بين المسارات)</li>
                        <li><strong>justify-items</strong>: محاذاة العناصر على طول محور الصف</li>
                        <li><strong>align-items</strong>: محاذاة العناصر على طول محور العمود</li>
                        <li><strong>grid-auto-flow</strong>: row, column, dense</li>
                    </ul>
                    
                    <h3>وحدات حجم المسار:</h3>
                    <ul>
                        <li><strong>fr</strong>: وحدة كسرية (مساحة مرنة)</li>
                        <li><strong>auto</strong>: تحديد الحجم بناءً على المحتوى</li>
                        <li><strong>minmax()</strong>: نطاق الحجم (minmax(200px, 1fr))</li>
                        <li><strong>repeat()</strong>: نمط التكرار (repeat(3, 1fr))</li>
                    </ul>
                    
                    <h3>خصائص عنصر الشبكة:</h3>
                    <ul>
                        <li><strong>grid-column</strong>: البداية / النهاية (grid-column: 1 / 3)</li>
                        <li><strong>grid-row</strong>: البداية / النهاية (grid-row: 1 / 2)</li>
                        <li><strong>grid-area</strong>: منطقة مسماة أو اختصار صف/عمود</li>
                        <li><strong>justify-self</strong>: محاذاة عنصر فردي على محور الصف</li>
                        <li><strong>align-self</strong>: محاذاة عنصر فردي على محور العمود</li>
                    </ul>
                    
                    <h3>مناطق قالب الشبكة:</h3>
                    <p>نظام تخطيط بصري باستخدام المناطق المسماة:</p>
                    <pre class="code-block" dir="ltr">
grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
                    </pre>
                </div>
            `,
            examples: [
                {
                    title: "Grid Container Examples",
                    content: `
                        <pre class="code-block">
/* Basic grid */
.grid {
    display: grid;
    gap: 20px;
}

/* Fixed columns */
.fixed-grid {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    gap: 10px;
}

/* Flexible columns */
.flexible-grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 20px;
}

/* Responsive grid */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Complex grid layout */
.complex-grid {
    display: grid;
    grid-template-columns: 100px 1fr 2fr 100px;
    grid-template-rows: 80px 1fr 60px;
    gap: 15px;
}

/* Grid with minmax */
.minmax-grid {
    display: grid;
    grid-template-columns: minmax(200px, 300px) 1fr minmax(150px, 1fr);
}
                        </pre>
                    `
                },
                {
                    title: "Grid Item Placement Examples",
                    content: `
                        <pre class="code-block">
/* Line-based placement */
.item-1 {
    grid-column: 1 / 3; /* Start at line 1, end at line 3 */
    grid-row: 1;
}

.item-2 {
    grid-column: 3;
    grid-row: 1 / 3; /* Start at line 1, end at line 3 */
}

/* Span keyword */
.span-2 {
    grid-column: span 2;
}

.span-full {
    grid-column: 1 / -1; /* Full width */
}

/* Named grid areas */
.layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-rows: 80px 1fr 60px;
    grid-template-columns: 200px 1fr 1fr;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Self alignment */
.center-item {
    justify-self: center;
    align-self: center;
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "CSS Grid Practice",
                    content: `
                        <p>Practice with CSS Grid layouts:</p>
                        <ol>
                            <li>Create a photo gallery with auto-fill and minmax</li>
                            <li>Build a magazine-style layout with named grid areas</li>
                            <li>Create a responsive dashboard layout</li>
                            <li>Experiment with grid item placement using line numbers</li>
                            <li>Build a holy grail layout using CSS Grid</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between auto-fit and auto-fill?",
                    answer: "auto-fit expands tracks to fill available space when there are fewer items. auto-fill keeps tracks at specified size even when empty. Use auto-fit when you want items to expand, auto-fill when you want consistent track sizes regardless of item count."
                },
                {
                    question: "When should you use Grid vs Flexbox?",
                    answer: "Use Grid for two-dimensional layouts (both rows and columns). Use Flexbox for one-dimensional layouts (either row OR column). Grid is better for overall page layout, while Flexbox is better for component-level layout and content distribution within a single dimension."
                }
            ]
        },
        {
    id: "layout-games-projects",
    title: "Flexbox & Grid Games - Interactive Learning",
    content: `
        <h3>Flexbox Froggy Game Concepts:</h3>
        <ul>
            <li><strong>justify-content</strong>: Aligning items along main axis</li>
            <li><strong>align-items</strong>: Aligning items along cross axis</li>
            <li><strong>flex-direction</strong>: Row vs column layouts</li>
            <li><strong>order</strong>: Controlling visual order</li>
            <li><strong>align-self</strong>: Individual item alignment</li>
        </ul>
        
        <h3>Grid Garden Game Concepts:</h3>
        <ul>
            <li><strong>grid-template-columns/rows</strong>: Defining track sizes</li>
            <li><strong>grid-column/row</strong>: Item placement</li>
            <li><strong>grid-area</strong>: Named area placement</li>
            <li><strong>grid-template-areas</strong>: Visual layout system</li>
            <li><strong>fr units</strong>: Fractional space distribution</li>
        </ul>
        
        <h3>Positioning Challenges:</h3>
        <ul>
            <li><strong>CSS Battle</strong>: Pixel-perfect positioning</li>
            <li><strong>CSS Diner</strong>: Selector mastery</li>
            <li><strong>Flexbox Defense</strong>: Tower defense with Flexbox</li>
            <li><strong>CSS Games</strong>: https://css.city/practice/playing-games.html</li>
        </ul>
        
        <h3>Real Project Applications:</h3>
        <ul>
            <li>CSS Art with positioning</li>
            <li>Responsive dashboards with Grid</li>
            <li>Interactive navigation with Flexbox</li>
            <li>Photo galleries with absolute positioning</li>
            <li>Modal systems with fixed positioning</li>
        </ul>
        
        <h3>Game-Based Learning Benefits:</h3>
        <ul>
            <li>Immediate visual feedback</li>
            <li>Progressive difficulty</li>
            <li>Practical problem-solving</li>
            <li>Memory retention through repetition</li>
            <li>Fun and engaging practice</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>مفاهيم لعبة Flexbox Froggy:</h3>
            <ul>
                <li><strong>justify-content</strong>: محاذاة العناصر على طول المحور الرئيسي</li>
                <li><strong>align-items</strong>: محاذاة العناصر على طول المحور العرضي</li>
                <li><strong>flex-direction</strong>: تخطيطات الصف مقابل العمود</li>
                <li><strong>order</strong>: التحكم في الترتيب البصري</li>
                <li><strong>align-self</strong>: محاذاة العناصر الفردية</li>
            </ul>
            
            <h3>مفاهيم لعبة Grid Garden:</h3>
            <ul>
                <li><strong>grid-template-columns/rows</strong>: تحديد أحجام المسارات</li>
                <li><strong>grid-column/row</strong>: وضع العنصر</li>
                <li><strong>grid-area</strong>: وضع المنطقة المسماة</li>
                <li><strong>grid-template-areas</strong>: نظام التخطيط البصري</li>
                <li><strong>وحدات fr</strong>: توزيع المساحة الكسرية</li>
            </ul>
            
            <h3>تحديات الوضع:</h3>
            <ul>
                <li><strong>CSS Battle</strong>: وضع دقيق للبكسل</li>
                <li><strong>CSS Diner</strong>: إتقان المحددات</li>
                <li><strong>Flexbox Defense</strong>: دفاع البرج مع Flexbox</li>
            </ul>
            
            <h3>تطبيقات المشاريع الحقيقية:</h3>
            <ul>
                <li>فن CSS مع الوضع</li>
                <li>لوحات تحكم متجاوبة مع الشبكة</li>
                <li>تنقل تفاعلي مع Flexbox</li>
                <li>معارض الصور مع الوضع المطلق</li>
                <li>أنظمة مشروطة مع الوضع الثابت</li>
            </ul>
            
            <h3>فوائد التعلم القائم على الألعاب:</h3>
            <ul>
                <li>ملاحظات بصرية فورية</li>
                <li>صعوبة تدريجية</li>
                <li>حل المشكلات العملي</li>
                <li>الاحتفاظ بالذاكرة من خلال التكرار</li>
                <li>ممارسة ممتعة وجذابة</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Flexbox Froggy Solutions",
            content: `
                <pre class="code-block">
/* Level 1: Basic justify-content */
#pond {
    display: flex;
    justify-content: flex-end;
}

/* Level 5: justify-content with space-between */
#pond {
    display: flex;
    justify-content: space-between;
}

/* Level 8: flex-direction column */
#pond {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

/* Level 13: align-items and justify-content */
#pond {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}

/* Level 18: order property */
#pond {
    display: flex;
    align-items: flex-start;
}

.yellow {
    order: 1;
}

/* Level 21: align-self */
#pond {
    display: flex;
    align-items: flex-start;
}

.yellow {
    align-self: flex-end;
}

/* Level 24: All properties combined */
#pond {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: flex-end;
}
                </pre>
            `
        },
        {
            title: "Grid Garden Solutions",
            content: `
                <pre class="code-block">
/* Level 1: Basic grid-column */
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column: 1;
}

/* Level 5: grid-column span */
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column: 2 / 6;
}

/* Level 9: grid-row */
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-row: 1 / 6;
}

/* Level 13: grid-area */
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-area: 1 / 2 / 4 / 6;
}

/* Level 18: grid-template-areas */
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
    grid-template-areas: 
        ". . . . ."
        ". . . . ."
        ". . water water ."
        ". . water water ."
        ". . . . .";
}

#water {
    grid-area: water;
}

/* Level 24: fr units */
#garden {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column: 1;
    grid-row: 1 / 6;
}
                </pre>
            `
        },
        {
            title: "Real Project Layouts",
            content: `
                <pre class="code-block">
/* Dashboard Layout with CSS Grid */
.dashboard {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "sidebar stats charts"
        "footer footer footer";
    grid-template-columns: 250px 1fr 1fr;
    grid-template-rows: 80px 1fr 300px 60px;
    gap: 20px;
    height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.stats { grid-area: stats; }
.charts { grid-area: charts; }
.footer { grid-area: footer; }

/* Navigation with Flexbox */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
}

/* Photo Gallery with Positioning */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    padding: 2rem;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
}

.gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.7);
    color: white;
    padding: 1rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

.gallery-item:hover img {
    transform: scale(1.1);
}

/* Modal System with Fixed Positioning */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
}

.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* CSS Art with Absolute Positioning */
.face {
    position: relative;
    width: 200px;
    height: 200px;
    background: #ffdbac;
    border-radius: 50%;
    margin: 50px auto;
}

.eye {
    position: absolute;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 50%;
    top: 50px;
}

.eye.left { left: 50px; }
.eye.right { right: 50px; }

.pupil {
    position: absolute;
    width: 15px;
    height: 15px;
    background: black;
    border-radius: 50%;
    top: 7px;
    left: 7px;
}

.mouth {
    position: absolute;
    width: 80px;
    height: 40px;
    background: #e75480;
    border-radius: 0 0 40px 40px;
    bottom: 40px;
    left: 60px;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Layout Games & Projects Practice",
            content: `
                <p>Practice with interactive layout games and projects:</p>
                <ol>
                    <li>Complete all levels of Flexbox Froggy to master Flexbox</li>
                    <li>Solve all Grid Garden challenges to master CSS Grid</li>
                    <li>Create a pixel-perfect replica using CSS Battle</li>
                    <li>Build a responsive dashboard layout using CSS Grid areas</li>
                    <li>Create an interactive navigation system with Flexbox</li>
                    <li>Build a modal system with fixed positioning</li>
                    <li>Create CSS art using absolute positioning techniques</li>
                    <li>Build a photo gallery with hover effects and overlays</li>
                    <li>Implement a sticky header that changes on scroll</li>
                    <li>Create a masonry layout using CSS Grid or Flexbox</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What are the best resources for practicing CSS layouts interactively?",
            answer: "Flexbox Froggy for Flexbox, Grid Garden for CSS Grid, CSS Battle for precision positioning, CSS Diner for selector mastery, Flexbox Defense for game-based Flexbox learning, and CodePen challenges for real-world projects. These resources provide immediate feedback and progressive learning curves."
        },
        {
            question: "How do games help in learning CSS positioning and layouts?",
            answer: "Games provide visual feedback, make learning engaging through challenges, offer progressive difficulty that builds skills gradually, create memorable scenarios that aid retention, and turn abstract concepts into concrete problems. They also encourage experimentation and immediate application of concepts in a low-stakes environment."
        },
        {
            question: "What real-world projects best demonstrate mastery of CSS layouts?",
            answer: "Responsive dashboards show Grid mastery, complex navigation systems demonstrate Flexbox skills, modal and overlay systems showcase positioning knowledge, photo galleries combine multiple layout techniques, CSS art demonstrates precision positioning, and full website layouts integrate all concepts together in practical applications."
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