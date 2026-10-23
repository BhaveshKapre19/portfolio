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
  role: 'Backend & Cloud Engineer',
  titles: [
    'Python Backend Developer',
    'Cloud Enthusiast',
    'API Architecture Specialist',
    'Systems & Database Engineer',
  ],
  introduction:
    'I build secure backend systems, cloud solutions, and scalable web applications using Python, PHP, and AWS. I care about clean APIs, deployable architecture, and cloud setups that are easy to reason about.',
  email: 'kapre1999@yahoo.com',
  phone: '+91 91799 43257',
  location: 'Indore / Burhanpur, Madhya Pradesh, India',
  github: 'https://github.com/BhaveshKapre19',
  githubUser: 'BhaveshKapre19',
  linkedin: 'https://linkedin.com/in/bhavesh-kapre-367139216',
  resumeUrl: `${import.meta.env.BASE_URL}resume.docx`,
  availability: 'Available for backend and cloud teams',
};

export const aboutText = {
  summary: `I'm a Computer Science Engineer (B.Tech, 2022) focused on high-performance backend architecture, secure REST APIs, relational databases, and cloud infrastructure. My core stack centers on Python (Django 5, Django REST Framework), AWS (EC2, S3, IAM), Linux server management, Docker, and high-integrity database systems.`,
  careerBreak: `Following my graduation in 2022, I took a deliberate, personal break to stand by my mother during her intensive cancer treatments. During this period, I preserved my engineering discipline by continuously building complex real-world software—such as a complete local-network POS/ERP enterprise system, custom MVC frameworks, and machine learning tools—while earning verified certifications from AWS, Microsoft, and Google. With family health stabilized, I am completely focused and ready to contribute immediately as a full-time software engineer.`,
  principles: [
    {
      title: 'Zero Client Authority',
      description: 'Business logic, financial splits, tax calculations, and ledger balances belong exclusively on the server with atomic row locks.',
    },
    {
      title: 'Sub-10ms Responsiveness',
      description: 'Building lightweight, keyboard-first desktop backend endpoints and APIs tailored for real-world high-volume operational speed.',
    },
    {
      title: 'Cloud & Deployability',
      description: 'Designing systems with clean Linux service setup, reverse proxies, IAM roles, and automated workflows from day one.',
    },
    {
      title: 'Maintainable Data Architecture',
      description: 'Optimized schemas, WAL-mode concurrency, double-entry financial integrity, and strict audit trails.',
    },
  ],
};

export const skillCategories = [
  {
    title: 'Backend & APIs',
    description: 'Server architecture, API design, security & business logic',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'Django 5.1', level: 'Advanced' },
      { name: 'Django REST Framework', level: 'Advanced' },
      { name: 'RESTful API Design', level: 'Advanced' },
      { name: 'JWT Auth & RBAC', level: 'Advanced' },
      { name: 'Idempotency Middleware', level: 'Advanced' },
      { name: 'PHP (Custom MVC)', level: 'Proficient' },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Cloud hosting, Linux operations, and server reverse proxies',
    skills: [
      { name: 'AWS EC2', level: 'Proficient' },
      { name: 'Amazon S3', level: 'Proficient' },
      { name: 'AWS IAM & Roles', level: 'Proficient' },
      { name: 'Linux / Ubuntu Server', level: 'Advanced' },
      { name: 'Nginx Reverse Proxy', level: 'Proficient' },
      { name: 'Gunicorn WSGI', level: 'Proficient' },
      { name: 'Docker', level: 'Intermediate' },
    ],
  },
  {
    title: 'Databases & Ledgers',
    description: 'Data modeling, financial consistency & transaction locks',
    skills: [
      { name: 'SQLite 3 (WAL Mode)', level: 'Advanced' },
      { name: 'MySQL', level: 'Proficient' },
      { name: 'Double-Entry Ledgers', level: 'Advanced' },
      { name: 'Atomic Row Locks', level: 'Advanced' },
      { name: 'Schema Normalization', level: 'Advanced' },
      { name: 'SQL Query Optimization', level: 'Proficient' },
    ],
  },
  {
    title: 'Domain & Hardware Integrations',
    description: 'Specialized enterprise integrations and regulatory logic',
    skills: [
      { name: 'Indian GST Engine', level: 'Advanced' },
      { name: 'CGST / SGST / IGST Splits', level: 'Advanced' },
      { name: 'ESC/POS Thermal Protocol', level: 'Advanced' },
      { name: 'Raw Network Printing', level: 'Advanced' },
      { name: 'Barcode Scanners (HID/CDC)', level: 'Advanced' },
      { name: 'Cash Drawer Settlement', level: 'Advanced' },
    ],
  },
  {
    title: 'Developer Tooling & Workflow',
    description: 'Version control, API testing, debugging & automation',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'GitHub Actions (CI/CD)', level: 'Proficient' },
      { name: 'Postman & Newman', level: 'Advanced' },
      { name: 'Linux Shell & Bash', level: 'Proficient' },
      { name: 'VS Code & PyCharm', level: 'Advanced' },
    ],
  },
];

export const projects = [
  {
    id: 'biller-erp',
    title: 'Biller — Retail POS & Enterprise ERP',
    subtitle: 'Desktop POS & Indian GST Financial Ledger',
    category: 'Backend & Systems',
    tagline: 'High-speed keyboard-first desktop Point-of-Sale (POS) and local network ERP system for Indian electronics retail and wholesale businesses.',
    description:
      'Engineered a complete retail ERP and Point-of-Sale (POS) system for store workstations over local network. Built with a sub-10ms Tauri v2 + React desktop client and a centralized Django 5.1 REST backend with SQLite WAL mode. Features native ESC/POS thermal printing (80mm & 58mm), server-side Indian GST calculation (CGST/SGST/IGST reverse and forward tax), and double-entry party accounting ledgers with zero client authority.',
    highlights: [
      'Sub-10ms UI Latency: Keyboard-first checkout with dedicated hotkeys (F2 Search, F4 Party, F5 Hold, F9 Resume, F10 Tender).',
      'Authoritative GST Engine: Server-side CGST/SGST/IGST splits, reverse-tax extraction on gross prices, and HSN/SAC directory.',
      'Thermal Printing & Invoices: ESC/POS 80mm & 58mm raw byte streams and traditional A4 GST Tax Invoices.',
      'Accounting & Inventory: Double-entry party ledgers, cash drawer settlement, stock tracking, and invoice-wise payments.',
      'Multi-Counter LAN Sync: Dedicated terminal tracking via X-Terminal-Id and SQLite WAL mode with atomic row locks.',
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
    tagline: 'Production-ready blogging platform built on top of the custom-built PHP MVC Framework with RBAC and admin panel.',
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
    subtitle: 'Enterprise cloud infrastructure on EC2 & S3',
    category: 'Cloud & DevOps',
    featured: true,
    badge: 'Cloud Infrastructure',
    tagline: 'Self-hosted enterprise cloud file storage deployed on AWS EC2 with Amazon S3 persistent storage and IAM role authentication.',
    description:
      'Deployed an enterprise self-hosted file management system on Amazon EC2 using the official FileCloud AMI. Configured Amazon S3 for durable object storage and implemented AWS IAM roles for credential-free EC2-to-S3 access, eliminating hardcoded secret keys. Set up Linux server configuration, security groups, firewall rules, and Nginx reverse proxy.',
    highlights: [
      'Eliminated static credentials via AWS IAM EC2 instance profile roles.',
      'Scalable Amazon S3 bucket integration with life-cycle storage policies.',
      'Linux server administration: security hardening, UFW firewall, and Nginx SSL.',
      'Full architectural understanding of AWS VPC networking and security groups.',
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
    institution: 'Thakur Shivkumarsingh Memorial Polytechnic College, Burhanpur',
    grade: 'CGPA 7.3 / 10',
    type: 'education',
    details: 'Grounding in core computing, C/C++, data structures, computer networks, and operating system fundamentals.',
  },
  {
    period: '2019 — 2022',
    title: 'Bachelor of Technology (B.Tech) — Computer Science & Engineering',
    institution: 'Shivajirao Kadam Institute of Technology and Management, Indore',
    grade: 'CGPA 7.5 / 10',
    type: 'education',
    details: 'Specialized in Software Engineering, Relational Database Management Systems, Distributed Computing, and Web Engineering.',
  },
  {
    period: '2022 — 2026',
    title: 'Family Medical Care & Full-Stack Systems Engineering',
    institution: 'Independent Technical Growth & Project Building',
    grade: 'Self-Directed & Certifications',
    type: 'growth',
    details: 'Supported mother through cancer treatment while systematically advancing software mastery: built enterprise POS/ERP (Biller), custom MVC frameworks, cloud infrastructure, and attained AWS, Azure, and Google credentials.',
  },
  {
    period: 'Present (2026)',
    title: 'Actively Available for Software Engineering Roles',
    institution: 'Open to Full-Time Backend / Cloud / Full-Stack Opportunities',
    grade: 'Immediate Joiner',
    type: 'career',
    details: 'Ready to contribute production-quality code, clean architecture, and reliable system deployment to a strong engineering team.',
  },
];

export const whyHireCards = [
  {
    title: 'Proven Full-Stack & System Craft',
    description: 'Not just tutorial clones: engineered a complete LAN POS/ERP system (Biller) and a custom PHP MVC framework from the ground up.',
    tag: 'Systems Builder',
  },
  {
    title: 'Server-Side & Financial Rigor',
    description: 'Expertise in Zero Client Authority, Indian GST tax math, double-entry accounting ledgers, and atomic database row locking.',
    tag: 'Backend First',
  },
  {
    title: 'Cloud & Linux Ready From Day 1',
    description: 'Hands-on AWS EC2/S3/IAM deployments, Nginx reverse proxies, Linux system administration, and 95.5% AWS certified.',
    tag: 'Cloud Native',
  },
  {
    title: 'Resilience & Character',
    description: 'Demonstrated exceptional responsibility, discipline, and commitment by managing family medical care while advancing technical capabilities.',
    tag: 'Ownership & Grit',
  },
];
