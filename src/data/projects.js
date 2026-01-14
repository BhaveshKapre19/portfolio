// Import images for Blogger
import bloggerAdminPanel from '../assets/projects/Blogger/admin_panel.png';
import bloggerHome from '../assets/projects/Blogger/blog_home.png';
import bloggerPostDetails from '../assets/projects/Blogger/blog_post_details.png';
import bloggerAdminPostList from '../assets/projects/Blogger/admin_post_lists.png';

// Import images for MVC Framework
import mvcHome from '../assets/projects/MVC_Framework/blog_home.png';
import mvcAdminPanel from '../assets/projects/MVC_Framework/admin_panel.png';
import mvcPostList from '../assets/projects/MVC_Framework/blog_post_lists.png';
import mvcPostDetail from '../assets/projects/MVC_Framework/blog_posts_detail.png';

// Import images for QA System
import qaGui from '../assets/projects/QA-System/gui_ss.png';

// Import generated images
import stockBanner from '../assets/projects/StockPrice/banner.png';
import cornBanner from '../assets/projects/CornDisease/banner.png';
import cloudBanner from '../assets/projects/CloudInfra/banner.png';

export const projects = [
    {
        id: 'blogger-cms',
        title: 'Technical Blogging CMS',
        subtitle: 'PHP + MySQL',
        description: 'A full blogging Content Management System (CMS) built from scratch using Core PHP and MySQL. This project includes an admin panel, user management, categories, posts, comments, and a modern blog interface.',
        features: [
            '🛠 Admin dashboard',
            '✍️ Create/Edit/Delete blog posts',
            '📂 Category management',
            '👤 User management system',
            '💬 Comment system',
            '📧 Subscriber system',
            '🖼 Header image upload for posts',
            '🔐 Secure database operations using PDO',
            '🎨 Clean frontend blog interface'
        ],
        techStack: ['Core PHP', 'MySQL (phpMyAdmin)', 'PHP MySQLi / PDO', 'HTML / CSS / JavaScript'],
        images: [
            { src: bloggerHome, alt: 'Blog Home Page' },
            { src: bloggerAdminPanel, alt: 'Admin Dashboard' },
            { src: bloggerPostDetails, alt: 'Blog Post Details' },
            { src: bloggerAdminPostList, alt: 'Admin Post List' }
        ],
        repoLink: 'https://github.com/BhaveshKapre19/Blogging-CMS',
        liveLink: '#'
    },
    {
        id: 'mvc-framework',
        title: 'MTB - My Technical Blog',
        subtitle: 'Custom PHP MVC Framework',
        description: 'A custom PHP MVC blog application for sharing technical articles and tutorials. Built with a custom framework architecture to demonstrate understanding of MVC patterns.',
        features: [
            'Custom PHP MVC Framework',
            'User authentication and authorization',
            'Blog post management (CRUD)',
            'Category organization',
            'Comment system',
            'Newsletter subscription',
            'Responsive design',
            'SEO-friendly URLs',
            'Security: Prepared statements, Password hashing, CSRF protection'
        ],
        techStack: ['PHP 7.4+', 'MySQL 5.7+', 'MVC Architecture', 'HTML/CSS/JS'],
        images: [
            { src: mvcHome, alt: 'MVC Blog Home' },
            { src: mvcAdminPanel, alt: 'MVC Admin Panel' },
            { src: mvcPostList, alt: 'MVC Post List' },
            { src: mvcPostDetail, alt: 'MVC Post Detail' }
        ],
        repoLink: 'https://github.com/BhaveshKapre19/Custom-PHP-MVC-Framework',
        liveLink: '#'
    },
    {
        id: 'qa-system',
        title: 'COVID-19 Q/A Chatbot',
        subtitle: 'Machine Learning + NLP',
        description: 'A machine-learning powered chatbot built using TensorFlow, Keras, and NLTK. It classifies user queries using NLP and responds intelligently through a custom-trained neural network model. Includes a clean Tkinter GUI.',
        features: [
            '🧠 Neural Network Model (TensorFlow/Keras)',
            '🔤 NLP Processing using NLTK',
            '💬 Intent-based conversational responses',
            '🪟 Clean Tkinter GUI interface',
            '🎯 97% model accuracy',
            '⚡ Real-time predictions',
            '📁 JSON-based dataset'
        ],
        techStack: ['Python 3.7', 'TensorFlow 2.6', 'Keras', 'NLTK', 'NumPy', 'Tkinter GUI'],
        images: [
            { src: qaGui, alt: 'Chatbot GUI Interface' }
        ],
        repoLink: 'https://github.com/BhaveshKapre19/COVID-19-Q-A-Chatbot',
        liveLink: '#'
    },
    {
        id: 'stock-prediction',
        title: 'Stock Price Prediction',
        subtitle: 'Machine Learning + Dash',
        description: 'Developed ML models in Python for predicting stock prices of companies like Google, Facebook, and Apple. Implemented an interactive dashboard using Dash for real-time visualizations.',
        features: [
            'Stock Price Prediction Models',
            'Interactive Dashboard with Dash',
            'Real-time Visualizations',
            'Data Preprocessing Pipeline'
        ],
        techStack: ['Python', 'Machine Learning', 'Dash', 'Plotly', 'Pandas'],
        images: [
            { src: stockBanner, alt: 'Stock Prediction Visualization' }
        ],
        repoLink: '#',
        liveLink: '#'
    },
    {
        id: 'corn-disease',
        title: 'Corn Disease Detection',
        subtitle: 'Transfer Learning + Flask',
        description: 'Built an image classification model using transfer learning to detect corn plant diseases. Designed a Flask-based web interface for image uploads and instant predictions.',
        features: [
            'Image Classification Model',
            'Transfer Learning',
            'Flask Web Interface',
            'Instant Disease Detection'
        ],
        techStack: ['Python', 'TensorFlow/Keras', 'Flask', 'Transfer Learning'],
        images: [
            { src: cornBanner, alt: 'Corn Disease Detection Scanning' }
        ],
        repoLink: '#',
        liveLink: '#'
    },
    {
        id: 'filecloud-aws',
        title: 'Cloud Infrastructure Deployment',
        subtitle: 'AWS + FileCloud',
        description: 'Deployed FileCloud using Amazon EC2 with the official AMI. Integrated Amazon S3 for scalable file storage and configured IAM roles for secure EC2–S3 communication.',
        features: [
            'EC2 Instance Deployment',
            'S3 Bucket Integration',
            'IAM Role Configuration',
            'Scalable File Storage'
        ],
        techStack: ['AWS EC2', 'Amazon S3', 'IAM', 'Cloud Computing'],
        images: [
            { src: cloudBanner, alt: 'Cloud Infrastructure Diagram' }
        ],
        repoLink: '#',
        liveLink: '#'
    }
];
