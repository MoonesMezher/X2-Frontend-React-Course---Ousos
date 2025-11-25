// Course data structure
const courseData = {
    courseInfo: {
        name: "Frontend React",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "intro",
            title: "Introduction",
            content: `
                <h3>What I Need?</h3>
                <ul>
                    <li>Always search => Break your coach</li>
                    <li>Have a target</li>
                    <li>Focus</li>
                    <li>Make questions</li>
                </ul>
                
                <h3>Before We Begin</h3>
                <p>Install:</p>
                <ul>
                    <li>Web Browser => Lets us view websites => Chrome, Edge, ...</li>
                    <li>Code Editor => Lets us write code => VSC, Cursor, ...</li>
                </ul>
                
                <h3>What is Web Browser?</h3>
                <p>A web browser acts like a window on to the internet. It is the software program that lets you visit and view web pages (surf the web). If you know the web address (URL) or you have clicked a link then a web browser will take you to the website.</p>
                
                <h3>What is the difference between web browser and website?</h3>
                <ul>
                    <li>Browsers interpret and display HTML, CSS, and JavaScript, enabling users to interact with web pages. They also provide features like bookmarks, tabs, and extensions to enhance the browsing experience.</li>
                    <li>A website is a collection of related web pages that are hosted on a server and can be accessed via the internet. Websites are identified by a unique domain name (e.g., www.example.com).</li>
                </ul>
                <p>Each web page within a website is typically written in HTML and may include text, images, videos, and other multimedia content. Websites can serve various purposes, such as providing information, offering services, or facilitating online transactions.</p>
                <p><strong>In summary</strong>, a web browser is the tool used to access and view websites, while a website is the collection of content that users visit through the browser.</p>
                <p><strong>Analogy</strong>: Web Browsers like TVs, and Websites like Movies</p>

                <br><hr><br>
                <div dir="rtl">
                    <h3>ماذا احتاج؟</h3>
                    <ul>
                        <li>ابحث باستمرار</li>
                        <li>ضع هدف</li>
                        <li>التركيز</li>
                        <li>اسأل باستمرار</li>
                    </ul>
                    
                    <h3>قبل البدء</h3>
                    <p>يجب تنزيل:</p>
                    <ul>
                        <li>متصفح ويب لعرض المواقع مثل كروم</li>
                        <li>محرر أكواد لكتابة الكود مثل vsc</li>
                    </ul>
                    
                    <h3>ما هو متصفح الويب؟</h3>
                    <p>يعمل متصفح الويب كنافذة على الإنترنت. إنه البرنامج الذي يتيح لك زيارة صفحات الويب وعرضها (تصفحها). إذا كنت تعرف عنوان الويب (URL) أو نقرت على رابط، فسينقلك متصفح الويب إلى الموقع.</p>
                    
                    <h3>ما الفرق بين متصفح الويب وموقع الويب؟</h3>
                    <ul>
                        <li>تفسر المتصفحات وتعرض لغات HTML وCSS وJavaScript، مما يُمكّن المستخدمين من التفاعل مع صفحات الويب. كما توفر ميزات مثل الإشارات المرجعية وعلامات التبويب والإضافات لتحسين تجربة التصفح.</li>
                        <li>موقع الويب هو مجموعة من صفحات الويب المترابطة المُستضافة على خادم ويمكن الوصول إليها عبر الإنترنت. يتم تعريف مواقع الويب باسم نطاق فريد (مثل www.example.com).</li>
                    </ul>
                    <p>تكتب كل صفحة ويب داخل موقع ويب عادةً بلغة HTML، وقد تتضمن نصوصًا وصورًا ومقاطع فيديو ومحتوى وسائط متعددة آخر. يمكن أن تخدم مواقع الويب أغراضًا متعددة، مثل توفير المعلومات، وتقديم الخدمات، أو تسهيل المعاملات عبر الإنترنت.</p>
                    <p><strong>باختصار</strong>,  متصفح الويب هو الأداة المستخدمة للوصول إلى مواقع الويب وعرضها، بينما موقع الويب هو مجموعة المحتوى الذي يزوره المستخدمون من خلال المتصفح.</p>
                    <p><strong>تشبيه</strong>:  متصفحات الويب مثل أجهزة التلفزيون، ومواقع الويب مثل الأفلام</p>
                </div>
            `,
            examples: [
                {
                    title: "Browser Examples",
                    content: `
                        <p>Popular web browsers include:</p>
                        <ul>
                            <li>Google Chrome</li>
                            <li>Mozilla Firefox</li>
                            <li>Microsoft Edge</li>
                            <li>Safari</li>
                        </ul>
                        <p>Each browser has its own rendering engine and features, but they all serve the same fundamental purpose.</p>
                    `
                }
            ],
            practices: [
                {
                    title: "Installation Practice",
                    content: `
                        <p>Practice installing the necessary software:</p>
                        <ol>
                            <li>Download and install a web browser (Chrome recommended)</li>
                            <li>Download and install a code editor (VS Code recommended)</li>
                            <li>Create a new folder for your course projects</li>
                            <li>Open the folder in your code editor</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What is the difference between Google Search and Google Chrome?",
                    answer: `
                        <p><strong>Google Search</strong> is a web-based search engine that allows users to find information on the internet. Users can enter queries, and Google Search returns a list of relevant web pages, images, videos, and other content. It uses complex algorithms to index and rank content from across the web.</p>
                        <p><strong>Google Chrome</strong> is a web browser developed by Google. It is a software application that enables users to access and view websites, including Google Search. Chrome provides features such as tabbed browsing, bookmarks, extensions, and security measures.</p>
                        <p>In summary, Google Search is a service for finding information online, while Google Chrome is the browser used to access that service and other websites.</p>
                    `
                }
            ]
        },
        {
            id: "setup",
            title: "Setup",
            content: `
                <h3>Development Environment Setup</h3>
                <p>To get started with web development, you need to set up your development environment:</p>
                <ul>
                    <li>Install a modern web browser (Chrome, Firefox, Edge, etc.)</li>
                    <li>Install a code editor (VS Code is highly recommended)</li>
                    <li>Create a dedicated folder for your projects</li>
                </ul>
                
                <h3>VS Code Setup</h3>
                <p>After installing VS Code, consider installing these helpful extensions:</p>
                <ul>
                    <li>Live Server - to preview your HTML files</li>
                    <li>Prettier - for code formatting</li>
                    <li>ESLint - for code linting</li>
                    <li>Auto Rename Tag - automatically renames paired HTML tags</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>إعداد بيئة التطوير</h3>
                    <p>للبدء في تطوير الويب، تحتاج إلى إعداد بيئة التطوير الخاصة بك:</p>
                    <ul>
                        <li>قم بتثبيت متصفح ويب حديث (Chrome, Firefox, Edge, إلخ)</li>
                        <li>قم بتثبيت محرر أكواد (يوصى بشدة بـ VS Code)</li>
                        <li>أنشئ مجلدًا مخصصًا لمشاريعك</li>
                    </ul>
                    
                    <h3>إعداد VS Code</h3>
                    <p>بعد تثبيت VS Code، فكر في تثبيت هذه الإضافات المفيدة:</p>
                    <ul>
                        <li>Live Server - لمعاينة ملفات HTML الخاصة بك</li>
                        <li>Prettier - لتنسيق الكود</li>
                        <li>ESLint - لفحص جودة الكود</li>
                        <li>Auto Rename Tag - يعيد تسمية وسوم HTML المقترنة تلقائيًا</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "VS Code Interface",
                    content: `
                        <p>The VS Code interface consists of:</p>
                        <ul>
                            <li><strong>Explorer</strong> - File navigation</li>
                            <li><strong>Editor</strong> - Where you write code</li>
                            <li><strong>Terminal</strong> - Command line interface</li>
                            <li><strong>Extensions</strong> - Manage installed extensions</li>
                        </ul>
                    `
                }
            ],
            practices: [
                {
                    title: "First HTML File",
                    content: `
                        <p>Practice creating your first HTML file:</p>
                        <ol>
                            <li>Open VS Code</li>
                            <li>Create a new file named "index.html"</li>
                            <li>Type "!" and press Tab to generate HTML boilerplate</li>
                            <li>Add a heading and paragraph to the body</li>
                            <li>Open the file in your browser to see the result</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why is VS Code a popular choice for web development?",
                    answer: "VS Code is popular because it's free, lightweight, highly customizable, has a rich extension ecosystem, excellent debugging capabilities, and built-in Git integration."
                }
            ]
        },
        {
            id: "html-intro",
            title: "HTML Introduction",
            content: `
                <h3>What is HTML?</h3>
                <p>HTML stands for HyperText Markup Language. It's the standard markup language for creating web pages.</p>
                <ul>
                    <li>It's a tool we use to create websites and build the web</li>
                    <li>It gives instructions to web browsers on how to display content</li>
                    <li>We use tags &lt;tag&gt;&lt;/tag&gt; (HTML Elements) as syntax</li>
                    <li>HTML files have the .html extension</li>
                </ul>
                
                <h3>What is Syntax?</h3>
                <p>Syntax refers to the rules for writing code, similar to grammar in natural languages. Each programming language has specific syntax rules that must be followed.</p>
                
                <h3>What is HTML5?</h3>
                <p>HTML5 is the fifth and current major version of HTML. It introduced many new features and APIs that make it easier to create rich web applications.</p>
                
                <h3>Why start with HTML?</h3>
                <p>HTML is the foundation of web development. It's the first step in both frontend and backend development stacks.</p>

                <br><hr><br>
                <div dir="rtl">
                    <h3>ما هو HTML؟</h3>
                    <p>HTML تعني لغة ترميز النص الفائق. إنها لغة الترميز القياسية لإنشاء صفحات الويب.</p>
                    <ul>
                        <li>إنها أداة نستخدمها لإنشاء المواقع الإلكترونية وبناء الويب</li>
                        <li>تعطي تعليمات لمتصفحات الويب حول كيفية عرض المحتوى</li>
                        <li>نستخدم الوسوم &lt;tag&gt;&lt;/tag&gt; (عناصر HTML) كبناء جملة</li>
                        <li>ملفات HTML لها امتداد .html</li>
                    </ul>
                    
                    <h3>ما هو مفهوم ال syntax؟</h3>
                    <p>يشير بناء الجملة إلى القواعد الخاصة بكتابة مثل القواعد النحوية في اللغات الطبيعية. كل لغة برمجة لها قواعد بناء جملة محددة يجب اتباعها.</p>
                    
                    <h3>ما هو HTML5؟</h3>
                    <p>HTML5 هو الإصدار الخامس والحالي الرئيسي من HTML. قدم العديد من الميزات وواجهات برمجة التطبيقات الجديدة التي تجعل إنشاء تطبيقات الويب الغنية أسهل.</p>
                    
                    <h3>لماذا نبدأ بـ HTML؟</h3>
                    <p>HTML هو أساس تطوير الويب. إنها الخطوة الأولى في كل من مسارات تطوير الواجهة الأمامية والخلفية.</p>
                </div>
            `,
            examples: [
                {
                    title: "Basic HTML Structure",
                    content: `
                        <pre class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My First Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Hello World&lt;/h1&gt;
&lt;p&gt;This is my first HTML page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "HTML Tag Practice",
                    content: `
                        <p>Practice using different HTML tags:</p>
                        <ol>
                            <li>Create headings of different levels (h1 to h6)</li>
                            <li>Add paragraphs with text</li>
                            <li>Create an unordered list with list items</li>
                            <li>Add an image to your page</li>
                            <li>Create a simple table with rows and columns</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What happens if you break HTML syntax?",
                    answer: "Browsers are generally forgiving of minor HTML syntax errors and will try to render the page anyway. However, incorrect syntax can lead to unexpected rendering results or broken functionality. It's important to write valid HTML for consistent results across different browsers."
                }
            ]
        },
        {
            id: "html-syntax",
            title: "HTML Syntax",
            content: `
                <h3>HTML Element Structure</h3>
                <p>An HTML element consists of:</p>
                <ul>
                    <li><strong>Tag</strong>: &lt;p a="1" b="2" c="3"&gt;&lt;/p&gt;</li>
                    <li><strong>Tag Name</strong>: p</li>
                    <li><strong>Opening Tag</strong>: &lt;p&gt;</li>
                    <li><strong>Closing Tag</strong>: &lt;/p&gt;</li>
                    <li><strong>Attributes</strong>: a, b, c (modifiers that change how the element behaves)</li>
                    <li><strong>Attribute Values</strong>: 1, 2, 3</li>
                </ul>
                
                <p><strong>Note</strong>: Some tags don't have closing tags (self-closing tags).</p>
                
                <h3>What are HTML Attributes?</h3>
                <p>Attributes provide additional information about HTML elements and modify how they behave. Each HTML element has specific attributes that can be used with it.</p>

                <br><hr><br>
                <div dir="rtl">
                    <h3>هيكل عنصر HTML</h3>
                    <p>يتكون عنصر HTML من:</p>
                    <ul>
                        <li><strong>الوسم</strong>: &lt;p a="1" b="2" c="3"&gt;&lt;/p&gt;</li>
                        <li><strong>اسم الوسم</strong>: p</li>
                        <li><strong>وسم الفتح</strong>: &lt;p&gt;</li>
                        <li><strong>وسم الإغلاق</strong>: &lt;/p&gt;</li>
                        <li><strong>السمات</strong>: a, b, c (معدلات تغير كيفية تصرف العنصر)</li>
                        <li><strong>قيم السمات</strong>: 1, 2, 3</li>
                    </ul>
                    
                    <p><strong>ملاحظة</strong>: بعض الوسوم لا تحتوي على وسوم إغلاق (وسوم ذاتية الإغلاق).</p>
                    
                    <h3>ما هي سمات HTML؟</h3>
                    <p>توفر السمات معلومات إضافية حول عناصر HTML وتعدل كيفية تصرفها. كل عنصر HTML له سمات محددة يمكن استخدامها معه.</p>
                </div>
            `,
            examples: [
                {
                    title: "HTML Element Examples",
                    content: `
                        <p>Examples of HTML elements with attributes:</p>
                        <pre class="code-block">
&lt;!-- Image with src and alt attributes --&gt;
&lt;img src="image.jpg" alt="Description"&gt;

&lt;!-- Anchor with href attribute --&gt;
&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;

&lt;!-- Input with multiple attributes --&gt;
&lt;input type="text" placeholder="Enter your name" required&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Attribute Practice",
                    content: `
                        <p>Practice using HTML attributes:</p>
                        <ol>
                            <li>Create a link that opens in a new tab (use target="_blank")</li>
                            <li>Add an image with width and height attributes</li>
                            <li>Create a form input with placeholder and required attributes</li>
                            <li>Add a div with class and id attributes</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why are some HTML elements self-closing?",
                    answer: "Self-closing elements (like &lt;img&gt;, &lt;br&gt;, &lt;input&gt;) don't have content between opening and closing tags, so they can be written in a shortened form. These elements are typically used to embed content or create structural breaks rather than containing text or other elements."
                }
            ]
        },
        {
            id: "links",
            title: "Links and Anchor Elements",
            content: `
                <h3>Anchor Element: &lt;a href="/"&gt;hello&lt;/a&gt;</h3>
                <p>The anchor element creates hyperlinks to other web pages, files, locations, or email addresses.</p>
                
                <h3>Key Attributes:</h3>
                <ul>
                    <li><strong>href</strong>: Specifies the destination URL (required)</li>
                    <li><strong>target</strong>: Specifies how to open the link (_blank, _self, _parent, _top)</li>
                    <li><strong>title</strong>: Provides additional information about the link</li>
                    <li><strong>rel</strong>: Specifies the relationship between current and linked document</li>
                </ul>
                
                <h3>Special href Values:</h3>
                <ul>
                    <li><strong>href="#id"</strong>: Links to an element with specific ID on same page</li>
                    <li><strong>href="mailto:email@example.com"</strong>: Opens email client</li>
                    <li><strong>href="tel:+123456789"</strong>: Opens phone dialer (mobile)</li>
                    <li><strong>href="javascript:void(0)"</strong>: Prevents navigation</li>
                </ul>
                
                <p><strong>Important</strong>: Each HTML element has specific attributes that work with it!</p>

                <br><hr><br>
                <div dir="rtl">
                    <h3>عنصر الرابط: &lt;a href="/"&gt;مرحباً&lt;/a&gt;</h3>
                    <p>ينشئ عنصر الرابط ارتباطات تشعبية إلى صفحات ويب أخرى أو ملفات أو مواقع أو عناوين بريد إلكتروني.</p>
                    
                    <h3>السمات الرئيسية:</h3>
                    <ul>
                        <li><strong>href</strong>: يحدد عنوان URL الوجهة (مطلوب)</li>
                        <li><strong>target</strong>: يحدد كيفية فتح الرابط (_blank, _self, _parent, _top)</li>
                        <li><strong>title</strong>: يوفر معلومات إضافية حول الرابط</li>
                        <li><strong>rel</strong>: يحدد العلاقة بين المستند الحالي والمستند المرتبط</li>
                    </ul>
                    
                    <h3>قيم href الخاصة:</h3>
                    <ul>
                        <li><strong>href="#id"</strong>: يربط بعنصر مع معرف محدد في نفس الصفحة</li>
                        <li><strong>href="mailto:email@example.com"</strong>: يفتح عميل البريد الإلكتروني</li>
                        <li><strong>href="tel:+123456789"</strong>: يفتح طلب الهاتف (على الجوال)</li>
                        <li><strong>href="javascript:void(0)"</strong>: يمنع التنقل</li>
                    </ul>
                    
                    <p><strong>مهم</strong>: كل عنصر HTML له سمات محددة تعمل معه!</p>
                </div>
            `,
            examples: [
                {
                    title: "Link Examples",
                    content: `
                        <pre class="code-block">
&lt;!-- Basic link --&gt;
&lt;a href="https://example.com"&gt;Visit Example&lt;/a&gt;

&lt;!-- Link opening in new tab --&gt;
&lt;a href="https://example.com" target="_blank"&gt;Open in New Tab&lt;/a&gt;

&lt;!-- Email link --&gt;
&lt;a href="mailto:contact@example.com"&gt;Contact Us&lt;/a&gt;

&lt;!-- Internal page link --&gt;
&lt;a href="#section1"&gt;Go to Section 1&lt;/a&gt;

&lt;!-- Link with title --&gt;
&lt;a href="about.html" title="Learn more about our company"&gt;About&lt;/a&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Link Creation Practice",
                    content: `
                        <p>Practice creating different types of links:</p>
                        <ol>
                            <li>Create a link to an external website that opens in a new tab</li>
                            <li>Create an email link with a subject line</li>
                            <li>Create internal links that jump to different sections on the same page</li>
                            <li>Create a download link for a PDF file</li>
                            <li>Create a phone number link for mobile users</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between target='_blank' and target='_self'?",
                    answer: "target='_blank' opens the link in a new browser tab or window, while target='_self' opens the link in the same frame (default behavior). Using '_blank' is useful when you want users to keep your page open while visiting the linked content."
                },
                {
                    question: "Why is it important to use descriptive link text?",
                    answer: "Descriptive link text improves accessibility for screen readers, helps with SEO, and provides better user experience. Avoid using generic text like 'click here' - instead use meaningful text that describes the destination."
                }
            ]
        },
        {
            id: "html-formatting",
            title: "HTML Formatting and Spacing",
            content: `
                <h3>Extra Spaces and Lines in HTML</h3>
                <p>HTML collapses multiple spaces and line breaks into a single space. This is called "white space collapsing".</p>
                
                <h3>How HTML Handles White Space:</h3>
                <ul>
                    <li>Multiple spaces become one space</li>
                    <li>Line breaks are treated as single spaces</li>
                    <li>Tabs are treated as single spaces</li>
                </ul>
                
                <h3>First Essential HTML Elements:</h3>
                <ul>
                    <li><strong>&lt;html&gt;</strong>: Root element of HTML document</li>
                    <li><strong>&lt;head&gt;</strong>: Contains meta information (title, meta tags, links to CSS/JS)</li>
                    <li><strong>&lt;body&gt;</strong>: Contains the visible content of the webpage</li>
                </ul>
                
                <h3>Spacing and Formatting in HTML</h3>
                <p>Proper spacing makes your code more readable and maintainable:</p>
                <ul>
                    <li>Use indentation to show parent-child relationships</li>
                    <li>Add comments to explain complex sections</li>
                    <li>Group related elements together</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>المسافات والأسطر الإضافية في HTML</h3>
                    <p>يقوم HTML بضم المسافات المتعددة وفواصل الأسطر إلى مسافة واحدة. هذا يسمى "انهيار المساحة البيضاء".</p>
                    
                    <h3>كيف يتعامل HTML مع المساحة البيضاء:</h3>
                    <ul>
                        <li>تصبح المسافات المتعددة مسافة واحدة</li>
                        <li>يتم التعامل مع فواصل الأسطر كمسافات مفردة</li>
                        <li>يتم التعامل مع علامات التبويب كمسافات مفردة</li>
                    </ul>
                    
                    <h3>أول عناصر HTML الأساسية:</h3>
                    <ul>
                        <li><strong>&lt;html&gt;</strong>: العنصر الجذر لمستند HTML</li>
                        <li><strong>&lt;head&gt;</strong>: يحتوي على معلومات وصفية (العنوان، وسوم الوصف، روابط لـ CSS/JS)</li>
                        <li><strong>&lt;body&gt;</strong>: يحتوي على المحتوى المرئي لصفحة الويب</li>
                    </ul>
                    
                    <h3>المسافات والتنسيق في HTML</h3>
                    <p>يجعل التباعد المناسب الكود الخاص بك أكثر قابلية للقراءة والصيانة:</p>
                    <ul>
                        <li>استخدم المسافة البادئة لإظهار العلاقات بين العناصر الرئيسية والفرعية</li>
                        <li>أضف تعليقات لشرح الأقسام المعقدة</li>
                        <li>اجمع العناصر ذات الصلة معًا</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "White Space Example",
                    content: `
                        <p>This HTML:</p>
                        <pre class="code-block">
&lt;p&gt;Hello     World&lt;/p&gt;
&lt;p&gt;Hello
World&lt;/p&gt;
                        </div>
                        <p>Will display as:</p>
                        <p>Hello World</p>
                        <p>Hello World</p>
                    `
                },
                {
                    title: "Proper HTML Structure",
                    content: `
                        <pre class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;My Website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Welcome&lt;/h1&gt;
    &lt;/header&gt;
    &lt;main&gt;
        &lt;p&gt;Content goes here&lt;/p&gt;
    &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Formatting Practice",
                    content: `
                        <p>Practice proper HTML formatting:</p>
                        <ol>
                            <li>Create a well-structured HTML document with proper indentation</li>
                            <li>Add multiple paragraphs with different spacing and observe the result</li>
                            <li>Create nested elements with proper indentation</li>
                            <li>Use comments to section your code</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why does HTML collapse multiple spaces?",
                    answer: "HTML collapses multiple spaces to provide flexibility in how developers write code without affecting the final display. This allows developers to format their code for readability while maintaining consistent rendering. Use CSS if you need precise control over spacing."
                },
                {
                    question: "What is the purpose of the DOCTYPE declaration?",
                    answer: "The &lt;!DOCTYPE html&gt; declaration tells the browser which version of HTML the document is using. For HTML5, it ensures the browser renders the page in standards mode. It's not an HTML tag but important for proper rendering."
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
