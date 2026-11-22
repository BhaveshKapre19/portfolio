import { Cloud, Code, Database, Globe, Wrench } from 'lucide-react';

export const personalInfo = {
    name: "Bhavesh Kapre",
    role: "Python Backend & Cloud Developer",
    location: "Indore, India",
    email: "kapre1999@yahoo.com",
    github: "https://github.com/BhaveshKapre19",
    linkedin: "https://linkedin.com/in/bhavesh-kapre-367139216",
    blog: "https://blog.bhaveshkapre.in",
    aboutIntro: "I build server-side software with Python, Django, MySQL, and AWS. I built an offline POS and ERP system for a local retail store and maintain an active engineering blog at blog.bhaveshkapre.in.",
    aboutOutro: "I prioritize clean API contracts, relational data integrity, and clear technical documentation.",
    heroHeadline: "Server-side systems, REST APIs, and cloud deployments.",
    heroDescription: "I am Bhavesh Kapre, a Python backend developer building dependable server architectures, desktop retail ERPs, and cloud-hosted systems.",
    highlights: ['Python', 'Django REST', 'AWS', 'MySQL'],
    stats: [
        { value: '6+', label: 'Shipped projects' },
        { value: '4', label: 'Cloud certifications' },
        { value: 'Live', label: 'Technical blog' },
    ],
    strengths: ['API architecture', 'Relational schema design', 'Client system delivery']
};

export const educationData = [
    {
        degree: 'B.Tech - Computer Science & Engineering',
        institution: 'Shivajirao Kadam Institute of Technology and Management',
        graduation: 'July 2022',
        cgpa: '7.5',
    },
    {
        degree: 'Diploma - Computer Science & Engineering',
        institution: 'Thakur Shivkumarsingh Memorial Polytechnic College',
        graduation: 'July 2019',
        cgpa: '7.3',
    },
];

export const skillsData = {
    Programming: { items: ['Python', 'PHP', 'SQL'], icon: Code },
    'Cloud & DevOps': { items: ['AWS', 'Azure', 'Docker', 'Linux Server'], icon: Cloud },
    'Web Development': { items: ['React', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'], icon: Globe },
    Frameworks: { items: ['Flask', 'Django', 'Laravel'], icon: Code },
    Tools: { items: ['Git', 'GitHub', 'Postman'], icon: Wrench },
    Databases: { items: ['MySQL', 'Database Design'], icon: Database },
};

export const certificationsData = [
    {
        name: 'AWS Cloud Technical Essentials',
        issuer: 'Coursera',
        date: 'May 28, 2026',
        grade: '95.51%',
        duration: '20 hours',
        link: 'https://www.coursera.org/account/accomplishments/verify/B8ENYFENJLME'
    },
    {
        name: 'Google IT Support Specialization',
        issuer: 'Coursera',
        date: 'October 29, 2023',
        grade: null,
        duration: '3 months',
        link: 'https://www.coursera.org/account/accomplishments/specialization/MQNLV5ACYGCF',
        courses: [
            'Technical Support Fundamentals',
            'The Bits and Bytes of Computer Networking',
            'Operating Systems and You: Becoming a Power User',
            'System Administration and IT Infrastructure Services',
            'IT Security: Defense against the digital dark arts'
        ]
    },
    {
        name: 'Building Web Applications in PHP',
        issuer: 'Coursera',
        date: 'August 5, 2020',
        grade: '98.90%',
        duration: '28 hours',
        link: 'https://www.coursera.org/account/accomplishments/verify/VHDY4EUCH567'
    },
    {
        name: 'Google Cloud Fundamentals: Core Infrastructure',
        issuer: 'Coursera',
        date: 'August 24, 2020',
        grade: '77.44%',
        duration: '6 hours',
        link: 'https://www.coursera.org/account/accomplishments/verify/9M6KBPFFMU7F'
    }
];
