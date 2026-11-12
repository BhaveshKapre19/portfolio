import billerBanner from '../assets/projects/Biller/biller_banner.svg';
import billerArch from '../assets/projects/Biller/biller_arch.svg';
import bloggerAdminAddUser from '../assets/projects/Blogger/admin_add_user.png';
import bloggerAdminCategoriesEdit from '../assets/projects/Blogger/admin_categories_edit.png';
import bloggerAdminCategorieList from '../assets/projects/Blogger/admin_categorie_list.png';
import bloggerAdminPanel from '../assets/projects/Blogger/admin_panel.png';
import bloggerAdminPostEdit from '../assets/projects/Blogger/admin_post_edit.png';
import bloggerAdminPostLists from '../assets/projects/Blogger/admin_post_lists.png';
import bloggerAdminUsersList from '../assets/projects/Blogger/admin_users_list.png';
import bloggerAdminUserEdit from '../assets/projects/Blogger/admin_user_edit.png';
import bloggerBlogHome from '../assets/projects/Blogger/blog_home.png';
import bloggerBlogPostDetails from '../assets/projects/Blogger/blog_post_details.png';
import bloggerDatabaseDesign from '../assets/projects/Blogger/database_design.png';
import bloggerDirStructure from '../assets/projects/Blogger/dir_structure.png';
import cloudBanner from '../assets/projects/CloudInfra/banner.png';
import mvcAdminPanel from '../assets/projects/MVC_Framework/admin_panel.png';
import mvcAdminPostAdd from '../assets/projects/MVC_Framework/admin_post_add.png';
import mvcAdminPostsList from '../assets/projects/MVC_Framework/admin_posts_list.png';
import mvcBlogHome from '../assets/projects/MVC_Framework/blog_home.png';
import mvcBlogPostLists from '../assets/projects/MVC_Framework/blog_post_lists.png';
import mvcBlogPostsDetail from '../assets/projects/MVC_Framework/blog_posts_detail.png';
import mvcDatabaseDesign from '../assets/projects/MVC_Framework/database_design.png';
import mvcDirStructure from '../assets/projects/MVC_Framework/dir_str.png';
import qaDirStructure from '../assets/projects/QA-System/dir_structure.png';
import qaGui from '../assets/projects/QA-System/gui_ss.png';
import stockBanner from '../assets/projects/StockPrice/banner.png';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const personalInfo = {
  name: 'Bhavesh Kapre',
  role: 'Python Backend Developer',
  titles: [
    'Python Backend Developer',
    'Cloud Enthusiast (AWS Certified)',
    'REST API Developer',
    'Fresher — Ready to Join',
  ],
  introduction:
    'B.Tech CS graduate and Python backend developer. I have built real-world projects using Django, REST APIs, and AWS — and completed one freelancing project (Biller ERP). I am a fresher actively looking for my first full-time backend or cloud role.',
  email: 'kapre1999@yahoo.com',
  location: 'Indore, Madhya Pradesh, India',
  github: 'https://github.com/BhaveshKapre19',
  githubUser: 'BhaveshKapre19',
  linkedin: 'https://linkedin.com/in/bhavesh-kapre-367139216',
  resumeUrl: `${import.meta.env.BASE_URL}resume.docx`,
  availability: 'Fresher — Open to full-time opportunities',
};

export const aboutText = {
  summary: `I'm a Computer Science Engineer (B.Tech, 2022) with a passion for backend development, REST APIs, cloud computing, and database design. My stack includes Python (Django, Django REST Framework), PHP, AWS (EC2, S3, IAM), Linux, and MySQL. I am a fresher actively looking for my first full-time software engineering role.`,
  careerBreak: `After graduating in 2022, I took a personal break to support my mother through cancer treatment. During that time I stayed technically active — building real-world projects, earning AWS, Microsoft Azure, and Google Cloud certifications, and completing one freelancing project (Biller). Family responsibilities are now resolved and I am fully available and committed to starting my professional career.`,
  principles: [
    {
      title: 'Clean API Design',
      description: 'I write clear, well-structured REST APIs with proper authentication, input validation, and consistent response formats.',
    },
    {
      title: 'Database Thinking',
      description: 'Comfortable designing normalized schemas, writing optimized queries, and understanding database integrity constraints.',
    },
    {
      title: 'Cloud Basics',
      description: 'Hands-on experience deploying on AWS EC2, using S3 storage, and configuring IAM roles — backed by certifications.',
    },
    {
      title: 'Continuous Learning',
      description: 'Self-driven learner who built projects and earned certifications independently — ready to grow fast in a team setting.',
    },
  ],
};

export const skillCategories = [
  {
    title: 'Backend & APIs',
    description: 'Server-side development, REST API design, and authentication',
    skills: [
      { name: 'Python', level: 'Proficient' },
      { name: 'Django', level: 'Intermediate' },
      { name: 'Django REST Framework', level: 'Intermediate' },
      { name: 'RESTful API Design', level: 'Intermediate' },
      { name: 'JWT Authentication', level: 'Intermediate' },
      { name: 'PHP (Custom MVC)', level: 'Intermediate' },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Cloud deployment, Linux operations, and server configuration',
    skills: [
      { name: 'AWS EC2', level: 'Basic' },
      { name: 'Amazon S3', level: 'Basic' },
      { name: 'AWS IAM', level: 'Basic' },
      { name: 'Linux / Ubuntu', level: 'Intermediate' },
      { name: 'Nginx', level: 'Basic' },
      { name: 'Docker', level: 'Basic' },
    ],
  },
  {
    title: 'Databases',
    description: 'Relational databases, schema design, and query writing',
    skills: [
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'SQLite', level: 'Intermediate' },
      { name: 'Schema Design', level: 'Intermediate' },
      { name: 'SQL Queries', level: 'Intermediate' },
    ],
  },
  {
    title: 'Developer Tooling',
    description: 'Version control, API testing, and workflow tools',
    skills: [
      { name: 'Git & GitHub', level: 'Proficient' },
      { name: 'Postman', level: 'Intermediate' },
      { name: 'VS Code', level: 'Proficient' },
      { name: 'Linux Shell', level: 'Intermediate' },
    ],
  },
  {
    title: 'Frontend (Basic)',
    description: 'UI development for personal and freelancing projects',
    skills: [
      { name: 'HTML & CSS', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Intermediate' },
      { name: 'React (Basic)', level: 'Basic' },
      { name: 'Bootstrap', level: 'Basic' },
    ],
  },
];

export const projects = [
  {
    id: 'biller-erp',
    title: 'Biller — Retail POS & ERP',
    subtitle: 'Freelancing Project — Desktop POS & GST Billing System',
    category: 'Backend & Systems',
    featured: true,
    badge: 'Freelancing Project',
    tagline: 'My first freelancing project: a keyboard-first desktop Point-of-Sale (POS) and local network ERP system for an Indian electronics retail business.',
    description:
      'Built a retail POS and ERP system for a client — my first freelancing project. The desktop client uses Tauri v2 + React, backed by a Django 5.1 REST API and SQLite database. It handles ESC/POS thermal printing (80mm & 58mm), server-side Indian GST calculation (CGST/SGST/IGST), and party accounting ledgers. This was a real-world client requirement that I researched, designed, and delivered independently.',
    highlights: [
      'GST Billing Engine: Server-side CGST/SGST/IGST splits and reverse-tax extraction on gross prices.',
      'Thermal Printing: ESC/POS 80mm & 58mm raw byte streams and A4 GST Tax Invoice generation.',
      'Party Accounting: Basic double-entry ledgers, cash settlement, stock tracking, and invoice-wise payments.',
      'Multi-Counter Support: Terminal tracking via X-Terminal-Id headers across a local network.',
      'Keyboard-First UX: Dedicated hotkeys (F2 Search, F4 Party, F5 Hold, F9 Resume, F10 Tender) for fast checkout.',
    ],
    tech: [
      'Python',
      'Django REST',
      'Tauri v2',
      'React',
      'SQLite WAL',
      'Tailwind CSS',
    ],
    image: billerBanner,
    screenshots: [billerBanner, billerArch],
  },
  {
    id: 'php-mvc',
    title: 'Custom PHP MVC Framework',
    subtitle: 'From-scratch modular web framework',
    category: 'Backend & APIs',
    featured: false,
    badge: 'Framework Architecture',
    tagline: 'Lightweight PHP MVC framework engineered from ground zero without third-party frameworks like Laravel or CodeIgniter.',
    description:
      'Designed and developed a lightweight MVC framework entirely from scratch. Implemented clean front-controller routing, base controllers, active record/model abstractions, view templating engine, session authentication, and database connection pooling. This framework demonstrates deep framework-level understanding and served as the reusable core for the Technical Blogging CMS.',
    highlights: [
      'Handcrafted front-controller architecture with regex-based URL routing.',
      'Modular Separation of Concerns: isolated Controllers, Models, and Views.',
      'Secure request sanitization, CSRF tokens, and parameterized MySQL queries.',
      'Reused as the foundation for the full Blogging CMS application.',
    ],
    tech: ['PHP', 'MVC Architecture', 'MySQL', 'Object-Oriented Design', 'Apache / Nginx'],
    github: 'https://github.com/BhaveshKapre19/Custom-PHP-MVC-Framework',
    image: mvcDirStructure,
    screenshots: [
      mvcBlogHome,
      mvcBlogPostLists,
      mvcBlogPostsDetail,
      mvcAdminPanel,
      mvcAdminPostAdd,
      mvcAdminPostsList,
      mvcDatabaseDesign,
      mvcDirStructure,
    ],
  },
  {
    id: 'blogging-cms',
    title: 'Technical Blogging CMS',
    subtitle: 'Full-featured content management platform',
    category: 'Backend & APIs',
    featured: false,
    badge: 'Backend Web Platform',
    tagline: 'A blogging platform built on top of the custom PHP MVC Framework, with RBAC and admin panel — a personal learning project.',
    description:
      'A complete, multi-user technical publishing CMS built on top of the custom PHP MVC Framework. Features user authentication with role-based permissions, an administrative dashboard, rich post editing, category management, comment moderation, and an optimized MySQL schema with foreign key relationships.',
    highlights: [
      'Administrative dashboard for post publication, draft management, and metrics.',
      'Role-based access control (Admin, Author, Subscriber) with session security.',
      'Relational database schema with optimized indexing for post categories and tags.',
      'Live demonstration of reusable framework architecture in action.',
    ],
    tech: ['PHP', 'MySQL', 'Custom MVC', 'Bootstrap', 'JavaScript', 'HTML5/CSS3'],
    github: 'https://github.com/BhaveshKapre19/Blogging-CMS',
    image: bloggerBlogHome,
    screenshots: [
      bloggerBlogHome,
      bloggerBlogPostDetails,
      bloggerAdminPanel,
      bloggerAdminPostLists,
      bloggerAdminPostEdit,
      bloggerAdminCategorieList,
      bloggerAdminCategoriesEdit,
      bloggerAdminAddUser,
      bloggerAdminUserEdit,
      bloggerAdminUsersList,
      bloggerDatabaseDesign,
      bloggerDirStructure,
    ],
  },
  {
    id: 'aws-cloud-infra',
    title: 'AWS Cloud File Storage Deployment',
    subtitle: 'Self-hosted cloud infrastructure on EC2 & S3',
    category: 'Cloud & DevOps',
    featured: false,
    badge: 'Cloud Infrastructure',
    tagline: 'A personal learning project: deployed a self-hosted file management system on AWS EC2 with Amazon S3 storage and IAM role authentication.',
    description:
      'Set up a self-hosted file management system on Amazon EC2 using the official FileCloud AMI as a learning exercise. Configured Amazon S3 for object storage and AWS IAM roles for credential-free EC2-to-S3 access. Also practiced Linux server configuration, security groups, and Nginx reverse proxy — reinforcing cloud skills learned from AWS certification.',
    highlights: [
      'IAM Role-based Access: EC2 instance profile to access S3 without hardcoded credentials.',
      'Amazon S3 integration: object storage for file uploads with bucket configuration.',
      'Linux server basics: security group rules, UFW firewall, and Nginx reverse proxy setup.',
      'Practical AWS skills reinforced by AWS Cloud Technical Essentials certification (95.51%).',
    ],
    tech: ['AWS EC2', 'Amazon S3', 'AWS IAM', 'Linux / Ubuntu', 'Nginx', 'VPC Networking'],
    image: cloudBanner,
    screenshots: [cloudBanner],
  },
  {
    id: 'stock-prediction',
    title: 'Stock Price Prediction Dashboard',
    subtitle: 'Machine learning time-series analytics & UI',
    category: 'Machine Learning',
    featured: false,
    badge: 'Machine Learning & UI',
    tagline: 'End-to-end ML pipeline with TensorFlow LSTM neural networks and an interactive Plotly Dash financial analytics dashboard.',
    description:
      'Engineered a machine learning pipeline to forecast stock market trends based on historical financial metrics. Handled time-series data preprocessing, rolling-window normalization, feature engineering, and LSTM model training with TensorFlow. Built an interactive, real-time analytics dashboard using Plotly Dash for technical indicators and prediction visualization.',
    highlights: [
      'LSTM deep learning model trained on historical market data with rolling windows.',
      'Feature engineering with technical indicators (Moving Averages, RSI, Volatility).',
      'Interactive Plotly Dash web interface for real-time visualization and stock comparison.',
    ],
    tech: ['Python', 'TensorFlow', 'Plotly Dash', 'Pandas', 'NumPy', 'LSTM'],
    image: stockBanner,
    screenshots: [stockBanner],
  },
  {
    id: 'covid-chatbot',
    title: 'COVID-19 Live Statistics Assistant',
    subtitle: 'Real-time REST API integration desktop app',
    category: 'Backend & APIs',
    featured: false,
    badge: 'API Integration',
    tagline: 'Desktop data query application with live REST API integration, query parsing, and interactive statistics GUI.',
    description:
      'Developed a desktop chatbot and statistical query tool in Python using Tkinter. Interfaced with public COVID-19 REST APIs to fetch, parse, and dynamically visualize live global and regional epidemiological statistics with responsive error handling and API rate limiting resilience.',
    highlights: [
      'Real-time REST API consumption with JSON response parsing and caching.',
      'Interactive Tkinter GUI with custom theme and natural query mapping.',
      'Resilient network error handling and graceful fallback states.',
    ],
    tech: ['Python', 'Tkinter', 'REST API', 'JSON', 'HTTP Requests'],
    github: 'https://github.com/BhaveshKapre19/COVID-19-Q-A-Chatbot',
    image: qaGui,
    screenshots: [qaGui, qaDirStructure],
  },
];

export const certifications = [
  {
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Amazon Web Services (Coursera)',
    date: 'May 2026',
    grade: '95.51% Grade',
    category: 'Cloud',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/B8ENYFENJLME',
    skillsCovered: ['AWS EC2', 'Amazon S3', 'AWS IAM', 'VPC Networking', 'Database Services'],
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: '2023',
    grade: 'Official Credential',
    category: 'Cloud',
    verificationUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/BhaveshKapre-8387/DB29DAE779A11A51?sharingId=1CB7FEFA2F4E1F4A',
    skillsCovered: ['Cloud Concepts', 'Azure Architecture', 'Governance & Compliance', 'Security'],
  },
  {
    title: 'Google IT Support Professional Certificate',
    issuer: 'Google (Coursera Specialization)',
    date: 'October 2023',
    grade: '5-Course Specialization',
    category: 'Systems',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/specialization/MQNLV5ACYGCF',
    skillsCovered: ['Linux OS', 'Networking Protocols', 'System Administration', 'Security Defenses'],
  },
  {
    title: 'SQL (Intermediate) Certificate',
    issuer: 'HackerRank',
    date: '2021',
    grade: 'Verified Assessment',
    category: 'Databases',
    skillsCovered: ['Complex Joins', 'Subqueries', 'Aggregations', 'Schema Querying'],
  },
  {
    title: 'Building Web Applications in PHP',
    issuer: 'University of Michigan (Coursera)',
    date: 'August 2020',
    grade: '98.90% Grade',
    category: 'Backend',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/VHDY4EUCH567',
    skillsCovered: ['PHP OOP', 'MySQL Database', 'Sessions & Cookies', 'MVC Pattern'],
  },
  {
    title: 'Google Cloud Fundamentals: Core Infrastructure',
    issuer: 'Google Cloud (Coursera)',
    date: 'August 2020',
    grade: '77.44% Grade',
    category: 'Cloud',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/9M6KBPFFMU7F',
    skillsCovered: ['GCP Compute Engine', 'Cloud Storage', 'Containerization', 'IAM'],
  },
];

export const timeline = [
  {
    period: '2016 — 2019',
    title: 'Diploma in Computer Science & Engineering',
    institution: 'Thakur Shivkumarsingh Memorial Polytechnic College',
    grade: 'CGPA 7.3 / 10',
    type: 'education',
    details: 'Foundation in computing, C/C++, data structures, computer networks, and operating system fundamentals.',
  },
  {
    period: '2019 — 2022',
    title: 'Bachelor of Technology (B.Tech) — Computer Science & Engineering',
    institution: 'Shivajirao Kadam Institute of Technology and Management, Indore',
    grade: 'CGPA 7.5 / 10',
    type: 'education',
    details: 'Studied Software Engineering, Database Management Systems, Distributed Computing, and Web Engineering.',
  },
  {
    period: '2022 — 2026',
    title: 'Personal Break & Independent Learning',
    institution: 'Self-directed learning, project building & family support',
    grade: 'AWS + Azure + Google Certified',
    type: 'growth',
    details: 'Took time off to support family. During this period, I stayed technically active — earned AWS, Azure, and Google Cloud certifications, built personal projects, and completed one freelancing project (Biller ERP).',
  },
  {
    period: '2026 — Present',
    title: 'Actively Seeking First Full-Time Role',
    institution: 'Open to backend, cloud, and full-stack opportunities',
    grade: 'Immediate Joiner',
    type: 'career',
    details: 'Fresher ready to join a team, contribute backend code, and grow quickly. Available immediately for full-time positions.',
  },
];

export const whyHireCards = [
  {
    title: 'Real Projects, Not Just Tutorials',
    description: 'Built a complete freelancing project (Biller ERP) and several personal projects across backend, cloud, and ML — not just tutorial clones.',
    tag: 'Project Experience',
  },
  {
    title: 'Backend & API Foundations',
    description: 'Comfortable writing Django REST APIs, designing database schemas, and implementing JWT authentication from scratch.',
    tag: 'Backend Skills',
  },
  {
    title: 'Cloud Certified',
    description: 'Earned AWS, Microsoft Azure, and Google Cloud certifications with hands-on deployment experience using EC2 and S3.',
    tag: 'Cloud Ready',
  },
  {
    title: 'Self-Driven Learner',
    description: 'Learned independently through consistent building and certification over 4 years. Ready to absorb team practices and ramp up quickly.',
    tag: 'Growth Mindset',
  },
];
