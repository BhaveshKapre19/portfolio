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
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: 'https://blog.bhaveshkapre.in', external: true },
];

export const personalInfo = {
  name: 'Bhavesh Kapre',
  role: 'Python Backend Developer',
  titles: [
    'Python & Django Developer',
    'AWS & Cloud Certified',
    'REST API & System Builder',
    'Available for Full-Time Roles',
  ],
  introduction:
    'I build server-side software with Python, Django, and MySQL, deploy applications on AWS, and write about backend architecture on my blog. I recently shipped Biller ERP—a desktop point-of-sale system with ESC/POS thermal printing for a retail business. I graduated with a B.Tech in Computer Science and am looking for my first full-time backend or cloud engineering position.',
  email: 'kapre1999@yahoo.com',
  location: 'Indore, Madhya Pradesh, India',
  github: 'https://github.com/BhaveshKapre19',
  githubUser: 'BhaveshKapre19',
  linkedin: 'https://linkedin.com/in/bhavesh-kapre-367139216',
  blog: 'https://blog.bhaveshkapre.in',
  blogDisplay: 'blog.bhaveshkapre.in',
  resumeUrl: `${import.meta.env.BASE_URL}resume.docx`,
  availability: 'Available immediately for full-time roles',
};

export const aboutText = {
  summary: `I graduated in Computer Science & Engineering (B.Tech, 2022) with a focus on backend development, relational database design, and cloud deployments. My primary stack is Python (Django, Django REST Framework), MySQL, Linux, and AWS (EC2, S3, IAM). I also write about backend patterns and web architecture on my personal blog.`,
  careerBreak: `After graduating in 2022, I paused formal job hunting to care for my mother during cancer treatment. During that period, I continued writing code daily: I earned cloud certifications from AWS, Microsoft, and Google, built an MVC web framework from scratch in PHP, and delivered a production desktop ERP system for a local retail business. With family responsibilities resolved, I am fully available and ready to contribute to an engineering team.`,
  principles: [
    {
      title: 'Explicit Endpoints & Validation',
      description: 'REST APIs require strict request validation, consistent JSON response envelopes, and descriptive HTTP error codes.',
    },
    {
      title: 'Schema Discipline First',
      description: 'I design relational tables with proper foreign keys, indexed query columns, and database integrity constraints before writing application queries.',
    },
    {
      title: 'Cloud With Minimal Footprint',
      description: 'Practical deployment experience on Ubuntu EC2 with Nginx reverse proxying, IAM instance roles for credential-free S3 access, and tight security groups.',
    },
    {
      title: 'Clear Technical Writing',
      description: 'Documenting architectural trade-offs and backend concepts on my blog sharpens how I design systems and explain technical choices.',
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
    subtitle: 'Client Project — Desktop POS & Billing System',
    category: 'Backend & Systems',
    featured: true,
    badge: 'Production Client Software',
    tagline: 'A keyboard-driven desktop POS client and network ERP built for a local electronics retail business.',
    description:
      'An electronics retailer in my hometown needed an offline checkout system without recurring subscription costs. I engineered a desktop Point-of-Sale client using Tauri v2 and React, backed by a local Django 5.1 REST API with SQLite in WAL mode. The system controls raw 80mm and 58mm ESC/POS thermal printing over USB and serial interfaces, computes Indian GST splits (CGST/SGST/IGST), and manages customer credit ledgers.',
    highlights: [
      'ESC/POS Thermal Printing: Streams raw byte commands for thermal receipt cutters, cash drawers, and A4 GST tax invoices.',
      'GST Billing Engine: Calculates CGST, SGST, and IGST breakdowns with reverse tax extraction from gross retail prices.',
      'Offline Reliability: Operates against local SQLite with WAL mode enabled so billing never stalls during internet outages.',
      'Keyboard-Centric POS: Hotkey bindings (F2 Search, F4 Party, F5 Hold, F9 Resume, F10 Tender) for fast register throughput.',
      'Multi-Terminal Support: Tracks distinct registers across the local network using custom X-Terminal-Id headers.',
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
    subtitle: 'Modular Web Framework from Scratch',
    category: 'Backend & APIs',
    featured: false,
    badge: 'Framework Architecture',
    tagline: 'A lightweight PHP MVC framework engineered from ground zero without third-party frameworks like Laravel.',
    description:
      'To deeply understand framework internals, I built an MVC web engine in pure PHP. It implements front-controller routing with regex path matching, base controller and active record abstractions, connection pooling via PDO, prepared statements to eliminate SQL injection, and a view rendering system. It powers the Technical Blogging CMS.',
    highlights: [
      'Front-Controller Dispatcher: Regex URL router matching routes and passing parameters to target controller methods.',
      'Security Core: Prepared PDO statements, CSRF token validation, and automated request payload sanitization.',
      'Template Engine: Custom view loader isolating presentation markup from application logic.',
      'Reusable Foundation: Serves as the core engine powering the multi-user Technical Blogging CMS.',
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
    subtitle: 'Publishing Platform & Live Blog at blog.bhaveshkapre.in',
    category: 'Backend & APIs',
    featured: false,
    badge: 'CMS & Live Blog',
    tagline: 'A multi-user technical publishing CMS built on the custom PHP MVC framework, paired with my live blog at blog.bhaveshkapre.in.',
    description:
      'A publishing platform built on top of my custom PHP MVC framework. It features role-based access control (Admin, Author, Subscriber), administrative dashboards, draft previewing, category taxonomies, and comment moderation on an indexed MySQL database. I also run my active technical blog on blog.bhaveshkapre.in to share practical backend and cloud deployment write-ups.',
    highlights: [
      'Role-Based Permissions: Session-backed authorization distinguishing administrator actions from content authors.',
      'Relational Database Design: Normalized MySQL schema with indexes on categories, tags, and post slugs.',
      'Live Technical Writing: Active blog at blog.bhaveshkapre.in discussing real engineering implementations.',
      'Drafting & Moderation: Full workflow from author draft creation to administrative review and publication.',
    ],
    tech: ['PHP', 'MySQL', 'Custom MVC', 'Bootstrap', 'JavaScript', 'HTML5/CSS3'],
    github: 'https://github.com/BhaveshKapre19/Blogging-CMS',
    liveUrl: 'https://blog.bhaveshkapre.in',
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
    title: 'AWS Cloud Storage Deployment',
    subtitle: 'Production-Style Cloud Storage on EC2 & S3',
    category: 'Cloud & DevOps',
    featured: false,
    badge: 'Cloud Infrastructure',
    tagline: 'Deployed a self-hosted cloud storage platform on AWS EC2 with Amazon S3 object storage and IAM instance role authentication.',
    description:
      'Configured and deployed a self-hosted file management system on an Amazon EC2 Ubuntu instance. Used AWS IAM instance profile roles for credential-free S3 bucket operations, configured Nginx as a reverse proxy with SSL termination, and established security group rules and UFW firewall boundaries.',
    highlights: [
      'Credential-Free S3 Access: Attached EC2 instance profile IAM roles so no AWS access keys are stored on the server.',
      'Reverse Proxy & Security: Configured Nginx proxy passes, connection limits, and strict UFW firewall policies.',
      'Linux Server Operations: System administration including systemd services, automated backup tasks, and log rotation.',
    ],
    tech: ['AWS EC2', 'Amazon S3', 'AWS IAM', 'Linux / Ubuntu', 'Nginx', 'VPC Networking'],
    image: cloudBanner,
    screenshots: [cloudBanner],
  },
  {
    id: 'stock-prediction',
    title: 'Stock Price Prediction Dashboard',
    subtitle: 'Time-Series Forecasting with LSTM & Plotly Dash',
    category: 'Machine Learning',
    featured: false,
    badge: 'Machine Learning & UI',
    tagline: 'Time-series forecasting pipeline using TensorFlow LSTM neural networks paired with an interactive Plotly Dash financial dashboard.',
    description:
      'Engineered a machine learning pipeline to forecast stock price trends from historical market data. Built time-series data preprocessing routines using Pandas and NumPy, trained an LSTM recurrent neural network on rolling sequence windows, and visualized model outputs against key technical indicators (moving averages, volatility) in Plotly Dash.',
    highlights: [
      'LSTM Recurrent Neural Network: Trained on rolling historical windows of stock closing prices.',
      'Feature Engineering: Computed technical indicators (Simple & Exponential Moving Averages, RSI volatility bands).',
      'Plotly Dash Interface: Interactive dashboard allowing users to select tickers and compare forecasts against historical trends.',
    ],
    tech: ['Python', 'TensorFlow', 'Plotly Dash', 'Pandas', 'NumPy', 'LSTM'],
    image: stockBanner,
    screenshots: [stockBanner],
  },
  {
    id: 'covid-chatbot',
    title: 'COVID-19 Statistics Desktop Client',
    subtitle: 'Desktop REST API Client with Tkinter Interface',
    category: 'Backend & APIs',
    featured: false,
    badge: 'API Integration',
    tagline: 'Desktop Python client consuming public REST APIs with query caching and Tkinter interface.',
    description:
      'Built a desktop client in Python that interfaces with public COVID-19 REST APIs to query global and country-specific statistics. Implemented in-memory response caching to prevent rate-limiting, handled network timeouts cleanly, and created a responsive Tkinter GUI.',
    highlights: [
      'REST API Integration: Consumes public JSON endpoints with in-memory caching and response error handling.',
      'Desktop Interface: Tkinter UI providing search filtering, clean status displays, and network failure fallbacks.',
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
    title: 'Shipped Production Client Software',
    description: 'Designed and deployed a local network POS and billing system (Biller ERP) for a paying retail business, supporting hardware printing and Indian GST calculation.',
    tag: 'Production Delivery',
  },
  {
    title: 'Framework & API Engineering',
    description: 'Built a modular MVC web framework from scratch in PHP and developed REST APIs in Django with JWT authentication, relational schemas, and SQLite/MySQL.',
    tag: 'Backend Core',
  },
  {
    title: 'Verified Cloud Competence',
    description: 'Earned AWS Cloud Technical Essentials (95.51%), Microsoft Azure AZ-900, and Google IT Support certificates, backed by real EC2 and S3 deployment work.',
    tag: 'Cloud Infrastructure',
  },
  {
    title: 'Technical Writer & Communicator',
    description: 'Regularly documents backend architecture patterns, database design, and server setups on blog.bhaveshkapre.in, demonstrating clear technical communication.',
    tag: 'Technical Writing',
  },
];
