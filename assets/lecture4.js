// Course data structure
const courseData = {
    courseInfo: {
        name: "Frontend React",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "forms",
            title: "HTML Forms",
            content: `
                <h3>Form Element: &lt;form&gt;&lt;/form&gt;</h3>
                <p>Forms collect user input and send it to a server:</p>
                
                <h3>Form Attributes:</h3>
                <ul>
                    <li><strong>action</strong>: URL where form data is sent</li>
                    <li><strong>method</strong>: HTTP method (GET, POST)</li>
                    <li><strong>novalidate</strong>: Disables browser validation</li>
                    <li><strong>target</strong>: Where to display response (_blank, _self)</li>
                    <li><strong>autocomplete</strong>: Enable/disable autocomplete</li>
                </ul>
                
                <h3>Form Controls:</h3>
                <ul>
                    <li><strong>&lt;input&gt;</strong>: Various input types (text, email, password, etc.)</li>
                    <li><strong>&lt;textarea&gt;</strong>: Multi-line text input</li>
                    <li><strong>&lt;select&gt;</strong>: Dropdown list</li>
                    <li><strong>&lt;button&gt;</strong>: Clickable button</li>
                    <li><strong>&lt;label&gt;</strong>: Label for form controls</li>
                </ul>
                
                <h3>Input Attributes:</h3>
                <ul>
                    <li><strong>type</strong>: Defines input type (text, email, number, etc.)</li>
                    <li><strong>placeholder</strong>: Hint text</li>
                    <li><strong>name</strong>: Name for form data</li>
                    <li><strong>value</strong>: Default value</li>
                    <li><strong>required</strong>: Makes field mandatory</li>
                    <li><strong>readonly</strong>: Read-only field</li>
                    <li><strong>autofocus</strong>: Auto-focus on page load</li>
                    <li><strong>pattern</strong>: Regex validation pattern</li>
                </ul>
                
                <h3>Advanced Form Features:</h3>
                <ul>
                    <li><strong>&lt;datalist&gt;</strong>: Predefined options for input</li>
                    <li><strong>&lt;fieldset&gt;</strong>: Groups related controls</li>
                    <li><strong>&lt;legend&gt;</strong>: Caption for fieldset</li>
                    <li><strong>&lt;optgroup&gt;</strong>: Groups options in dropdown</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>عنصر النموذج: &lt;form&gt;&lt;/form&gt;</h3>
                    <p>تجمع النماذج مدخلات المستخدم وترسلها إلى الخادم:</p>
                    
                    <h3>سمات النموذج:</h3>
                    <ul>
                        <li><strong>action</strong>: عنوان URL حيث يتم إرسال بيانات النموذج</li>
                        <li><strong>method</strong>: طريقة HTTP (GET, POST)</li>
                        <li><strong>novalidate</strong>: يعطل التحقق من المتصفح</li>
                        <li><strong>target</strong>: مكان عرض الاستجابة (_blank, _self)</li>
                        <li><strong>autocomplete</strong>: تمكين/تعطيل الإكمال التلقائي</li>
                    </ul>
                    
                    <h3>عناصر تحكم النموذج:</h3>
                    <ul>
                        <li><strong>&lt;input&gt;</strong>: أنواع إدخال متنوعة (نص، بريد إلكتروني، كلمة مرور، إلخ)</li>
                        <li><strong>&lt;textarea&gt;</strong>: إدخال نص متعدد الأسطر</li>
                        <li><strong>&lt;select&gt;</strong>: قائمة منسدلة</li>
                        <li><strong>&lt;button&gt;</strong>: زر قابل للنقر</li>
                        <li><strong>&lt;label&gt;</strong>: تسمية لعناصر تحكم النموذج</li>
                    </ul>
                    
                    <h3>سمات الإدخال:</h3>
                    <ul>
                        <li><strong>type</strong>: يحدد نوع الإدخال (نص، بريد إلكتروني، رقم، إلخ)</li>
                        <li><strong>placeholder</strong>: نص تلميحي</li>
                        <li><strong>name</strong>: اسم لبيانات النموذج</li>
                        <li><strong>value</strong>: القيمة الافتراضية</li>
                        <li><strong>required</strong>: يجعل الحقل إلزامياً</li>
                        <li><strong>readonly</strong>: حقل للقراءة فقط</li>
                        <li><strong>autofocus</strong>: التركيز التلقائي عند تحميل الصفحة</li>
                        <li><strong>pattern</strong>: نمط تحقق بتعبير منتظم</li>
                    </ul>
                    
                    <h3>ميزات النموذج المتقدمة:</h3>
                    <ul>
                        <li><strong>&lt;datalist&gt;</strong>: خيارات محددة مسبقاً للإدخال</li>
                        <li><strong>&lt;fieldset&gt;</strong>: يجمع عناصر التحكم ذات الصلة</li>
                        <li><strong>&lt;legend&gt;</strong>: تسمية لمجموعة الحقول</li>
                        <li><strong>&lt;optgroup&gt;</strong>: يجمع الخيارات في القائمة المنسدلة</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Complete Contact Form",
                    content: `
                        <pre class="code-block">
&lt;form action="/submit" method="POST" novalidate&gt;
    &lt;fieldset&gt;
        &lt;legend&gt;Contact Information&lt;/legend&gt;
        
        &lt;label for="name"&gt;Name:&lt;/label&gt;
        &lt;input type="text" id="name" name="name" required autofocus&gt;
        
        &lt;label for="email"&gt;Email:&lt;/label&gt;
        &lt;input type="email" id="email" name="email" required&gt;
        
        &lt;label for="phone"&gt;Phone:&lt;/label&gt;
        &lt;input type="tel" id="phone" name="phone" pattern="[0-9]{10}"&gt;
    &lt;/fieldset&gt;
    
    &lt;label for="country"&gt;Country:&lt;/label&gt;
    &lt;select id="country" name="country"&gt;
        &lt;optgroup label="North America"&gt;
            &lt;option value="us"&gt;United States&lt;/option&gt;
            &lt;option value="ca"&gt;Canada&lt;/option&gt;
        &lt;/optgroup&gt;
        &lt;option value="other"&gt;Other&lt;/option&gt;
    &lt;/select&gt;
    
    &lt;label for="message"&gt;Message:&lt;/label&gt;
    &lt;textarea id="message" name="message" rows="4"&gt;&lt;/textarea&gt;
    
    &lt;button type="submit"&gt;Send Message&lt;/button&gt;
&lt;/form&gt;
                        </pre>
                    `
                },
                {
                    title: "Input with Datalist",
                    content: `
                        <pre class="code-block">
&lt;label for="browser"&gt;Choose browser:&lt;/label&gt;
&lt;input list="browsers" id="browser" name="browser"&gt;

&lt;datalist id="browsers"&gt;
    &lt;option value="Chrome"&gt;
    &lt;option value="Firefox"&gt;
    &lt;option value="Safari"&gt;
    &lt;option value="Edge"&gt;
    &lt;option value="Opera"&gt;
&lt;/datalist&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Form Building Practice",
                    content: `
                        <p>Practice creating different types of forms:</p>
                        <ol>
                            <li>Create a registration form with validation</li>
                            <li>Build a survey form with various input types</li>
                            <li>Create a search form with datalist</li>
                            <li>Make a contact form with proper labels and grouping</li>
                            <li>Experiment with different form methods and actions</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between GET and POST methods?",
                    answer: "GET appends form data to the URL (visible in address bar, limited length, bookmarkable). POST sends data in the request body (not visible, no length limits, not bookmarkable). Use GET for searches, POST for sensitive data or large submissions."
                },
                {
                    question: "Why should every form control have a label?",
                    answer: "Labels improve accessibility (screen readers), usability (clicking label focuses control), and provide context. Use the for attribute on labels matching the input's id, or wrap the input inside the label for implicit association."
                }
            ]
        },
        {
            id: "html-entities",
            title: "HTML Entities and Special Characters",
            content: `
                <h3>What are HTML Entities?</h3>
                <p>HTML entities are codes used to display reserved characters or special symbols:</p>
                
                <h3>Why Use Entities?</h3>
                <ul>
                    <li>Display characters that have special meaning in HTML</li>
                    <li>Show symbols not available on keyboard</li>
                    <li>Ensure proper rendering across different browsers</li>
                    <li>Prevent code interpretation issues</li>
                </ul>
                
                <h3>Common HTML Entities:</h3>
                <ul>
                    <li><strong>&amp;lt;</strong> = &lt; (less than)</li>
                    <li><strong>&amp;gt;</strong> = &gt; (greater than)</li>
                    <li><strong>&amp;amp;</strong> = &amp; (ampersand)</li>
                    <li><strong>&amp;quot;</strong> = " (quotation mark)</li>
                    <li><strong>&amp;copy;</strong> = © (copyright)</li>
                    <li><strong>&amp;nbsp;</strong> = non-breaking space</li>
                    <li><strong>&amp;euro;</strong> = € (euro currency)</li>
                </ul>
                
                <h3>Numeric Character References:</h3>
                <ul>
                    <li><strong>&amp;#169;</strong> = © (decimal)</li>
                    <li><strong>&amp;#xA9;</strong> = © (hexadecimal)</li>
                    <li><strong>&amp;#128;</strong> = € (euro)</li>
                </ul>
                
                <h3>Mathematical Symbols:</h3>
                <ul>
                    <li><strong>&amp;pi;</strong> = π (pi)</li>
                    <li><strong>&amp;sum;</strong> = ∑ (summation)</li>
                    <li><strong>&amp;infin;</strong> = ∞ (infinity)</li>
                    <li><strong>&amp;radic;</strong> = √ (square root)</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>ما هي كيانات HTML؟</h3>
                    <p>كيانات HTML هي رموز تستخدم لعرض الأحرف المحجوزة أو الرموز الخاصة:</p>
                    
                    <h3>لماذا تستخدم الكيانات؟</h3>
                    <ul>
                        <li>عرض الأحرف التي لها معنى خاص في HTML</li>
                        <li>عرض الرموز غير المتوفرة على لوحة المفاتيح</li>
                        <li>ضمان العرض الصحيح عبر المتصفحات المختلفة</li>
                        <li>منع مشاكل تفسير الكود</li>
                    </ul>
                    
                    <h3>كيانات HTML الشائعة:</h3>
                    <ul>
                        <li><strong>&amp;lt;</strong> = &lt; (أقل من)</li>
                        <li><strong>&amp;gt;</strong> = &gt; (أكبر من)</li>
                        <li><strong>&amp;amp;</strong> = &amp; (علامة و)</li>
                        <li><strong>&amp;quot;</strong> = " (علامة اقتباس)</li>
                        <li><strong>&amp;copy;</strong> = © (حقوق النشر)</li>
                        <li><strong>&amp;nbsp;</strong> = مسافة غير قابلة للكسر</li>
                        <li><strong>&amp;euro;</strong> = € (عملة اليورو)</li>
                    </ul>
                    
                    <h3>مراجع الأحرف الرقمية:</h3>
                    <ul>
                        <li><strong>&amp;#169;</strong> = © (عشري)</li>
                        <li><strong>&amp;#xA9;</strong> = © (سداسي عشري)</li>
                        <li><strong>&amp;#128;</strong> = € (يورو)</li>
                    </ul>
                    
                    <h3>الرموز الرياضية:</h3>
                    <ul>
                        <li><strong>&amp;pi;</strong> = π (باي)</li>
                        <li><strong>&amp;sum;</strong> = ∑ (جمع)</li>
                        <li><strong>&amp;infin;</strong> = ∞ (اللانهاية)</li>
                        <li><strong>&amp;radic;</strong> = √ (الجذر التربيعي)</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Reserved Characters",
                    content: `
                        <pre class="code-block">
&lt;!-- Without entities (would break HTML) --&gt;
&lt;p&gt;5 &lt; 10 &amp; 10 &gt; 5&lt;/p&gt;

&lt;!-- With entities (correct) --&gt;
&lt;p&gt;5 &amp;lt; 10 &amp;amp; 10 &amp;gt; 5&lt;/p&gt;

&lt;!-- Displaying HTML code --&gt;
&lt;p&gt;Use &amp;lt;p&amp;gt; for paragraphs&lt;/p&gt;
                        </pre>
                    `
                },
                {
                    title: "Special Symbols",
                    content: `
                        <pre class="code-block">
&lt;p&gt;Copyright &amp;copy; 2023 My Company&lt;/p&gt;
&lt;p&gt;Price: &amp;euro;50.00&lt;/p&gt;
&lt;p&gt;Mathematical constant: &amp;pi; ≈ 3.14159&lt;/p&gt;
&lt;p&gt;Registered trademark: &amp;reg;&lt;/p&gt;
&lt;p&gt;Temperature: 25&amp;deg;C&lt;/p&gt;
&lt;p&gt;I love HTML&amp;excl;&lt;/p&gt;
                        </pre>
                    `
                },
                {
                    title: "Non-Breaking Spaces",
                    content: `
                        <pre class="code-block">
&lt;!-- Prevents line breaks between words --&gt;
&lt;p&gt;Dr.&amp;nbsp;John&amp;nbsp;Smith&lt;/p&gt;
&lt;p&gt;10&amp;nbsp;km/h&lt;/p&gt;
&lt;p&gt;Chapter&amp;nbsp;1: Introduction&lt;/p&gt;

&lt;!-- Multiple spaces --&gt;
&lt;p&gt;First&nbsp;&nbsp;&nbsp;Second&nbsp;&nbsp;&nbsp;Third&lt;/p&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "HTML Entities Practice",
                    content: `
                        <p>Practice using HTML entities:</p>
                        <ol>
                            <li>Display mathematical formulas using entities</li>
                            <li>Create a copyright notice with proper symbols</li>
                            <li>Write HTML code examples using entity escapes</li>
                            <li>Use non-breaking spaces in appropriate contexts</li>
                            <li>Create a list of currency symbols using entities</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When must I use HTML entities?",
                    answer: "You must use entities for characters that have special meaning in HTML: &lt;, &gt;, &amp;, and sometimes quotes. For other characters, modern browsers usually handle Unicode well, but entities ensure consistency. Use entities when you need specific symbols not on your keyboard or want guaranteed cross-browser compatibility."
                },
                {
                    question: "What's the difference between &amp;nbsp; and regular spaces?",
                    answer: "Regular spaces allow line breaks, while &amp;nbsp; (non-breaking space) prevents browsers from breaking lines at that space. Use &amp;nbsp; between words that should stay together on the same line, like in names, dates, or measurements."
                }
            ]
        },
        {
            id: "html5-semantic",
            title: "HTML5 Semantic Elements Deep Dive",
            content: `
                <h3>Complete Semantic Elements List</h3>
                <p>HTML5 introduced semantic elements that clearly describe their meaning:</p>
                
                <h3>Document Structure:</h3>
                <ul>
                    <li><strong>&lt;header&gt;</strong>: Introductory content or navigation</li>
                    <li><strong>&lt;nav&gt;</strong>: Navigation links</li>
                    <li><strong>&lt;main&gt;</strong>: Dominant content of the document</li>
                    <li><strong>&lt;article&gt;</strong>: Self-contained composition</li>
                    <li><strong>&lt;section&gt;</strong>: Thematic grouping of content</li>
                    <li><strong>&lt;aside&gt;</strong>: Sidebar or complementary content</li>
                    <li><strong>&lt;footer&gt;</strong>: Footer for its nearest section</li>
                </ul>
                
                <h3>Content Semantics:</h3>
                <ul>
                    <li><strong>&lt;figure&gt;</strong>: Self-contained content with caption</li>
                    <li><strong>&lt;figcaption&gt;</strong>: Caption for figure</li>
                    <li><strong>&lt;mark&gt;</strong>: Highlighted text</li>
                    <li><strong>&lt;time&gt;</strong>: Machine-readable date/time</li>
                    <li><strong>&lt;details&gt;</strong>: Disclosure widget</li>
                    <li><strong>&lt;summary&gt;</strong>: Summary for details element</li>
                    <li><strong>&lt;progress&gt;</strong>: Progress indicator</li>
                    <li><strong>&lt;meter&gt;</strong>: Scalar measurement</li>
                </ul>
                
                <h3>Text-Level Semantics:</h3>
                <ul>
                    <li><strong>&lt;data&gt;</strong>: Machine-readable equivalent</li>
                    <li><strong>&lt;cite&gt;</strong>: Title of a work</li>
                    <li><strong>&lt;dfn&gt;</strong>: Defining instance of a term</li>
                    <li><strong>&lt;abbr&gt;</strong>: Abbreviation or acronym</li>
                    <li><strong>&lt;ruby&gt;</strong>: Ruby annotations (for East Asian typography)</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>قائمة العناصر الدلالية الكاملة</h3>
                    <p>أدخلت HTML5 عناصر دلالية تصف معناها بوضوح:</p>
                    
                    <h3>هيكل المستند:</h3>
                    <ul>
                        <li><strong>&lt;header&gt;</strong>: محتوى تمهيدي أو تنقل</li>
                        <li><strong>&lt;nav&gt;</strong>: روابط التنقل</li>
                        <li><strong>&lt;main&gt;</strong>: المحتوى الرئيسي للمستند</li>
                        <li><strong>&lt;article&gt;</strong>: تركيب مستقل بذاته</li>
                        <li><strong>&lt;section&gt;</strong>: تجميع موضوعي للمحتوى</li>
                        <li><strong>&lt;aside&gt;</strong>: شريط جانبي أو محتوى تكميلي</li>
                        <li><strong>&lt;footer&gt;</strong>: تذييل لأقرب قسم</li>
                    </ul>
                    
                    <h3>الدلالات المحتوى:</h3>
                    <ul>
                        <li><strong>&lt;figure&gt;</strong>: محتوى مستقل مع تسمية توضيحية</li>
                        <li><strong>&lt;figcaption&gt;</strong>: تسمية توضيحية للشكل</li>
                        <li><strong>&lt;mark&gt;</strong>: نص مميز</li>
                        <li><strong>&lt;time&gt;</strong>: تاريخ/وقت قابل للقراءة الآلية</li>
                        <li><strong>&lt;details&gt;</strong>: عنصر تفاصيل قابل للكشف</li>
                        <li><strong>&lt;summary&gt;</strong>: ملخص لعنصر التفاصيل</li>
                        <li><strong>&lt;progress&gt;</strong>: مؤشر التقدم</li>
                        <li><strong>&lt;meter&gt;</strong>: قياس عددي</li>
                    </ul>
                    
                    <h3>دلالات مستوى النص:</h3>
                    <ul>
                        <li><strong>&lt;data&gt;</strong>: مكافئ قابل للقراءة الآلية</li>
                        <li><strong>&lt;cite&gt;</strong>: عنوان عمل</li>
                        <li><strong>&lt;dfn&gt;</strong>: مثيل تعريف للمصطلح</li>
                        <li><strong>&lt;abbr&gt;</strong>: اختصار أو acronym</li>
                        <li><strong>&lt;ruby&gt;</strong>: تعليقات روبي (لطباعة شرق آسيا)</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Complete Semantic Layout",
                    content: `
                        <pre class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Semantic Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Website Title&lt;/h1&gt;
        &lt;nav&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
        &lt;article&gt;
            &lt;h2&gt;Article Title&lt;/h2&gt;
            &lt;p&gt;Published on &lt;time datetime="2023-01-01"&gt;January 1, 2023&lt;/time&gt;&lt;/p&gt;
            &lt;figure&gt;
                &lt;img src="image.jpg" alt="Description"&gt;
                &lt;figcaption&gt;Image caption&lt;/figcaption&gt;
            &lt;/figure&gt;
        &lt;/article&gt;
        
        &lt;aside&gt;
            &lt;h3&gt;Related Links&lt;/h3&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#"&gt;Link 1&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/aside&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;
        &lt;p&gt;&amp;copy; 2023 Company Name&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
                        </pre>
                    `
                },
                {
                    title: "Interactive Semantic Elements",
                    content: `
                        <pre class="code-block">
&lt;!-- Details and Summary --&gt;
&lt;details&gt;
    &lt;summary&gt;Click to expand&lt;/summary&gt;
    &lt;p&gt;Hidden content revealed when clicked.&lt;/p&gt;
&lt;/details&gt;

&lt;!-- Progress bar --&gt;
&lt;label for="file"&gt;Download progress:&lt;/label&gt;
&lt;progress id="file" value="70" max="100"&gt;70%&lt;/progress&gt;

&lt;!-- Meter --&gt;
&lt;label for="fuel"&gt;Fuel level:&lt;/label&gt;
&lt;meter id="fuel" min="0" max="100" value="75"&gt;75%&lt;/meter&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Semantic HTML Practice",
                    content: `
                        <p>Practice using semantic elements:</p>
                        <ol>
                            <li>Convert a div-based layout to semantic HTML5</li>
                            <li>Create a blog post with proper article structure</li>
                            <li>Build a product page using figure and figcaption</li>
                            <li>Implement an FAQ section using details and summary</li>
                            <li>Create a dashboard with progress and meter elements</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What are the SEO benefits of semantic HTML?",
                    answer: "Semantic HTML helps search engines understand your content structure and hierarchy. Proper use of header, article, section, and other semantic elements can improve your page's relevance for specific keywords and enhance rich snippets in search results."
                },
                {
                    question: "How do screen readers benefit from semantic elements?",
                    answer: "Screen readers use semantic elements to provide better navigation and context. Users can jump between headers, navigate articles, or understand content relationships. Semantic markup makes websites more accessible to people with disabilities."
                }
            ]
        },
        {
            id: "accessibility",
            title: "HTML Accessibility (Advanced)",
            content: `
                <h3>Web Accessibility (a11y)</h3>
                <p>Accessibility ensures websites can be used by people with disabilities:</p>
                
                <h3>Key Accessibility Principles:</h3>
                <ul>
                    <li><strong>Perceivable</strong>: Available to senses (sight, hearing, touch)</li>
                    <li><strong>Operable</strong>: Usable with various input methods</li>
                    <li><strong>Understandable</strong>: Clear and predictable</li>
                    <li><strong>Robust</strong>: Works with current and future tools</li>
                </ul>
                
                <h3>Essential HTML Accessibility Features:</h3>
                <ul>
                    <li><strong>Alt text for images</strong>: Descriptive text for screen readers</li>
                    <li><strong>Proper heading structure</strong>: Logical hierarchy (h1-h6)</li>
                    <li><strong>Form labels</strong>: Associate labels with form controls</li>
                    <li><strong>ARIA attributes</strong>: Enhance accessibility when HTML isn't enough</li>
                    <li><strong>Keyboard navigation</strong>: All functionality available via keyboard</li>
                    <li><strong>Color contrast</strong>: Sufficient contrast for readability</li>
                </ul>
                
                <h3>ARIA (Accessible Rich Internet Applications):</h3>
                <ul>
                    <li><strong>aria-label</strong>: Provides invisible label</li>
                    <li><strong>aria-describedby</strong>: References descriptive text</li>
                    <li><strong>aria-hidden</strong>: Hides from screen readers</li>
                    <li><strong>role</strong>: Defines element purpose</li>
                    <li><strong>aria-live</strong>: Announces dynamic content changes</li>
                </ul>
                
                <h3>Semantic HTML for Accessibility:</h3>
                <p>Using proper semantic elements is the foundation of accessibility:</p>
                <ul>
                    <li>Use <strong>&lt;button&gt;</strong> for buttons, not <strong>&lt;div&gt;</strong></li>
                    <li>Use <strong>&lt;nav&gt;</strong> for navigation, not <strong>&lt;div&gt;</strong></li>
                    <li>Use <strong>&lt;main&gt;</strong>, <strong>&lt;header&gt;</strong>, <strong>&lt;footer&gt;</strong></li>
                    <li>Proper form structure with <strong>&lt;label&gt;</strong> elements</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>إمكانية الوصول إلى الويب (a11y)</h3>
                    <p>تضمن إمكانية الوصول أن المواقع الإلكترونية يمكن استخدامها من قبل الأشخاص ذوي الإعاقات:</p>
                    
                    <h3>مبادئ إمكانية الوصول الرئيسية:</h3>
                    <ul>
                        <li><strong>يمكن إدراكه</strong>: متاح للحواس (البصر، السمع، اللمس)</li>
                        <li><strong>قابل للتشغيل</strong>: يمكن استخدامه بطرق إدخال متنوعة</li>
                        <li><strong>يمكن فهمه</strong>: واضح ومتوقع</li>
                        <li><strong>قوي</strong>: يعمل مع الأدوات الحالية والمستقبلية</li>
                    </ul>
                    
                    <h3>ميزات إمكانية الوصول الأساسية في HTML:</h3>
                    <ul>
                        <li><strong>نص بديل للصور</strong>: نص وصفي لقارئات الشاشة</li>
                        <li><strong>هيكل عناوين صحيح</strong>: تسلسل هرمي منطقي (h1-h6)</li>
                        <li><strong>تسميات النماذج</strong>: ربط التسميات بعناصر تحكم النموذج</li>
                        <li><strong>سمات ARIA</strong>: تعزيز إمكانية الوصول عندما لا تكفي HTML</li>
                        <li><strong>التنقل بلوحة المفاتيح</strong>: جميع الوظائف متاحة عبر لوحة المفاتيح</li>
                        <li><strong>تباين الألوان</strong>: تباين كافٍ لسهولة القراءة</li>
                    </ul>
                    
                    <h3>ARIA (تطبيقات الإنترنت الغنية القابلة للوصول):</h3>
                    <ul>
                        <li><strong>aria-label</strong>: يوفر تسمية غير مرئية</li>
                        <li><strong>aria-describedby</strong>: يشير إلى نص وصفي</li>
                        <li><strong>aria-hidden</strong>: يخفي من قارئات الشاشة</li>
                        <li><strong>role</strong>: يحدد غرض العنصر</li>
                        <li><strong>aria-live</strong>: يعلن عن تغييرات المحتوى الديناميكي</li>
                    </ul>
                    
                    <h3>HTML الدلالي لإمكانية الوصول:</h3>
                    <p>استخدام العناصر الدلالية الصحيحة هو أساس إمكانية الوصول:</p>
                    <ul>
                        <li>استخدم <strong>&lt;button&gt;</strong> للأزرار، ليس <strong>&lt;div&gt;</strong></li>
                        <li>استخدم <strong>&lt;nav&gt;</strong> للتنقل، ليس <strong>&lt;div&gt;</strong></li>
                        <li>استخدم <strong>&lt;main&gt;</strong>, <strong>&lt;header&gt;</strong>, <strong>&lt;footer&gt;</strong></li>
                        <li>هيكل نموذج صحيح مع عناصر <strong>&lt;label&gt;</strong></li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Accessible Form Example",
                    content: `
                        <pre class="code-block">
&lt;form aria-labelledby="form-title"&gt;
    &lt;h2 id="form-title"&gt;Contact Form&lt;/h2&gt;
    
    &lt;div&gt;
        &lt;label for="name"&gt;Full Name:&lt;/label&gt;
        &lt;input type="text" id="name" aria-required="true"&gt;
        &lt;span id="name-error" aria-live="polite"&gt;&lt;/span&gt;
    &lt;/div&gt;
    
    &lt;fieldset&gt;
        &lt;legend&gt;Preferred Contact Method&lt;/legend&gt;
        &lt;input type="radio" id="email" name="contact"&gt;
        &lt;label for="email"&gt;Email&lt;/label&gt;
        
        &lt;input type="radio" id="phone" name="contact"&gt;
        &lt;label for="phone"&gt;Phone&lt;/label&gt;
    &lt;/fieldset&gt;
    
    &lt;button type="submit" aria-describedby="submit-help"&gt;Submit&lt;/button&gt;
    &lt;span id="submit-help" class="visually-hidden"&gt;Form will be sent to our team&lt;/span&gt;
&lt;/form&gt;
                        </pre>
                    `
                },
                {
                    title: "Accessible Navigation",
                    content: `
                        <pre class="code-block">
&lt;nav aria-label="Main navigation"&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="#home" aria-current="page"&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;
            &lt;a href="#services" aria-haspopup="true" aria-expanded="false"&gt;Services&lt;/a&gt;
            &lt;ul aria-label="Services submenu"&gt;
                &lt;li&gt;&lt;a href="#web"&gt;Web Development&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#design"&gt;Design&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Accessibility Practice",
                    content: `
                        <p>Practice implementing accessibility features:</p>
                        <ol>
                            <li>Add proper alt text to all images on a page</li>
                            <li>Create a form with complete accessibility features</li>
                            <li>Implement keyboard navigation for interactive elements</li>
                            <li>Use ARIA attributes to enhance complex widgets</li>
                            <li>Test your page with screen reader software</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between aria-label and aria-labelledby?",
                    answer: "aria-label provides a direct text string as the label, while aria-labelledby references the ID of another element that contains the label text. Use aria-label for simple labels and aria-labelledby when you want to reference existing visible text."
                },
                {
                    question: "Why is keyboard navigation important?",
                    answer: "Keyboard navigation is essential for users who cannot use a mouse (motor disabilities), prefer keyboard efficiency, or use screen readers. All interactive elements should be focusable and operable using only the keyboard, following a logical tab order."
                }
            ]
        },
        // Additional topics can be added here as needed
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
