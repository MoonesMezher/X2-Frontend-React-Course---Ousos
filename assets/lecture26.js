// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete Git Mastery - Version Control Fundamentals",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "git-branching-merging",
            title: "Git Branching & Merging Strategies",
            content: `
                <h3>Working with Branches</h3>
                <p>Branches enable parallel development and are fundamental to collaborative Git workflows.</p>
                
                <h3>Branch Operations:</h3>
                <pre class="code-block">
git branch                 # List all branches
git branch [name]         # Create new branch
git checkout [branch]     # Switch to branch
git checkout -b [branch]  # Create and switch to new branch
git switch [branch]       # Modern way to switch branches
git switch -c [branch]    # Create and switch (modern)
git merge [branch]        # Merge branch into current branch
git branch -d [branch]    # Delete branch (if merged)
git branch -D [branch]    # Force delete branch (even if not merged)
git branch -m [new-name]  # Rename current branch
                </pre>
                
                <h3>Branch Strategies:</h3>
                <ul>
                    <li><strong>Feature Branches</strong>: One branch per feature/task</li>
                    <li><strong>Release Branches</strong>: Prepare code for production releases</li>
                    <li><strong>Hotfix Branches</strong>: Emergency fixes for production issues</li>
                    <li><strong>Development Branch</strong>: Integration branch before main</li>
                </ul>
                
                <h3>Merging Types:</h3>
                <ul>
                    <li><strong>Fast-forward Merge</strong>: Linear history when no divergence</li>
                    <li><strong>3-way Merge</strong>: Creates merge commit when branches have diverged</li>
                    <li><strong>Rebase</strong>: Rewrites history for linear timeline</li>
                    <li><strong>Squash Merge</strong>: Combines multiple commits into one</li>
                </ul>
                
                <h3>Rebase Operations:</h3>
                <pre class="code-block">
git rebase [branch]       # Rebase current branch onto target
git rebase -i [commit]    # Interactive rebase (squash, edit, reorder)
git rebase --abort        # Abort rebase in progress
git rebase --continue     # Continue after resolving conflicts
                </pre>
                
                <h3>Best Practices:</h3>
                <ul>
                    <li>Create descriptive branch names (feature/user-auth, bugfix/login-error)</li>
                    <li>Keep branches focused and small</li>
                    <li>Merge frequently to avoid large conflicts</li>
                    <li>Delete merged branches to keep repository clean</li>
                    <li>Use pull requests for code review</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>العمل مع الفروع</h3>
                    <p>تمكن الفروع التطوير المتوازي وهي أساسية لسير عمل Git التعاوني.</p>
                    
                    <h3>ممارسات أفضل:</h3>
                    <ul>
                        <li>أنشئ أسماء فروع وصفيّة (feature/user-auth, bugfix/login-error)</li>
                        <li>احتفظ بالفروع مركزة وصغيرة</li>
                        <li>ادمج frequently لتجنب التعارضات الكبيرة</li>
                        <li>احذف الفروع المدمجة للحفاظ على نظافة المستودع</li>
                        <li>استخدم طلبات السحب لمراجعة الكود</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Branching and Merging Examples",
                    content: `
                        <pre class="code-block">
# Create and work with feature branch
git checkout -b feature/user-authentication
# Make changes...
git add .
git commit -m "Implement user login functionality"
git push -u origin feature/user-authentication

# Meanwhile, on main branch
git checkout main
# Make some changes...
git add .
git commit -m "Update documentation"
git push origin main

# Merge feature branch
git checkout main
git pull origin main
git merge feature/user-authentication
git push origin main

# Delete feature branch after merge
git branch -d feature/user-authentication
git push origin --delete feature/user-authentication

# Handling merge conflicts
git merge feature/some-branch
# If conflicts occur:
# 1. Edit files to resolve conflicts (look for <<<<<<<, =======, >>>>>>> markers)
# 2. Stage resolved files: git add resolved-file.js
# 3. Complete merge: git commit

# Rebasing example
git checkout feature/some-feature
git rebase main
# Resolve any conflicts during rebase
git rebase --continue
git checkout main
git merge feature/some-feature  # Now fast-forward merge

# Interactive rebase (squash multiple commits)
git rebase -i HEAD~3
# In editor: change "pick" to "squash" for commits to combine

# Stashing changes before switching branches
git stash                      # Save uncommitted changes
git checkout other-branch
# Do some work...
git checkout original-branch
git stash pop                 # Restore saved changes

# Comparing branches
git diff main..feature-branch  # Compare two branches
git log main..feature-branch   # See commits in feature not in main
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Branching Practice",
                    content: `
                        <p>Practice branching and merging strategies:</p>
                        <ol>
                            <li>Create multiple feature branches for different tasks</li>
                            <li>Practice merging branches with both fast-forward and 3-way merges</li>
                            <li>Create and resolve merge conflicts intentionally</li>
                            <li>Use git stash to save work in progress</li>
                            <li>Practice rebasing branches for a cleaner history</li>
                            <li>Use interactive rebase to squash multiple commits</li>
                            <li>Set up a branching strategy for a sample project</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should I use merge vs rebase?",
                    answer: "Use merge when you want to preserve the complete history and context of feature development, especially for public branches or when multiple developers are working on the same branch. Use rebase when you want a cleaner, linear history and are working on a private feature branch. Rebase rewrites history, so avoid it on shared branches. Merge preserves history but can create complex merge commits, while rebase creates a linear history but can be dangerous if misused."
                },
                {
                    question: "What are the advantages of feature branches?",
                    answer: "Feature branches isolate development work, allowing multiple features to be developed simultaneously without interfering with each other. They enable code review through pull requests, provide a safe space for experimentation, make it easy to abandon failed experiments, allow focused testing of specific features, and facilitate parallel development across teams. Each feature can be developed, tested, and reviewed independently before integration."
                }
            ]
        },
        {
            id: "git-documentation",
            title: "README Files & Markdown Documentation",
            content: `
                <h3>Project Documentation Essentials</h3>
                <p>Proper documentation is crucial for project understanding, maintenance, and collaboration.</p>
                
                <h3>What is README.md?</h3>
                <ul>
                    <li>Primary documentation file for projects</li>
                    <li>First thing users see in your repository</li>
                    <li>Written in Markdown (.md extension)</li>
                    <li>Auto-rendered by GitHub/GitLab</li>
                </ul>
                
                <h3>Why README is Crucial:</h3>
                <ul>
                    <li>Project overview and purpose</li>
                    <li>Installation instructions</li>
                    <li>Usage examples</li>
                    <li>Contribution guidelines</li>
                    <li>License information</li>
                </ul>
                
                <h3>Markdown Basics:</h3>
                <pre class="code-block">
# Heading 1
## Heading 2
### Heading 3

**Bold Text**
*Italic Text*
~~Strikethrough~~

- List item 1
- List item 2

1. Numbered item 1
2. Numbered item 2

[Link Text](https://example.com)
![Image Alt](image.jpg)

\`Inline Code\`

\`\`\`
Code Block
\`\`\`

> Blockquote

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |

- [ ] Task list item
- [x] Completed task
                </pre>
                
                <h3>README Structure:</h3>
                <ol>
                    <li>Project Title & Badges</li>
                    <li>Project Description</li>
                    <li>Installation</li>
                    <li>Usage</li>
                    <li>Features</li>
                    <li>Contributing</li>
                    <li>License</li>
                    <li>Contact</li>
                </ol>
                
                <h3>Advanced Markdown Features:</h3>
                <ul>
                    <li><strong>Tables</strong>: Using | syntax</li>
                    <li><strong>Task lists</strong>: - [ ] and - [x]</li>
                    <li><strong>Emoji</strong>: :emoji_name:</li>
                    <li><strong>Mathematical formulas</strong>: LaTeX syntax</li>
                    <li><strong>Mermaid diagrams</strong>: Flowcharts and diagrams</li>
                </ul>
                
                <h3>Best Practices:</h3>
                <ul>
                    <li>Write clear, concise documentation</li>
                    <li>Include code examples</li>
                    <li>Use screenshots/GIFs</li>
                    <li>Keep it updated</li>
                    <li>Consider multiple languages if needed</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>أساسيات توثيق المشروع</h3>
                    <p>التوثيق المناسب ضروري لفهم المشروع وصيانته والتعاون عليه.</p>
                    
                    <h3>هيكل README:</h3>
                    <ol>
                        <li>عنوان المشروع والشارات</li>
                        <li>وصف المشروع</li>
                        <li>التثبيت</li>
                        <li>الاستخدام</li>
                        <li>الميزات</li>
                        <li>المساهمة</li>
                        <li>الترخيص</li>
                        <li>الاتصال</li>
                    </ol>
                </div>
            `,
            examples: [
                {
                    title: "Complete README Example",
                    content: `
                        <pre class="code-block">
# Project Name

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

A brief description of what your project does and why it's useful.

## 🚀 Features

- Feature 1: Description of feature
- Feature 2: Description of feature
- Feature 3: Description of feature

## 📦 Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/username/project-name.git

# Navigate to directory
cd project-name

# Install dependencies
npm install

# Start development server
npm start
\`\`\`

## 💻 Usage

\`\`\`javascript
// Example code usage
const example = new Example();
example.doSomething();
\`\`\`

## 🛠️ Development

### Prerequisites
- Node.js 14+
- npm or yarn

### Building
\`\`\`bash
npm run build
\`\`\`

### Testing
\`\`\`bash
npm test
\`\`\`

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/username/project-name](https://github.com/username/project-name)
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Documentation Practice",
                    content: `
                        <p>Practice creating comprehensive documentation:</p>
                        <ol>
                            <li>Create a detailed README.md for one of your projects</li>
                            <li>Practice using all Markdown formatting features</li>
                            <li>Add badges to show build status and version</li>
                            <li>Create installation and usage instructions</li>
                            <li>Write contribution guidelines for your project</li>
                            <li>Add code examples with proper syntax highlighting</li>
                            <li>Include screenshots or GIFs demonstrating your project</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why is a good README file so important for open source projects?",
                    answer: "A good README serves as the front door to your project. It helps potential users understand what your project does, how to install it, and how to use it. It reduces the barrier to entry for new contributors, showcases your project's value, provides essential documentation, and can significantly impact adoption rates. Many users decide whether to use a project based solely on the quality of its README."
                },
                {
                    question: "What are the most important sections to include in a README?",
                    answer: "The most critical sections are: Project title and description, installation instructions, basic usage examples, features list, and contribution guidelines. Additional valuable sections include: badges (build status, version, license), API documentation, FAQ, troubleshooting, development setup, testing instructions, license information, and contact details. The exact sections depend on the project type and audience."
                }
            ]
        },
        {
            id: "git-ignore",
            title: "Gitignore Files - Ignoring Files in Git",
            content: `
                <h3>Ignoring Files in Git</h3>
                <p>Gitignore files tell Git which files and directories to ignore in your repository.</p>
                
                <h3>Purpose of .gitignore:</h3>
                <ul>
                    <li>Exclude files from version control</li>
                    <li>Prevent committing sensitive data</li>
                    <li>Avoid unnecessary binary files</li>
                    <li>Keep repository clean and focused</li>
                </ul>
                
                <h3>Common Ignored Files:</h3>
                <pre class="code-block">
# Dependencies
node_modules/
vendor/
*.jar
*.war

# Environment variables and configs
.env
.env.local
.env.production
.config

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# IDE and editor files
.vscode/
.idea/
*.swp
*.swo
*~

# Build outputs
/dist
/build
/target
*.exe
*.dll
*.so
*.dylib

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory
coverage/
.nyc_output/

# Dependency directories
jspm_packages/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache
                </pre>
                
                <h3>Usage and Patterns:</h3>
                <ul>
                    <li>Create .gitignore in root directory</li>
                    <li>One pattern per line</li>
                    <li>Supports wildcards (*) and directories (/)</li>
                    <li>Can have global .gitignore for all projects</li>
                    <li>Comments start with #</li>
                </ul>
                
                <h3>Pattern Examples:</h3>
                <pre class="code-block">
# Ignore all .log files
*.log

# But keep important.log
!important.log

# Ignore entire directory
build/

# Ignore specific file in any directory
*/temp.txt

# Ignore all .txt files in docs/ directory
docs/*.txt

# Ignore all .pdf files in any directory
**/*.pdf
                </pre>
                
                <h3>Best Practices:</h3>
                <ul>
                    <li>Ignore OS-specific files</li>
                    <li>Exclude dependencies and build outputs</li>
                    <li>Never commit secrets or environment variables</li>
                    <li>Use templates from gitignore.io</li>
                    <li>Review .gitignore when setting up new projects</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>تجاهل الملفات في Git</h3>
                    <p>ملفات Gitignore تخبر Git بالملفات والمجلدات التي يجب تجاهلها في مستودعك.</p>
                    
                    <h3>أفضل الممارسات:</h3>
                    <ul>
                        <li>تجاهل ملفات نظام التشغيل</li>
                        <li>استبعد التبعيات ومخرجات البناء</li>
                        <li>لا تلتزم بالأسرار أو متغيرات البيئة أبدًا</li>
                        <li>استخدم قوالب من gitignore.io</li>
                        <li>راجع .gitignore عند إعداد مشاريع جديدة</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Language-Specific Gitignore Examples",
                    content: `
                        <pre class="code-block">
# Node.js .gitignore
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage
.grunt

# Bower dependency directory
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons
build/Release

# Dependency directories
node_modules/
jspm_packages/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Python .gitignore
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

# Java .gitignore
*.class
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs
hs_err_pid*

# React .gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Gitignore Practice",
                    content: `
                        <p>Practice creating and using .gitignore files:</p>
                        <ol>
                            <li>Create a comprehensive .gitignore file for your project type</li>
                            <li>Practice using different patterns and wildcards</li>
                            <li>Set up a global .gitignore for your development environment</li>
                            <li>Learn to use git check-ignore to debug .gitignore issues</li>
                            <li>Practice removing accidentally committed files using .gitignore</li>
                            <li>Explore gitignore.io to generate templates for different technologies</li>
                            <li>Create multiple .gitignore files for different project sections</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between local and global .gitignore files?",
                    answer: "Local .gitignore files are specific to a single repository and are committed to version control, so all collaborators share the same ignore rules. Global .gitignore files apply to all repositories on your local machine and are not shared with others. Use local .gitignore for project-specific ignores (like build outputs, dependencies) and global for personal ignores (like editor files, OS-specific files that everyone on your team might not have)."
                },
                {
                    question: "How can I remove files that were already committed but should be ignored?",
                    answer: "To remove files that were committed but should be ignored: 1) Add the file patterns to .gitignore, 2) Remove the files from the repository (but not disk) using 'git rm --cached filename' or 'git rm -r --cached directory/', 3) Commit the removal. The files will remain on your disk but won't be tracked by Git. For sensitive data that was committed, you may need to rewrite history using tools like BFG Repo-Cleaner or git filter-branch."
                }
            ]
        },
        {
    id: "serverless-deployment",
    title: "Serverless Deployment - Deploy Frontend Projects to Production",
    content: `
        <h3>What is Serverless Deployment?</h3>
        <p>Serverless deployment allows you to host your frontend applications without managing servers, with platforms automatically handling scaling, SSL, and global distribution.</p>
        
        <h3>Popular Deployment Platforms:</h3>
        <ul>
            <li><strong>Render</strong>: Free tier with automatic deployments from GitHub</li>
            <li><strong>Vercel</strong>: Optimized for Next.js with excellent performance</li>
            <li><strong>Netlify</strong>: Feature-rich with forms, functions, and split testing</li>
            <li><strong>GitHub Pages</strong>: Free hosting for static sites directly from GitHub</li>
            <li><strong>Surge.sh</strong>: Simple command-line deployment for static sites</li>
        </ul>
        
        <h3>Why Use Render (Free Tier):</h3>
        <ul>
            <li><strong>Free Static Site Hosting</strong>: Unlimited free static sites</li>
            <li><strong>Automatic Deployments</strong>: Deploys on every git push</li>
            <li><strong>Custom Domains</strong>: Free custom domain support</li>
            <li><strong>SSL Certificates</strong>: Automatic HTTPS</li>
            <li><strong>Global CDN</strong>: Fast loading worldwide</li>
            <li><strong>No Credit Card Required</strong>: Completely free to start</li>
        </ul>
        
        <h3>What Can You Deploy:</h3>
        <ul>
            <li><strong>Vanilla JavaScript</strong>: HTML, CSS, JavaScript projects</li>
            <li><strong>React Applications</strong>: Create React App, Vite, Next.js</li>
            <li><strong>Vue.js Applications</strong>: Vue CLI, Nuxt.js</li>
            <li><strong>Static Sites</strong>: Any static file collection</li>
            <li><strong>Single Page Applications (SPA)</strong>: With client-side routing</li>
        </ul>
        
        <h3>Deployment Process Overview:</h3>
        <ol>
            <li>Prepare your project for production</li>
            <li>Connect GitHub repository to deployment platform</li>
            <li>Configure build settings and environment variables</li>
            <li>Deploy automatically on git push</li>
            <li>Set up custom domain (optional)</li>
        </ol>

        <br><hr><br>
        <div dir="rtl">
            <h3>ما هو النشر الخادمless؟</h3>
            <p>يسمح لك النشر الخادمless باستضافة تطبيقات الواجهة الأمامية دون إدارة الخوادم، حيث تتعامل المنصات تلقائيًا مع التوسع وشهادات SSL والتوزيع العالمي.</p>
            
            <h3>منصات النشر الشائعة:</h3>
            <ul>
                <li><strong>Render</strong>: مستوى مجاني مع نشر تلقائي من GitHub</li>
                <li><strong>Vercel</strong>: مُحسَّن لـ Next.js بأداء ممتاز</li>
                <li><strong>Netlify</strong>: غني بالميزات مع نماذج ودوال واختبار تقسيم</li>
                <li><strong>GitHub Pages</strong>: استضافة مجانية للمواقع الثابتة مباشرة من GitHub</li>
                <li><strong>Surge.sh</strong>: نشر بسيط عبر سطر الأوامر للمواقع الثابتة</li>
            </ul>
            
            <h3>لماذا نستخدم Render (المستوى المجاني):</h3>
            <ul>
                <li><strong>استضافة مواقع ثابتة مجانية</strong>: مواقع ثابتة مجانية غير محدودة</li>
                <li><strong>النشر التلقائي</strong>: ينشر عند كل دفع git</li>
                <li><strong>النطاقات المخصصة</strong>: دعم مجاني للنطاقات المخصصة</li>
                <li><strong>شهادات SSL</strong>: HTTPS تلقائي</li>
                <li><strong>شبكة CDN عالمية</strong>: تحميل سريع worldwide</li>
                <li><strong>لا حاجة لبطاقة ائتمان</strong>: مجاني تمامًا للبدء</li>
            </ul>
            
            <h3>ما يمكنك نشره:</h3>
            <ul>
                <li><strong>JavaScript عادي</strong>: مشاريع HTML, CSS, JavaScript</li>
                <li><strong>تطبيقات React</strong>: Create React App, Vite, Next.js</li>
                <li><strong>تطبيقات Vue.js</strong>: Vue CLI, Nuxt.js</li>
                <li><strong>المواقع الثابتة</strong>: أي مجموعة ملفات ثابتة</li>
                <li><strong>تطبيقات الصفحة الواحدة</strong>: مع التوجيه من جانب العميل</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Deploying to Render - Step by Step Guide",
            content: `
                <pre class="code-block">
# Example 1: Deploying a Vanilla JavaScript Project to Render

## Step 1: Prepare Your Project Structure
/*
Your project should have this structure:
my-project/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── images/
└── README.md
*/

## Step 2: Create a GitHub Repository
# Initialize git and push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/my-project.git
git push -u origin main

## Step 3: Deploy on Render
1. Go to render.com and sign up with GitHub
2. Click "New +" and select "Static Site"
3. Connect your GitHub repository
4. Configure deployment settings:
   - Name: my-project
   - Branch: main
   - Build Command: (leave empty for static sites)
   - Publish Directory: . (current directory)
5. Click "Create Static Site"

## Step 4: Automatic Deployments
# Every time you push to GitHub, Render automatically deploys:
git add .
git commit -m "Update styling"
git push origin main

## Example 2: Deploying a React App to Render

# Create React App example
npx create-react-app my-react-app
cd my-react-app

# Build the project for production
npm run build

# The build folder contains optimized production files

# Push to GitHub
git add .
git commit -m "Initial React app"
git push origin main

# On Render configuration:
# - Build Command: npm run build
# - Publish Directory: build

## Example 3: Environment Variables on Render

# For React apps needing environment variables:
# Create .env.production in your project
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your-api-key

# On Render, add environment variables in dashboard:
# - Key: REACT_APP_API_URL
# - Value: https://api.example.com

## Example 4: Custom Domain Setup

1. In Render dashboard, go to your static site
2. Click "Settings" then "Custom Domains"
3. Add your domain (e.g., www.myapp.com)
4. Update DNS records at your domain provider:
   - Type: CNAME
   - Name: www
   - Value: your-site.onrender.com

## Example 5: Deployment Configuration Files

# For advanced configuration, create render.yaml
services:
  - type: web
    name: my-react-app
    env: static
    buildCommand: npm run build
    publishDir: build
    envVars:
      - key: REACT_APP_VERSION
        value: 1.0.0

## Example 6: Redirects for Single Page Applications

# Create _redirects file in public folder for SPAs:
/*    /index.html   200

# Or use render.yaml for redirects:
routes:
  - type: rewrite
    source: /*
    destination: /index.html
                </pre>
            `
        },
        {
            title: "Platform Comparison & Configuration Examples",
            content: `
                <pre class="code-block">
# Example 1: Vercel Deployment (for Next.js)

## Using Vercel CLI
npm i -g vercel
vercel

## Or connect GitHub repo on vercel.com

# vercel.json configuration
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}

# Example 2: Netlify Deployment

## netlify.toml configuration
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

## Netlify specific environment variables
# Create netlify.toml or set in dashboard
[build.environment]
  NODE_VERSION = "18"

# Example 3: GitHub Pages Deployment

## For simple static sites
# Push to GitHub, then in repository settings:
# - Go to Pages
# - Select source branch (usually main)
# - Select folder (usually /root)

## Using GitHub Actions for build
# Create .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build

# Example 4: Environment-Specific Builds

## Using different environment variables
# .env.development
API_URL=http://localhost:3000

# .env.production
API_URL=https://api.myapp.com

## In your build process, use the correct environment
# package.json
{
  "scripts": {
    "build:dev": "REACT_APP_ENV=development npm run build",
    "build:prod": "REACT_APP_ENV=production npm run build"
  }
}

# Example 5: Continuous Deployment Workflow

## Typical CD pipeline:
1. Developer pushes code to feature branch
2. Create Pull Request → Preview deployment created
3. Merge to main → Production deployment
4. Automated tests run
5. If tests pass, deploy to production

## Render automatically handles this:
- Push to any branch → Preview deployment
- Merge to main → Production deployment

# Example 6: Troubleshooting Common Issues

## Build fails on Render
# Check build logs for errors
# Common issues:
# - Missing build script in package.json
# - Incorrect publish directory
# - Environment variables not set

## SPA routing not working
# Add redirects for client-side routing
# Create _redirects file or configure in dashboard

## Environment variables not loading
# Make sure variables are prefixed correctly:
# React: REACT_APP_
# Vite: VITE_
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Deployment Practice Exercises",
            content: `
                <p>Practice deploying different types of frontend projects:</p>
                <ol>
                    <li>Deploy a simple HTML/CSS/JavaScript portfolio website to Render</li>
                    <li>Create and deploy a React application using Create React App</li>
                    <li>Set up a custom domain for your deployed project (if you have one)</li>
                    <li>Configure environment variables for different deployment environments</li>
                    <li>Set up automatic deployments from a GitHub repository</li>
                    <li>Deploy the same project to multiple platforms (Render, Netlify, Vercel) and compare</li>
                    <li>Create a CI/CD pipeline that runs tests before deployment</li>
                    <li>Implement client-side routing in a SPA and configure proper redirects</li>
                    <li>Optimize your build process for faster deployment times</li>
                    <li>Set up preview deployments for pull requests</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "Why choose Render over other deployment platforms?",
            answer: "Render offers a generous free tier with no credit card required, automatic SSL certificates, custom domain support, and seamless GitHub integration. It's particularly good for students and small projects because it provides free static site hosting indefinitely. Compared to other platforms, Render has simpler pricing, better free tier limits, and doesn't require complex configuration for most use cases. It's also more transparent about what's included in the free tier."
        },
        {
            question: "What's the difference between static sites and dynamic sites in deployment?",
            answer: "Static sites are pre-built HTML, CSS, and JavaScript files that are served directly to users. Dynamic sites generate content on the server for each request. For frontend projects, we typically deploy static sites (even React/Vue apps become static after building). Static sites are faster, cheaper to host, more secure, and easier to scale. Modern frontend frameworks use client-side rendering, making them effectively static sites from a deployment perspective."
        },
        {
            question: "How do I handle client-side routing in SPAs on deployment platforms?",
            answer: "For Single Page Applications with client-side routing (like React Router), you need to configure redirects so that all routes serve your index.html file. On Render, create a _redirects file in your publish directory with '/* /index.html 200'. On Netlify, use netlify.toml with redirect rules. On Vercel, use vercel.json. This ensures that when users refresh or directly visit routes like /about, they get the main app instead of a 404 error."
        },
        {
            question: "What are the best practices for environment variables in frontend deployments?",
            answer: "Use build-time environment variables (prefix with REACT_APP_ for Create React App or VITE_ for Vite). Never commit sensitive keys to version control. Use different .env files for development and production. Set production variables in your deployment platform's dashboard. For sensitive data that shouldn't be exposed to clients, use serverless functions or backend APIs. Always validate that required environment variables are set during the build process."
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