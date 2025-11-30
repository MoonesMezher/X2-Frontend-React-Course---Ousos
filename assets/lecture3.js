// Course data structure
const courseData = {
    courseInfo: {
        name: "Frontend React",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "containers",
            title: "Container Elements and Layout",
            content: `
                <h3>Div Element: &lt;div&gt;&lt;/div&gt;</h3>
                <p>The div element is the most versatile container:</p>
                <ul>
                    <li>Block-level element</li>
                    <li>No semantic meaning</li>
                    <li>Used for grouping and styling content</li>
                    <li>Often called the 'king of elements'</li>
                </ul>
                
                <h3>Semantic HTML5 Elements</h3>
                <p>Semantic elements clearly describe their meaning to browsers and developers:</p>
                <ul>
                    <li><strong>&lt;header&gt;</strong>: Introductory content or navigation</li>
                    <li><strong>&lt;nav&gt;</strong>: Navigation links</li>
                    <li><strong>&lt;main&gt;</strong>: Main content of the document</li>
                    <li><strong>&lt;article&gt;</strong>: Self-contained composition</li>
                    <li><strong>&lt;section&gt;</strong>: Thematic grouping of content</li>
                    <li><strong>&lt;aside&gt;</strong>: Sidebar or complementary content</li>
                    <li><strong>&lt;footer&gt;</strong>: Footer for its nearest section</li>
                </ul>
                
                <h3>Website Layout Evolution</h3>
                <p>From class-based divs to semantic elements:</p>
                <ul>
                    <li><strong>Old approach</strong>: &lt;div class="header"&gt;, &lt;div class="nav"&gt;</li>
                    <li><strong>Modern approach</strong>: &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;</li>
                </ul>
                
                <h3>Why Use Semantic Elements?</h3>
                <ul>
                    <li>Better accessibility (screen readers)</li>
                    <li>Improved SEO (search engines)</li>
                    <li>Cleaner, more readable code</li>
                    <li>Future-proof structure</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>عنصر Div: &lt;div&gt;&lt;/div&gt;</h3>
                    <p>عنصر div هو الحاوية الأكثر تنوعاً:</p>
                    <ul>
                        <li>عنصر مستوى الكتلة</li>
                        <li>بدون معنى دلالي</li>
                        <li>يستخدم لتجميع وتنسيق المحتوى</li>
                        <li>غالباً ما يسمى 'ملك العناصر'</li>
                    </ul>
                    
                    <h3>عناصر HTML5 الدلالية</h3>
                    <p>تصف العناصر الدلالية معناها بوضوح للمتصفحات والمطورين:</p>
                    <ul>
                        <li><strong>&lt;header&gt;</strong>: محتوى تمهيدي أو تنقل</li>
                        <li><strong>&lt;nav&gt;</strong>: روابط التنقل</li>
                        <li><strong>&lt;main&gt;</strong>: المحتوى الرئيسي للمستند</li>
                        <li><strong>&lt;article&gt;</strong>: تركيب مستقل</li>
                        <li><strong>&lt;section&gt;</strong>: تجميع موضوعي للمحتوى</li>
                        <li><strong>&lt;aside&gt;</strong>: الشريط الجانبي أو المحتوى التكميلي</li>
                        <li><strong>&lt;footer&gt;</strong>: تذييل لأقرب قسم</li>
                    </ul>
                    
                    <h3>تطور تخطيط مواقع الويب</h3>
                    <p>من عناصر div القائمة على الفئات إلى العناصر الدلالية:</p>
                    <ul>
                        <li><strong>النهج القديم</strong>: &lt;div class="header"&gt;, &lt;div class="nav"&gt;</li>
                        <li><strong>النهج الحديث</strong>: &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;</li>
                    </ul>
                    
                    <h3>لماذا تستخدم العناصر الدلالية؟</h3>
                    <ul>
                        <li>إمكانية وصول أفضل (قارئات الشاشة)</li>
                        <li>تحسين محركات البحث</li>
                        <li>كود أنظف وأكثر قابلية للقراءة</li>
                        <li>هيكل مستعد للمستقبل</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Traditional vs Semantic Layout",
                    content: `
                        <p><strong>Traditional (div-based):</strong></p>
                        <pre class="code-block">
&lt;div class="header"&gt;
    &lt;div class="nav"&gt;Navigation&lt;/div&gt;
&lt;/div&gt;
&lt;div class="main"&gt;
    &lt;div class="article"&gt;Content&lt;/div&gt;
    &lt;div class="sidebar"&gt;Sidebar&lt;/div&gt;
&lt;/div&gt;
&lt;div class="footer"&gt;Footer&lt;/div&gt;
                        </pre>
                        
                        <p><strong>Modern (semantic):</strong></p>
                        <pre class="code-block">
&lt;header&gt;
    &lt;nav&gt;Navigation&lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
    &lt;article&gt;Content&lt;/article&gt;
    &lt;aside&gt;Sidebar&lt;/aside&gt;
&lt;/main&gt;
&lt;footer&gt;Footer&lt;/footer&gt;
                        </pre>
                    `
                },
                {
                    title: "Complete Semantic Layout",
                    content: `
                        <pre class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
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
            &lt;p&gt;Article content...&lt;/p&gt;
        &lt;/article&gt;
        
        &lt;aside&gt;
            &lt;h3&gt;Related Links&lt;/h3&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#"&gt;Link 1&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/aside&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;
        &lt;p&gt;Copyright 2023&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Layout Practice",
                    content: `
                        <p>Practice creating layouts:</p>
                        <ol>
                            <li>Create a basic page layout using only div elements</li>
                            <li>Convert the div layout to semantic HTML5 elements</li>
                            <li>Build a blog post with header, article, and footer</li>
                            <li>Create a product card using appropriate semantic elements</li>
                            <li>Compare the readability of both approaches</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should I use div vs semantic elements?",
                    answer: "Use semantic elements when they accurately describe the content's purpose. Use div for generic containers without semantic meaning, or when no semantic element fits. Semantic elements should be your first choice for better accessibility and SEO."
                },
                {
                    question: "What's the difference between article and section?",
                    answer: "&lt;article&gt; represents a self-contained composition that could be distributed independently (blog post, news article). &lt;section&gt; represents a thematic grouping of content, usually with a heading. An article can contain sections, and a section can contain articles."
                }
            ]
        },
        {
            id: "advanced-multimedia",
            title: "Advanced Multimedia",
            content: `
                <h3>Audio Element: &lt;audio&gt;&lt;/audio&gt;</h3>
                <p>The audio element embeds sound content:</p>
                
                <h3>Key Attributes:</h3>
                <ul>
                    <li><strong>src</strong>: Audio file source</li>
                    <li><strong>controls</strong>: Shows audio controls</li>
                    <li><strong>autoplay</strong>: Starts automatically (browser restrictions)</li>
                    <li><strong>loop</strong>: Repeats audio</li>
                    <li><strong>muted</strong>: Starts muted</li>
                    <li><strong>preload</strong>: How to preload audio</li>
                </ul>
                
                <h3>Multiple Source Format Support:</h3>
                <pre class="code-block">
&lt;audio controls&gt;
    &lt;source src="audio.mp3" type="audio/mpeg"&gt;
    &lt;source src="audio.ogg" type="audio/ogg"&gt;
    Your browser does not support the audio element.
&lt;/audio&gt;
                </pre>
                
                <h3>Video Element: &lt;video&gt;&lt;/video&gt;</h3>
                <p>The video element embeds video content with similar attributes:</p>
                <ul>
                    <li><strong>poster</strong>: Thumbnail image before playback</li>
                    <li><strong>width/height</strong>: Video dimensions</li>
                </ul>
                
                <h3>Track Element for Subtitles:</h3>
                <pre class="code-block">
&lt;video controls&gt;
    &lt;source src="video.mp4" type="video/mp4"&gt;
    &lt;track src="subtitles.vtt" kind="subtitles" srclang="en" label="English"&gt;
    Your browser does not support the video element.
&lt;/video&gt;
                </pre>
                
                <h3>Browser Support:</h3>
                <ul>
                    <li>All modern browsers support .mp3 audio</li>
                    <li>All modern browsers support .mp4 video</li>
                    <li>autoplay may be restricted by browser policies</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>عنصر الصوت: &lt;audio&gt;&lt;/audio&gt;</h3>
                    <p>يقوم عنصر audio بتضمين محتوى الصوت:</p>
                    
                    <h3>السمات الرئيسية:</h3>
                    <ul>
                        <li><strong>src</strong>: مصدر ملف الصوت</li>
                        <li><strong>controls</strong>: يظهر عناصر التحكم بالصوت</li>
                        <li><strong>autoplay</strong>: يبدأ تلقائياً (قيود المتصفح)</li>
                        <li><strong>loop</strong>: يكرر الصوت</li>
                        <li><strong>muted</strong>: يبدأ كصامت</li>
                        <li><strong>preload</strong>: كيفية التحميل المسبق للصوت</li>
                    </ul>
                    
                    <h3>دعم تنسيقات المصادر المتعددة:</h3>
                    <pre class="code-block" dir="ltr">
&lt;audio controls&gt;
    &lt;source src="audio.mp3" type="audio/mpeg"&gt;
    &lt;source src="audio.ogg" type="audio/ogg"&gt;
    متصفحك لا يدعم عنصر الصوت.
&lt;/audio&gt;
                    </pre>
                    
                    <h3>عنصر الفيديو: &lt;video&gt;&lt;/video&gt;</h3>
                    <p>يقوم عنصر video بتضمين محتوى الفيديو بسمات مشابهة:</p>
                    <ul>
                        <li><strong>poster</strong>: صورة مصغرة قبل التشغيل</li>
                        <li><strong>width/height</strong>: أبعاد الفيديو</li>
                    </ul>
                    
                    <h3>عنصر Track للترجمة:</h3>
                    <pre class="code-block" dir="ltr">
&lt;video controls&gt;
    &lt;source src="video.mp4" type="video/mp4"&gt;
    &lt;track src="subtitles.vtt" kind="subtitles" srclang="en" label="English"&gt;
    متصفحك لا يدعم عنصر الفيديو.
&lt;/video&gt;
                    </pre>
                    
                    <h3>دعم المتصفح:</h3>
                    <ul>
                        <li>جميع المتصفحات الحديثة تدعم صوت .mp3</li>
                        <li>جميع المتصفحات الحديثة تدعم فيديو .mp4</li>
                        <li>قد يتم تقييد التشغيل التلقائي بواسطة سياسات المتصفح</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Complete Audio Example",
                    content: `
                        <pre class="code-block">
&lt;audio controls loop preload="metadata"&gt;
    &lt;source src="music.mp3" type="audio/mpeg"&gt;
    &lt;source src="music.ogg" type="audio/ogg"&gt;
    &lt;source src="music.wav" type="audio/wav"&gt;
    &lt;p&gt;Your browser doesn't support HTML5 audio. 
       &lt;a href="music.mp3"&gt;Download the audio file&lt;/a&gt;.&lt;/p&gt;
&lt;/audio&gt;
                        </pre>
                    `
                },
                {
                    title: "Complete Video Example",
                    content: `
                        <pre class="code-block">
&lt;video controls width="640" height="360" poster="thumbnail.jpg"&gt;
    &lt;source src="movie.mp4" type="video/mp4"&gt;
    &lt;source src="movie.webm" type="video/webm"&gt;
    &lt;track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English"&gt;
    &lt;track src="subtitles_es.vtt" kind="subtitles" srclang="es" label="Spanish"&gt;
    &lt;p&gt;Your browser doesn't support HTML5 video. 
       &lt;a href="movie.mp4"&gt;Download the video&lt;/a&gt;.&lt;/p&gt;
&lt;/video&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Multimedia Practice",
                    content: `
                        <p>Practice with audio and video:</p>
                        <ol>
                            <li>Embed an audio file with multiple format support</li>
                            <li>Create a video player with custom controls</li>
                            <li>Add subtitles to a video using track element</li>
                            <li>Experiment with different video attributes</li>
                            <li>Create a fallback for unsupported browsers</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why use multiple source elements for audio/video?",
                    answer: "Different browsers support different media formats. Providing multiple sources ensures broader compatibility. The browser will use the first format it supports. Always include MP3 for audio and MP4 for video as they have the widest support."
                },
                {
                    question: "Why doesn't autoplay work in some browsers?",
                    answer: "Browsers restrict autoplay to prevent unwanted noise and data usage. Chrome, for example, blocks autoplay with sound unless the user has interacted with the site. Use muted autoplay or trigger playback through user interaction for better compatibility."
                }
            ]
        },
        {
            id: "pre-element",
            title: "Preformatted Text Element",
            content: `
                <h3>Pre Element: &lt;pre&gt;&lt;/pre&gt;</h3>
                <p>The &lt;pre&gt; element displays preformatted text exactly as written:</p>
                
                <h3>Key Characteristics:</h3>
                <ul>
                    <li>Preserves spaces, line breaks, and tabs</li>
                    <li>Uses monospace font by default</li>
                    <li>Useful for code blocks, poetry, ASCII art</li>
                    <li>Doesn't collapse white space like regular HTML</li>
                </ul>
                
                <h3>When to Use Pre Element:</h3>
                <ul>
                    <li>Displaying code snippets</li>
                    <li>Showing terminal output</li>
                    <li>Poetry or text with specific formatting</li>
                    <li>ASCII art or text-based diagrams</li>
                    <li>Any content where spacing matters</li>
                </ul>
                
                <h3>Combining with Code Element:</h3>
                <p>Often used with &lt;code&gt; for semantic code representation:</p>
                <pre class="code-block">
&lt;pre&gt;&lt;code&gt;
function hello() {
    console.log("Hello, World!");
}
&lt;/code&gt;&lt;/pre&gt;
                </pre>
                
                <h3>CSS Styling for Pre Elements:</h3>
                <ul>
                    <li>Can be styled like any other element</li>
                    <li>Common styles: background, padding, border, overflow</li>
                    <li>Use <code>overflow: auto</code> for scrollable code blocks</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>عنصر Pre: &lt;pre&gt;&lt;/pre&gt;</h3>
                    <p>يعرض عنصر &lt;pre&gt; النص المنسق مسبقاً تماماً كما هو مكتوب:</p>
                    
                    <h3>الخصائص الرئيسية:</h3>
                    <ul>
                        <li>يحافظ على المسافات، فواصل الأسطر، والتبويبات</li>
                        <li>يستخدم خط أحادي المسافة افتراضياً</li>
                        <li>مفيد لكتل الكود، الشعر، فن ASCII</li>
                        <li>لا ينهي المساحة البيضاء مثل HTML العادية</li>
                    </ul>
                    
                    <h3>متى تستخدم عنصر Pre:</h3>
                    <ul>
                        <li>عرض مقاطع الكود</li>
                        <li>عرض إخراج الطرفية</li>
                        <li>الشعر أو النص بتنسيق محدد</li>
                        <li>فن ASCII أو المخططات النصية</li>
                        <li>أي محتوى حيث المسافات مهمة</li>
                    </ul>
                    
                    <h3>الجمع مع عنصر Code:</h3>
                    <p>غالباً ما يستخدم مع &lt;code&gt; للتمثيل الدلالي للكود:</p>
                    <pre class="code-block" dir="ltr">
&lt;pre&gt;&lt;code&gt;
function hello() {
    console.log("Hello, World!");
}
&lt;/code&gt;&lt;/pre&gt;
                    </pre>
                    
                    <h3>تنسيق CSS لعناصر Pre:</h3>
                    <ul>
                        <li>يمكن تنسيقه مثل أي عنصر آخر</li>
                        <li>الأنماط الشائعة: الخلفية، الحشو، الحدود، الفائض</li>
                        <li>استخدم <code>overflow: auto</code> لكتل الكود القابلة للتمرير</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Basic Pre Example",
                    content: `
                        <pre class="code-block">
&lt;pre&gt;
This    text   will
preserve   all   spaces
and
line
breaks
exactly as written.
&lt;/pre&gt;
                        </pre>
                    `
                },
                {
                    title: "Code Block with Syntax",
                    content: `
                        <pre class="code-block">
&lt;pre&gt;&lt;code class="language-html"&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
&lt;/code&gt;&lt;/pre&gt;
                        </pre>
                    `
                },
                {
                    title: "ASCII Art Example",
                    content: `
                        <pre class="code-block">
&lt;pre&gt;
  ______
 /      \\
/        \\
|  STOP  |
\\        /
 \\______/
    ||
    ||
&lt;/pre&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Pre Element Practice",
                    content: `
                        <p>Practice using the pre element:</p>
                        <ol>
                            <li>Create a pre block with formatted poetry</li>
                            <li>Display a code snippet with proper indentation</li>
                            <li>Create simple ASCII art using pre</li>
                            <li>Compare pre with regular paragraph spacing</li>
                            <li>Style a pre element with CSS for better presentation</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should I use pre vs code elements?",
                    answer: "Use &lt;code&gt; for inline code snippets within sentences. Use &lt;pre&gt; for block-level code that needs formatting preservation. They're often used together: &lt;pre&gt; preserves formatting, &lt;code&gt; provides semantic meaning for code."
                },
                {
                    question: "Does pre element affect SEO?",
                    answer: "Search engines can read content within &lt;pre&gt; elements, but they don't give it special treatment. For code snippets, using &lt;pre&gt;&lt;code&gt; together provides both formatting and semantic meaning, which can be beneficial for technical content."
                }
            ]
        },
        {
            id: "iframe",
            title: "IFrame Element",
            content: `
                <h3>IFrame Element: &lt;iframe src&gt;&lt;/iframe&gt;</h3>
                <p>The &lt;iframe&gt; element embeds another HTML page within the current page:</p>
                
                <h3>Key Attributes:</h3>
                <ul>
                    <li><strong>src</strong>: URL of page to embed</li>
                    <li><strong>width/height</strong>: Dimensions of iframe</li>
                    <li><strong>title</strong>: Accessibility title (required)</li>
                    <li><strong>name</strong>: Name for target attribute</li>
                    <li><strong>sandbox</strong>: Security restrictions</li>
                    <li><strong>allowfullscreen</strong>: Allow fullscreen mode</li>
                </ul>
                
                <h3>Common Uses of IFrames:</h3>
                <ul>
                    <li>Embedding videos (YouTube, Vimeo)</li>
                    <li>Google Maps embeds</li>
                    <li>Social media widgets</li>
                    <li>Third-party content</li>
                    <li>Document previews</li>
                </ul>
                
                <h3>Security Considerations:</h3>
                <ul>
                    <li>Some websites prevent embedding via X-Frame-Options</li>
                    <li>Use sandbox attribute to restrict capabilities</li>
                    <li>Be cautious with third-party content</li>
                    <li>Always include title attribute for accessibility</li>
                </ul>
                
                <h3>Sandbox Restrictions:</h3>
                <ul>
                    <li><strong>allow-forms</strong>: Allow form submission</li>
                    <li><strong>allow-scripts</strong>: Allow JavaScript execution</li>
                    <li><strong>allow-same-origin</strong>: Allow same-origin requests</li>
                    <li><strong>allow-popups</strong>: Allow popup windows</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>عنصر IFrame: &lt;iframe src&gt;&lt;/iframe&gt;</h3>
                    <p>يقوم عنصر &lt;iframe&gt; بتضمين صفحة HTML أخرى داخل الصفحة الحالية:</p>
                    
                    <h3>السمات الرئيسية:</h3>
                    <ul>
                        <li><strong>src</strong>: عنوان URL للصفحة المطلوب تضمينها</li>
                        <li><strong>width/height</strong>: أبعاد الإطار</li>
                        <li><strong>title</strong>: عنوان إمكانية الوصول (مطلوب)</li>
                        <li><strong>name</strong>: اسم لسمة الهدف</li>
                        <li><strong>sandbox</strong>: قيود الأمان</li>
                        <li><strong>allowfullscreen</strong>: السماح بوضع ملء الشاشة</li>
                    </ul>
                    
                    <h3>الاستخدامات الشائعة للإطارات:</h3>
                    <ul>
                        <li>تضمين مقاطع الفيديو (YouTube, Vimeo)</li>
                        <li>تضمين خرائط جوجل</li>
                        <li>أدوات وسائل التواصل الاجتماعي</li>
                        <li>محتوى الطرف الثالث</li>
                        <li>معاينات المستندات</li>
                    </ul>
                    
                    <h3>اعتبارات الأمان:</h3>
                    <ul>
                        <li>بعض المواقع تمنع التضمين عبر X-Frame-Options</li>
                        <li>استخدم سمة sandbox لتقييد الإمكانيات</li>
                        <li>كن حذراً مع محتوى الطرف الثالث</li>
                        <li>أدرج دائماً سمة title لإمكانية الوصول</li>
                    </ul>
                    
                    <h3>قيود Sandbox:</h3>
                    <ul>
                        <li><strong>allow-forms</strong>: السماح بإرسال النماذج</li>
                        <li><strong>allow-scripts</strong>: السماح بتنفيذ JavaScript</li>
                        <li><strong>allow-same-origin</strong>: السماح بطلبات نفس المصدر</li>
                        <li><strong>allow-popups</strong>: السماح بالنوافذ المنبثقة</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Basic IFrame Example",
                    content: `
                        <pre class="code-block">
&lt;!-- Embedding a website --&gt;
&lt;iframe 
    src="https://example.com" 
    width="800" 
    height="600" 
    title="Example Website Embed"&gt;
&lt;/iframe&gt;

&lt;!-- Fallback content --&gt;
&lt;iframe src="https://example.com" title="Example"&gt;
    &lt;p&gt;Your browser does not support iframes.&lt;/p&gt;
&lt;/iframe&gt;
                        </pre>
                    `
                },
                {
                    title: "YouTube Video Embed",
                    content: `
                        <pre class="code-block">
&lt;iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen&gt;
&lt;/iframe&gt;
                        </pre>
                    `
                },
                {
                    title: "Google Maps Embed",
                    content: `
                        <pre class="code-block">
&lt;iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9503398796587!2d-73.99104868459418!3d40.741177779329105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3c1dc7b07%3A0x9c4b1e6a0b2b3b4c!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890" 
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    title="Google Office Location"&gt;
&lt;/iframe&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "IFrame Practice",
                    content: `
                        <p>Practice using iframes:</p>
                        <ol>
                            <li>Embed a YouTube video on your page</li>
                            <li>Create a Google Maps embed for a location</li>
                            <li>Experiment with different iframe dimensions</li>
                            <li>Try embedding various websites (note which ones block iframes)</li>
                            <li>Add sandbox restrictions to an iframe</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why do some websites prevent iframe embedding?",
                    answer: "Websites use X-Frame-Options or Content-Security-Policy headers to prevent iframe embedding for security reasons (clickjacking attacks), to control their content's presentation, or to protect against content scraping. This is common with banking sites and social media platforms."
                },
                {
                    question: "What's the difference between iframe and embed elements?",
                    answer: "&lt;iframe&gt; is for embedding entire HTML documents, while &lt;embed&gt; is for external content like PDFs, Flash, or plugins. &lt;iframe&gt; is more versatile and widely supported for web content. &lt;embed&gt; is older and less commonly used in modern web development."
                }
            ]
        },
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
