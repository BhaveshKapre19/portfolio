export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const personalInfo = {
  name: 'Bhavesh Kapre',
  titles: ['Python Backend Developer', 'Cloud Enthusiast', 'API Integration Developer'],
  introduction: "I build secure backend systems, cloud solutions, and scalable web applications using Python, PHP, and AWS.",
  email: 'kapre1999@yahoo.com',
  phone: '7694054878',
  location: 'Burhanpur, Madhya Pradesh, India',
  github: 'https://github.com/Kapre1999',
  linkedin: 'https://linkedin.com/in/bhavesh-kapre-367139216',
  resumeUrl: '/resume.docx',
};

export const aboutText = `I'm a Computer Science Engineer (B.Tech, 2022) with a strong foundation in backend development, REST APIs, cloud computing, and database design. My technical expertise spans Python (Flask, Django REST Framework), PHP, AWS (EC2, S3, IAM), Docker, Linux, and MySQL.

After graduating in 2022, I took a planned career break to support my mother during her cancer treatment. Throughout this period I remained technically active — continuously learning, earning professional certifications, and building real-world software projects. With those family responsibilities now resolved, I am fully committed to beginning my professional software engineering career.

I bring hands-on experience deploying production systems on AWS, building custom MVC frameworks from scratch, developing ML-powered dashboards, and designing optimized database schemas. I'm now actively seeking backend or cloud engineering opportunities where I can contribute immediately and grow with a strong engineering team.`;

export const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'PHP', icon: '🐘' },
      { name: 'SQL', icon: '🗄️' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Flask', icon: '🌶️' },
      { name: 'Django', icon: '🎯' },
      { name: 'Django REST Framework', icon: '🔌' },
      { name: 'REST APIs', icon: '🔗' },
      { name: 'SQLAlchemy', icon: '⚡' },
      { name: 'JSON', icon: '📋' },
    ],
  },
  {
    title: 'Cloud',
    skills: [
      { name: 'AWS EC2', icon: '☁️' },
      { name: 'Amazon S3', icon: '🗄️' },
      { name: 'IAM', icon: '🔐' },
    ],
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Linux', icon: '🐧' },
      { name: 'Nginx', icon: '🌐' },
      { name: 'Gunicorn', icon: '🦄' },
      { name: 'Git', icon: '📦' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Postman', icon: '📬' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: '📊' },
      { name: 'Schema Design', icon: '📐' },
      { name: 'Query Optimization', icon: '⚡' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'Bootstrap', icon: '🅱️' },
      { name: 'Tailwind CSS', icon: '🌊' },
    ],
  },
  {
    title: 'Languages Spoken',
    skills: [
      { name: 'English', icon: '🇬🇧' },
      { name: 'Hindi', icon: '🇮🇳' },
      { name: 'Marathi', icon: '🇮🇳' },
    ],
  },
];

export const projects = [
  {
    title: 'Custom PHP MVC Framework',
    description: 'Designed and developed a lightweight MVC framework entirely from scratch without using Laravel or CodeIgniter. Implemented routing, controllers, models, view rendering, and authentication architecture with a reusable project structure. This framework later became the foundation of the Technical Blogging CMS, demonstrating framework-level design thinking and reusable architecture.',
    tech: ['PHP', 'MVC', 'MySQL'],
    github: 'https://github.com/BhaveshKapre19/Custom-PHP-MVC-Framework',
    image: '/MVC_Framework/dir_str.png',
    screenshots: [
      '/MVC_Framework/blog_home.png',
      '/MVC_Framework/blog_post_lists.png',
      '/MVC_Framework/blog_posts_detail.png',
      '/MVC_Framework/admin_panel.png',
      '/MVC_Framework/admin_post_add.png',
      '/MVC_Framework/admin_posts_list.png',
      '/MVC_Framework/database_design.png',
    ],
  },
  {
    title: 'Technical Blogging CMS',
    description: 'A complete blogging platform developed using the custom PHP MVC Framework. Features user authentication, admin dashboard, CRUD operations, post management, category management, and an optimized MySQL schema. This project demonstrates framework reuse and scalable application architecture.',
    tech: ['PHP', 'MySQL', 'MVC', 'Bootstrap'],
    github: 'https://github.com/BhaveshKapre19/Blogging-CMS',
    image: '/Blogger/blog_home.png',
    screenshots: [
      '/Blogger/blog_home.png',
      '/Blogger/blog_post_details.png',
      '/Blogger/admin_panel.png',
      '/Blogger/admin_post_lists.png',
      '/Blogger/admin_post_edit.png',
      '/Blogger/admin_categorie_list.png',
      '/Blogger/admin_categories_edit.png',
      '/Blogger/admin_add_user.png',
      '/Blogger/admin_user_edit.png',
      '/Blogger/admin_users_list.png',
      '/Blogger/database_design.png',
      '/Blogger/dir_structure.png',
    ],
  },
  {
    title: 'AWS Cloud File Storage Deployment',
    description: 'Deployed a self-hosted file storage server using the official FileCloud AMI on AWS EC2. Integrated Amazon S3 for persistent object storage. Configured IAM Roles for role-based authentication, eliminating static access keys. Performed full Linux server setup including networking, firewall rules, Nginx reverse proxy, and service management.',
    tech: ['AWS EC2', 'Amazon S3', 'IAM', 'Linux', 'Nginx'],
    image: '/projects/cloud-architecture.png',
  },
  {
    title: 'Stock Price Prediction Dashboard',
    description: 'Built machine learning models (LSTM/regression) for predicting stock price trends using historical market data with full feature engineering and preprocessing pipeline. Developed an interactive real-time visualization dashboard using Plotly Dash, delivering a complete end-to-end ML workflow from raw data to a deployable UI.',
    tech: ['Python', 'TensorFlow', 'Plotly Dash', 'LSTM'],
    image: '/projects/stock-dashboard.png',
  },
  {
    title: 'COVID-19 Statistics Chatbot',
    description: 'Desktop chatbot built with Python and Tkinter that fetches live COVID-19 statistics via a public REST API. Features real-time API integration, interactive GUI, dynamic query handling, and live COVID statistics display for intuitive data exploration.',
    tech: ['Python', 'Tkinter', 'REST API'],
    github: 'https://github.com/BhaveshKapre19/COVID-19-Q-A-Chatbot',
    image: '/QA-System/gui_ss.png',
    screenshots: [
      '/QA-System/gui_ss.png',
      '/QA-System/dir_structure.png',
      '/QA-System/README.md',
    ],
  },
];

export const certifications = [
  {
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Coursera',
    date: 'May 2026',
    grade: '95.51%',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/B8ENYFENJLME',
  },
  {
    title: 'Google IT Support Professional Certificate',
    issuer: 'Coursera / Google',
    date: 'October 2023',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/specialization/MQNLV5ACYGCF',
  },
  {
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    date: '2023',
  },
  {
    title: 'SQL Intermediate',
    issuer: 'HackerRank',
    date: '2021',
  },
  {
    title: 'Building Web Applications in PHP',
    issuer: 'Coursera',
    date: 'August 2020',
    grade: '98.90%',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/VHDY4EUCH567',
  },
  {
    title: 'Google Cloud Fundamentals: Core Infrastructure',
    issuer: 'Coursera',
    date: 'August 2020',
    grade: '77.44%',
    verificationUrl: 'https://www.coursera.org/account/accomplishments/verify/9M6KBPFFMU7F',
  },
];

export const timeline = [
  {
    year: '2019',
    title: 'Diploma in Computer Science & Engineering',
    description: 'CGPA 7.3',
    type: 'education',
  },
  {
    year: '2022',
    title: 'Bachelor of Technology',
    subtitle: 'Computer Science & Engineering',
    description: 'CGPA 7.5',
    type: 'education',
  },
  {
    year: '2022 – 2026',
    title: 'Independent Learning & Development',
    description: 'Professional Certifications | Backend Development | AWS Cloud | Personal Projects',
    type: 'break',
  },
  {
    year: '2026',
    title: 'Actively Seeking Opportunities',
    description: 'Open to Backend / Cloud Engineering roles',
    type: 'career',
  },
];

export const whyHireCards = [
  {
    title: 'Continuous Learner',
    description: 'Always improving through projects and certifications.',
    icon: '📚',
  },
  {
    title: 'Backend Focused',
    description: 'Strong understanding of backend architecture and APIs.',
    icon: '⚙️',
  },
  {
    title: 'Cloud Ready',
    description: 'Hands-on AWS deployment and Linux server administration.',
    icon: '☁️',
  },
  {
    title: 'Problem Solver',
    description: 'Enjoy designing scalable and maintainable software solutions.',
    icon: '💡',
  },
];