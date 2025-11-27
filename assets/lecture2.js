// Course data structure
const courseData = {
    courseInfo: {
        name: "Frontend React",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "head-element",
            title: "Head Element and Meta Tags",
            content: `
                <h3>The Head Element</h3>
                <p>The &lt;head&gt; element contains meta-information about the HTML document that isn't displayed on the page.</p>
                
                <h3>Common Elements Inside Head:</h3>
                <ul>
                    <li><strong>&lt;title&gt;</strong>: Sets the page title shown in browser tab</li>
                    <li><strong>&lt;meta&gt;</strong>: Provides metadata about the document</li>
                    <li><strong>&lt;link&gt;</strong>: Links external resources like CSS files</li>
                    <li><strong>&lt;style&gt;</strong>: Contains internal CSS styles</li>
                    <li><strong>&lt;script&gt;</strong>: Contains or links JavaScript code</li>
                    <li><strong>&lt;base&gt;</strong>: Specifies base URL for relative links</li>
                </ul>
                
                <h3>Important Meta Tags:</h3>
                <ul>
                    <li><strong>charset</strong>: Defines character encoding (UTF-8 recommended)</li>
                    <li><strong>viewport</strong>: Controls mobile device rendering</li>
                    <li><strong>description</strong>: Page description for search engines</li>
                    <li><strong>keywords</strong>: Relevant keywords for SEO</li>
                    <li><strong>author</strong>: Page author information</li>
                </ul>
                
                <h3>HTML Comments</h3>
                <p>Comments are written as &lt;!-- comment --&gt; and are ignored by browsers. They help:</p>
                <ul>
                    <li>Explain complex code to other developers</li>
                    <li>Leave notes for yourself</li>
                    <li>Temporarily disable code without deleting it</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>عنصر الرأس</h3>
                    <p>يحتوي عنصر &lt;head&gt; على معلومات وصفية حول مستند HTML لا يتم عرضها على الصفحة.</p>
                    
                    <h3>العناصر الشائعة داخل الرأس:</h3>
                    <ul>
                        <li><strong>&lt;title&gt;</strong>: يحدد عنوان الصفحة المعروض في علامة تبويب المتصفح</li>
                        <li><strong>&lt;meta&gt;</strong>: يوفر بيانات وصفية حول المستند</li>
                        <li><strong>&lt;link&gt;</strong>: يربط موارد خارجية مثل ملفات CSS</li>
                        <li><strong>&lt;style&gt;</strong>: يحتوي على أنماط CSS داخلية</li>
                        <li><strong>&lt;script&gt;</strong>: يحتوي أو يربط كود JavaScript</li>
                        <li><strong>&lt;base&gt;</strong>: يحدد عنوان URL الأساسي للروابط النسبية</li>
                    </ul>
                    
                    <h3>وسوم الوصف المهمة:</h3>
                    <ul>
                        <li><strong>charset</strong>: يحدد ترميز الأحرف (يوصى بـ UTF-8)</li>
                        <li><strong>viewport</strong>: يتحكم في عرض جهاز الجوال</li>
                        <li><strong>description</strong>: وصف الصفحة لمحركات البحث</li>
                        <li><strong>keywords</strong>: كلمات رئيسية ذات صلة لتحسين محركات البحث</li>
                        <li><strong>author</strong>: معلومات مؤلف الصفحة</li>
                    </ul>
                    
                    <h3>تعليقات HTML</h3>
                    <p>تُكتب التعليقات كـ &lt;!-- comment --&gt; ويتم تجاهلها من قبل المتصفحات. تساعد في:</p>
                    <ul>
                        <li>شرح الكود المعقد للمطورين الآخرين</li>
                        <li>ترك ملاحظات لنفسك</li>
                        <li>تعطيل الكود مؤقتًا دون حذفه</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Complete Head Section",
                    content: `
                        <pre class="code-block">
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;meta name="description" content="Learn web development with our comprehensive course"&gt;
    &lt;meta name="keywords" content="HTML, CSS, JavaScript, web development"&gt;
    &lt;meta name="author" content="Your Name"&gt;
    &lt;title&gt;Web Development Course&lt;/title&gt;
    &lt;link rel="stylesheet" href="styles.css"&gt;
    &lt;style&gt;
        body { font-family: Arial, sans-serif; }
    &lt;/style&gt;
    &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/head&gt;
                        </div>
                    `
                },
                {
                    title: "Comment Examples",
                    content: `
                        <pre class="code-block">
&lt;!-- This is a single line comment --&gt;

&lt;!-- 
    This is a multi-line comment
    that spans several lines
--&gt;

&lt;div class="header"&gt;
    &lt;!-- &lt;h1&gt;Old Title&lt;/h1&gt; --&gt;
    &lt;h1&gt;New Title&lt;/h1&gt;
&lt;/div&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Head Section Practice",
                    content: `
                        <p>Practice creating a complete head section:</p>
                        <ol>
                            <li>Set the character encoding to UTF-8</li>
                            <li>Add responsive viewport meta tag</li>
                            <li>Write a compelling page title and description</li>
                            <li>Link an external CSS file</li>
                            <li>Add relevant meta tags for SEO</li>
                            <li>Use comments to organize your code</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why is the viewport meta tag important for mobile devices?",
                    answer: "The viewport meta tag &lt;meta name='viewport' content='width=device-width, initial-scale=1.0'&gt; ensures your website scales properly on mobile devices. Without it, mobile browsers might render the page at a desktop width and scale it down, making content too small to read."
                },
                {
                    question: "What's the difference between linking CSS with &lt;link&gt; and using &lt;style&gt;?",
                    answer: "&lt;link&gt; is used to connect external CSS files (better for organization and caching), while &lt;style&gt; contains CSS directly in the HTML (useful for small amounts of page-specific styles). External CSS is preferred for larger projects as it separates content from presentation."
                }
            ]
        },
        {
            id: "text-elements",
            title: "Text Elements and Typography",
            content: `
                <h3>Headings: h1 to h6</h3>
                <p>Headings define the structure and hierarchy of your content:</p>
                <ul>
                    <li><strong>h1</strong>: Main heading (one per page for SEO)</li>
                    <li><strong>h2-h6</strong>: Subheadings of decreasing importance</li>
                </ul>
                
                <h3>Paragraph Element: &lt;p&gt;</h3>
                <p>The paragraph element represents a block of text:</p>
                <ul>
                    <li>Block-level element (takes full width)</li>
                    <li>Automatically adds spacing before and after</li>
                    <li>Used for textual content</li>
                </ul>
                
                <h3>Types of HTML Elements</h3>
                <ul>
                    <li><strong>Block Elements</strong>: Take full width, start on new line (p, div, h1-h6)</li>
                    <li><strong>Inline Elements</strong>: Take only needed width, flow with content (a, span, strong)</li>
                </ul>
                
                <h3>Common HTML Attributes</h3>
                <ul>
                    <li><strong>class</strong>: For styling multiple elements</li>
                    <li><strong>id</strong>: Unique identifier for single element</li>
                    <li><strong>hidden</strong>: Hides element from display</li>
                    <li><strong>dir</strong>: Text direction (ltr, rtl)</li>
                    <li><strong>lang</strong>: Language of element content</li>
                    <li><strong>title</strong>: Tooltip text on hover</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>العناوين: من h1 إلى h6</h3>
                    <p>تحدد العناوين هيكل ومستويات المحتوى الخاص بك:</p>
                    <ul>
                        <li><strong>h1</strong>: العنوان الرئيسي (واحد لكل صفحة لتحسين محركات البحث)</li>
                        <li><strong>h2-h6</strong>: عناوين فرعية بأهمية متناقصة</li>
                    </ul>
                    
                    <h3>عنصر الفقرة: &lt;p&gt;</h3>
                    <p>يمثل عنصر الفقرة كتلة من النص:</p>
                    <ul>
                        <li>عنصر مستوى الكتلة (يأخذ العرض الكامل)</li>
                        <li>يضيف تباعدًا تلقائيًا قبل وبعد</li>
                        <li>يستخدم للمحتوى النصي</li>
                    </ul>
                    
                    <h3>أنواع عناصر HTML</h3>
                    <ul>
                        <li><strong>عناصر الكتلة</strong>: تأخذ العرض الكامل، تبدأ في سطر جديد (p, div, h1-h6)</li>
                        <li><strong>عناصر مضمنة</strong>: تأخذ العرض المطلوب فقط، تتدفق مع المحتوى (a, span, strong)</li>
                    </ul>
                    
                    <h3>سمات HTML الشائعة</h3>
                    <ul>
                        <li><strong>class</strong>: لتنسيق عناصر متعددة</li>
                        <li><strong>id</strong>: معرف فريد لعنصر واحد</li>
                        <li><strong>hidden</strong>: يخفي العنصر من العرض</li>
                        <li><strong>dir</strong>: اتجاه النص (ltr, rtl)</li>
                        <li><strong>lang</strong>: لغة محتوى العنصر</li>
                        <li><strong>title</strong>: نص تلميح عند التمرير</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Heading Structure Example",
                    content: `
                        <pre class="code-block">
&lt;h1&gt;Main Course Title&lt;/h1&gt;
&lt;h2&gt;Chapter 1: HTML Basics&lt;/h2&gt;
&lt;h3&gt;What is HTML?&lt;/h3&gt;
&lt;p&gt;HTML stands for HyperText Markup Language...&lt;/p&gt;
&lt;h3&gt;HTML Syntax&lt;/h3&gt;
&lt;p&gt;HTML uses tags to structure content...&lt;/p&gt;
&lt;h2&gt;Chapter 2: CSS Basics&lt;/h2&gt;
                        </div>
                    `
                },
                {
                    title: "Block vs Inline Example",
                    content: `
                        <pre class="code-block">
&lt;!-- Block elements --&gt;
&lt;div&gt;This is a block element&lt;/div&gt;
&lt;p&gt;This is a paragraph&lt;/p&gt;
&lt;h1&gt;This is a heading&lt;/h1&gt;

&lt;!-- Inline elements --&gt;
&lt;p&gt;This contains &lt;strong&gt;inline&lt;/strong&gt; and &lt;em&gt;other inline&lt;/em&gt; elements.&lt;/p&gt;
&lt;a href="#"&gt;This is a link&lt;/a&gt;
&lt;span&gt;This is inline&lt;/span&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Text Elements Practice",
                    content: `
                        <p>Practice using text elements:</p>
                        <ol>
                            <li>Create a proper heading hierarchy for an article</li>
                            <li>Write paragraphs with different text formatting</li>
                            <li>Experiment with block vs inline elements</li>
                            <li>Add classes and IDs to elements for styling</li>
                            <li>Create a semantic document structure</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why should you use only one h1 per page?",
                    answer: "Using only one h1 per page is important for SEO and accessibility. Search engines consider the h1 as the main topic of the page. Screen readers use heading structure to navigate. Multiple h1 tags can confuse both search engines and users with disabilities."
                },
                {
                    question: "What's the difference between class and id attributes?",
                    answer: "class can be used on multiple elements and is for grouping similar elements, while id must be unique per page and is for identifying specific elements. Use class for styling multiple elements, and id for JavaScript targeting or anchor links."
                }
            ]
        },
        {
            id: "text-formatting",
            title: "Text Formatting and Styling",
            content: `
                <h3>Text Formatting Elements</h3>
                <p>HTML provides semantic elements for text formatting:</p>
                
                <h3>Visual Formatting:</h3>
                <ul>
                    <li><strong>&lt;b&gt;</strong>: <b>Bold text</b> (visual only)</li>
                    <li><strong>&lt;i&gt;</strong>: <i>Italic text</i> (visual only)</li>
                    <li><strong>&lt;u&gt;</strong>: <u>Underlined text</u></li>
                    <li><strong>&lt;small&gt;</strong>: <small>Smaller text</small></li>
                    <li><strong>&lt;center&gt;</strong>: <center>Centered text (deprecated)</center></li>
                </ul>
                
                <h3>Semantic Formatting (Recommended):</h3>
                <ul>
                    <li><strong>&lt;strong&gt;</strong>: <strong>Important text</strong> (bold + semantic meaning)</li>
                    <li><strong>&lt;em&gt;</strong>: <em>Emphasized text</em> (italic + semantic meaning)</li>
                    <li><strong>&lt;mark&gt;</strong>: <mark>Highlighted text</mark></li>
                    <li><strong>&lt;del&gt;</strong>: <del>Deleted text</del></li>
                    <li><strong>&lt;ins&gt;</strong>: <ins>Inserted text</ins></li>
                    <li><strong>&lt;sub&gt;</strong>: H<sub>2</sub>O (subscript)</li>
                    <li><strong>&lt;sup&gt;</strong>: E = mc<sup>2</sup> (superscript)</li>
                </ul>
                
                <h3>When to Use Semantic vs Visual Formatting?</h3>
                <p>Use semantic elements when the formatting has meaning. Use visual elements when you only want to change appearance without semantic significance.</p>

                <br><hr><br>
                <div dir="rtl">
                    <h3>عناصر تنسيق النص</h3>
                    <p>يوفر HTML عناصر دلالية لتنسيق النص:</p>
                    
                    <h3>التنسيق المرئي:</h3>
                    <ul>
                        <li><strong>&lt;b&gt;</strong>: <b>نص عريض</b> (مرئي فقط)</li>
                        <li><strong>&lt;i&gt;</strong>: <i>نص مائل</i> (مرئي فقط)</li>
                        <li><strong>&lt;u&gt;</strong>: <u>نص مسطر</u></li>
                        <li><strong>&lt;small&gt;</strong>: <small>نص أصغر</small></li>
                        <li><strong>&lt;center&gt;</strong>: <center>نص في الوسط (مهمل)</center></li>
                    </ul>
                    
                    <h3>التنسيق الدلالي (موصى به):</h3>
                    <ul>
                        <li><strong>&lt;strong&gt;</strong>: <strong>نص مهم</strong> (عريض + معنى دلالي)</li>
                        <li><strong>&lt;em&gt;</strong>: <em>نص مؤكد</em> (مائل + معنى دلالي)</li>
                        <li><strong>&lt;mark&gt;</strong>: <mark>نص مميز</mark></li>
                        <li><strong>&lt;del&gt;</strong>: <del>نص محذوف</del></li>
                        <li><strong>&lt;ins&gt;</strong>: <ins>نص مضاف</ins></li>
                        <li><strong>&lt;sub&gt;</strong>: H<sub>2</sub>O (منخفض)</li>
                        <li><strong>&lt;sup&gt;</strong>: E = mc<sup>2</sup> (مرتفع)</li>
                    </ul>
                    
                    <h3>متى تستخدم التنسيق الدلالي مقابل المرئي؟</h3>
                    <p>استخدم العناصر الدلالية عندما يكون للتنسيق معنى. استخدم العناصر المرئية عندما تريد فقط تغيير المظهر بدون أهمية دلالية.</p>
                </div>
            `,
            examples: [
                {
                    title: "Formatting Examples",
                    content: `
                        <pre class="code-block">
&lt;!-- Semantic formatting --&gt;
&lt;p&gt;This is &lt;strong&gt;very important&lt;/strong&gt; information.&lt;/p&gt;
&lt;p&gt;Please &lt;em&gt;read carefully&lt;/em&gt; before proceeding.&lt;/p&gt;
&lt;p&gt;The meeting is on &lt;time datetime="2023-12-25"&gt;Christmas&lt;/time&gt;.&lt;/p&gt;

&lt;!-- Visual formatting --&gt;
&lt;p&gt;This text is &lt;b&gt;bold&lt;/b&gt; and &lt;i&gt;italic&lt;/i&gt;.&lt;/p&gt;
&lt;p&gt;H&lt;sub&gt;2&lt;/sub&gt;O is water.&lt;/p&gt;
&lt;p&gt;The area is 100m&lt;sup&gt;2&lt;/sup&gt;.&lt;/p&gt;
                        </div>
                    `
                },
                {
                    title: "Practical Usage",
                    content: `
                        <pre class="code-block">
&lt;article&gt;
    &lt;h1&gt;Scientific Discovery&lt;/h1&gt;
    &lt;p&gt;The formula for energy is &lt;strong&gt;E = mc&lt;sup&gt;2&lt;/sup&gt;&lt;/strong&gt;.&lt;/p&gt;
    &lt;p&gt;&lt;em&gt;Note:&lt;/em&gt; This was published in &lt;del&gt;1904&lt;/del&gt; &lt;ins&gt;1905&lt;/ins&gt;.&lt;/p&gt;
    &lt;p&gt;Important: &lt;mark&gt;New evidence suggests&lt;/mark&gt; we need to review this.&lt;/p&gt;
&lt;/article&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Text Formatting Practice",
                    content: `
                        <p>Practice text formatting:</p>
                        <ol>
                            <li>Create a paragraph with mixed formatting (bold, italic, underlined)</li>
                            <li>Write a scientific formula using sub and sup tags</li>
                            <li>Create a notice with important text using strong and mark</li>
                            <li>Show text revisions using del and ins</li>
                            <li>Compare visual vs semantic formatting results</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between &lt;b&gt; and &lt;strong&gt;?",
                    answer: "&lt;b&gt; is for visual bold formatting without semantic meaning, while &lt;strong&gt; indicates that the text has strong importance. Screen readers may pronounce &lt;strong&gt; text with emphasis. For accessibility and SEO, prefer &lt;strong&gt; when the text is actually important."
                },
                {
                    question: "Why is &lt;center&gt; deprecated?",
                    answer: "&lt;center&gt; is deprecated because it mixes presentation with content. Modern web standards recommend using CSS for presentation. Use &lt;div style='text-align: center'&gt; or CSS classes instead for better separation of concerns and maintainability."
                }
            ]
        },
        {
            id: "multimedia",
            title: "Images and Multimedia",
            content: `
                <h3>Image Element: &lt;img src alt /&gt;</h3>
                <p>The img element embeds images into web pages:</p>
                
                <h3>Key Attributes:</h3>
                <ul>
                    <li><strong>src</strong>: Image source (URL or path)</li>
                    <li><strong>alt</strong>: Alternative text (required for accessibility)</li>
                    <li><strong>width/height</strong>: Image dimensions</li>
                    <li><strong>loading</strong>: lazy/eager (lazy loading optimization)</li>
                </ul>
                
                <h3>Working with Paths:</h3>
                <ul>
                    <li><strong>Relative paths</strong>: images/photo.jpg (relative to current file)</li>
                    <li><strong>Absolute paths</strong>: /images/photo.jpg (relative to root)</li>
                    <li><strong>Full URLs</strong>: https://example.com/image.jpg</li>
                </ul>
                
                <h3>Lists in HTML</h3>
                <ul>
                    <li><strong>&lt;ul&gt;</strong>: Unordered list (bullets)</li>
                    <li><strong>&lt;ol&gt;</strong>: Ordered list (numbers)</li>
                    <li><strong>&lt;li&gt;</strong>: List item</li>
                </ul>
                
                <h3>Ordered List Attributes:</h3>
                <ul>
                    <li><strong>start</strong>: Starting number</li>
                    <li><strong>type</strong>: Numbering style (1, A, a, I, i)</li>
                    <li><strong>reversed</strong>: Reverse numbering</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>عنصر الصورة: &lt;img src alt /&gt;</h3>
                    <p>يقوم عنصر img بتضمين الصور في صفحات الويب:</p>
                    
                    <h3>السمات الرئيسية:</h3>
                    <ul>
                        <li><strong>src</strong>: مصدر الصورة (URL أو مسار)</li>
                        <li><strong>alt</strong>: النص البديل (مطلوب لإمكانية الوصول)</li>
                        <li><strong>width/height</strong>: أبعاد الصورة</li>
                        <li><strong>loading</strong>: lazy/eager (تحميل متأخر للتحسين)</li>
                    </ul>
                    
                    <h3>العمل مع المسارات:</h3>
                    <ul>
                        <li><strong>مسارات نسبية</strong>: images/photo.jpg (نسبة للملف الحالي)</li>
                        <li><strong>مسارات مطلقة</strong>: /images/photo.jpg (نسبة للجذر)</li>
                        <li><strong>عناوين URL كاملة</strong>: https://example.com/image.jpg</li>
                    </ul>
                    
                    <h3>القوائم في HTML</h3>
                    <ul>
                        <li><strong>&lt;ul&gt;</strong>: قائمة غير مرتبة (نقاط)</li>
                        <li><strong>&lt;ol&gt;</strong>: قائمة مرتبة (أرقام)</li>
                        <li><strong>&lt;li&gt;</strong>: عنصر قائمة</li>
                    </ul>
                    
                    <h3>سمات القائمة المرتبة:</h3>
                    <ul>
                        <li><strong>start</strong>: الرقم البدائي</li>
                        <li><strong>type</strong>: نمط الترقيم (1, A, a, I, i)</li>
                        <li><strong>reversed</strong>: ترقيم عكسي</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Image Examples",
                    content: `
                        <pre class="code-block">
&lt;!-- Basic image --&gt;
&lt;img src="photo.jpg" alt="A beautiful landscape"&gt;

&lt;!-- Image with dimensions --&gt;
&lt;img src="photo.jpg" alt="Landscape" width="800" height="600"&gt;

&lt;!-- Image from URL --&gt;
&lt;img src="https://example.com/image.jpg" alt="Example image"&gt;

&lt;!-- Lazy loading --&gt;
&lt;img src="photo.jpg" alt="Landscape" loading="lazy"&gt;
                        </div>
                    `
                },
                {
                    title: "List Examples",
                    content: `
                        <pre class="code-block">
&lt;!-- Unordered list --&gt;
&lt;ul&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
    &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Ordered list with attributes --&gt;
&lt;ol type="A" start="3"&gt;
    &lt;li&gt;Third item (C)&lt;/li&gt;
    &lt;li&gt;Fourth item (D)&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- Nested lists --&gt;
&lt;ul&gt;
    &lt;li&gt;Main item
        &lt;ul&gt;
            &lt;li&gt;Sub item&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
&lt;/ul&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Multimedia Practice",
                    content: `
                        <p>Practice with images and lists:</p>
                        <ol>
                            <li>Add images using different path types (relative, absolute, URL)</li>
                            <li>Create both ordered and unordered lists</li>
                            <li>Make nested lists for complex structures</li>
                            <li>Experiment with different list numbering styles</li>
                            <li>Add proper alt text to all images</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why is alt text important for images?",
                    answer: "Alt text is crucial for accessibility (screen readers), SEO (search engines can't 'see' images), and when images fail to load. It should concisely describe the image's content and function. Decorative images should have empty alt text (alt='') but never omit the alt attribute."
                },
                {
                    question: "When should you use ordered vs unordered lists?",
                    answer: "Use ordered lists (&lt;ol&gt;) when the sequence matters (steps, rankings). Use unordered lists (&lt;ul&gt;) for items without specific order (features, options). Use description lists (&lt;dl&gt;) for term-definition pairs."
                }
            ]
        },
        {
            id: "tables",
            title: "HTML Tables",
            content: `
                <h3>Table Structure</h3>
                <p>Tables organize data into rows and columns:</p>
                
                <h3>Basic Table Elements:</h3>
                <ul>
                    <li><strong>&lt;table&gt;</strong>: The table container</li>
                    <li><strong>&lt;thead&gt;</strong>: Table header section</li>
                    <li><strong>&lt;tbody&gt;</strong>: Table body section</li>
                    <li><strong>&lt;tfoot&gt;</strong>: Table footer section</li>
                    <li><strong>&lt;tr&gt;</strong>: Table row</li>
                    <li><strong>&lt;th&gt;</strong>: Table header cell</li>
                    <li><strong>&lt;td&gt;</strong>: Table data cell</li>
                </ul>
                
                <h3>Advanced Table Features:</h3>
                <ul>
                    <li><strong>colspan</strong>: Merge cells horizontally</li>
                    <li><strong>rowspan</strong>: Merge cells vertically</li>
                    <li><strong>caption</strong>: Table title/description</li>
                    <li><strong>scope</strong>: Associate headers with cells (accessibility)</li>
                </ul>
                
                <h3>Span Element: &lt;span&gt;&lt;/span&gt;</h3>
                <p>The span element is an inline container for styling or scripting:</p>
                <ul>
                    <li>Inline element (doesn't break flow)</li>
                    <li>No inherent meaning</li>
                    <li>Used with CSS classes for styling</li>
                </ul>
                
                <h3>Line Breaks and Rules:</h3>
                <ul>
                    <li><strong>&lt;br&gt;</strong>: Line break</li>
                    <li><strong>&lt;hr&gt;</strong>: Horizontal rule (thematic break)</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>هيكل الجدول</h3>
                    <p>تنظم الجداول البيانات في صفوف وأعمدة:</p>
                    
                    <h3>عناصر الجدول الأساسية:</h3>
                    <ul>
                        <li><strong>&lt;table&gt;</strong>: حاوية الجدول</li>
                        <li><strong>&lt;thead&gt;</strong>: قسم رأس الجدول</li>
                        <li><strong>&lt;tbody&gt;</strong>: قسم جسم الجدول</li>
                        <li><strong>&lt;tfoot&gt;</strong>: قسم تذييل الجدول</li>
                        <li><strong>&lt;tr&gt;</strong>: صف الجدول</li>
                        <li><strong>&lt;th&gt;</strong>: خلية رأس الجدول</li>
                        <li><strong>&lt;td&gt;</strong>: خلية بيانات الجدول</li>
                    </ul>
                    
                    <h3>ميزات الجدول المتقدمة:</h3>
                    <ul>
                        <li><strong>colspan</strong>: دمج الخلايا أفقياً</li>
                        <li><strong>rowspan</strong>: دمج الخلايا عمودياً</li>
                        <li><strong>caption</strong>: عنوان/وصف الجدول</li>
                        <li><strong>scope</strong>: ربط الرؤوس بالخلايا (إمكانية الوصول)</li>
                    </ul>
                    
                    <h3>عنصر Span: &lt;span&gt;&lt;/span&gt;</h3>
                    <p>عنصر span هو حاوية مضمنة للتنسيق أو البرمجة:</p>
                    <ul>
                        <li>عنصر مضمن (لا يكسر التدفق)</li>
                        <li>بدون معنى متأصل</li>
                        <li>يستخدم مع فئات CSS للتنسيق</li>
                    </ul>
                    
                    <h3>فواصل الأسطر والقواعد:</h3>
                    <ul>
                        <li><strong>&lt;br&gt;</strong>: فاصل سطر</li>
                        <li><strong>&lt;hr&gt;</strong>: قاعدة أفقية (فاصل موضوعي)</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Basic Table Structure",
                    content: `
                        <pre class="code-block">
&lt;table&gt;
    &lt;caption&gt;Monthly Sales Report&lt;/caption&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Month&lt;/th&gt;
            &lt;th&gt;Sales&lt;/th&gt;
            &lt;th&gt;Profit&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;January&lt;/td&gt;
            &lt;td&gt;$10,000&lt;/td&gt;
            &lt;td&gt;$2,000&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;February&lt;/td&gt;
            &lt;td&gt;$12,000&lt;/td&gt;
            &lt;td&gt;$2,500&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;
                        </pre>
                    `
                },
                {
                    title: "Advanced Table with Merged Cells",
                    content: `
                        <pre class="code-block">
&lt;table border="1"&gt;
    &lt;tr&gt;
        &lt;th rowspan="2"&gt;Name&lt;/th&gt;
        &lt;th colspan="2"&gt;Contact&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;th&gt;Email&lt;/th&gt;
        &lt;th&gt;Phone&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;John Doe&lt;/td&gt;
        &lt;td&gt;john@example.com&lt;/td&gt;
        &lt;td&gt;123-4567&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Table Creation Practice",
                    content: `
                        <p>Practice creating tables:</p>
                        <ol>
                            <li>Create a simple contact list table</li>
                            <li>Build a schedule table with time slots</li>
                            <li>Create a table with merged cells using colspan and rowspan</li>
                            <li>Add proper table headers and captions</li>
                            <li>Use span elements to style specific parts of table cells</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should you use tables vs other HTML elements?",
                    answer: "Use tables only for tabular data (data that has a natural row-column relationship). For page layout, use CSS Grid or Flexbox. Using tables for layout is outdated and creates accessibility issues. Tables should have semantic meaning, not just visual structure."
                },
                {
                    question: "What's the difference between th and td elements?",
                    answer: "&lt;th&gt; defines header cells (bold and centered by default), while &lt;td&gt; defines regular data cells. Use &lt;th&gt; for column/row headers. The scope attribute in &lt;th&gt; helps screen readers understand the header's association (scope='col' for column headers, scope='row' for row headers)."
                }
            ]
        },
        // Additional topics can be added here as needed
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
