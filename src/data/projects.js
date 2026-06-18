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
        description: 'A full blogging Content Management System built from scratch using Core PHP and MySQL. It includes an admin panel, user management, categories, posts, comments, subscribers, and a clean frontend blog interface.',
        features: [
            'Admin dashboard',
            'Create, edit, and delete blog posts',
            'Category management',
            'User management system',
            'Comment system',
            'Subscriber system',
            'Header image upload for posts',
            'Secure database operations using PDO',
            'Clean frontend blog interface',
        ],
        techStack: ['Core PHP', 'MySQL', 'PDO', 'HTML', 'CSS', 'JavaScript'],
        images: [
            { src: bloggerHome, alt: 'Blog home page' },
            { src: bloggerAdminPanel, alt: 'Admin dashboard' },
            { src: bloggerPostDetails, alt: 'Blog post details' },
            { src: bloggerAdminPostList, alt: 'Admin post list' },
        ],
        repoLink: 'https://github.com/BhaveshKapre19/Blogging-CMS',
        liveLink: '#',
    },
    {
        id: 'mvc-framework',
        title: 'MTB - My Technical Blog',
        subtitle: 'Custom PHP MVC Framework',
        description: 'A custom PHP MVC blog application for sharing technical articles and tutorials. The project demonstrates routing, controllers, models, authentication, post management, comments, and database-backed architecture.',
        features: [
            'Custom PHP MVC architecture',
            'User authentication and authorization',
            'Blog post CRUD workflows',
            'Category organization',
            'Comment system',
            'Newsletter subscription',
            'Responsive interface',
            'SEO-friendly URLs',
            'Prepared statements, password hashing, and CSRF protection',
        ],
        techStack: ['PHP 7.4+', 'MySQL 5.7+', 'MVC Architecture', 'HTML', 'CSS', 'JavaScript'],
        images: [
            { src: mvcHome, alt: 'MVC blog home' },
            { src: mvcAdminPanel, alt: 'MVC admin panel' },
            { src: mvcPostList, alt: 'MVC post list' },
            { src: mvcPostDetail, alt: 'MVC post detail' },
        ],
        repoLink: 'https://github.com/BhaveshKapre19/Custom-PHP-MVC-Framework',
        liveLink: '#',
    },
    {
        id: 'qa-system',
        title: 'COVID-19 Q/A Chatbot',
        subtitle: 'Machine Learning + NLP',
        description: 'A machine-learning powered chatbot built using TensorFlow, Keras, and NLTK. It classifies user queries with NLP and responds through a custom-trained neural network model with a simple Tkinter GUI.',
        features: [
            'Neural network model with TensorFlow and Keras',
            'NLP processing using NLTK',
            'Intent-based conversational responses',
            'Clean Tkinter GUI interface',
            '97% model accuracy',
            'Real-time predictions',
            'JSON-based dataset',
        ],
        techStack: ['Python 3.7', 'TensorFlow 2.6', 'Keras', 'NLTK', 'NumPy', 'Tkinter GUI'],
        images: [
            { src: qaGui, alt: 'Chatbot GUI interface' },
        ],
        repoLink: 'https://github.com/BhaveshKapre19/COVID-19-Q-A-Chatbot',
        liveLink: '#',
    },
    {
        id: 'stock-prediction',
        title: 'Stock Price Prediction',
        subtitle: 'Machine Learning + Dash',
        description: 'ML models in Python for predicting stock prices of companies such as Google, Facebook, and Apple, paired with an interactive Dash dashboard for visualization.',
        features: [
            'Stock price prediction models',
            'Interactive dashboard with Dash',
            'Real-time visualizations',
            'Data preprocessing pipeline',
        ],
        techStack: ['Python', 'Machine Learning', 'Dash', 'Plotly', 'Pandas'],
        images: [
            { src: stockBanner, alt: 'Stock prediction visualization' },
        ],
        repoLink: '#',
        liveLink: '#',
    },
    {
        id: 'corn-disease',
        title: 'Corn Disease Detection',
        subtitle: 'Transfer Learning + Flask',
        description: 'An image classification model using transfer learning to detect corn plant diseases, with a Flask web interface for image uploads and instant predictions.',
        features: [
            'Image classification model',
            'Transfer learning workflow',
            'Flask web interface',
            'Instant disease detection',
        ],
        techStack: ['Python', 'TensorFlow', 'Keras', 'Flask', 'Transfer Learning'],
        images: [
            { src: cornBanner, alt: 'Corn disease detection scanning' },
        ],
        repoLink: '#',
        liveLink: '#',
    },
    {
        id: 'filecloud-aws',
        title: 'Cloud Infrastructure Deployment',
        subtitle: 'AWS + FileCloud',
        description: 'Deployed FileCloud using Amazon EC2 with the official AMI. Integrated Amazon S3 for scalable file storage and configured IAM roles for secure EC2-S3 communication.',
        features: [
            'EC2 instance deployment',
            'S3 bucket integration',
            'IAM role configuration',
            'Scalable file storage',
        ],
        techStack: ['AWS EC2', 'Amazon S3', 'IAM', 'Cloud Computing'],
        images: [
            { src: cloudBanner, alt: 'Cloud infrastructure diagram' },
        ],
        repoLink: '#',
        liveLink: '#',
    },
];
