// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete JavaScript Mastery - Frontend Foundations",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "events-forms",
            title: "Events and Forms - User Interaction",
            content: `
                <h3>Understanding Events:</h3>
                <p>Events are actions that happen in the browser, such as clicks, keyboard input, or page loading. JavaScript can respond to these events to create interactive web pages.</p>
                
                <h3>Common Event Types:</h3>
                <ul>
                    <li><strong>Mouse Events</strong>: click, dblclick, mousedown, mouseup, mousemove</li>
                    <li><strong>Keyboard Events</strong>: keydown, keyup, keypress</li>
                    <li><strong>Form Events</strong>: submit, change, input, focus, blur</li>
                    <li><strong>Window Events</strong>: load, resize, scroll, beforeunload</li>
                    <li><strong>Touch Events</strong>: touchstart, touchmove, touchend</li>
                </ul>
                
                <h3>Event Handling Methods:</h3>
                <ul>
                    <li><strong>addEventListener</strong>: Modern way to attach events</li>
                    <li><strong>removeEventListener</strong>: Remove event handlers</li>
                    <li><strong>Inline event handlers</strong>: onclick=\"code\" (not recommended)</li>
                    <li><strong>Event object properties</strong>: target, type, preventDefault(), stopPropagation()</li>
                </ul>
                
                <h3>Working with Forms:</h3>
                <ul>
                    <li><strong>Form elements</strong>: input, textarea, select, button</li>
                    <li><strong>Form validation</strong>: Client-side validation</li>
                    <li><strong>Form submission</strong>: Handling form data</li>
                    <li><strong>Form reset</strong>: Clearing form data</li>
                    <li><strong>Form data access</strong>: Using FormData API</li>
                </ul>
                
                <h3>Event Propagation:</h3>
                <ul>
                    <li><strong>Event Bubbling</strong>: Events bubble up from target to root</li>
                    <li><strong>Event Capturing</strong>: Events capture down from root to target</li>
                    <li><strong>Event Delegation</strong>: Handling events on parent elements</li>
                    <li><strong>stopPropagation()</strong>: Stop event from propagating</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>فهم الأحداث:</h3>
                    <p>الأحداث هي إجراءات تحدث في المتصفح، مثل النقرات، إدخال لوحة المفاتيح، أو تحميل الصفحة. يمكن لـ JavaScript الرد على هذه الأحداث لإنشاء صفحات ويب تفاعلية.</p>
                    
                    <h3>أنواع الأحداث الشائعة:</h3>
                    <ul>
                        <li><strong>أحداث الفأرة</strong>: click, dblclick, mousedown, mouseup, mousemove</li>
                        <li><strong>أحداث لوحة المفاتيح</strong>: keydown, keyup, keypress</li>
                        <li><strong>أحداث النماذج</strong>: submit, change, input, focus, blur</li>
                        <li><strong>أحداث النافذة</strong>: load, resize, scroll, beforeunload</li>
                        <li><strong>أحداث اللمس</strong>: touchstart, touchmove, touchend</li>
                    </ul>
                    
                    <h3>طرق معالجة الأحداث:</h3>
                    <ul>
                        <li><strong>addEventListener</strong>: الطريقة الحديثة لإرفاق الأحداث</li>
                        <li><strong>removeEventListener</strong>: أزل معالجي الأحداث</li>
                        <li><strong>معالجي الأحداث المضمنين</strong>: onclick=\"code\" (غير موصى به)</li>
                        <li><strong>خصائص كائن الحدث</strong>: target, type, preventDefault(), stopPropagation()</li>
                    </ul>
                    
                    <h3>العمل مع النماذج:</h3>
                    <ul>
                        <li><strong>عناصر النموذج</strong>: input, textarea, select, button</li>
                        <li><strong>التحقق من النموذج</strong>: التحقق من جانب العميل</li>
                        <li><strong>إرسال النموذج</strong>: معالجة بيانات النموذج</li>
                        <li><strong>إعادة تعيين النموذج</strong>: مسح بيانات النموذج</li>
                        <li><strong>الوصول إلى بيانات النموذج</strong>: استخدام FormData API</li>
                    </ul>
                    
                    <h3>انتشار الحدث:</h3>
                    <ul>
                        <li><strong>Event Bubbling</strong>: تنتقل الأحداث من الهدف إلى الجذر</li>
                        <li><strong>Event Capturing</strong>: تلتقط الأحداث من الجذر إلى الهدف</li>
                        <li><strong>تفويض الحدث</strong>: معالجة الأحداث على العناصر الأصل</li>
                        <li><strong>stopPropagation()</strong>: أوقف الحدث من الانتشار</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Events and Forms Examples",
                    content: `
                        <pre class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Events and Forms&lt;/title&gt;
    &lt;style&gt;
        .error { color: red; font-size: 0.9em; }
        .success { color: green; }
        .hidden { display: none; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="app"&gt;
        &lt;h1&gt;Event Handling Examples&lt;/h1&gt;
        
        &lt;!-- Mouse Events --&gt;
        &lt;div id="mouse-area" style="border: 1px solid #ccc; padding: 20px; margin: 10px;"&gt;
            &lt;p&gt;Mouse coordinates: &lt;span id="coordinates"&gt;0, 0&lt;/span&gt;&lt;/p&gt;
        &lt;/div&gt;
        
        &lt;!-- Keyboard Events --&gt;
        &lt;div style="margin: 10px;"&gt;
            &lt;input type="text" id="key-input" placeholder="Type something..."&gt;
            &lt;p&gt;Last key pressed: &lt;span id="key-display"&gt;&lt;/span&gt;&lt;/p&gt;
        &lt;/div&gt;
        
        &lt;!-- Form Example --&gt;
        &lt;form id="user-form"&gt;
            &lt;div&gt;
                &lt;label for="name"&gt;Name:&lt;/label&gt;
                &lt;input type="text" id="name" name="name" required&gt;
                &lt;span id="name-error" class="error hidden"&gt;&lt;/span&gt;
            &lt;/div&gt;
            
            &lt;div&gt;
                &lt;label for="email"&gt;Email:&lt;/label&gt;
                &lt;input type="email" id="email" name="email" required&gt;
                &lt;span id="email-error" class="error hidden"&gt;&lt;/span&gt;
            &lt;/div&gt;
            
            &lt;div&gt;
                &lt;label for="age"&gt;Age:&lt;/label&gt;
                &lt;input type="number" id="age" name="age" min="0" max="120"&gt;
            &lt;/div&gt;
            
            &lt;button type="submit"&gt;Submit&lt;/button&gt;
        &lt;/form&gt;
        
        &lt;div id="form-output"&gt;&lt;/div&gt;
    &lt;/div&gt;

    &lt;script&gt;
        // Mouse events
        const mouseArea = document.getElementById('mouse-area');
        const coordinates = document.getElementById('coordinates');
        
        mouseArea.addEventListener('mousemove', function(event) {
            coordinates.textContent = \`\${event.clientX}, \${event.clientY}\`;
        });
        
        mouseArea.addEventListener('click', function(event) {
            this.style.backgroundColor = this.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
        });
        
        mouseArea.addEventListener('dblclick', function() {
            this.style.backgroundColor = 'lightgreen';
        });
        
        // Keyboard events
        const keyInput = document.getElementById('key-input');
        const keyDisplay = document.getElementById('key-display');
        
        keyInput.addEventListener('keydown', function(event) {
            keyDisplay.textContent = \`Key: \${event.key}, Code: \${event.code}\`;
        });
        
        keyInput.addEventListener('keyup', function() {
            // Additional keyup logic if needed
        });
        
        // Form handling
        const userForm = document.getElementById('user-form');
        const formOutput = document.getElementById('form-output');
        
        // Real-time validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        
        nameInput.addEventListener('input', function() {
            if (this.value.length < 2) {
                nameError.textContent = 'Name must be at least 2 characters';
                nameError.classList.remove('hidden');
            } else {
                nameError.classList.add('hidden');
            }
        });
        
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!emailRegex.test(this.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.classList.remove('hidden');
            } else {
                emailError.classList.add('hidden');
            }
        });
        
        // Form submission
        userForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            let isValid = true;
            
            if (!data.name || data.name.length < 2) {
                nameError.textContent = 'Name is required and must be at least 2 characters';
                nameError.classList.remove('hidden');
                isValid = false;
            }
            
            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!data.email || !emailRegex.test(data.email)) {
                emailError.textContent = 'Valid email is required';
                emailError.classList.remove('hidden');
                isValid = false;
            }
            
            if (isValid) {
                // Display success message
                formOutput.innerHTML = \`
                    &lt;div class="success"&gt;
                        &lt;h3&gt;Form Submitted Successfully!&lt;/h3&gt;
                        &lt;p&gt;Name: \${data.name}&lt;/p&gt;
                        &lt;p&gt;Email: \${data.email}&lt;/p&gt;
                        &lt;p&gt;Age: \${data.age || 'Not specified'}&lt;/p&gt;
                    &lt;/div&gt;
                \`;
                
                // Reset form
                this.reset();
                
                // Clear errors
                nameError.classList.add('hidden');
                emailError.classList.add('hidden');
            }
        });
        
        // Event delegation example
        document.addEventListener('click', function(event) {
            if (event.target.matches('button')) {
                console.log('Button clicked:', event.target.textContent);
            }
        });
        
        // Window events
        window.addEventListener('resize', function() {
            console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
        });
        
        window.addEventListener('scroll', function() {
            console.log('Scrolled to:', window.scrollY);
        });
        
        // Prevent context menu
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            alert('Right-click is disabled on this page');
        });
        
        // Custom events (advanced)
        const customEvent = new CustomEvent('userRegistered', {
            detail: { message: 'A new user has been registered' }
        });
        
        // Dispatch custom event
        document.addEventListener('userRegistered', function(event) {
            console.log('Custom event received:', event.detail.message);
        });
        
        // Trigger custom event after form submission
        userForm.addEventListener('submit', function() {
            setTimeout(() => {
                document.dispatchEvent(customEvent);
            }, 1000);
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Events and Forms Practice",
                    content: `
                        <p>Practice event handling and form manipulation:</p>
                        <ol>
                            <li>Create a drag-and-drop interface for reordering items</li>
                            <li>Build a real-time character counter for text inputs</li>
                            <li>Create a custom dropdown menu with keyboard navigation</li>
                            <li>Build a form with complex validation rules</li>
                            <li>Create a drawing application using mouse events</li>
                            <li>Build a keyboard shortcut system for your application</li>
                            <li>Create a file upload interface with preview functionality</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between event.preventDefault() and event.stopPropagation()?",
                    answer: "event.preventDefault() prevents the default browser behavior for that event (like form submission or link navigation). event.stopPropagation() stops the event from bubbling up the DOM tree, preventing parent elements from receiving the event. Use preventDefault() when you want to handle the event completely yourself, and stopPropagation() when you want to contain the event to a specific element."
                },
                {
                    question: "Why is event delegation important for dynamic content?",
                    answer: "Event delegation allows you to handle events for elements that don't exist yet when the page loads. By attaching the event listener to a parent element that does exist, you can handle events from dynamically added child elements. This is more efficient than attaching individual event listeners to each new element and prevents memory leaks from forgotten event listeners."
                }
            ]
        },
        {
            id: "bom-async",
            title: "BOM and Asynchronous JavaScript",
            content: `
                <h3>Browser Object Model (BOM):</h3>
                <p>The Browser Object Model (BOM) allows JavaScript to interact with the browser. It includes objects like window, navigator, history, location, and screen.</p>
                
                <h3>Window Object:</h3>
                <ul>
                    <li><strong>Global object</strong>: All global variables and functions become properties of window</li>
                    <li><strong>Window methods</strong>: alert(), confirm(), prompt()</li>
                    <li><strong>Timing events</strong>: setTimeout(), setInterval(), clearTimeout(), clearInterval()</li>
                    <li><strong>Window properties</strong>: innerWidth, innerHeight, location, history</li>
                </ul>
                
                <h3>Other BOM Objects:</h3>
                <ul>
                    <li><strong>navigator</strong>: Browser information (name, version, platform)</li>
                    <li><strong>screen</strong>: User's screen information (width, height, color depth)</li>
                    <li><strong>history</strong>: Browser history navigation (back(), forward(), go())</li>
                    <li><strong>location</strong>: Current URL information and navigation</li>
                </ul>
                
                <h3>Asynchronous JavaScript:</h3>
                <p>Asynchronous programming allows JavaScript to perform time-consuming operations without blocking the main thread.</p>
                
                <h3>Async Techniques:</h3>
                <ul>
                    <li><strong>Callbacks</strong>: Functions passed as arguments to be called later</li>
                    <li><strong>Promises</strong>: Objects representing eventual completion/failure of async operations</li>
                    <li><strong>Async/Await</strong>: Syntactic sugar for working with promises</li>
                    <li><strong>Fetch API</strong>: Modern way to make HTTP requests</li>
                </ul>
                
                <h3>Working with Time:</h3>
                <ul>
                    <li><strong>Date object</strong>: Working with dates and times</li>
                    <li><strong>setTimeout</strong>: Execute code after delay</li>
                    <li><strong>setInterval</strong>: Execute code repeatedly at intervals</li>
                    <li><strong>requestAnimationFrame</strong>: For smooth animations</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>نموذج كائن المتصفح (BOM):</h3>
                    <p>يسمح نموذج كائن المتصفح (BOM) لـ JavaScript بالتفاعل مع المتصفح كائنات مثل window, navigator, history, location, و screen.</p>
                    
                    <h3>كائن النافذة:</h3>
                    <ul>
                        <li><strong>الكائن العام</strong>: جميع المتغيرات والدوال العامة تصبح خصائص للنافذة</li>
                        <li><strong>طرق النافذة</strong>: alert(), confirm(), prompt()</li>
                        <li><strong>أحداث التوقيت</strong>: setTimeout(), setInterval(), clearTimeout(), clearInterval()</li>
                        <li><strong>خصائص النافذة</strong>: innerWidth, innerHeight, location, history</li>
                    </ul>
                    
                    <h3>كائنات BOM الأخرى:</h3>
                    <ul>
                        <li><strong>navigator</strong>: معلومات المتصفح (الاسم، الإصدار، المنصة)</li>
                        <li><strong>screen</strong>: معلومات شاشة المستخدم (العرض، الارتفاع، عمق اللون)</li>
                        <li><strong>history</strong>: التنقل في سجل المتصفح (back(), forward(), go())</li>
                        <li><strong>location</strong>: معلومات URL الحالية والتنقل</li>
                    </ul>
                    
                    <h3>JavaScript غير المتزامنة:</h3>
                    <p>تسمح البرمجة غير المتزامنة لـ JavaScript بتنفيذ العمليات التي تستغرق وقتًا طويلاً دون حجب الخيط الرئيسي.</p>
                    
                    <h3>تقنيات غير متزامنة:</h3>
                    <ul>
                        <li><strong>Callback functions</strong>: الدوال الممررة كوسيطات ليتم استدعاؤها لاحقًا</li>
                        <li><strong>الوعود (Promises)</strong>: كائنات تمثل اكتمال/فشل العمليات غير المتزامنة</li>
                        <li><strong>Async/Await</strong>: سكر نحوي للعمل مع الوعود</li>
                        <li><strong>Fetch API</strong>: الطريقة الحديثة لعمل طلبات HTTP</li>
                    </ul>
                    
                    <h3>العمل مع الوقت:</h3>
                    <ul>
                        <li><strong>كائن التاريخ</strong>: العمل مع التواريخ والأوقات</li>
                        <li><strong>setTimeout</strong>: نفذ الكود بعد تأخير</li>
                        <li><strong>setInterval</strong>: نفذ الكود بشكل متكرر على فترات</li>
                        <li><strong>requestAnimationFrame</strong>: للرسوم المتحركة السلسة</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "BOM and Async Examples",
                    content: `
                        <pre class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;BOM and Async&lt;/title&gt;
    &lt;style&gt;
        .box { 
            width: 100px; 
            height: 100px; 
            background: blue; 
            margin: 10px; 
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;BOM and Asynchronous JavaScript&lt;/h1&gt;
    
    &lt;div&gt;
        &lt;button onclick="showBrowserInfo()"&gt;Show Browser Info&lt;/button&gt;
        &lt;button onclick="showScreenInfo()"&gt;Show Screen Info&lt;/button&gt;
        &lt;button onclick="startTimer()"&gt;Start Timer&lt;/button&gt;
        &lt;button onclick="stopTimer()"&gt;Stop Timer&lt;/button&gt;
        &lt;button onclick="fetchData()"&gt;Fetch Data&lt;/button&gt;
    &lt;/div&gt;
    
    &lt;div id="output" style="margin: 20px; padding: 10px; border: 1px solid #ccc;"&gt;&lt;/div&gt;
    
    &lt;div id="animation-box" class="box"&gt;&lt;/div&gt;

    &lt;script&gt;
        const output = document.getElementById('output');
        
        // Window object examples
        function showBrowserInfo() {
            output.innerHTML = \`
                &lt;h3&gt;Browser Information&lt;/h3&gt;
                &lt;p&gt;User Agent: \${navigator.userAgent}&lt;/p&gt;
                &lt;p&gt;Platform: \${navigator.platform}&lt;/p&gt;
                &lt;p&gt;Language: \${navigator.language}&lt;/p&gt;
                &lt;p&gt;Cookies Enabled: \${navigator.cookieEnabled}&lt;/p&gt;
                &lt;p&gt;Window Size: \${window.innerWidth} x \${window.innerHeight}&lt;/p&gt;
            \`;
        }
        
        function showScreenInfo() {
            output.innerHTML = \`
                &lt;h3&gt;Screen Information&lt;/h3&gt;
                &lt;p&gt;Screen Size: \${screen.width} x \${screen.height}&lt;/p&gt;
                &lt;p&gt;Available Screen: \${screen.availWidth} x \${screen.availHeight}&lt;/p&gt;
                &lt;p&gt;Color Depth: \${screen.colorDepth} bits&lt;/p&gt;
                &lt;p&gt;Pixel Depth: \${screen.pixelDepth} bits&lt;/p&gt;
            \`;
        }
        
        // Timing functions
        let timerId;
        let counter = 0;
        
        function startTimer() {
            output.innerHTML = 'Timer started...';
            timerId = setInterval(() => {
                counter++;
                output.innerHTML = \`Timer: \${counter} seconds\`;
            }, 1000);
        }
        
        function stopTimer() {
            clearInterval(timerId);
            output.innerHTML = \`Timer stopped at \${counter} seconds\`;
            counter = 0;
        }
        
        // setTimeout example
        setTimeout(() => {
            console.log('This runs after 2 seconds');
        }, 2000);
        
        // Window methods
        function showConfirm() {
            const shouldDelete = confirm('Are you sure you want to delete this item?');
            if (shouldDelete) {
                output.innerHTML = 'Item deleted!';
            } else {
                output.innerHTML = 'Deletion cancelled.';
            }
        }
        
        function showPrompt() {
            const userName = prompt('Please enter your name:', 'Guest');
            if (userName) {
                output.innerHTML = \`Hello, \${userName}!\`;
            }
        }
        
        // Location object
        function showLocationInfo() {
            output.innerHTML = \`
                &lt;h3&gt;Location Information&lt;/h3&gt;
                &lt;p&gt;URL: \${location.href}&lt;/p&gt;
                &lt;p&gt;Host: \${location.host}&lt;/p&gt;
                &lt;p&gt;Path: \${location.pathname}&lt;/p&gt;
                &lt;p&gt;Protocol: \${location.protocol}&lt;/p&gt;
            \`;
        }
        
        // History object
        function goBack() {
            history.back();
        }
        
        function goForward() {
            history.forward();
        }
        
        // Async JavaScript with Promises
        function fetchData() {
            output.innerHTML = 'Fetching data...';
            
            // Using Fetch API (returns a Promise)
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    output.innerHTML = \`
                        &lt;h3&gt;Fetched Data&lt;/h3&gt;
                        &lt;p&gt;&lt;strong&gt;Title:&lt;/strong&gt; \${data.title}&lt;/p&gt;
                        &lt;p&gt;&lt;strong&gt;Body:&lt;/strong&gt; \${data.body}&lt;/p&gt;
                    \`;
                })
                .catch(error => {
                    output.innerHTML = \`Error: \${error.message}\`;
                });
        }
        
        // Async/await version
        async function fetchDataAsync() {
            try {
                output.innerHTML = 'Fetching data with async/await...';
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                output.innerHTML = \`
                    &lt;h3&gt;Fetched Data (Async/Await)&lt;/h3&gt;
                    &lt;p&gt;&lt;strong&gt;Title:&lt;/strong&gt; \${data.title}&lt;/p&gt;
                    &lt;p&gt;&lt;strong&gt;Body:&lt;/strong&gt; \${data.body}&lt;/p&gt;
                \`;
            } catch (error) {
                output.innerHTML = \`Error: \${error.message}\`;
            }
        }
        
        // Working with Date object
        function showCurrentTime() {
            const now = new Date();
            output.innerHTML = \`
                &lt;h3&gt;Current Date and Time&lt;/h3&gt;
                &lt;p&gt;Full Date: \${now.toString()}&lt;/p&gt;
                &lt;p&gt;ISO Format: \${now.toISOString()}&lt;/p&gt;
                &lt;p&gt;Locale String: \${now.toLocaleString()}&lt;/p&gt;
                &lt;p&gt;Year: \${now.getFullYear()}&lt;/p&gt;
                &lt;p&gt;Month: \${now.getMonth() + 1}&lt;/p&gt;
                &lt;p&gt;Day: \${now.getDate()}&lt;/p&gt;
                &lt;p&gt;Hours: \${now.getHours()}&lt;/p&gt;
                &lt;p&gt;Minutes: \${now.getMinutes()}&lt;/p&gt;
            \`;
        }
        
        // Animation with requestAnimationFrame
        const box = document.getElementById('animation-box');
        let position = 0;
        let direction = 1;
        
        function animate() {
            position += 2 * direction;
            box.style.transform = \`translateX(\${position}px)\`;
            
            if (position > 200 || position < 0) {
                direction *= -1; // Reverse direction
            }
            
            requestAnimationFrame(animate);
        }
        
        // Start animation
        animate();
        
        // Local Storage (part of Web Storage API)
        function saveToLocalStorage() {
            const data = {
                name: 'John Doe',
                age: 30,
                preferences: { theme: 'dark', language: 'en' }
            };
            
            localStorage.setItem('userData', JSON.stringify(data));
            output.innerHTML = 'Data saved to localStorage!';
        }
        
        function loadFromLocalStorage() {
            const savedData = localStorage.getItem('userData');
            if (savedData) {
                const data = JSON.parse(savedData);
                output.innerHTML = \`
                    &lt;h3&gt;Data from localStorage&lt;/h3&gt;
                    &lt;pre&gt;\${JSON.stringify(data, null, 2)}&lt;/pre&gt;
                \`;
            } else {
                output.innerHTML = 'No data found in localStorage';
            }
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "BOM and Async Practice",
                    content: `
                        <p>Practice BOM operations and asynchronous JavaScript:</p>
                        <ol>
                            <li>Create a countdown timer that shows minutes and seconds</li>
                            <li>Build a stopwatch with start, stop, and reset functionality</li>
                            <li>Create a weather app that fetches data from a public API</li>
                            <li>Build a simple game using requestAnimationFrame for smooth animation</li>
                            <li>Create a todo app that saves data to localStorage</li>
                            <li>Build a currency converter that fetches real-time exchange rates</li>
                            <li>Create a random quote generator that fetches quotes from an API</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between localStorage and sessionStorage?",
                    answer: "localStorage persists data even when the browser is closed and reopened, with no expiration time. sessionStorage persists data only for the duration of the page session (until the browser tab is closed). Both are specific to the origin (protocol + domain + port), but localStorage is shared across tabs/windows from the same origin, while sessionStorage is isolated per tab."
                },
                {
                    question: "How do Promises improve over callback functions?",
                    answer: "Promises provide better error handling through .catch() method, avoid callback hell (pyramid of doom), allow chaining multiple async operations with .then(), and provide methods for working with multiple promises (Promise.all, Promise.race). They make async code more readable and maintainable compared to nested callbacks."
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